"use client";

export default function AstonCloudPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06110b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/[0.08] px-4 py-2 text-sm text-green-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,.8)]" />
              AstonCloud
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Hosting & VPS
              <span className="mt-3 block bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                đơn giản, mạnh mẽ.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
              Hạ tầng hosting được xây dựng dành cho website, ứng dụng,
              bot, game server và các dự án cá nhân. Triển khai nhanh,
              quản lý dễ dàng và sẵn sàng cho những ý tưởng mới.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-green-400"
              >
                Khám phá dịch vụ
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/[0.07]"
              >
                Tìm hiểu thêm
                <span className="text-green-400">✦</span>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-16 rounded-full bg-green-500/10 blur-[100px]" />

            <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-2xl">
              <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#12351f] via-[#0a2115] to-[#06110b]">
                {/* Server glow */}
                <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-green-400/10 blur-[90px]" />

                {/* Decorative server nodes */}
                <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,.8)]" />
                <div className="absolute right-16 top-24 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,.7)]" />

                {/* Server illustration */}
                <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2">
                  <div className="space-y-4">
                    {[1, 2, 3].map((server) => (
                      <div
                        key={server}
                        className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-xl backdrop-blur-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
                            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,.8)]" />
                          </div>

                          <div className="flex-1">
                            <div className="h-2 w-28 rounded-full bg-white/20" />
                            <div className="mt-2 h-1.5 w-20 rounded-full bg-white/10" />
                          </div>

                          <span className="text-xs text-green-400">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom card */}
                <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-green-300">
                        ASTONCLOUD
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        Hạ tầng của bạn.
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-lg text-green-300">
                      ↗
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    Hosting và VPS cho những dự án cần một nơi ổn định để
                    chạy, phát triển và mở rộng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Dịch vụ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Chọn hạ tầng phù hợp.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Từ một website nhỏ đến server cần nhiều tài nguyên hơn,
            AstonCloud hướng tới việc cung cấp những lựa chọn đơn giản
            và dễ sử dụng.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Web Hosting",
              text: "Không gian lưu trữ cho website, API, landing page và các dự án web.",
            },
            {
              number: "02",
              title: "VPS",
              text: "Máy chủ riêng ảo cho ứng dụng, bot, backend và những workload cần quyền kiểm soát cao hơn.",
            },
            {
              number: "03",
              title: "Game Hosting",
              text: "Hạ tầng dành cho game server và các dự án cần môi trường chạy liên tục.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.055]"
            >
              <span className="text-sm font-medium text-green-400">
                {item.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                {item.text}
              </p>

              <div className="mt-7 h-px w-10 bg-green-400/40 transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="overflow-hidden rounded-[38px] border border-green-400/10 bg-green-400/[0.035] p-8 backdrop-blur-xl sm:p-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Tính năng
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Mọi thứ cần thiết để vận hành dự án.
              </h2>

              <p className="mt-5 leading-7 text-white/50">
                Tập trung vào dự án của bạn thay vì phải loay hoay với
                hạ tầng. AstonCloud hướng tới trải nghiệm quản lý đơn giản,
                rõ ràng và dễ tiếp cận.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Triển khai nhanh",
                  "Đưa dự án lên server và bắt đầu sử dụng nhanh chóng.",
                ],
                [
                  "02",
                  "Quản lý dễ dàng",
                  "Giao diện quản lý trực quan cho các dịch vụ của bạn.",
                ],
                [
                  "03",
                  "Nhiều môi trường",
                  "Hỗ trợ nhiều loại ứng dụng và workload khác nhau.",
                ],
                [
                  "04",
                  "Sẵn sàng mở rộng",
                  "Có thể nâng cấp tài nguyên khi dự án phát triển.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-green-400/20 hover:bg-black/30"
                >
                  <span className="text-xs text-green-400">{number}</span>

                  <h3 className="mt-4 font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Hạ tầng
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Chạy những gì bạn cần.
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              Từ Node.js, Python, PHP đến Docker và các ứng dụng backend,
              lựa chọn môi trường phù hợp với dự án của bạn.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Node.js", "Python", "PHP", "Docker", "MySQL", "PostgreSQL"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/60"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Kiểm soát
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Server của bạn, cách của bạn.
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              Chủ động cấu hình, triển khai và quản lý ứng dụng theo nhu cầu
              thay vì bị giới hạn trong một mô hình duy nhất.
            </p>

            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-green-400/10 bg-green-400/[0.04] p-4">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,.8)]" />
              <span className="text-sm text-white/60">
                Infrastructure ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              AstonCloud
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Sẵn sàng đưa dự án của bạn lên server?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              Bắt đầu với một môi trường phù hợp và xây dựng dự án của bạn
              trên hạ tầng AstonCloud.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-green-300"
            >
              Xem dịch vụ
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Aston Cloud
          </div>

          <p>© {new Date().getFullYear()} AstonCloud</p>
        </div>
      </footer>
    </main>
  );
}
