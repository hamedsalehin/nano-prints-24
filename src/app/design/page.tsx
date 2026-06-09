"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Type,
  Square,
  Image as ImageIcon,
  Grid,
  Layers,
  ZoomIn,
  ZoomOut,
  Undo2,
  Redo2,
  AlertTriangle,
  ShieldCheck,
  ShoppingCart,
  ChevronRight,
  ArrowLeft,
  Check,
  Sparkles,
  HelpCircle,
  Trash2,
  Copy,
  RefreshCw,
  Upload,
  Loader2,
  Mail,
} from "lucide-react";
import { DesignCanvas, CanvasElement } from "@/components/DesignCanvas";
import { ClipartLibrary, ClipartItem } from "@/components/ClipartLibrary";
import { useAuth } from "@/components/AuthContext";

// Product templates
const PRESET_TEMPLATES = [
  {
    id: "for-sale",
    name: "Classic For Sale",
    elements: [
      {
        id: "sale-bg",
        type: "shape",
        x: 2,
        y: 2,
        width: 96,
        height: 96,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#ffffff",
        borderWidth: 4,
        borderColor: "#dc2626",
      },
      {
        id: "sale-header-bg",
        type: "shape",
        x: 4,
        y: 4,
        width: 92,
        height: 26,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#dc2626",
      },
      {
        id: "sale-header-txt",
        type: "text",
        x: 10,
        y: 6,
        width: 80,
        height: 22,
        rotation: 0,
        content: "FOR SALE",
        fontFamily: "Impact",
        fontSize: 60,
        color: "#ffffff",
        bold: true,
        align: "center",
      },
      {
        id: "sale-info-txt",
        type: "text",
        x: 10,
        y: 35,
        width: 80,
        height: 18,
        rotation: 0,
        content: "BY OWNER",
        fontFamily: "Inter",
        fontSize: 28,
        color: "#000000",
        bold: true,
        align: "center",
      },
      {
        id: "sale-phone-lbl",
        type: "text",
        x: 10,
        y: 55,
        width: 80,
        height: 12,
        rotation: 0,
        content: "CALL TO INQUIRE:",
        fontFamily: "Inter",
        fontSize: 18,
        color: "#4b5563",
        align: "center",
      },
      {
        id: "sale-phone-num",
        type: "text",
        x: 10,
        y: 70,
        width: 80,
        height: 18,
        rotation: 0,
        content: "555-0199",
        fontFamily: "Impact",
        fontSize: 44,
        color: "#dc2626",
        bold: true,
        align: "center",
      },
    ] as CanvasElement[],
  },
  {
    id: "open-house",
    name: "Open House Banner",
    elements: [
      {
        id: "oh-bg",
        type: "shape",
        x: 2,
        y: 2,
        width: 96,
        height: 96,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#1e3a8a",
        borderWidth: 4,
        borderColor: "#facc15",
      },
      {
        id: "oh-header",
        type: "text",
        x: 10,
        y: 12,
        width: 80,
        height: 20,
        rotation: 0,
        content: "OPEN HOUSE",
        fontFamily: "Montserrat",
        fontSize: 50,
        color: "#facc15",
        bold: true,
        align: "center",
      },
      {
        id: "oh-arrow",
        type: "clipart",
        x: 38,
        y: 38,
        width: 24,
        height: 24,
        rotation: 90,
        clipartId: "arrow-up",
        color: "#facc15",
      },
      {
        id: "oh-details",
        type: "text",
        x: 10,
        y: 70,
        width: 80,
        height: 16,
        rotation: 0,
        content: "SUNDAY 1 - 4 PM",
        fontFamily: "Inter",
        fontSize: 24,
        color: "#ffffff",
        bold: true,
        align: "center",
      },
    ] as CanvasElement[],
  },
  {
    id: "hiring",
    name: "Help Wanted / Hiring",
    elements: [
      {
        id: "h-bg",
        type: "shape",
        x: 2,
        y: 2,
        width: 96,
        height: 96,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#0f172a",
        borderWidth: 6,
        borderColor: "#eab308",
      },
      {
        id: "h-badge",
        type: "shape",
        x: 35,
        y: 8,
        width: 30,
        height: 12,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#eab308",
      },
      {
        id: "h-badge-txt",
        type: "text",
        x: 35,
        y: 9,
        width: 30,
        height: 10,
        rotation: 0,
        content: "NOW HIRING",
        fontFamily: "Inter",
        fontSize: 14,
        color: "#000000",
        bold: true,
        align: "center",
      },
      {
        id: "h-title",
        type: "text",
        x: 5,
        y: 24,
        width: 90,
        height: 22,
        rotation: 0,
        content: "WE ARE HIRING",
        fontFamily: "Impact",
        fontSize: 52,
        color: "#ffffff",
        bold: true,
        align: "center",
      },
      {
        id: "h-role",
        type: "text",
        x: 10,
        y: 50,
        width: 80,
        height: 12,
        rotation: 0,
        content: "FULL-TIME ASSOCIATES",
        fontFamily: "Inter",
        fontSize: 22,
        color: "#eab308",
        bold: true,
        align: "center",
      },
      {
        id: "h-apply",
        type: "text",
        x: 10,
        y: 68,
        width: 80,
        height: 10,
        rotation: 0,
        content: "Apply inside or scan QR code",
        fontFamily: "Inter",
        fontSize: 16,
        color: "#94a3b8",
        align: "center",
      },
      {
        id: "h-web",
        type: "text",
        x: 10,
        y: 80,
        width: 80,
        height: 10,
        rotation: 0,
        content: "www.yoursite.com",
        fontFamily: "Courier New",
        fontSize: 18,
        color: "#ffffff",
        align: "center",
      },
    ] as CanvasElement[],
  },
  {
    id: "security",
    name: "Security Warning",
    elements: [
      {
        id: "s-bg",
        type: "shape",
        x: 2,
        y: 2,
        width: 96,
        height: 96,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#ffffff",
        borderWidth: 6,
        borderColor: "#dc2626",
      },
      {
        id: "s-header-bg",
        type: "shape",
        x: 4,
        y: 4,
        width: 92,
        height: 20,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#dc2626",
      },
      {
        id: "s-header-txt",
        type: "text",
        x: 10,
        y: 6,
        width: 80,
        height: 16,
        rotation: 0,
        content: "WARNING",
        fontFamily: "Impact",
        fontSize: 44,
        color: "#ffffff",
        bold: true,
        align: "center",
      },
      {
        id: "s-shield",
        type: "clipart",
        x: 38,
        y: 28,
        width: 24,
        height: 24,
        rotation: 0,
        clipartId: "shield-alert",
        color: "#dc2626",
      },
      {
        id: "s-body-1",
        type: "text",
        x: 5,
        y: 58,
        width: 90,
        height: 12,
        rotation: 0,
        content: "PRIVATE PROPERTY",
        fontFamily: "Inter",
        fontSize: 26,
        color: "#000000",
        bold: true,
        align: "center",
      },
      {
        id: "s-body-2",
        type: "text",
        x: 5,
        y: 72,
        width: 90,
        height: 18,
        rotation: 0,
        content: "24 HOUR VIDEO SURVEILLANCE",
        fontFamily: "Inter",
        fontSize: 20,
        color: "#4b5563",
        bold: true,
        align: "center",
      },
    ] as CanvasElement[],
  },
];

