const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf-16C43KUvJsDxaNZKhms_l1mnvj03J4Dno1mraJ0DBWkMMg/viewform"

function CTAButton({ children = "Solicitar diagnóstico" }) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl bg-blue-500 px-7 py-4 text-sm font-semibold text-black shadow-2xl shadow-blue-500/20 transition hover:bg-blue-400 active:scale-[0.98]"
    >
      {children}
    </a>
  )
}

export default function PremiumAgencyLanding() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_36%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_22%)]" />

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <p className="text-lg font-semibold tracking-tight sm:text-2xl">LucasTP</p>
            <p className="hidden text-xs text-zinc-500 sm:block">Performance & Growth</p>
          </div>

          <nav className="hidden items-center gap-10 text-sm text-zinc-300 lg:flex">
            <a href="#services" className="transition hover:text-white">Serviços</a>
            <a href="#results" className="transition hover:text-white">Resultados</a>
            <a href="#process" className="transition hover:text-white">Processo</a>
            <a href="#contact" className="transition hover:text-white">Contato</a>
          </nav>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-105 sm:px-5 sm:text-sm"
          >
            Diagnóstico
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:gap-20 lg:pb-24 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur-md sm:mb-8 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Aquisição digital para empresas locais e marcas em crescimento
            </div>

            <h1 className="mb-6 max-w-4xl text-[2.75rem] font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Transforme anúncios em clientes todos os meses.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:mb-10 sm:text-lg">
              Estratégia, tráfego pago e posicionamento para empresas que querem parar de depender de indicação e criar uma máquina previsível de oportunidades.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row">
              <CTAButton>Quero meu diagnóstico gratuito</CTAButton>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:max-w-lg sm:gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:border-0 sm:bg-transparent sm:p-0">
                <h3 className="mb-1 text-2xl font-semibold sm:text-3xl">R$250k+</h3>
                <p className="text-xs leading-tight text-zinc-500 sm:text-sm">Investidos em mídia</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:border-0 sm:bg-transparent sm:p-0">
                <h3 className="mb-1 text-2xl font-semibold sm:text-3xl">1200+</h3>
                <p className="text-xs leading-tight text-zinc-500 sm:text-sm">Leads gerados</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:border-0 sm:bg-transparent sm:p-0">
                <h3 className="mb-1 text-2xl font-semibold sm:text-3xl">3x</h3>
                <p className="text-xs leading-tight text-zinc-500 sm:text-sm">Mais procura</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl sm:rounded-[32px] sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-4 sm:mb-10">
                <div>
                  <p className="mb-2 text-xs text-zinc-400 sm:text-sm">Painel de crescimento</p>
                  <h3 className="text-xl font-semibold sm:text-2xl">Aquisição previsível</h3>
                </div>

                <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs text-green-400 sm:px-4 sm:text-sm">
                  +247%
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Metric label="Oportunidades geradas" value="+1.248" width="82%" />
                <Metric label="Custo por lead" value="-42%" width="68%" light />

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-white/5 bg-black/30 p-4 sm:p-5">
                    <p className="mb-2 text-xs text-zinc-400 sm:text-sm">Campanhas</p>
                    <h4 className="text-2xl font-semibold">Ativas</h4>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-black/30 p-4 sm:p-5">
                    <p className="mb-2 text-xs text-zinc-400 sm:text-sm">Meta</p>
                    <h4 className="text-2xl font-semibold">Escala</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">
            <p className="mb-8 text-center text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
              Para negócios que querem vender com mais previsibilidade
            </p>

            <div className="grid grid-cols-2 gap-3 text-center text-sm font-medium text-zinc-500 sm:grid-cols-5 sm:gap-8 sm:text-lg">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent">Clínicas</div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent">Lojas</div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent">Serviços</div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent">Experts</div>
              <div className="col-span-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:col-span-1 sm:border-0 sm:bg-transparent">Negócios locais</div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="mb-12 max-w-3xl sm:mb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">Serviços</p>
            <h2 className="mb-6 text-4xl font-semibold leading-tight sm:text-6xl">
              Não é só tráfego. É uma estrutura de crescimento.
            </h2>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              Criamos uma operação simples, clara e focada no que importa: atrair pessoas certas, gerar conversas qualificadas e transformar atenção em venda.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 sm:gap-6">
            <ServiceCard title="Estratégia de aquisição" desc="Definição da oferta, público, canais e mensagens para atrair clientes com intenção real de compra." />
            <ServiceCard title="Campanhas de performance" desc="Criação, gestão e otimização de anúncios para Meta Ads e outras fontes de tráfego." />
            <ServiceCard title="Autoridade digital" desc="Ajustes de posicionamento para sua marca parecer mais confiável, profissional e desejada." />
          </div>
        </section>

        <section id="results" className="border-y border-white/5 bg-white/[0.02] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 max-w-3xl sm:mb-20">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">Resultados</p>
              <h2 className="mb-6 text-4xl font-semibold leading-tight sm:text-6xl">
                A página, o anúncio e a mensagem trabalhando juntos.
              </h2>
              <p className="text-zinc-400">O objetivo é simples: fazer mais pessoas certas chegarem até você prontas para conversar.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 sm:gap-8">
              <CaseCard title="Negócio Local" growth="+312%" leads="+2.430" cac="-38%" roas="6.2x" />
              <CaseCard title="Prestador de Serviço" growth="+184%" leads="+980" cac="-31%" roas="4.8x" />
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">Processo</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Clareza antes de investimento.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 sm:gap-6">
            <Step number="01" title="Diagnóstico" desc="Entendemos seu negócio, oferta, público e gargalos atuais." />
            <Step number="02" title="Estrutura" desc="Montamos a estratégia, criativos, páginas e campanhas." />
            <Step number="03" title="Escala" desc="Otimizamos com base em dados para aumentar volume e reduzir desperdício." />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-32">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-center sm:rounded-[40px] sm:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_42%)]" />

            <div className="relative z-10">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-blue-400 sm:text-sm">Diagnóstico gratuito</p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight sm:text-6xl">
                Descubra onde sua empresa está perdendo clientes.
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                Preencha o formulário e receba uma análise inicial para entender como melhorar sua aquisição, posicionamento e vendas pelo digital.
              </p>

              <CTAButton>Preencher formulário agora</CTAButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Metric({ label, value, width, light }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/30 p-4 sm:p-5">
      <div className="mb-3 flex justify-between gap-4">
        <p className="text-xs text-zinc-400 sm:text-sm">{label}</p>
        <p className="text-sm font-medium sm:text-base">{value}</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div className={`${light ? "bg-white" : "bg-blue-500"} h-full rounded-full`} style={{ width }} />
      </div>
    </div>
  )
}

