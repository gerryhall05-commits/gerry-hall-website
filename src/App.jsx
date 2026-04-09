export default function LogisticsNEDWebsite() {
  const achievements = [
    {
      title: 'Scaled Contract Logistics Footprint',
      detail:
        'Expanded contract logistics operations from 150,000 sq ft to over 1 million sq ft over 8 years, sustaining growth through Brexit and COVID disruption.',
    },
    {
      title: 'Global Blue-Chip Leadership',
      detail:
        'Senior logistics leadership experience supporting Seiko Epson and Lenovo across complex international supply chains.',
    },
    {
      title: 'Recognised Cost Reduction Expertise',
      detail:
        'Recognised by Japanese and Chinese companies for multiple cost-reduction and efficiency initiatives in regulated logistics environments.',
    },
  ];

  const strengths = [
    'Non-Executive Director and advisory support',
    'Global logistics, warehousing, freight and contract logistics',
    'Operational scale-up and network expansion',
    'Cost and performance improvement',
    'Risk, compliance and regulated environments',
    'Board-level oversight grounded in execution and team development',
  ];

  const experience = [
    {
      company: 'Crane Worldwide Logistics',
      summary:
        'Led the growth of contract logistics from 5 to 22 warehouses, integrating warehouse expansion with broader logistics services and maintaining operational continuity through Brexit and COVID.',
    },
    {
      company: 'Seiko Epson (EMEA)',
      summary:
        'Worked within a disciplined Japanese operating environment, driving process improvement, efficiency and operational control.',
    },
    {
      company: 'Lenovo (EMEA)',
      summary:
        'Supported fast-paced, high-volume, multi-country logistics operations across a complex international supply chain network.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute right-[-5%] top-10 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Non-Executive Director | Logistics & Supply Chain
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Global logistics leadership built on personal relationships, empowered teams and execution.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Over my 35 years of experience, the logistics world has dramatically evolved — from week-long delivery cycles to same-day expectations, driven by technology, automation, and now AI and emerging innovations such as drones.
                <br /><br />
                Yet despite this transformation, the most critical component of any successful logistics operation remains unchanged: our people.
                <br /><br />
                My approach has always been to invest in, develop, and empower teams — because when people are trusted, trained, and supported, performance follows.
              </p>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Start a Conversation
              </a>
              <a
                href="#experience"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Experience
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Track Record</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <div className="text-3xl font-semibold">1M+</div>
                  <div className="mt-1 text-sm text-slate-300">Sq ft scaled from 150k sq ft</div>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <div className="text-3xl font-semibold">35+</div>
                  <div className="mt-1 text-sm text-slate-300">Years in senior logistics leadership</div>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <div className="text-3xl font-semibold">Global</div>
                  <div className="mt-1 text-sm text-slate-300">Multi-country freight and contract logistics</div>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-5">
                  <div className="text-3xl font-semibold">Board</div>
                  <div className="mt-1 text-sm text-slate-300">NED and advisory positioning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">What I Offer</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Board-level insight rooted in real operations and people-first leadership.</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              I support boards, investors and leadership teams where logistics capability is central to growth, resilience and commercial performance. My approach is grounded in the belief that strong logistics operations are built by strong people: trusted teams, clear leadership and an environment where individuals are empowered to take ownership.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Selected Experience</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A career built across global logistics and supply chain environments — with people at the centre.</h2>
        </div>

        <div className="mt-10 grid gap-6">
          {experience.map((role) => (
            <div key={role.company} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <h3 className="text-2xl font-semibold">{role.company}</h3>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                  Senior Leadership
                </span>
              </div>
              <p className="mt-4 max-w-4xl leading-8 text-slate-300">{role.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-r from-blue-950/60 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Network Growth</div>
              <div className="mt-3 text-4xl font-semibold">150k → 1M+ sq ft</div>
              <p className="mt-3 leading-7 text-slate-300">Scaled warehouse footprint over eight years while maintaining operational continuity and growth momentum.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Operational Context</div>
              <div className="mt-3 text-4xl font-semibold">Brexit + COVID</div>
              <p className="mt-3 leading-7 text-slate-300">Leadership experience through sustained disruption, regulatory change and service pressure, while keeping teams engaged, focused and committed through uncertainty.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Advisory Focus</div>
              <div className="mt-3 text-4xl font-semibold">Global</div>
              <p className="mt-3 leading-7 text-slate-300">Board-level guidance on logistics strategy, cost, performance, risk and execution capability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Open to a limited number of non-executive and advisory roles.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I remain open to a limited number of non-executive and advisory roles where experience, judgment and a people-first leadership style can add value. This website can be tailored further with your preferred tone, headshot, direct contact details, LinkedIn link and any additional board or consulting priorities.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
            <div className="space-y-5 text-slate-200">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Name</div>
                <div className="mt-2 text-lg">Gerry Hall</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</div>
                <div className="mt-2 text-lg">gerryhall05@gmail.com</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">LinkedIn</div>
                <div className="mt-2 text-lg">linkedin.com/in/gerardhall</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</div>
                <div className="mt-2 text-lg">Non-Executive Director | Global Logistics & Supply Chain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
