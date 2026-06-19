"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Trash2,
  Copy,
  MoveUp,
  MoveDown,
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { ClipartItem } from "./ClipartLibrary";
import * as Icons from "lucide-react";

export type ElementType = "text" | "shape" | "clipart" | "image";

export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number; // percentage (0 to 100) of canvas width
  y: number; // percentage (0 to 100) of canvas height
  width: number; // percentage of canvas width
  height: number; // percentage of canvas height
  rotation: number; // degrees (0 to 360)
  opacity?: number; // 0 to 1

  // Text specific
  content?: string;
  fontFamily?: string;
  fontSize?: number; // in pixels relative to 1000px virtual width
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  align?: "left" | "center" | "right";

  // Shape specific
  shapeType?: "rect" | "circle" | "triangle" | "star" | "line";
  fillColor?: string;
  borderWidth?: number;
  borderColor?: string;

  // Clipart specific
  clipartId?: string;

  // Image specific
  imageUrl?: string;
  imageFile?: File;
  resolutionQuality?: "excellent" | "good" | "poor";
}

interface DesignCanvasProps {
  elements: CanvasElement[];
  selectedId: string | null;
  canvasSize: { width: number; height: number }; // Aspect ratio (e.g. 24x18 is 4:3)
  backgroundColor: string;
  backgroundGradient: string;
  backgroundImage: string | null;
  showGrid: boolean;
  snapToGrid: boolean;
  onElementsChange: (elements: CanvasElement[]) => void;
  onSelectElement: (id: string | null) => void;
  historyPush: (elements: CanvasElement[]) => void;
}