function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 sm:rounded-[28px] sm:p-8">
      <div className="mb-6 h-12 w-12 rounded-2xl border border-blue-500/20 bg-blue-500/10 sm:mb-8 sm:h-14 sm:w-14" />
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-zinc-400">{desc}</p>
    </div>
  )
}

function CaseCard({ title, growth, leads, cac, roas }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 sm:rounded-[32px] sm:p-10">
      <div className="mb-10 flex items-start justify-between gap-4 sm:mb-12">
        <div>
          <p className="mb-2 text-xs text-zinc-500 sm:text-sm">CASE STUDY</p>
          <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500 sm:text-sm">Crescimento</p>
          <h4 className="text-3xl font-semibold text-blue-400 sm:text-4xl">{growth}</h4>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <Row label="Leads Gerados" value={leads} />
        <Row label="Redução de CAC" value={cac} />
        <Row label="ROAS Médio" value={roas} noBorder />
      </div>
    </div>
  )
}

function Row({ label, value, noBorder }) {
  return (
    <div className={`flex justify-between gap-4 pb-4 ${noBorder ? "pb-0" : "border-b border-white/5"}`}>
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function Step({ number, title, desc }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="mb-8 text-sm font-semibold text-blue-400">{number}</p>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="leading-relaxed text-zinc-400">{desc}</p>
    </div>
  )
}
