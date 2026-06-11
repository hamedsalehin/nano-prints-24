"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import {
  UploadCloud,
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  Phone,
  Mail,
  User,
  Scale,
  Hash
} from "lucide-react";

export default function GetQuotePage() {
  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState(1);

  // File upload states
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileUploading, setFileUploading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  // Submission states
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Smooth scroll helper
  const scrollToForm = () => {
    const el = document.getElementById("quote-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle local file selection and Supabase storage upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Validate size (max 25MB)
    if (selectedFile.size > 25 * 1024 * 1024) {
      setFileError("File size exceeds 25MB limit.");
      return;
    }

    setFile(selectedFile);
    setFileError(null);
    setFileUploading(true);

    try {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `quotes/${fileName}`;

      // Upload file to Supabase storage bucket 'quote-attachments'
      const { error: uploadError } = await supabase.storage
        .from("quote-attachments")
        .upload(filePath, selectedFile);

      if (uploadError) {
        throw uploadError;
      }

      // Retrieve public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("quote-attachments").getPublicUrl(filePath);

      setFileUrl(publicUrl);
    } catch (err) {
      console.error("Storage upload failed:", err);
      setFileError(
        err instanceof Error
          ? err.message
          : "Failed to upload file. Please try again."
      );
      setFile(null);
    } finally {
      setFileUploading(false);
    }
  };

  // Handle db submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !description) {
      setSubmitError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const { error: dbError } = await supabase
        .from("quote_requests")
        .insert({
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          description: description.trim(),
          width: width ? width.trim() : null,
          height: height ? height.trim() : null,
          quantity: Number(quantity) || 1,
          file_url: fileUrl,
        });

      if (dbError) {
        throw dbError;
      }

      setSubmitSuccess(true);
    } catch (err) {
      console.error("Database insert failed:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center gap-2 text-sm text-gray-500 font-['Open_Sans']">
            <Link href="/" className="hover:text-[#ff2d78] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">Get a Quote</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-12 py-6">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[21/9] w-full min-h-[300px]">
            <img
              className="w-full h-full object-cover object-center pointer-events-none"
              src="/images/products/main%20page/magnet_hero_image.png"
              alt="Custom Quote Banner"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Banner Text Overlay */}
            <div className="absolute top-1/4 left-6 lg:left-16 text-white font-poppins pr-6 z-10">
              <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-[#00e5ff] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> WE PRINT EVERYTHING
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight drop-shadow-md">
                Get a Custom Quote
              </h1>
              <p className="text-sm md:text-lg opacity-90 max-w-xl font-medium leading-relaxed drop-shadow">
                Can't find the product you're looking for? No worries! Specify your project dimensions, upload your design, and we will email your pricing back within 12 hours.
              </p>
            </div>

            {/* Bottom-left Rectangle Button */}
            <button
              onClick={scrollToForm}
              className="absolute bottom-6 left-6 lg:bottom-10 lg:left-16 z-10 px-8 py-4 bg-white text-gray-900 border-2 border-white font-black text-xs md:text-sm uppercase tracking-wider rounded-none shadow-2xl transition-all duration-300 hover:bg-[#ff2d78] hover:text-white hover:border-[#ff2d78] active:scale-95"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              Request Quote Now
            </button>
          </div>
        </section>

        {/* Form and info section */}
        <section
          id="quote-form-section"
          className="py-12 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-6"
        >
          {!submitSuccess ? (
            <div className="bg-white rounded-2xl border border-gray-150 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
              {/* Left Column Information */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#0d0714] via-[#050b16] to-[#040404] p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] rounded-full bg-[#ff2d78]/6 blur-[80px]" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] rounded-full bg-[#00e5ff]/5 blur-[80px]" />

                <div className="relative space-y-6">
                  <h3 className="text-2xl font-extrabold font-poppins pink-cyan-text">
                    Quotes in under 12 hours
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    No matter how unique your project is, we have the print hardware, materials, and support to bring it to life.
                  </p>

                  <div className="space-y-4 pt-4 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800/60 flex items-center justify-center border border-slate-700/30">
                        <Sparkles className="w-4 h-4 text-[#ff2d78]" />
                      </div>
                      <span>Custom Dimensions & Shapes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800/60 flex items-center justify-center border border-slate-700/30">
                        <Mail className="w-4 h-4 text-[#b020ff]" />
                      </div>
                      <span>Direct Email Follow-ups</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800/60 flex items-center justify-center border border-slate-700/30">
                        <Phone className="w-4 h-4 text-[#00e5ff]" />
                      </div>
                      <span>Startup Bulk Discounts</span>
                    </div>
                  </div>
                </div>

                <div className="relative pt-12 border-t border-slate-800/80 mt-8 space-y-3 text-xs text-slate-400 font-medium">
                  <p>Have files ready to print? Attach them to the form. We accept formats up to 25MB.</p>
                  <p>Need urgent assistance? Call us at 305-967-1005.</p>
                </div>
              </div>

              {/* Right Column Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-6 bg-slate-50/50">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold font-poppins text-gray-900">
                    Describe Your Print Job
                  </h2>
                  <p className="text-xs text-gray-500 font-semibold font-opensans uppercase tracking-wider">
                    Fields marked with * are required
                  </p>
                </div>

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 text-xs md:text-sm text-red-800 font-semibold">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                      <User className="w-4 h-4 text-gray-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                      <Mail className="w-4 h-4 text-gray-400" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                      <Phone className="w-4 h-4 text-gray-400" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="305-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                      <Hash className="w-4 h-4 text-gray-400" /> Quantity *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Dimensions (Size) */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <Scale className="w-4 h-4 text-gray-400" /> Dimensions (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Width (e.g. 24 inches)"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                    <input
                      type="text"
                      placeholder="Height (e.g. 36 inches)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    <FileText className="w-4 h-4 text-gray-400" /> What do you need printed? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your banner, decal, sign or unique material requests. Include material type (matte, gloss, mesh, etc.) or edge finishing if known."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#ff2d78] focus:ring-1 focus:ring-[#ff2d78] transition-all font-semibold resize-y"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Attach Artwork or Sketch</label>
                  {fileError && (
                    <p className="text-xs text-red-600 font-semibold">{fileError}</p>
                  )}

                  {!fileUrl ? (
                    <div className="relative group border-2 border-dashed border-gray-200 hover:border-[#ff2d78] rounded-xl p-6 text-center bg-white transition-colors cursor-pointer flex flex-col items-center justify-center gap-2">
                      <input
                        type="file"
                        accept="application/pdf,image/png,image/jpeg,image/jpg"
                        onChange={handleFileChange}
                        disabled={fileUploading}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      {fileUploading ? (
                        <>
                          <Loader2 className="w-8 h-8 text-[#ff2d78] animate-spin" />
                          <p className="text-sm text-gray-600 font-semibold">Uploading artwork to database...</p>
                        </>
                      ) : (
                        <>
                          <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#ff2d78] transition-colors" />
                          <p className="text-sm text-gray-600 font-bold">
                            Drag &amp; drop or <span className="text-[#ff2d78] underline">browse file</span>
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium">Accepts PDF, PNG, JPG up to 25MB</p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm font-bold text-green-900 truncate max-w-[220px]">
                            {file?.name}
                          </p>
                          <p className="text-[10px] text-green-600">File uploaded successfully</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFile(null);
                          setFileUrl(null);
                        }}
                        className="text-xs text-red-500 hover:text-red-700 underline font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting || fileUploading}
                  className="w-full active:scale-[0.99] text-white font-black py-4 rounded-xl transition-all text-sm uppercase tracking-wider brand-gradient shadow-lg flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                  style={{
                    boxShadow: "0 6px 20px rgba(255,45,120,0.25)",
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* SUCCESS CONFIRMATION BLOCK */
            <div className="bg-white rounded-2xl border border-gray-150 shadow-xl p-10 max-w-2xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-green-50 text-green-500 border border-green-200 rounded-full flex items-center justify-center shadow-lg shadow-green-100/50 shrink-0 mx-auto">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black font-poppins text-gray-900 leading-tight">
                  Request Received!
                </h3>
                <p className="text-[#00e5ff] font-extrabold uppercase tracking-wider text-sm">
                  We will get back to you shortly
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3 text-sm text-gray-600 text-left font-opensans">
                <p className="leading-relaxed">
                  Thank you, <span className="font-extrabold text-gray-900">{fullName}</span>. Your custom quote request has been saved in our system.
                </p>
                <p className="leading-relaxed">
                  Our formatting and layout specialists will review your dimensions ({width || "custom"} x {height || "custom"}) and details. We will email you back a detailed print proof and pricing breakdown at <span className="font-bold text-gray-900">{email}</span> within <span className="font-bold text-[#ff2d78]">12 hours</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                <Link
                  href="/"
                  className="px-6 py-3 bg-[#1e1e24] hover:bg-[#2a2a32] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center"
                >
                  Back to Homepage
                </Link>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setDescription("");
                    setWidth("");
                    setHeight("");
                    setQuantity(1);
                    setFile(null);
                    setFileUrl(null);
                  }}
                  className="px-6 py-3 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Submit Another Quote
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
