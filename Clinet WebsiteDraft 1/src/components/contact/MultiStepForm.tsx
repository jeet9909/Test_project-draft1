"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Max 1000 characters"),
});

type FormData = z.infer<typeof schema>;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 dark:text-red-400 text-xs mt-1">{msg}</p>;
}

const labelClass = "block text-sm font-medium text-gray-700 dark:text-[#CBD5E0] mb-1.5";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Enquiry submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-display font-bold text-2xl text-[#0A4F5C] dark:text-white mb-2">
          Message Received!
        </h3>
        <p className="text-gray-500 dark:text-[#94A3B8]">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          {...register("name")}
          className="form-input"
          placeholder="Dr. Jane Smith"
        />
        <FieldError msg={errors.name?.message} />
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input
          {...register("email")}
          type="email"
          className="form-input"
          placeholder="you@example.com"
        />
        <FieldError msg={errors.email?.message} />
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          maxLength={1000}
          className="form-input resize-none"
          placeholder="Tell us about your compound, screening goals, or any questions..."
        />
        <FieldError msg={errors.message?.message} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>
    </form>
  );
}
