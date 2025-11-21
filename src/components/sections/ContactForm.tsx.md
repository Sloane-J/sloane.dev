"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, PhoneCall } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#2a2a2a] text-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Let's Connect</h2>
      <p className="text-lg text-center">Book a call or send us a message.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-white focus:outline-none text-lg"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-white focus:outline-none text-lg"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-white focus:outline-none text-lg resize-none"
          rows={4}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <motion.button
          type="submit"
          disabled={status === "submitting"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-lg transition-all shadow-md bg-white text-[#121212] hover:bg-gray-200"
        >
          {status === "submitting" ? "Sending..." : status === "success" ? <><CheckCircle className="w-5 h-5" /> Sent Successfully</> : status === "error" ? <><XCircle className="w-5 h-5" /> Error Sending</> : <><Send className="w-5 h-5" /> Send Message</>}
        </motion.button>
      </form>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-lg transition-all shadow-md bg-blue-500 hover:bg-blue-600 text-white"
      >
        <PhoneCall className="w-6 h-6" /> Book a Call
      </motion.button>
    </div>
  );
}
