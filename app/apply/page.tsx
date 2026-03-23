"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Failed to submit application");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white py-16 px-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-lg border border-neutral-200">

        <h1 className="text-3xl font-bold mb-8 text-[#111]">
          Apply to Join Our Network
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* FULL NAME */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Full Name</label>
            <input
              name="name"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="John Doe"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="john@example.com"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Phone Number</label>
            <input
              name="phone"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="(555) 123‑4567"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Current Location</label>
            <input
              name="location"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="City, State"
            />
          </div>

          {/* OPEN TO RELOCATE */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Open to Relocate</label>
            <select
              name="relocate"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes, open to relocate</option>
              <option value="No">No, prefer remote/local only</option>
            </select>
          </div>

          {/* EXPECTED PAY */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Expected Pay (per hour)</label>
            <input
              name="expectedPay"
              required
              className="w-full border border-neutral-300 p-3 rounded-lg bg-white text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="$45/hr"
            />
          </div>

          {/* RESUME UPLOAD */}
          <div>
            <label className="block mb-1 font-semibold text-[#222]">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full text-sm text-[#111]"
            />
            <p className="text-xs text-[#777] mt-1">
              Accepted: .pdf, .doc, .docx — max 5MB
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {/* SUCCESS / ERROR */}
          {success && (
            <p className="text-green-600 font-medium text-center">
              Application submitted successfully!
            </p>
          )}

          {error && (
            <p className="text-red-600 font-medium text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}