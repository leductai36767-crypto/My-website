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
              className="bg-green-400 hover:bg-green-300 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition"
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

      {/* NỘI DUNG PHÍA DƯỚI */}

      {/* HẠ TẦNG */}
      <section id="hattang" className="bg-white text-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-yellow-500 font-semibold text-sm">
              HẠ TẦNG
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Hạ tầng cho những dự án của bạn
            </h2>

            <p className="mt-5 text-neutral-600 text-lg leading-8">
              Từ website, bot, API cho đến những ứng dụng cần máy chủ
              riêng. Aston Cloud hướng đến một trải nghiệm triển khai
              đơn giản và dễ quản lý.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 hover:shadow-xl transition">
              <div className="text-3xl">🌏</div>

              <h3 className="mt-5 text-xl font-bold">
                Nhiều khu vực
              </h3>

              <p className="mt-3 text-neutral-600 leading-7">
                Lựa chọn vị trí server phù hợp với người dùng và dự án
                của bạn.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 hover:shadow-xl transition">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Hiệu năng ổn định
              </h3>

              <p className="mt-3 text-neutral-600 leading-7">
                Tài nguyên rõ ràng, phù hợp với nhiều loại ứng dụng
                và workload.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 hover:shadow-xl transition">
              <div className="text-3xl">🖥️</div>

              <h3 className="mt-5 text-xl font-bold">
                Quản lý dễ dàng
              </h3>

              <p className="mt-3 text-neutral-600 leading-7">
                Theo dõi và quản lý server của bạn từ một nơi duy nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CẤU HÌNH */}
      <section id="nodes" className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-yellow-400 font-semibold text-sm">
              CẤU HÌNH
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Cấu hình linh hoạt
            </h2>

            <p className="mt-5 text-white/60 text-lg leading-8">
              Chọn lượng tài nguyên phù hợp với nhu cầu của bạn và
              nâng cấp khi dự án phát triển.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-white/50 text-sm">STARTER</p>

              <h3 className="mt-2 text-2xl font-bold">
                512 MB
              </h3>

              <div className="mt-7 space-y-4 text-white/60">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">1 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">512 MB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">10 GB</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/[0.06] p-7">
              <p className="text-yellow-400 text-sm">STANDARD</p>

              <h3 className="mt-2 text-2xl font-bold">
                2 GB
              </h3>

              <div className="mt-7 space-y-4 text-white/60">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">2 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">2 GB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">30 GB</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-white/50 text-sm">PERFORMANCE</p>

              <h3 className="mt-2 text-2xl font-bold">
                4 GB
              </h3>

              <div className="mt-7 space-y-4 text-white/60">
                <div className="flex justify-between">
                  <span>CPU</span>
                  <span className="text-white">4 vCPU</span>
                </div>

                <div className="flex justify-between">
                  <span>RAM</span>
                  <span className="text-white">4 GB</span>
                </div>

                <div className="flex justify-between">
                  <span>Storage</span>
                  <span className="text-white">60 GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-50 text-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-500 font-semibold text-sm">
                VỀ CHÚNG TÔI
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Aston Cloud được tạo ra để việc dùng server trở nên
                đơn giản hơn
              </h2>

              <p className="mt-6 text-neutral-600 text-lg leading-8">
                Không cần phải bắt đầu với một hệ thống phức tạp.
                Bạn có thể lựa chọn cấu hình phù hợp, triển khai server
                và quản lý tài nguyên của mình từ một nơi.
              </p>

              <p className="mt-4 text-neutral-600 text-lg leading-8">
                Khi dự án phát triển, bạn có thể nâng cấp tài nguyên
                để đáp ứng nhu cầu mới.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-neutral-50 p-6">
                  <div className="text-3xl font-bold">24/7</div>
                  <p className="mt-2 text-sm text-neutral-500">
                    Môi trường server
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-6">
                  <div className="text-3xl font-bold">API</div>
                  <p className="mt-2 text-sm text-neutral-500">
                    Tự động hóa
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-6">
                  <div className="text-3xl font-bold">Cloud</div>
                  <p className="mt-2 text-sm text-neutral-500">
                    Hạ tầng linh hoạt
                  </p>
                </div>

                <div className="rounded-2xl bg-neutral-50 p-6">
                  <div className="text-3xl font-bold">Easy</div>
                  <p className="mt-2 text-sm text-neutral-500">
                    Dễ quản lý
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BẢNG GIÁ */}
      <section
        id="prides"
        className="bg-white text-neutral-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-yellow-500 font-semibold text-sm">
              BẢNG GIÁ
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Chọn gói phù hợp với bạn
            </h2>

            <p className="mt-5 text-neutral-600 text-lg">
              Bắt đầu miễn phí và nâng cấp khi bạn cần thêm tài nguyên.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* FREE */}
            <div className="rounded-3xl border-2 border-green-200 bg-green-50/50 p-7">
              <span className="inline-flex rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-bold">
                FREE
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Free
              </h3>

              <p className="mt-3 text-neutral-500 text-sm">
                Dành cho người mới bắt đầu.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  0đ
                </span>

                <span className="text-neutral-500">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-neutral-600">
                <p>✓ 512 MB RAM</p>
                <p>✓ 1 vCPU</p>
                <p>✓ 10 GB Storage</p>
                <p>✓ 1 Server</p>
                <p>✓ Dashboard</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-green-600 hover:bg-green-500 text-white py-3 font-semibold transition"
              >
                Bắt đầu miễn phí
              </Link>
            </div>

            {/* BASIC */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold">
                Basic
              </h3>

              <p className="mt-3 text-neutral-500 text-sm">
                Cho bot, website và dự án nhỏ.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  49Kđ
                </span>

                <span className="text-neutral-500">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-neutral-600">
                <p>✓ 1 GB RAM</p>
                <p>✓ 1 vCPU</p>
                <p>✓ 20 GB Storage</p>
                <p>✓ 2 Servers</p>
                <p>✓ Dashboard</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 font-semibold transition"
              >
                Chọn Basic
              </Link>
            </div>

            {/* PRO */}
            <div className="relative rounded-3xl bg-neutral-900 text-white p-7 shadow-xl">
              <div className="absolute -top-3 left-6">
                <span className="rounded-full bg-yellow-400 text-neutral-900 px-4 py-1.5 text-xs font-bold">
                  PHỔ BIẾN
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                Pro
              </h3>

              <p className="mt-3 text-white/50 text-sm">
                Cho ứng dụng cần nhiều tài nguyên.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  99Kđ
                </span>

                <span className="text-white/50">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-white/65">
                <p>✓ 2 GB RAM</p>
                <p>✓ 2 vCPU</p>
                <p>✓ 40 GB Storage</p>
                <p>✓ 4 Servers</p>
                <p>✓ Dashboard + API</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-yellow-400 hover:bg-yellow-300 text-neutral-900 py-3 font-semibold transition"
              >
                Chọn Pro
              </Link>
            </div>

            {/* BUSINESS */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold">
                Business
              </h3>

              <p className="mt-3 text-neutral-500 text-sm">
                Cho dự án lớn và nhiều server.
              </p>

              <div className="mt-7">
                <span className="text-4xl font-extrabold">
                  199Kđ
                </span>

                <span className="text-neutral-500">
                  {" "}
                  / tháng
                </span>
              </div>

              <div className="mt-7 space-y-3 text-sm text-neutral-600">
                <p>✓ 4 GB RAM</p>
                <p>✓ 4 vCPU</p>
                <p>✓ 80 GB Storage</p>
                <p>✓ 8 Servers</p>
                <p>✓ Dashboard + API</p>
              </div>

              <Link
                href="/panel"
                className="mt-8 block text-center rounded-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 font-semibold transition"
              >
                Chọn Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-14 md:px-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Sẵn sàng tạo server?
            </h2>

            <p className="mt-5 text-white/60 text-lg">
              Bắt đầu với Aston Cloud ngay hôm nay.
            </p>

            <Link
              href="/panel"
              className="inline-flex mt-8 bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-semibold px-7 py-3 rounded-full transition"
            >
              Tạo server ngay →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg">
                <span>🌤️</span>
                <span>Aston Cloud</span>
              </div>

              <p className="mt-4 text-white/40 text-sm leading-6">
                Hosting & VPS đơn giản, linh hoạt cho mọi dự án.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Sản phẩm
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/50">
                <Link
                  href="/panel"
                  className="block hover:text-white transition"
                >
                  Dashboard
                </Link>

                <Link
                  href="#nodes"
                  className="block hover:text-white transition"
                >
                  Cấu hình
                </Link>

                <Link
                  href="#prides"
                  className="block hover:text-white transition"
                >
                  Bảng giá
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Aston Cloud
              </h3>

              <div className="mt-4 space-y-3 text-sm text-white/50">
                <Link
                  href="#about"
                  className="block hover:text-white transition"
                >
                  Về chúng tôi
                </Link>

                <Link
                  href="#hattang"
                  className="block hover:text-white transition"
                >
                  Hạ tầng
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                Bắt đầu
              </h3>

              <p className="mt-4 text-sm text-white/50 leading-6">
                Tạo server đầu tiên của bạn và bắt đầu triển khai
                dự án.
              </p>

              <Link
                href="/panel"
                className="inline-flex mt-5 bg-yellow-400 hover:bg-yellow-300 text-neutral-900 px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                Vào Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/30">
            © {new Date().getFullYear()} Aston Cloud. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
