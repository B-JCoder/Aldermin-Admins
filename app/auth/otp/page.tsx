"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPVerificationPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load email from localStorage (forgot-password flow)
    try {
      const storedEmail = localStorage.getItem("forgotEmail");
      if (storedEmail) setEmail(storedEmail);
    } catch (e) {}
  }, []);

  const handleVerify = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!otp) {
      setError("OTP is required");
      return;
    }
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    if (!email) {
      setError("Email not found. Please use Forgot Password again.");
      return;
    }

    setLoading(true);

    // Simulate OTP verification (as backend not available)
    setTimeout(() => {
      setMessage("OTP accepted");
      setLoading(false);
      setTimeout(() => {
        router.push("/auth/reset-password"); // redirect to reset password
      }, 800);
    }, 500);
  };

  const handleResend = async () => {
    if (!email) {
      setError("Email not found. Please try Forgot Password again.");
      return;
    }

    setResending(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        "https://api.aldermin.online/Admin/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unable to resend OTP");
      }

      setMessage(data.message || "OTP resent successfully");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/assets/images/aldermin-logo.png"
            alt="Aldermin"
            className="mx-auto h-16 mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">OTP Verification</h1>
          <p className="text-sm text-gray-500 mt-2">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-4 bg-red-50 text-red-600 text-sm text-center py-3 rounded-lg">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 bg-green-50 text-green-600 text-sm text-center py-3 rounded-lg">
            {message}
          </div>
        )}

        {/* OTP Form */}
        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="sr-only">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="______"
              maxLength={6}
              inputMode="numeric"
              autoComplete="one-time-code"
              className="w-full text-center text-2xl tracking-widest font-semibold h-14 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Resend OTP */}
        <div className="mt-4 text-center text-sm">
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-blue-600 hover:underline disabled:opacity-70"
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        </div>

      </div>
    </div>
  );
}
