"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // đổi màu khi kéo xuống hơn 20px
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-neutral-800/95 backdrop-blur shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span>🌤️</span>
            <span>Aston Cloud</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <Link href="/panel">Dashboard</Link>
            <Link href="#hattang">Hạ Tầng</Link>
            <Link href="#nodes">Cấu Hình</Link>
            <Link href="#about">Về Chúng Tôi</Link>
            <Link href="#prides">Bảng giá</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/panel"
              className="hidden sm:inline text-white/90 text-sm font-medium"
            >
              Đăng nhập
            </Link>
            <Link
              href="panel"
              className="bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-semibold text-sm px-5 py-2.5 rounded-full transition"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[640px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')", // thay bằng ảnh của bạn
        }}
      >
        {/* lớp phủ tối để chữ dễ đọc */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Thử tạo một
              <br />
              <span className="text-yellow-400">Hosting & VPS dễ dàng!</span>
            </h1>

            <p className="mt-6 text-white/90 text-lg">
              Server đặt ở Việt Nam và ở nước ngoài , tốc đọ trải nghiệm tối đa!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/panel"
                className="bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-semibold px-6 py-3 rounded-full transition inline-flex items-center gap-2"
              >
                Tạo server ngay →
              </Link>
              <Link
                href="#nodes"
                className="bg-neutral-800/80 hover:bg-neutral-800 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Xem toàn bộ cấu hình
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nội dung phía dưới để test hiệu ứng scroll */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-neutral-600">Nội dung tiếp theo của trang...</p>
      </section>
    </main>
  );
}
