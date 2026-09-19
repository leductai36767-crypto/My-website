"use client";

export default function GreenLandPage() {
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
              Trạm Green Land
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Một góc xanh
              <span className="mt-3 block bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                giữa The Green Alley.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
              Một không gian nhỏ dành cho những cuộc trò chuyện, những phút
              thư giãn và những hoạt động cộng đồng của The Green Alley.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-green-400"
              >
                Khám phá
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#activities"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/[0.07]"
              >
                Hoạt động
                <span className="text-green-400">✦</span>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-16 rounded-full bg-green-500/10 blur-[100px]" />

            <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-2xl">
              <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#12351f] via-[#0a2115] to-[#06110b]">
                {/* Moon */}
                <div className="absolute right-12 top-12 h-24 w-24 rounded-full bg-green-200/10 blur-[1px]" />
                <div className="absolute right-14 top-14 h-20 w-20 rounded-full border border-green-200/10 bg-green-100/[0.04]" />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-green-400/10 blur-[90px]" />

                {/* Grass / landscape */}
                <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#041009] to-transparent" />

                <div className="absolute bottom-0 left-[-40px] h-48 w-48 rounded-full bg-green-900/50 blur-2xl" />
                <div className="absolute bottom-[-40px] right-[-30px] h-56 w-56 rounded-full bg-emerald-900/40 blur-2xl" />

                {/* Simple CSS trees */}
                <div className="absolute bottom-16 left-10">
                  <div className="mx-auto h-24 w-2 bg-green-950" />
                  <div className="h-28 w-28 rounded-full bg-green-900/70" />
                </div>

                <div className="absolute bottom-14 right-12">
                  <div className="mx-auto h-20 w-2 bg-green-950" />
                  <div className="h-24 w-24 rounded-full bg-green-800/60" />
                </div>

                {/* Center card */}
                <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-green-300">
                        GREEN LAND
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        Điểm dừng chân
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-lg text-green-300">
                      +
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    Nơi mọi người có thể dừng lại, trò chuyện và tận hưởng
                    những khoảnh khắc nhẹ nhàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Về Green Land
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Không chỉ là một trạm.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Green Land được tạo ra như một khoảng không gian xanh trong hệ
            sinh thái The Green Alley — nơi thành viên có thể kết nối, trò
            chuyện và tham gia những hoạt động chung.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Kết nối",
              text: "Gặp gỡ những người mới và cùng nhau xây dựng một cộng đồng thân thiện.",
            },
            {
              number: "02",
              title: "Thư giãn",
              text: "Một góc nhỏ để trò chuyện, nghỉ ngơi và tận hưởng thời gian rảnh.",
            },
            {
              number: "03",
              title: "Cộng đồng",
              text: "Cùng đóng góp ý tưởng và tạo nên những hoạt động đáng nhớ.",
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

      {/* ACTIVITIES */}
      <section
        id="activities"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="overflow-hidden rounded-[38px] border border-green-400/10 bg-green-400/[0.035] p-8 backdrop-blur-xl sm:p-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Hoạt động
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Luôn có một lý do để ghé qua.
              </h2>

              <p className="mt-5 leading-7 text-white/50">
                Từ những cuộc trò chuyện đơn giản đến các hoạt động cộng đồng,
                Green Land là nơi để mọi người cùng tạo nên những khoảnh khắc
                đáng nhớ.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Trò chuyện", "Tán gẫu và làm quen với các thành viên."],
                ["02", "Giải trí & Game", "Cùng nhau chơi và tham gia hoạt động."],
                ["03", "Sự kiện", "Các hoạt động cộng đồng được tổ chức định kỳ."],
                ["04", "Không gian xanh", "Một góc nhỏ mang tinh thần Green Land."],
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

      {/* LOCATION / CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              The Green Alley
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Hẹn gặp bạn tại Green Land.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              Một điểm dừng chân nhỏ trong hành trình khám phá, giải trí và
              kết nối cùng cộng đồng The Green Alley.
            </p>

            <a
              href="/"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-green-300"
            >
              Về The Green Alley
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
            Trạm Green Land
          </div>

          <p>© {new Date().getFullYear()} The Green Alley</p>
        </div>
      </footer>
    </main>
  );
}