const ROLLUP_TEMPLATES = [
  {
    id: "rollup-welcome",
    name: "Event Welcome Banner",
    elements: [
      {
        id: "ru-bg",
        type: "shape",
        x: 2,
        y: 2,
        width: 96,
        height: 96,
        rotation: 0,
        shapeType: "rect",
        fillColor: "#0f172a",
        borderWidth: 4,
        borderColor: "#eab308",
      },
      {
        id: "ru-logo-bg",
        type: "shape",
        x: 38,
        y: 6,
        width: 24,
        height: 10,
        rotation: 0,
        shapeType: "circle",
        fillColor: "#eab308",
      },
      {
        id: "ru-title",
        type: "text",
        x: 5,
        y: 22,
        width: 90,
        height: 12,
        rotation: 0,
        content: "WELCOME",
        fontFamily: "Montserrat",
        fontSize: 48,
        color: "#eab308",
        bold: true,
        align: "center",
      },
      {
        id: "ru-sub",
        type: "text",
        x: 5,
        y: 36,
        width: 90,
        height: 8,
        rotation: 0,
        content: "TO THE ANNUAL GALA",
        fontFamily: "Inter",
        fontSize: 18,
        color: "#ffffff",
        align: "center",
      },
      {
        id: "ru-divider",
        type: "shape",
        x: 20,
        y: 48,
        width: 60,
        height: 1,
        rotation: 0,
        shapeType: "line",
        fillColor: "#eab308",
      },
      {
        id: "ru-date",
        type: "text",
        x: 5,
        y: 56,
        width: 90,
        height: 8,
        rotation: 0,
        content: "OCTOBER 14, 2026",
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "#ffffff",
        bold: true,
        align: "center",
      },
      {
        id: "ru-footer",
        type: "text",
        x: 5,
        y: 78,
        width: 90,
        height: 12,
        rotation: 0,
        content: "NANO SIGPS PRESENTS",
        fontFamily: "Inter",
        fontSize: 14,
        color: "#94a3b8",
        align: "center",
      },
    ] as CanvasElement[],
  },
];

const FONTS = [
  "Inter",
  "Arial",
  "Impact",
  "Georgia",
  "Courier New",
  "Montserrat",
  "Playfair Display",
];

const BOARD_SIZES = [
  { label: '18" x 24" (Standard)', width: 24, height: 18, priceAdder: 0 },
  { label: '24" x 36" (Large)', width: 36, height: 24, priceAdder: 9.5 },
  { label: '12" x 18" (Small)', width: 18, height: 12, priceAdder: -1.5 },
  { label: '36" x 48" (Jumbo)', width: 48, height: 36, priceAdder: 24.0 },
];

const MATERIALS = [
  {
    label: "Corrugated Plastic (Yard Sign)",
    value: "coroplast",
    basePrice: 15.99,
    desc: "Lightweight, waterproof 4mm board.",
  },
  {
    label: "Heavy Duty Aluminum",
    value: "aluminum",
    basePrice: 27.99,
    desc: "Rust-proof, long-lasting premium metal.",
  },
  {
    label: "Foam Board",
    value: "foamboard",
    basePrice: 22.99,
    desc: "Sleek, rigid surface perfect for indoor presentation.",
  },
];

const BACKGROUND_COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Yellow", value: "#facc15" },
  { name: "Red", value: "#dc2626" },
  { name: "Navy Blue", value: "#1e3a8a" },
  { name: "Dark Slate", value: "#0f172a" },
  { name: "Forest Green", value: "#14532d" },
  { name: "Light Gray", value: "#f1f5f9" },
];

const GRADIENTS = [
  { name: "None", value: "" },
  {
    name: "Sunset Gold",
    value: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
  },
  {
    name: "Corporate Blue",
    value: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
  },
  {
    name: "Alert Orange",
    value: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
  },
  {
    name: "Premium Slate",
    value: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  },
];

function DesignPageContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId") || "51060";
  const urlWidth = searchParams.get("width");
  const urlHeight = searchParams.get("height");

  const availableTemplates = React.useMemo(() => {
    if (productId === "rollup" || urlHeight === "79") {
      return ROLLUP_TEMPLATES;
    }
    return PRESET_TEMPLATES;
  }, [productId, urlHeight]);

  const availableMaterials = React.useMemo(() => {
    if (productId === "rollup" || urlHeight === "79") {
      return [
        {
          label: "Standard (13oz Vinyl)",
          value: "standard",
          basePrice: 93.27,
          desc: "Classic, durable, and fade-resistant.",
        },
        {
          label: "Polyester Greyback",
          value: "polyester",
          basePrice: 108.27,
          desc: "Smooth, wrinkle-resistant with lightblock backing.",
        },
        {
          label: "Eco-Wise PVC Free",
          value: "eco",
          basePrice: 103.27,
          desc: "Environmentally friendly 13oz material.",
        },
      ];
    }
    return MATERIALS;
  }, [productId, urlHeight]);

  // State Management
  const [elements, setElements] = useState<CanvasElement[]>([
    {
      id: "init-bg",
      type: "shape",
      x: 2,
      y: 2,
      width: 96,
      height: 96,
      rotation: 0,
      shapeType: "rect",
      fillColor: "#ffffff",
      borderWidth: 4,
      borderColor: "#000",
    },
    {
      id: "text-1",
      type: "text",
      x: 10,
      y: 35,
      width: 80,
      height: 30,
      rotation: 0,
      content: "YOUR DESIGN HERE",
      fontFamily: "Impact",
      fontSize: 56,
      color: "#000000",
      bold: true,
      align: "center",
    },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Undo/Redo History
  const [history, setHistory] = useState<CanvasElement[][]>([[...elements]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Canvas Settings
  const [activeTab, setActiveTab] = useState<
    "templates" | "text" | "shapes" | "clipart" | "upload" | "background"
  >("templates");
  const [canvasSize, setCanvasSize] = useState(BOARD_SIZES[0]);
  const [material, setMaterial] = useState(MATERIALS[0]);
  const [doubleSided, setDoubleSided] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId === "rollup" || urlHeight === "79") {
      const initialRollupElements: CanvasElement[] = [
        {
          id: "init-bg",
          type: "shape",
          x: 2,
          y: 2,
          width: 96,
          height: 96,
          rotation: 0,
          shapeType: "rect",
          fillColor: "#ffffff",
          borderWidth: 4,
          borderColor: "#000",
        },
        {
          id: "text-1",
          type: "text",
          x: 10,
          y: 25,
          width: 80,
          height: 15,
          rotation: 0,
          content: "YOUR ROLLUP",
          fontFamily: "Impact",
          fontSize: 44,
          color: "#000000",
          bold: true,
          align: "center",
        },
        {
          id: "text-2",
          type: "text",
          x: 10,
          y: 45,
          width: 80,
          height: 15,
          rotation: 0,
          content: "DESIGN HERE",
          fontFamily: "Impact",
          fontSize: 44,
          color: "#000000",
          bold: true,
          align: "center",
        },
      ];
      setElements(initialRollupElements);
      setHistory([initialRollupElements]);
      setHistoryIndex(0);
      setCanvasSize({
        label: '79" x 33" (Banner)',
        width: 33,
        height: 79,
        priceAdder: 0,
      });
      setMaterial({
        label: "Standard (13oz Vinyl)",
        value: "standard",
        basePrice: 93.27,
        desc: "Classic, durable, and fade-resistant.",
      });
    } else if (urlWidth && urlHeight) {
      const w = parseInt(urlWidth) || 24;
      const h = parseInt(urlHeight) || 18;
      setCanvasSize({
        label: `${h}" x ${w}" (Custom)`,
        width: w,
        height: h,
        priceAdder: 0,
      });
    }
  }, [productId, urlWidth, urlHeight]);

  // Canvas Aesthetics
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgGradient, setBgGradient] = useState("");
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState(false);
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Auth
  const { user } = useAuth();

  // Checkout modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<
    "review" | "shipping" | "success"
  >("review");

  // Shipping form state
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingPostal, setShippingPostal] = useState("");

  // Finished design file upload (optional PDF/AI/EPS)
  const finishedDesignRef = useRef<HTMLInputElement>(null);
  const [finishedDesignFile, setFinishedDesignFile] = useState<File | null>(
    null,
  );

  // Order submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [confirmedShortId, setConfirmedShortId] = useState<string | null>(null);

  const handlePlaceOrder = async () => {
    if (!user) {
      setSubmitError("You must be signed in to place an order.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append("user_id", user.id);
      formData.append("user_email", user.email ?? "");
      formData.append("product_title", material.label);
      formData.append("product_size", canvasSize.label);
      formData.append("quantity", String(quantity));
      formData.append("unit_price", calculatedPrice.unitPrice);
      formData.append("total_price", calculatedPrice.total);
      formData.append(
        "custom_options",
        JSON.stringify({
          Material: material.label,
          Size: canvasSize.label,
          Sides: doubleSided ? "Double-sided" : "Single-sided",
          Quantity: String(quantity),
        }),
      );
      formData.append("shipping_name", shippingName);
      formData.append("shipping_address", shippingAddress);
      formData.append("shipping_city", shippingCity);
      formData.append("shipping_postal", shippingPostal);

      if (finishedDesignFile) {
        formData.append("design_file", finishedDesignFile);
      }

      const res = await fetch("/api/submit-order", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error || "Order submission failed.");
      }

      setConfirmedOrderId(json.orderId);
      setConfirmedShortId(json.shortId);
      setCheckoutStep("success");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Push state to history
  const historyPush = (newElements: CanvasElement[]) => {
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push([...newElements]);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setElements([...history[prevIndex]]);
      setSelectedId(null);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setElements([...history[nextIndex]]);
      setSelectedId(null);
    }
  };

  // Add Element functions
  const addTextElement = () => {
    const newEl: CanvasElement = {
      id: `text_${Date.now()}`,
      type: "text",
      x: 20,
      y: 40,
      width: 60,
      height: 18,
      rotation: 0,
      content: "Edit this text",
      fontFamily: "Inter",
      fontSize: 24,
      color: "#000000",
      bold: false,
      italic: false,
      underline: false,
      align: "center",
    };
    const updated = [...elements, newEl];
    setElements(updated);
    historyPush(updated);
    setSelectedId(newEl.id);
  };

  const addShapeElement = (
    shapeType: "rect" | "circle" | "triangle" | "star" | "line",
  ) => {
    const newEl: CanvasElement = {
      id: `shape_${Date.now()}`,
      type: "shape",
      shapeType,
      x: 35,
      y: 35,
      width: 30,
      height: 30,
      rotation: 0,
      fillColor: shapeType === "star" ? "#eab308" : "#3b82f6",
      borderWidth: 0,
      borderColor: "#000000",
    };
    const updated = [...elements, newEl];
    setElements(updated);
    historyPush(updated);
    setSelectedId(newEl.id);
  };

  const addClipartElement = (clipart: ClipartItem) => {
    const newEl: CanvasElement = {
      id: `clipart_${Date.now()}`,
      type: "clipart",
      clipartId: clipart.id,
      x: 40,
      y: 40,
      width: 20,
      height: 20,
      rotation: 0,
      color: "#000000",
    };
    const updated = [...elements, newEl];
    setElements(updated);
    historyPush(updated);
    setSelectedId(newEl.id);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      // Mock quality analysis based on file size
      const quality =
        file.size > 800000 ? "excellent" : file.size > 200000 ? "good" : "poor";

      const newEl: CanvasElement = {
        id: `img_${Date.now()}`,
        type: "image",
        imageUrl: url,
        imageFile: file,
        resolutionQuality: quality,
        x: 30,
        y: 30,
        width: 40,
        height: 40,
        rotation: 0,
      };

      const updated = [...elements, newEl];
      setElements(updated);
      historyPush(updated);
      setSelectedId(newEl.id);
    }
  };

  const loadTemplate = (tmpl: { name: string; elements: CanvasElement[] }) => {
    // Confirm replacement
    if (
      window.confirm(
        `Load "${tmpl.name}" template? This will replace your current design.`,
      )
    ) {
      setElements([...tmpl.elements]);
      historyPush(tmpl.elements);
      setSelectedId(null);
    }
  };

  // Helper to update specific properties on the selected element
  const updateSelectedElement = (properties: Partial<CanvasElement>) => {
    if (!selectedId) return;
    const updated = elements.map((el) => {
      if (el.id === selectedId) {
        return { ...el, ...properties };
      }
      return el;
    });
    setElements(updated);
    // Don't push to history here on slider move, we trigger push on change complete/mouseup if needed
    // But for select changes, inline updates, etc., we can push
  };

  // Trigger push to history on final input action
  const commitPropertyChange = () => {
    historyPush(elements);
  };

  // Price calculations
  const calculatedPrice = React.useMemo(() => {
    let base = material.basePrice;
    base += canvasSize.priceAdder;

    if (doubleSided) {
      base *= 1.4; // 40% upcharge for double-sided
    }

    // Add small charge per element above 4 elements (mock material overhead)
    const extraElements = Math.max(0, elements.length - 4);
    base += extraElements * 0.5;

    let subtotal = base * quantity;

    // Quantity discounts
    let discount = 1;
    if (quantity >= 50) discount = 0.85;
    else if (quantity >= 25) discount = 0.9;
    else if (quantity >= 10) discount = 0.95;

    // Promo discount (25% off)
    subtotal = subtotal * discount * 0.75;

    return {
      unitPrice: (subtotal / quantity).toFixed(2),
      total: subtotal.toFixed(2),
      savings: (base * quantity - subtotal).toFixed(2),
    };
  }, [material, canvasSize, doubleSided, elements.length, quantity]);

  const selectedEl = elements.find((el) => el.id === selectedId);

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* ── TOP HEADER / TOOLBAR ── */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 z-10">
        <div className="flex items-center gap-4">
          <Link
            href="/custom-signs"
            className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
            Back to Signs
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <span className="text-[#ff2d78] font-extrabold font-poppins text-lg tracking-wider">
              NANO
            </span>
            <span className="font-semibold text-slate-200 text-sm bg-slate-800 px-2 py-0.5 rounded uppercase tracking-wide">
              Design Studio
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="designer-toolbar flex items-center gap-1.5 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800 shadow-inner">
          <button
            onClick={handleUndo}
            disabled={historyIndex === 0}
            className="p-2 hover:bg-slate-800 text-slate-350 disabled:opacity-40 disabled:hover:bg-transparent rounded-lg transition-colors"
            title="Undo"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={handleRedo}
            disabled={historyIndex === history.length - 1}
            className="p-2 hover:bg-slate-800 text-slate-350 disabled:opacity-40 disabled:hover:bg-transparent rounded-lg transition-colors"
            title="Redo"
          >
            <Redo2 className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-800 mx-1" />

          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`p-2 rounded-lg transition-colors ${showGrid ? "bg-[#ff2d78] text-slate-950 font-bold" : "text-slate-350 hover:bg-slate-800"}`}
            title="Toggle Grid"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setSnapToGrid(!snapToGrid)}
            className={`p-2 rounded-lg transition-all text-xs font-bold ${snapToGrid ? "bg-slate-800 text-[#ff2d78] border border-[#ff2d78]/40" : "text-slate-400 hover:bg-slate-800 border border-transparent"}`}
            title="Snap to Grid (5% increments)"
          >
            Snap
          </button>

          <div className="w-px h-5 bg-slate-800 mx-1" />

          <button
            onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
            className="p-2 hover:bg-slate-800 text-slate-350 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold px-2 text-slate-400 min-w-[3rem] text-center">
            {zoomLevel}%
          </span>
          <button
            onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))}
            className="p-2 hover:bg-slate-800 text-slate-350 rounded-lg transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-800 mx-1" />

          <button
            onClick={() => {
              if (
                window.confirm("Are you sure you want to clear your design?")
              ) {
                setElements([]);
                historyPush([]);
                setSelectedId(null);
              }
            }}
            className="p-2 hover:bg-red-950/40 text-red-400 hover:text-red-300 rounded-lg transition-colors"
            title="Clear Design"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Order / Checkout CTA */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <span className="text-xs text-slate-400">Estimated Total:</span>
            <div className="text-base font-bold text-[#ff2d78]">
              ${calculatedPrice.total}
            </div>
          </div>
          <button
            onClick={() => {
              setCheckoutStep("review");
              setIsCheckoutOpen(true);
            }}
            className="bg-[#ff2d78] hover:opacity-90 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-pink-500\/20 flex items-center gap-2 transition-all active:scale-[0.98]"
          >
            <ShoppingCart className="w-4 h-4" />
            Checkout Design
          </button>
        </div>
      </header>

      {/* ── MAIN WORKSPACE PANELS ── */}
      <div className="flex flex-grow overflow-hidden">
        {/* 1. LEFT SIDEBAR PANEL (ADD ELEMENTS) */}
        <div className="designer-sidebar w-80 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 z-10">
          {/* Tab Navigation */}
          <div className="grid grid-cols-6 border-b border-slate-800 bg-slate-950/20 text-center">
            {(
              [
                "templates",
                "text",
                "shapes",
                "clipart",
                "upload",
                "background",
              ] as const
            ).map((tab) => {
              let Icon = HelpCircle;
              if (tab === "templates") Icon = Sparkles;
              else if (tab === "text") Icon = Type;
              else if (tab === "shapes") Icon = Square;
              else if (tab === "clipart") Icon = Layers;
              else if (tab === "upload") Icon = ImageIcon;
              else if (tab === "background") Icon = RefreshCw;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 flex flex-col items-center justify-center border-b-2 transition-all ${
                    activeTab === tab
                      ? "border-[#ff2d78] text-[#ff2d78] bg-slate-800/40"
                      : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-850/20"
                  }`}
                  title={tab.charAt(0).toUpperCase() + tab.slice(1)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[9px] mt-1 font-semibold uppercase tracking-wider hidden xs:inline">
                    {tab.slice(0, 5)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Contents */}
          <div className="flex-grow p-5 overflow-y-auto space-y-5 bg-slate-900/60">
            {activeTab === "templates" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Preset Sign Layouts
                </h3>
                <div className="space-y-3">
                  {availableTemplates.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => loadTemplate(tmpl)}
                      className="w-full text-left bg-slate-800/80 hover:bg-slate-750 border border-slate-700 hover:border-[#ff2d78]/45 rounded-xl p-3.5 flex items-center justify-between transition-all group shadow-sm hover:translate-x-0.5"
                    >
                      <div>
                        <div className="font-bold text-slate-200 group-hover:text-[#ff2d78] transition-colors text-sm">
                          {tmpl.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">
                          {tmpl.elements.length} layout elements
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#ff2d78] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "text" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Text Overlays
                </h3>
                <p className="text-xs text-slate-450 leading-relaxed">
                  Add high-contrast typography elements to ensure signs are
                  legible from distance.
                </p>
                <button
                  onClick={addTextElement}
                  className="w-full bg-slate-800 hover:bg-slate-750 border-2 border-dashed border-slate-700 hover:border-[#ff2d78] text-[#ff2d78] font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Type className="w-5 h-5" />
                  Add Custom Text Line
                </button>
              </div>
            )}

            {activeTab === "shapes" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Add Vector Shapes
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      type: "rect" as const,
                      label: "Rectangle",
                      icon: <Square className="w-5 h-5" />,
                    },
                    {
                      type: "circle" as const,
                      label: "Circle",
                      icon: (
                        <div className="w-5 h-5 rounded-full border-2 border-current" />
                      ),
                    },
                    {
                      type: "triangle" as const,
                      label: "Triangle",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polygon points="12,3 22,21 2,21" strokeWidth="2" />
                        </svg>
                      ),
                    },
                    {
                      type: "star" as const,
                      label: "Star",
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polygon
                            points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      type: "line" as const,
                      label: "Border Line",
                      icon: <div className="w-5 h-1 bg-current rounded" />,
                    },
                  ].map((sh) => (
                    <button
                      key={sh.type}
                      onClick={() => addShapeElement(sh.type)}
                      className="bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-[#ff2d78]/40 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-slate-200 transition-all hover:scale-[1.02] active:scale-[0.97]"
                    >
                      {sh.icon}
                      <span className="text-xs font-semibold">{sh.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "clipart" && (
              <div className="h-full flex flex-col">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Clipart Library
                </h3>
                <div className="flex-grow">
                  <ClipartLibrary onSelect={addClipartElement} />
                </div>
              </div>
            )}

            {activeTab === "upload" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Upload Assets
                </h3>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-700 hover:border-[#ff2d78] rounded-xl p-6 text-center cursor-pointer bg-slate-800/40 hover:bg-slate-800/85 transition-all group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <ImageIcon className="w-8 h-8 text-slate-500 group-hover:text-[#ff2d78] mx-auto mb-2 transition-colors" />
                  <span className="block text-sm font-bold text-slate-350 group-hover:text-slate-200">
                    Select Logo or Artwork
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-1">
                    Supports PNG, JPG, SVG up to 10MB
                  </span>
                </div>
                <div className="bg-slate-950/45 p-3 rounded-lg border border-slate-800">
                  <h4 className="text-[11px] font-bold text-[#ff2d78] flex items-center gap-1 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> High-Resolution
                    Printing
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    We automatically scan your image's DPI resolution. Poor
                    quality images will display a warning to ensure you review
                    before ordering.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "background" && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Background Solid Colors
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {BACKGROUND_COLORS.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => {
                          setBgColor(c.value);
                          setBgGradient("");
                          historyPush(elements);
                        }}
                        className={`w-full aspect-square rounded-lg border border-slate-700 relative flex items-center justify-center transition-transform hover:scale-105 ${
                          bgColor === c.value && !bgGradient
                            ? "ring-2 ring-[#ff2d78]"
                            : ""
                        }`}
                        style={{ backgroundColor: c.value }}
                        title={c.name}
                      >
                        {bgColor === c.value && !bgGradient && (
                          <Check
                            className={`w-4 h-4 ${c.value === "#ffffff" || c.value === "#facc15" ? "text-black" : "text-white"}`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Background Gradients
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {GRADIENTS.map((g) => (
                      <button
                        key={g.name}
                        onClick={() => {
                          setBgGradient(g.value);
                          historyPush(elements);
                        }}
                        className={`h-10 rounded-lg border border-slate-700 relative text-left p-2 flex items-center justify-between transition-all hover:border-slate-500 overflow-hidden ${
                          bgGradient === g.value
                            ? "ring-2 ring-[#ff2d78] font-bold"
                            : ""
                        }`}
                        style={{ background: g.value || "rgb(30, 41, 59)" }}
                      >
                        <span className="text-[10px] text-white bg-slate-950/40 px-1 py-0.5 rounded font-medium">
                          {g.name}
                        </span>
                        {bgGradient === g.value && (
                          <Check className="w-4 h-4 text-white shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. CENTRAL WORKSPACE (THE CANVAS CONTAINER) */}
        <div className="flex-grow bg-slate-950 flex items-center justify-center p-8 overflow-auto relative">
          <div
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "center center",
              transition: "transform 0.15s ease-out",
            }}
            className="w-full max-w-[800px] flex items-center justify-center"
          >
            <DesignCanvas
              elements={elements}
              selectedId={selectedId}
              canvasSize={canvasSize}
              backgroundColor={bgColor}
              backgroundGradient={bgGradient}
              backgroundImage={bgImage}
              showGrid={showGrid}
              snapToGrid={snapToGrid}
              onElementsChange={setElements}
              onSelectElement={setSelectedId}
              historyPush={historyPush}
            />
          </div>

          {/* Quick Helper Banner */}
          <div className="absolute bottom-4 left-4 bg-slate-900/80 border border-slate-800 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 max-w-sm shadow-xl pointer-events-none text-xs">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            <span className="text-slate-350">
              {selectedId
                ? "Drag handles to resize. Drag center to move. Click outside to deselect."
                : "Select an element to edit properties, or click sidebar tabs to add elements."}
            </span>
          </div>
        </div>

        {/* 3. RIGHT SIDEBAR PANEL (CONTEXT PROPERTIES & DYNAMIC PRICING) */}
        <div className="designer-context-panel w-80 bg-slate-900 border-l border-slate-800 flex flex-col shrink-0 z-10 overflow-y-auto">
          {/* Section A: Selected Element Properties */}
          <div className="p-5 border-b border-slate-800 bg-slate-950/20">
            {selectedEl ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ff2d78] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Modify {selectedEl.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        const duplicated: CanvasElement = {
                          ...selectedEl,
                          id: `el_${Date.now()}`,
                          x: Math.min(80, selectedEl.x + 5),
                          y: Math.min(80, selectedEl.y + 5),
                        };
                        const updated = [...elements, duplicated];
                        setElements(updated);
                        historyPush(updated);
                        setSelectedId(duplicated.id);
                      }}
                      className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors"
                      title="Duplicate"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        const updated = elements.filter(
                          (item) => item.id !== selectedEl.id,
                        );
                        setElements(updated);
                        historyPush(updated);
                        setSelectedId(null);
                      }}
                      className="p-1.5 hover:bg-red-950/40 text-slate-450 hover:text-red-400 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Specific Control Toggles */}
                {selectedEl.type === "text" && (
                  <div className="space-y-4">
                    {/* Text Area */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-450 mb-1">
                        Text Content
                      </label>
                      <textarea
                        value={selectedEl.content || ""}
                        onChange={(e) =>
                          updateSelectedElement({ content: e.target.value })
                        }
                        onBlur={commitPropertyChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
                        rows={3}
                      />
                    </div>

                    {/* Font Family & Size */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Font Family
                        </label>
                        <select
                          value={selectedEl.fontFamily || "Inter"}
                          onChange={(e) => {
                            updateSelectedElement({
                              fontFamily: e.target.value,
                            });
                            commitPropertyChange();
                          }}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
                        >
                          {FONTS.map((font) => (
                            <option key={font} value={font}>
                              {font}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Font Size (px)
                        </label>
                        <input
                          type="number"
                          value={selectedEl.fontSize || 24}
                          onChange={(e) =>
                            updateSelectedElement({
                              fontSize: Math.max(
                                8,
                                parseInt(e.target.value) || 12,
                              ),
                            })
                          }
                          onBlur={commitPropertyChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
                        />
                      </div>
                    </div>

                    {/* Text Styling Modifiers */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-450 mb-1.5">
                        Style
                      </label>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => {
                            updateSelectedElement({ bold: !selectedEl.bold });
                            commitPropertyChange();
                          }}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                            selectedEl.bold
                              ? "bg-[#ff2d78] border-[#ff2d78] text-slate-950"
                              : "bg-slate-850 border-slate-700 text-slate-350 hover:bg-slate-800"
                          }`}
                        >
                          B
                        </button>
                        <button
                          onClick={() => {
                            updateSelectedElement({
                              italic: !selectedEl.italic,
                            });
                            commitPropertyChange();
                          }}
                          className={`flex-1 py-1.5 text-xs italic rounded-lg border transition-all ${
                            selectedEl.italic
                              ? "bg-[#ff2d78] border-[#ff2d78] text-slate-950"
                              : "bg-slate-850 border-slate-700 text-slate-350 hover:bg-slate-800"
                          }`}
                        >
                          I
                        </button>
                        <button
                          onClick={() => {
                            updateSelectedElement({
                              underline: !selectedEl.underline,
                            });
                            commitPropertyChange();
                          }}
                          className={`flex-1 py-1.5 text-xs underline rounded-lg border transition-all ${
                            selectedEl.underline
                              ? "bg-[#ff2d78] border-[#ff2d78] text-slate-950"
                              : "bg-slate-850 border-slate-700 text-slate-350 hover:bg-slate-800"
                          }`}
                        >
                          U
                        </button>
                      </div>
                    </div>

                    {/* Alignment */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-450 mb-1">
                        Alignment
                      </label>
                      <div className="grid grid-cols-3 gap-1 bg-slate-950/40 p-1 rounded-lg border border-slate-800">
                        {(["left", "center", "right"] as const).map((al) => (
                          <button
                            key={al}
                            onClick={() => {
                              updateSelectedElement({ align: al });
                              commitPropertyChange();
                            }}
                            className={`py-1.5 rounded flex items-center justify-center transition-all ${
                              selectedEl.align === al
                                ? "bg-slate-800 text-[#ff2d78]"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <line
                                x1="3"
                                y1="6"
                                x2="21"
                                y2="6"
                                strokeWidth="2"
                              />
                              <line
                                x1="6"
                                y1="12"
                                x2="18"
                                y2="12"
                                strokeWidth="2"
                              />
                              <line
                                x1="3"
                                y1="18"
                                x2="21"
                                y2="18"
                                strokeWidth="2"
                              />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color & Border Outline */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Text Color
                        </label>
                        <div className="flex gap-2 items-center">
                          <input
                            type="color"
                            value={selectedEl.color || "#000000"}
                            onChange={(e) =>
                              updateSelectedElement({ color: e.target.value })
                            }
                            onBlur={commitPropertyChange}
                            className="bg-transparent border-0 cursor-pointer w-8 h-8 rounded-lg"
                          />
                          <span className="text-xs uppercase font-mono">
                            {selectedEl.color || "#000000"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Outline Stroke
                        </label>
                        <div className="flex gap-2 items-center">
                          <input
                            type="color"
                            value={selectedEl.strokeColor || "#ffffff"}
                            onChange={(e) =>
                              updateSelectedElement({
                                strokeColor: e.target.value,
                                strokeWidth: selectedEl.strokeWidth || 1,
                              })
                            }
                            onBlur={commitPropertyChange}
                            className="bg-transparent border-0 cursor-pointer w-8 h-8 rounded-lg"
                          />
                          <input
                            type="number"
                            value={selectedEl.strokeWidth || 0}
                            min={0}
                            max={8}
                            onChange={(e) =>
                              updateSelectedElement({
                                strokeWidth: parseInt(e.target.value) || 0,
                              })
                            }
                            onBlur={commitPropertyChange}
                            className="w-12 bg-slate-800 border border-slate-700 rounded-lg p-1.5 text-xs text-center text-slate-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedEl.type === "shape" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-450 mb-1">
                        Fill Color
                      </label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="color"
                          value={selectedEl.fillColor || "#3b82f6"}
                          onChange={(e) =>
                            updateSelectedElement({ fillColor: e.target.value })
                          }
                          onBlur={commitPropertyChange}
                          className="bg-transparent border-0 cursor-pointer w-8 h-8 rounded-lg"
                        />
                        <span className="text-xs uppercase font-mono">
                          {selectedEl.fillColor || "#3b82f6"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Border Width
                        </label>
                        <input
                          type="number"
                          value={selectedEl.borderWidth || 0}
                          min={0}
                          max={20}
                          onChange={(e) =>
                            updateSelectedElement({
                              borderWidth: parseInt(e.target.value) || 0,
                            })
                          }
                          onBlur={commitPropertyChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-100"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-450 mb-1">
                          Border Color
                        </label>
                        <input
                          type="color"
                          value={selectedEl.borderColor || "#000000"}
                          onChange={(e) =>
                            updateSelectedElement({
                              borderColor: e.target.value,
                            })
                          }
                          onBlur={commitPropertyChange}
                          className="bg-transparent border-0 cursor-pointer w-8 h-8 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedEl.type === "clipart" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-450 mb-1">
                        Clipart Tint Color
                      </label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="color"
                          value={selectedEl.color || "#000000"}
                          onChange={(e) =>
                            updateSelectedElement({ color: e.target.value })
                          }
                          onBlur={commitPropertyChange}
                          className="bg-transparent border-0 cursor-pointer w-8 h-8 rounded-lg"
                        />
                        <span className="text-xs uppercase font-mono">
                          {selectedEl.color || "#000000"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedEl.type === "image" && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800 text-[11px] leading-relaxed">
                      <div className="font-bold mb-1">
                        Resolution Quality Check:
                      </div>
                      {selectedEl.resolutionQuality === "excellent" && (
                        <div className="text-green-400 font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> High DPI
                          (Perfect for Print)
                        </div>
                      )}
                      {selectedEl.resolutionQuality === "good" && (
                        <div className="text-[#ff2d78] font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Good Quality
                        </div>
                      )}
                      {selectedEl.resolutionQuality === "poor" && (
                        <div className="text-red-400 font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> Low
                          Resolution Warning! Layout might print blurry.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Shared Properties: Rotation & Opacity */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">
                      Rotation (°)
                    </label>
                    <input
                      type="number"
                      value={selectedEl.rotation || 0}
                      onChange={(e) =>
                        updateSelectedElement({
                          rotation: parseInt(e.target.value) || 0,
                        })
                      }
                      onBlur={commitPropertyChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase">
                      Opacity (%)
                    </label>
                    <input
                      type="number"
                      value={Math.round(
                        (selectedEl.opacity !== undefined
                          ? selectedEl.opacity
                          : 1) * 100,
                      )}
                      min={10}
                      max={100}
                      onChange={(e) => {
                        const val = Math.max(
                          10,
                          Math.min(100, parseInt(e.target.value) || 100),
                        );
                        updateSelectedElement({ opacity: val / 100 });
                      }}
                      onBlur={commitPropertyChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-100"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Default properties: Canvas parameters
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-450 uppercase tracking-wider block">
                  Canvas Settings
                </span>

                {/* Sign Sizes */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Board Dimensions
                  </label>
                  {productId === "rollup" || urlHeight === "79" ? (
                    <div className="w-full bg-slate-950/45 border border-slate-850 rounded-lg p-2.5 text-xs text-slate-200 font-semibold">
                      79" x 33" (Fixed Size)
                    </div>
                  ) : (
                    <select
                      value={canvasSize.label}
                      onChange={(e) => {
                        const found = BOARD_SIZES.find(
                          (s) => s.label === e.target.value,
                        );
                        if (found) setCanvasSize(found);
                      }}
                      className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
                    >
                      {BOARD_SIZES.map((sz) => (
                        <option key={sz.label} value={sz.label}>
                          {sz.label}{" "}
                          {sz.priceAdder > 0
                            ? `(+$${sz.priceAdder.toFixed(2)})`
                            : sz.priceAdder < 0
                              ? `(-$${Math.abs(sz.priceAdder).toFixed(2)})`
                              : ""}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* Sign Material */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">
                    Product Material
                  </label>
                  <select
                    value={material.value}
                    onChange={(e) => {
                      const found = availableMaterials.find(
                        (m) => m.value === e.target.value,
                      );
                      if (found) setMaterial(found);
                    }}
                    className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]"
                  >
                    {availableMaterials.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-slate-500 mt-1.5 leading-normal">
                    {material.desc}
                  </p>
                </div>

                {/* Single/Double Sided */}
                <div className="flex items-center justify-between py-2 border-t border-b border-slate-800">
                  <div>
                    <label className="text-[11px] font-bold text-slate-350 block">
                      Double-Sided Printing
                    </label>
                    <span className="text-[10px] text-slate-500 block">
                      Print design on both sides (+40%)
                    </span>
                  </div>
                  <button
                    onClick={() => setDoubleSided(!doubleSided)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${doubleSided ? "bg-[#ff2d78]" : "bg-slate-700"}`}
                  >
                    <div
                      className={`w-4 h-4 bg-slate-950 rounded-full absolute top-1 transition-transform ${doubleSided ? "left-6" : "left-1"}`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Section B: Pricing Configuration */}
          <div className="p-5 flex-grow flex flex-col justify-end bg-slate-900/30">
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2">
                  Order Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-400 hover:bg-slate-850 hover:text-white transition-colors text-sm font-bold"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 text-center bg-transparent focus:outline-none font-bold text-xs text-slate-100"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-slate-400 hover:bg-slate-850 hover:text-white transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Buy 10+ for 5% off, 25+ for 10% off
                  </span>
                </div>
              </div>

              {/* Price Breakdown Summary */}
              <div className="bg-slate-950/60 rounded-xl border border-slate-800 p-4 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>List Price:</span>
                  <span className="line-through">
                    $
                    {(
                      parseFloat(calculatedPrice.total) +
                      parseFloat(calculatedPrice.savings)
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Unit Cost:</span>
                  <span>${calculatedPrice.unitPrice} each</span>
                </div>
                <div className="flex justify-between text-xs text-green-400 font-bold">
                  <span>Discount Savings (25% + Bulk):</span>
                  <span>-${calculatedPrice.savings}</span>
                </div>
                <div className="h-px bg-slate-800 my-1" />
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-350">
                    Final Subtotal:
                  </span>
                  <span className="text-xl font-bold text-[#ff2d78]">
                    ${calculatedPrice.total}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  setCheckoutStep("review");
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-[#ff2d78] hover:opacity-90 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg hover:shadow-pink-500\/10"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. CHECKOUT PREVIEW MODAL ── */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            {/* Left Hand Render Preview */}
            <div className="flex-1 bg-slate-950 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 relative">
              <h3 className="text-xs font-bold text-slate-450 uppercase tracking-widest absolute top-4 left-4">
                Visual Proof
              </h3>

              <div
                className="w-full aspect-[4/3] rounded-xl border border-slate-800 shadow-xl overflow-hidden relative flex items-center justify-center"
                style={{
                  backgroundColor: bgColor,
                  backgroundImage:
                    bgGradient || (bgImage ? `url(${bgImage})` : "none"),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {elements.map((el) => (
                  <div
                    key={el.id}
                    className="absolute flex items-center justify-center pointer-events-none"
                    style={{
                      left: `${el.x}%`,
                      top: `${el.y}%`,
                      width: `${el.width}%`,
                      height: `${el.height}%`,
                      transform: `rotate(${el.rotation || 0}deg)`,
                      transformOrigin: "center center",
                      opacity: el.opacity !== undefined ? el.opacity : 1,
                    }}
                  >
                    {el.type === "text" && (
                      <div
                        className="w-full h-full text-center flex items-center justify-center select-none truncate"
                        style={{
                          fontFamily: el.fontFamily || "Inter",
                          color: el.color || "#000000",
                          fontWeight: el.bold ? "bold" : "normal",
                          fontStyle: el.italic ? "italic" : "normal",
                          textDecoration: el.underline ? "underline" : "none",
                          fontSize: `${(el.fontSize || 24) * 0.55}px`,
                          lineHeight: "1.1",
                          WebkitTextStroke: el.strokeColor
                            ? `${(el.strokeWidth || 1) * 0.55}px ${el.strokeColor}`
                            : "none",
                        }}
                      >
                        {el.content}
                      </div>
                    )}
                    {el.type === "shape" && (
                      <div className="w-full h-full flex items-center justify-center p-1">
                        {el.shapeType === "rect" && (
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundColor: el.fillColor,
                              border: el.borderWidth
                                ? `${el.borderWidth * 0.5}px solid ${el.borderColor}`
                                : "none",
                            }}
                          />
                        )}
                        {el.shapeType === "circle" && (
                          <div
                            className="w-full h-full rounded-full"
                            style={{
                              backgroundColor: el.fillColor,
                              border: el.borderWidth
                                ? `${el.borderWidth * 0.5}px solid ${el.borderColor}`
                                : "none",
                            }}
                          />
                        )}
                      </div>
                    )}
                    {el.type === "clipart" && el.clipartId && (
                      <div className="w-full h-full p-1.5 text-center flex items-center justify-center">
                        <Layers
                          className="w-6 h-6"
                          style={{ color: el.color }}
                        />
                      </div>
                    )}
                    {el.type === "image" && el.imageUrl && (
                      <div className="w-full h-full p-0.5 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={el.imageUrl}
                          alt="preview"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[10px] text-slate-500 text-center">
                Mock representation of final printed product dimensions (
                {canvasSize.width}"x{canvasSize.height}")
              </div>
            </div>

            {/* Right Hand Form Details */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between overflow-y-auto">
              {checkoutStep === "review" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-slate-100 font-poppins">
                      Order Details
                    </h2>
                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="text-slate-400 hover:text-white text-xs font-semibold px-2 py-1 rounded bg-slate-800"
                    >
                      Close
                    </button>
                  </div>

                  <div className="space-y-3 text-xs bg-slate-950/40 p-4 rounded-xl border border-slate-850">
                    <div>
                      <span className="text-slate-400 block">Product:</span>
                      <span className="font-semibold text-slate-200">
                        {material.label}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Dimensions:</span>
                      <span className="font-semibold text-slate-200">
                        {canvasSize.label}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Sides:</span>
                      <span className="font-semibold text-slate-200">
                        {doubleSided
                          ? "Double-sided Printing"
                          : "Single-sided Printing"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Quantity:</span>
                      <span className="font-semibold text-slate-200">
                        {quantity} units
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-850/80">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-green-400 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-green-500" /> Free
                      Artwork Check
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Our in-house design experts will automatically audit
                      alignment, color spacing, and image resolution before
                      printing.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-400">Total Price:</span>
                      <span className="font-bold text-[#ff2d78]">
                        ${calculatedPrice.total}
                      </span>
                    </div>
                    <button
                      onClick={() => setCheckoutStep("shipping")}
                      className="w-full bg-[#ff2d78] hover:opacity-90 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md"
                    >
                      Submit To Printing
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === "shipping" && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-slate-100 font-poppins">
                    Shipping & Design
                  </h2>

                  {/* Finished design upload (optional) */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Finished Design File (Optional)
                    </label>
                    <div
                      onClick={() => finishedDesignRef.current?.click()}
                      className="border border-dashed border-slate-700 hover:border-[#ff2d78] rounded-lg p-3 text-center cursor-pointer transition-colors group"
                    >
                      <input
                        ref={finishedDesignRef}
                        type="file"
                        accept=".pdf,.ai,.eps,.png,.jpg,.svg"
                        className="hidden"
                        onChange={(e) =>
                          setFinishedDesignFile(e.target.files?.[0] ?? null)
                        }
                      />
                      {finishedDesignFile ? (
                        <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                          <Check className="w-4 h-4 shrink-0" />
                          <span className="truncate">
                            {finishedDesignFile.name}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1">
                          <Upload className="w-5 h-5 text-slate-500 group-hover:text-[#ff2d78] transition-colors" />
                          <span className="text-[10px] text-slate-500 group-hover:text-slate-300">
                            Upload PDF / AI / EPS / PNG
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Leave blank if you used the canvas editor above.
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={shippingName}
                        onChange={(e) => setShippingName(e.target.value)}
                        className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#ff2d78]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">
                        Shipping Address *
                      </label>
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#ff2d78]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-400 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="Austin"
                          value={shippingCity}
                          onChange={(e) => setShippingCity(e.target.value)}
                          className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#ff2d78]"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          placeholder="78701"
                          value={shippingPostal}
                          onChange={(e) => setShippingPostal(e.target.value)}
                          className="w-full bg-slate-850 border border-slate-700 rounded-lg p-2 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#ff2d78]"
                        />
                      </div>
                    </div>
                  </div>

                  {submitError && (
                    <div className="bg-red-950/50 border border-red-800 rounded-lg p-3 text-xs text-red-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {!user && (
                    <div className="bg-amber-950/40 border border-amber-800 rounded-lg p-3 text-xs text-amber-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>
                        You must be <strong>signed in</strong> to place an
                        order. Please log in first.
                      </span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-800">
                    <button
                      onClick={handlePlaceOrder}
                      disabled={
                        isSubmitting ||
                        !user ||
                        !shippingName ||
                        !shippingAddress
                      }
                      className="w-full bg-[#ff2d78] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Placing
                          Order...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" /> Place Order & Send
                          Confirmation
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setCheckoutStep("review");
                        setSubmitError(null);
                      }}
                      disabled={isSubmitting}
                      className="w-full text-slate-450 hover:text-white text-xs font-semibold py-2 mt-1 transition-colors disabled:opacity-50"
                    >
                      ← Back to Review
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === "success" && (
                <div className="space-y-5 text-center py-4">
                  <div className="w-14 h-14 bg-green-950 border-2 border-green-500 text-green-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/10">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-100 font-poppins">
                      Order Confirmed! 🎉
                    </h2>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      Thank you for choosing Nano Signs! A confirmation email
                      has been sent to{" "}
                      <strong className="text-slate-200">{user?.email}</strong>.
                      Our artwork review team is auditing your design now.
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Order ID:</span>
                      <span className="font-mono text-green-400 font-bold">
                        #{confirmedShortId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Full ID:</span>
                      <span className="font-mono text-slate-500 text-[10px] truncate max-w-[130px]">
                        {confirmedOrderId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Expected Delivery:</span>
                      <span className="font-semibold text-[#ff2d78]">
                        Next Business Day
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Emails Sent:</span>
                      <span className="text-green-400 font-semibold flex items-center gap-1">
                        <Mail className="w-3 h-3" /> Admin + Customer
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-col">
                    <Link
                      href="/account/orders"
                      className="w-full bg-[#ff2d78] hover:opacity-90 text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      View My Orders
                    </Link>
                    <button
                      onClick={() => {
                        setIsCheckoutOpen(false);
                        setElements([]);
                        historyPush([]);
                        setShippingName("");
                        setShippingAddress("");
                        setShippingCity("");
                        setShippingPostal("");
                        setFinishedDesignFile(null);
                        setConfirmedOrderId(null);
                        setConfirmedShortId(null);
                        setCheckoutStep("review");
                      }}
                      className="w-full bg-slate-800 hover:bg-slate-750 text-white font-bold py-2.5 rounded-xl text-xs uppercase transition-all"
                    >
                      Start New Design
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DesignPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-slate-200">
          Loading designer...
        </div>
      }
    >
      <DesignPageContent />
    </React.Suspense>
  );
}
