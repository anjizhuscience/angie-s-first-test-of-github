import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BookOpen, ChevronRight, Download, Mail, Menu, X } from 'lucide-react'

const publications = [
  {
    year: '2024',
    type: 'Journal article',
    title: 'Listening as method: civic attention in the age of ambient media',
    journal: 'Journal of Cultural Inquiry, 18(2)',
  },
  {
    year: '2023',
    type: 'Book chapter',
    title: 'The public life of small archives',
    journal: 'In Making Memory Public · University Press',
  },
  {
    year: '2022',
    type: 'Journal article',
    title: 'Care, maintenance, and the material politics of digital culture',
    journal: 'New Media & Society, 24(11)',
  },
]

const teaching = [
  ['CULT 304', 'Cultures of Attention', 'Seminar · Autumn 2024'],
  ['CULT 221', 'Media, Memory & the Archive', 'Lecture · Spring 2024'],
  ['CULT 101', 'Introduction to Cultural Analysis', 'Lecture · Autumn 2023'],
]

function App() {
  const [open, setOpen] = useState(false)
  const nav = ['About', 'Research', 'Publications', 'Teaching']

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f7f3] text-[#1c2b35] selection:bg-[#dce7df]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1c2b35]/10 bg-[#f8f7f3]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <button onClick={() => scrollTo('home')} className="font-serif text-xl tracking-tight">EP<span className="text-[#718c7d]">.</span></button>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => <button key={item} onClick={() => scrollTo(item)} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1c2b35]/65 transition hover:text-[#1c2b35]">{item}</button>)}
          </nav>
          <a href="mailto:hello@anjizhu.com" className="hidden items-center gap-2 rounded-full bg-[#1c2b35] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#385060] md:flex">Get in touch <ArrowUpRight size={14} /></a>
          <button className="md:hidden" aria-label="Open navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {open && <div className="border-t border-[#1c2b35]/10 bg-[#f8f7f3] px-6 py-5 md:hidden">{nav.map((item) => <button key={item} onClick={() => scrollTo(item)} className="block w-full py-3 text-left text-sm font-medium">{item}</button>)}</div>}
      </header>

      <main id="home">
        <section className="relative mx-auto grid min-h-[760px] max-w-7xl items-end gap-10 px-6 pb-16 pt-32 lg:grid-cols-12 lg:px-10 lg:pb-24">
          <div className="relative z-10 lg:col-span-8 lg:pb-5">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.19em] text-[#718c7d]"><span className="h-px w-9 bg-[#718c7d]" /> PhD researcher · health educator · innovator</p>
            <h1 className="max-w-4xl font-serif text-[clamp(3.7rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.055em]">Health education,<br /><em className="font-normal text-[#718c7d]">reimagined.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1c2b35]/72">I’m Anji Zhu, a Health Services Research PhD student in Pharmacy, exploring how AI can empower patients and clinicians to learn with confidence.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => scrollTo('research')} className="flex items-center gap-3 rounded-full bg-[#1c2b35] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#385060]">Explore my work <ArrowDownRight size={16} /></button>
              <a href="#publications" className="flex items-center gap-2 rounded-full border border-[#1c2b35]/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-[#1c2b35]">Selected writing <BookOpen size={15} /></a>
            </div>
          </div>
          <figure className="relative h-80 overflow-hidden bg-[#dce7df] lg:col-span-4 lg:h-[490px]">
            <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg/1280px-Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg" alt="Wheatfield with Crows by Vincent van Gogh" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-[#1c2b35]/75 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Wheatfield with Crows · Vincent van Gogh, 1890</figcaption>
          </figure>
          <p className="absolute right-5 top-[51%] hidden origin-right rotate-90 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1c2b35]/35 xl:block">Est. 2013</p>
        </section>

        <section id="about" className="border-y border-[#1c2b35]/10 bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-3"><p className="section-label">01 / About</p></div>
            <div className="lg:col-span-8">
              <p className="font-serif text-3xl leading-[1.16] tracking-[-0.03em] sm:text-4xl lg:text-5xl">I use research and technology to make <span className="text-[#718c7d]">health knowledge</span> more useful, accessible, and human.</p>
              <div className="mt-12 grid gap-8 border-t border-[#1c2b35]/12 pt-7 sm:grid-cols-2">
                <p className="leading-relaxed text-[#1c2b35]/70">I’m Anji Zhu, a PhD student in Health Services Research in Pharmacy with BSN and MPH degrees. My work brings together health education, community engagement, and thoughtful technology design.</p>
                <div><p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#718c7d]">My focus</p><p className="leading-relaxed text-[#1c2b35]/70">I previously helped design health-literacy outreach for children in remote mountain communities and created educational comics on myopia prevention. Today, I use AI to empower health education for patients and clinicians.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="section-label">02 / Research</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.04em]">Areas of inquiry</h2></div><a href="mailto:hello@anjizhu.com" className="link-arrow">Discuss a collaboration <ArrowUpRight size={16} /></a></div>
          <div className="grid border-l border-t border-[#1c2b35]/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Media & public culture', 'How media infrastructures quietly organize what feels possible in public life.'],
              ['02', 'Memory & archives', 'The social lives of records, artifacts, and the stories we choose to keep.'],
              ['03', 'Ethics of attention', 'What it means to attend—generously, critically, and together.'],
              ['04', 'Digital maintenance', 'Care work, repair, and the overlooked labor behind our technologies.'],
            ].map(([num, title, copy]) => <article key={num} className="group min-h-64 border-b border-r border-[#1c2b35]/15 bg-[#f8f7f3] p-7 transition hover:bg-[#dce7df]"><span className="text-xs font-bold text-[#718c7d]">{num}</span><h3 className="mt-12 font-serif text-2xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[#1c2b35]/65">{copy}</p><ArrowUpRight className="mt-6 opacity-0 transition group-hover:opacity-100" size={18} /></article>)}
          </div>
        </section>

        <section id="publications" className="bg-[#1c2b35] py-20 text-[#f8f7f3] lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex items-end justify-between gap-4"><div><p className="section-label text-[#b6cbbf]">03 / Publications</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.04em]">Recent writing</h2></div><a href="#all-publications" className="link-arrow border-[#f8f7f3]/30 text-[#f8f7f3]">View all <ChevronRight size={16} /></a></div>
            <div className="mt-12 border-t border-white/20">{publications.map((item) => <a href="#publication" key={item.title} className="group grid gap-3 border-b border-white/20 py-7 transition hover:pl-3 md:grid-cols-[90px_1fr_auto] md:items-center"><span className="text-xs font-bold text-[#b6cbbf]">{item.year}</span><div><p className="font-serif text-xl leading-tight sm:text-2xl">{item.title}</p><p className="mt-2 text-sm text-white/55">{item.journal}</p></div><span className="text-xs uppercase tracking-[0.13em] text-white/50">{item.type}</span></a>)}</div>
          </div>
        </section>

        <section id="teaching" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="section-label">04 / Teaching</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.04em]">Learning together.</h2><p className="mt-6 max-w-sm leading-relaxed text-[#1c2b35]/70">My classroom is a place to read slowly, ask better questions, and connect ideas to the world beyond the university.</p><a href="#cv" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] underline underline-offset-4">Download teaching CV <Download size={15} /></a></div><div className="lg:col-span-7 lg:col-start-6">{teaching.map(([code, title, type]) => <div className="grid gap-2 border-t border-[#1c2b35]/15 py-6 sm:grid-cols-[110px_1fr_auto]"><span className="text-xs font-bold text-[#718c7d]">{code}</span><h3 className="font-serif text-xl">{title}</h3><span className="text-sm text-[#1c2b35]/60">{type}</span></div>)}</div></div></section>

        <section className="bg-[#dce7df] px-6 py-20 text-center lg:py-28"><p className="section-label">Let’s be in conversation</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Have an idea worth <em className="text-[#718c7d]">exploring?</em></h2><a href="mailto:hello@anjizhu.com" className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#1c2b35] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#385060]"><Mail size={15} /> hello@anjizhu.com</a></section>
      </main>
      <footer className="bg-[#1c2b35] px-6 py-8 text-white/55 lg:px-10"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 text-[10px] font-bold uppercase tracking-[0.14em]"><span>© 2024 Anji Zhu</span><div className="flex gap-6"><a href="#linkedin">LinkedIn</a><a href="#bluesky">Bluesky</a><a href="#orcid">ORCID</a></div><span>Made with care</span></div></footer>
    </div>
  )
}

export default App
