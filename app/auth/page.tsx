"use client";

import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  async function handleGoogleLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f78f19" }}
    >
      <div className="w-full max-w-sm mx-4 flex flex-col items-center gap-8">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: "#ffffff" }}
          >
            idea
          </h1>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            계속하려면 로그인하세요
          </p>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium transition-opacity duration-200 cursor-pointer hover:opacity-85 active:opacity-70"
          style={{
            backgroundColor: "rgba(255,255,255,0.18)",
            color: "#ffffff",
            border: "none",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
              fill="#EA4335"
            />
          </svg>
          Google로 계속하기
        </button>

        {/* Footer note */}
        <p
          className="text-xs text-center leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          로그인함으로써{" "}
          <span
            className="underline underline-offset-2 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            이용약관
          </span>
          {" "}및{" "}
          <span
            className="underline underline-offset-2 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            개인정보처리방침
          </span>
          에 동의합니다
        </p>
      </div>
    </div>
  );
}