export function DesignCanvas({
  elements,
  selectedId,
  canvasSize,
  backgroundColor,
  backgroundGradient,
  backgroundImage,
  showGrid,
  snapToGrid,
  onElementsChange,
  onSelectElement,
  historyPush,
}: DesignCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedElement = elements.find((el) => el.id === selectedId);

  // Dragging states
  const [dragState, setDragState] = useState<{
    type: "move" | "resize" | "rotate" | null;
    handle?: string;
    startX: number;
    startY: number;
    startElementX: number;
    startElementY: number;
    startElementW: number;
    startElementH: number;
    startRotation: number;
  }>({
    type: null,
    startX: 0,
    startY: 0,
    startElementX: 0,
    startElementY: 0,
    startElementW: 0,
    startElementH: 0,
    startRotation: 0,
  });

  // Handle outside click to deselect
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        !(e.target as Element).closest(".designer-sidebar") &&
        !(e.target as Element).closest(".designer-toolbar") &&
        !(e.target as Element).closest(".designer-context-panel")
      ) {
        onSelectElement(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onSelectElement]);

  // Keybindings (e.g., delete key to delete element)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      // Do not delete if typing in inputs/textareas
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.getAttribute("contenteditable") === "true")
      ) {
        return;
      }

      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        const updated = elements.filter((el) => el.id !== selectedId);
        onElementsChange(updated);
        historyPush(updated);
        onSelectElement(null);
      } else if (e.key === "d" && (e.ctrlKey || e.metaKey)) {
        // Duplicate
        e.preventDefault();
        const source = elements.find((el) => el.id === selectedId);
        if (source) {
          const duplicated: CanvasElement = {
            ...source,
            id: `el_${Date.now()}`,
            x: Math.min(80, source.x + 5),
            y: Math.min(80, source.y + 5),
          };
          const updated = [...elements, duplicated];
          onElementsChange(updated);
          historyPush(updated);
          onSelectElement(duplicated.id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, elements, onElementsChange, onSelectElement, historyPush]);

  // Get active clipart icon component
  const renderClipart = (clipartId: string, color: string = "#000000") => {
    const standardIcons = Icons as unknown as Record<
      string,
      React.ComponentType<{ className?: string; style?: React.CSSProperties }>
    >;
    // Map kebab-case clipartId back to Lucide CamelCase
    const formattedId = clipartId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const IconComp = standardIcons[formattedId] || Icons.HelpCircle;
    return <IconComp className="w-full h-full" style={{ color }} />;
  };

  // Drag and Interaction handlers
  const handleInteractionStart = (
    e: React.MouseEvent,
    type: "move" | "resize" | "rotate",
    handle?: string,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (!selectedElement) return;

    setDragState({
      type,
      handle,
      startX: e.clientX,
      startY: e.clientY,
      startElementX: selectedElement.x,
      startElementY: selectedElement.y,
      startElementW: selectedElement.width,
      startElementH: selectedElement.height,
      startRotation: selectedElement.rotation,
    });
  };

  useEffect(() => {
    if (!dragState.type || !selectedElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const deltaX = e.clientX - dragState.startX;
      const deltaY = e.clientY - dragState.startY;

      // Convert delta px to delta percentage
      const deltaPercentX = (deltaX / rect.width) * 100;
      const deltaPercentY = (deltaY / rect.height) * 100;

      const updatedElements = [...elements];
      const targetIdx = updatedElements.findIndex(
        (el) => el.id === selectedElement.id,
      );
      if (targetIdx === -1) return;

      const element = { ...updatedElements[targetIdx] };

      if (dragState.type === "move") {
        let newX = dragState.startElementX + deltaPercentX;
        let newY = dragState.startElementY + deltaPercentY;

        if (snapToGrid) {
          newX = Math.round(newX / 5) * 5;
          newY = Math.round(newY / 5) * 5;
        }

        element.x = Math.max(-50, Math.min(100, newX));
        element.y = Math.max(-50, Math.min(100, newY));
      } else if (dragState.type === "resize" && dragState.handle) {
        // Transform screen-space delta into element's local coordinate space
        // so resizing works correctly even when the element is rotated
        const rotationRad = ((element.rotation || 0) * Math.PI) / 180;
        const cos = Math.cos(-rotationRad);
        const sin = Math.sin(-rotationRad);
        const localDeltaX = deltaPercentX * cos - deltaPercentY * sin;
        const localDeltaY = deltaPercentX * sin + deltaPercentY * cos;

        const handle = dragState.handle;
        let newWidth = element.width;
        let newHeight = element.height;
        let newX = element.x;
        let newY = element.y;

        if (handle.includes("e")) {
          newWidth = Math.max(5, dragState.startElementW + localDeltaX);
        }
        if (handle.includes("s")) {
          newHeight = Math.max(5, dragState.startElementH + localDeltaY);
        }
        if (handle.includes("w")) {
          const wDiff = localDeltaX;
          newWidth = Math.max(5, dragState.startElementW - wDiff);
          if (newWidth > 5) {
            newX = dragState.startElementX + wDiff;
          }
        }
        if (handle.includes("n")) {
          const hDiff = localDeltaY;
          newHeight = Math.max(5, dragState.startElementH - hDiff);
          if (newHeight > 5) {
            newY = dragState.startElementY + hDiff;
          }
        }

        if (snapToGrid) {
          newWidth = Math.round(newWidth / 5) * 5;
          newHeight = Math.round(newHeight / 5) * 5;
        }

        element.width = newWidth;
        element.height = newHeight;
        element.x = newX;
        element.y = newY;
      } else if (dragState.type === "rotate") {
        // Rotation logic relative to element center
        const elementCenterPx = {
          x: rect.left + (element.x + element.width / 2) * (rect.width / 100),
          y: rect.top + (element.y + element.height / 2) * (rect.height / 100),
        };

        const angleRad = Math.atan2(
          e.clientY - elementCenterPx.y,
          e.clientX - elementCenterPx.x,
        );
        let angleDeg = (angleRad * 180) / Math.PI + 90; // Add 90 offset because handle is pointing up
        if (angleDeg < 0) angleDeg += 360;

        if (snapToGrid) {
          // Snap to nearest 15 degrees
          angleDeg = Math.round(angleDeg / 15) * 15;
        }

        element.rotation = Math.round(angleDeg) % 360;
      }

      updatedElements[targetIdx] = element;
      onElementsChange(updatedElements);
    };

    const handleMouseUp = () => {
      setDragState({
        type: null,
        startX: 0,
        startY: 0,
        startElementX: 0,
        startElementY: 0,
        startElementW: 0,
        startElementH: 0,
        startRotation: 0,
      });
      // Save state into history after completion of drag operation
      historyPush(elements);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    dragState,
    elements,
    selectedElement,
    snapToGrid,
    onElementsChange,
    historyPush,
  ]);

  // Render element borders and handles
  const renderSelectionFrame = (el: CanvasElement) => {
    if (selectedId !== el.id) return null;

    const handles = ["nw", "ne", "se", "sw", "n", "e", "s", "w"];

    return (
      <div className="absolute inset-0 border-2 border-[#ff2d78] pointer-events-none select-none">
        {/* Rotation Handle */}
        <div
          className="absolute left-1/2 -top-9 -translate-x-1/2 flex flex-col items-center cursor-alias pointer-events-auto"
          onMouseDown={(e) => handleInteractionStart(e, "rotate")}
        >
          <div className="w-0.5 h-5 bg-[#ff2d78]" />
          <div className="w-3.5 h-3.5 bg-[#ff2d78] hover:bg-yellow-300 rounded-full border-2 border-slate-900 shadow-md transition-colors" />
        </div>

        {/* Quick Toolbar overlay */}
        <div className="absolute left-1/2 -bottom-14 -translate-x-1/2 flex items-center bg-slate-900 border border-slate-800 text-white rounded-lg px-2 py-1 shadow-xl gap-2 pointer-events-auto z-50">
          <button
            onClick={() => {
              const updated = elements.filter((item) => item.id !== el.id);
              onElementsChange(updated);
              historyPush(updated);
              onSelectElement(null);
            }}
            title="Delete"
            className="p-1 hover:bg-slate-800 text-red-400 hover:text-red-300 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const duplicated: CanvasElement = {
                ...el,
                id: `el_${Date.now()}`,
                x: Math.min(80, el.x + 5),
                y: Math.min(80, el.y + 5),
              };
              const updated = [...elements, duplicated];
              onElementsChange(updated);
              historyPush(updated);
              onSelectElement(duplicated.id);
            }}
            title="Duplicate"
            className="p-1 hover:bg-slate-800 text-slate-350 hover:text-slate-200 rounded transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const updated = [...elements];
              const idx = updated.findIndex((item) => item.id === el.id);
              if (idx !== -1 && idx < updated.length - 1) {
                // Move forward in array
                const tmp = updated[idx];
                updated[idx] = updated[idx + 1];
                updated[idx + 1] = tmp;
                onElementsChange(updated);
                historyPush(updated);
              }
            }}
            title="Bring Forward"
            className="p-1 hover:bg-slate-800 text-slate-350 hover:text-slate-200 rounded transition-colors"
          >
            <MoveUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              const updated = [...elements];
              const idx = updated.findIndex((item) => item.id === el.id);
              if (idx > 0) {
                // Move backward in array
                const tmp = updated[idx];
                updated[idx] = updated[idx - 1];
                updated[idx - 1] = tmp;
                onElementsChange(updated);
                historyPush(updated);
              }
            }}
            title="Send Backward"
            className="p-1 hover:bg-slate-800 text-slate-350 hover:text-slate-200 rounded transition-colors"
          >
            <MoveDown className="w-4 h-4" />
          </button>
        </div>

        {/* Resize Handles */}
        {handles.map((h) => {
          let posClass = "";
          switch (h) {
            case "nw":
              posClass = "-left-1.5 -top-1.5 cursor-nwse-resize";
              break;
            case "ne":
              posClass = "-right-1.5 -top-1.5 cursor-nesw-resize";
              break;
            case "se":
              posClass = "-right-1.5 -bottom-1.5 cursor-nwse-resize";
              break;
            case "sw":
              posClass = "-left-1.5 -bottom-1.5 cursor-nesw-resize";
              break;
            case "n":
              posClass = "left-1/2 -top-1.5 -translate-x-1/2 cursor-ns-resize";
              break;
            case "e":
              posClass = "top-1/2 -right-1.5 -translate-y-1/2 cursor-ew-resize";
              break;
            case "s":
              posClass =
                "left-1/2 -bottom-1.5 -translate-x-1/2 cursor-ns-resize";
              break;
            case "w":
              posClass = "top-1/2 -left-1.5 -translate-y-1/2 cursor-ew-resize";
              break;
          }

          return (
            <div
              key={h}
              className={`absolute w-3 h-3 bg-white border-2 border-[#ff2d78] pointer-events-auto rounded-full shadow-md z-40 transition-transform hover:scale-125 ${posClass}`}
              onMouseDown={(e) => handleInteractionStart(e, "resize", h)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl shadow-2xl border border-slate-700 overflow-hidden select-none transition-all duration-355"
      style={{
        aspectRatio: `${canvasSize.width} / ${canvasSize.height}`,
        backgroundColor: backgroundColor,
        backgroundImage:
          backgroundGradient ||
          (backgroundImage ? `url(${backgroundImage})` : "none"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        containerType: "inline-size",
      }}
      onClick={() => onSelectElement(null)}
    >
      {/* Grid Lines */}
      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #475569 1px, transparent 1px),
              linear-gradient(to bottom, #475569 1px, transparent 1px)
            `,
            backgroundSize: "5% 5%",
          }}
        />
      )}

      {/* Print Bleed & Safety Guidelines */}
      <div
        className="absolute border border-dashed border-red-500/60 pointer-events-none z-20"
        style={{
          top: "2.5%",
          left: "2.5%",
          right: "2.5%",
          bottom: "2.5%",
        }}
      >
        <span className="absolute top-1 left-2 text-[8px] font-semibold text-red-500/80 bg-slate-900/10 px-1 rounded uppercase tracking-wider select-none">
          Safety Margin
        </span>
        <span className="absolute bottom-1 right-2 text-[8px] font-semibold text-red-500/80 bg-slate-900/10 px-1 rounded uppercase tracking-wider select-none">
          Bleed Area
        </span>
      </div>

      {/* Canvas Elements */}
      {elements.map((el) => {
        const isSelected = selectedId === el.id;
        const opacity = el.opacity !== undefined ? el.opacity : 1;

        return (
          <div
            key={el.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelectElement(el.id);
            }}
            onMouseDown={(e) => handleInteractionStart(e, "move")}
            className={`absolute flex items-center justify-center cursor-move transition-shadow ${
              isSelected
                ? "z-30 select-all"
                : "z-10 hover:outline hover:outline-1 hover:outline-dashed hover:outline-yellow-400"
            }`}
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.width}%`,
              height: `${el.height}%`,
              transform: `rotate(${el.rotation || 0}deg)`,
              transformOrigin: "center center",
              opacity: opacity,
            }}
          >
            {/* Selection box visual details */}
            {renderSelectionFrame(el)}

            {/* Content Rendering based on Type */}
            <div className="w-full h-full select-none flex items-center justify-center overflow-hidden">
              {el.type === "text" && (
                <div
                  className="w-full h-full flex items-center select-none truncate"
                  style={{
                    fontFamily: el.fontFamily || "Inter",
                    color: el.color || "#000000",
                    fontWeight: el.bold ? "bold" : "normal",
                    fontStyle: el.italic ? "italic" : "normal",
                    textDecoration: el.underline ? "underline" : "none",
                    justifyContent:
                      el.align === "left"
                        ? "flex-start"
                        : el.align === "right"
                          ? "flex-end"
                          : "center",
                    textAlign: el.align || "center",
                    fontSize: `${(el.fontSize || 32) / 10}cqw`,
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.1",
                    WebkitTextStroke: el.strokeColor
                      ? `${(el.strokeWidth || 1) / 10}cqw ${el.strokeColor}`
                      : "none",
                  }}
                >
                  {el.content || "Double click to edit"}
                </div>
              )}

              {el.type === "shape" && (
                <div className="w-full h-full flex items-center justify-center p-1">
                  {el.shapeType === "rect" && (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: el.fillColor || "#3b82f6",
                        border: el.borderWidth
                          ? `${el.borderWidth}px solid ${el.borderColor || "#000"}`
                          : "none",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                  {el.shapeType === "circle" && (
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: el.fillColor || "#3b82f6",
                        border: el.borderWidth
                          ? `${el.borderWidth}px solid ${el.borderColor || "#000"}`
                          : "none",
                      }}
                    />
                  )}
                  {el.shapeType === "triangle" && (
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon
                        points="50,5 95,95 5,95"
                        fill={el.fillColor || "#3b82f6"}
                        stroke={el.borderColor || "#000"}
                        strokeWidth={el.borderWidth ? el.borderWidth * 2 : 0}
                      />
                    </svg>
                  )}
                  {el.shapeType === "star" && (
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon
                        points="50,2 64,36 100,36 71,57 81,95 50,72 19,95 29,57 0,36 36,36"
                        fill={el.fillColor || "#eab308"}
                        stroke={el.borderColor || "#000"}
                        strokeWidth={el.borderWidth ? el.borderWidth * 2 : 0}
                      />
                    </svg>
                  )}
                  {el.shapeType === "line" && (
                    <div
                      className="w-full"
                      style={{
                        height: `${el.borderWidth || 4}px`,
                        backgroundColor: el.fillColor || "#000",
                      }}
                    />
                  )}
                </div>
              )}

              {el.type === "clipart" && el.clipartId && (
                <div className="w-full h-full p-1.5 flex items-center justify-center">
                  {renderClipart(el.clipartId, el.color)}
                </div>
              )}

              {el.type === "image" && el.imageUrl && (
                <div className="w-full h-full relative p-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={el.imageUrl}
                    alt="Uploaded element"
                    className="w-full h-full object-fill pointer-events-none"
                  />
                  {el.resolutionQuality === "poor" && (
                    <div className="absolute top-1 right-1 bg-red-600/90 text-white text-[8px] font-bold px-1 rounded-sm shadow-md flex items-center gap-0.5 z-10 pointer-events-none">
                      Low Res!
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
