import { useState, useEffect } from "react";
import crypitoImg from "./assets/CRYPITO.png";
import fitarenaImg from "./assets/FITARENA.png";
import lifetrackImg from "./assets/LIFETRACK.png";

import {
  Menu, X, Mail, ArrowDown, ExternalLink,
  Code2, Wrench, Target, Smartphone, Globe,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const PROFILE = {
  name: "Raphael Timothy Maurice Kaloh",
  shortName: "Raphael Kaloh",
  headline: "Computer Science Student at BINUS University | Software Engineering Specialization",
  status: "3rd-year Computer Science Undergraduate",
  about:
    "Halo! Saya Raphael Kaloh, mahasiswa Computer Science semester 5 di BINUS University dengan penjurusan Software Engineering. Saya memiliki ketertarikan besar dalam perancangan dan pengembangan aplikasi web serta mobile—mulai dari merancang antarmuka pengguna di Figma hingga mengimplementasikannya menggunakan HTML, CSS, JavaScript, React, dan Flutter untuk Android. Selama masa perkuliahan, saya telah memperoleh pengalaman praktis melalui proyek individu maupun kelompok, tugas mata kuliah, hingga keikutsertaan dalam kompetisi teknologi. Memulai studi di bidang Computer Science dengan latar belakang teknologi yang terbilang minim, saya berkomitmen untuk terus belajar dan berupaya keras agar selalu mengikuti perkembangan teknologi yang ada. Saya sangat menghargai kerja sama tim dan kolaborasi, karena saya percaya bahwa sudut pandang baru dan masukan yang konstruktif selalu menghasilkan solusi perangkat lunak yang lebih baik. Sangat terbuka untuk berjejaring, belajar hal-hal baru, dan mengeksplorasi peluang magang di bidang Software Engineering!",
  email: "raphaeltmkaloh@gmail.com",
  linkedin: "https://www.linkedin.com/in/raphael-kaloh-bb7352326/",
  github: "https://github.com/RaphaelKaloh",
};

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    items: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Flutter", "Java", "C"],
  },
  {
    title: "Tools & Services",
    icon: Wrench,
    items: ["Figma", "Supabase", "Git", "GitHub", "VS Code", "Eclipse"],
  },
  {
    title: "Core Focus",
    icon: Target,
    items: [
      "Web Development",
      "Mobile Development (Android)",
      "UI/UX Design to Code",
      "Object-Oriented Programming",
    ],
  },
];

const PROJECTS = [
  {
    title: "crypIto - Website Informasi Mata Uang Digital",
    icon: Globe,
    role: "Academic Project (Individual)",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Platform web edukatif yang memberikan informasi rinci mengenai berbagai jenis mata uang digital (cryptocurrency).",
    features: ["Tampilan UI responsif", "Fitur interaktif JavaScript", "Sistem validasi login"],
    image: crypitoImg,
  },
  {
    title: "FitArena – Sports Community Finder",
    icon: Smartphone,
    role: "Academic Project (Team)",
    stack: ["Flutter", "Supabase", "Git"],
    description:
      "Aplikasi mobile cross-platform untuk membantu pengguna menemukan komunitas olahraga lokal serta fasilitas/lapangan olahraga terdekat.",
    features: [
      "Backend Supabase real-time data & autentikasi",
      "Antarmuka Flutter yang intuitif",
    ],
    image: fitarenaImg,
    link: "https://github.com/FGPF0307/App",
  },
  {
    title: "LifeTrack – Health Companion",
    icon: Smartphone,
    role: "Academic Project (Team)",
    stack: ["Flutter", "Supabase", "Git"],
    description:
      "Aplikasi mobile kesehatan terpadu yang menggabungkan fitur pelacakan pola makan, konsumsi air minum, dan rekomendasi olahraga.",
    features: [
      "Full-stack mobile functionality",
      "Sinkronisasi data profil pengguna dengan Supabase",
    ],
    image: lifetrackImg,
    link: "https://github.com/ggeann/Software-Engineering-Group-11",
  },
];

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-16 sm:px-12 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:mb-12 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-slate-800 bg-slate-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-12" aria-label="Main">
        <button
          onClick={() => go("home")}
          className={`text-base font-bold tracking-tight text-white hover:text-teal-300 ${focusRing}`}
        >
          {PROFILE.shortName}<span className="text-teal-400">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className={`text-sm font-medium text-slate-300 transition-colors hover:text-teal-300 ${focusRing}`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`rounded-md p-1.5 text-slate-200 hover:bg-slate-800 md:hidden ${focusRing}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="divide-y divide-slate-800 border-b border-slate-800 bg-slate-900/95 px-6 py-2 backdrop-blur-md md:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className="w-full py-3 text-left text-sm font-medium text-slate-200 hover:text-teal-300"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-20 pb-12 sm:px-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-teal-300">
            Welcome to my portfolio
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {PROFILE.name}
          </h1>

          <p className="mt-4 text-base font-medium leading-relaxed text-teal-300 sm:text-xl">
            {PROFILE.headline}
          </p>

          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            {PROFILE.status}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <button
              onClick={() => scrollToId("projects")}
              className={`inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-sm font-bold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-300 ${focusRing}`}
            >
              View projects <ArrowDown size={16} aria-hidden />
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className={`inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-300 ${focusRing}`}
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-6 sm:p-8 backdrop-blur-sm">
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-relaxed">
          {PROFILE.about}
        </p>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-800/40 p-6 transition duration-200 hover:border-slate-700"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-teal-400/10 p-2 text-teal-300">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="rounded bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-800"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }) {
  const Icon = p.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-800/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-400/50">
      <div className="-mx-5 -mt-5 mb-5 aspect-[16/9] overflow-hidden bg-slate-950 sm:-mx-5 sm:-mt-5">
        {p.image ? (
          <img
            src={p.image}
            alt={`Tampilan ${p.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 text-teal-300">
            <Icon size={40} aria-hidden />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-white sm:text-lg">{p.title}</h3>
          <p className="mt-1 text-xs font-medium text-teal-300">{p.role}</p>
          <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{p.description}</p>

          <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-slate-400 marker:text-teal-400">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <li key={s} className="rounded bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                {s}
              </li>
            ))}
          </ul>

          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-200 ${focusRing}`}
            >
              <FaGithub size={14} aria-hidden /> View on GitHub <ExternalLink size={12} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    { label: "Email me", href:`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`,icon: Mail },
    { label: "LinkedIn", href: PROFILE.linkedin, icon: FaLinkedin },
    { label: "GitHub", href: PROFILE.github, icon: FaGithub },
  ];
  return (
    <Section id="contact" title="Let’s connect">
      <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-6 sm:p-8">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
         Saya sedang mencari kesempatan magang di bidang rekayasa perangkat lunak.
          Jika Anda memiliki ketertarikan terhadap saya dan juga pengembangan perangkat lunak, kirimkan pesan kepada saya.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-300 sm:text-sm ${focusRing}`}
            >
              <Icon size={16} aria-hidden /> {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 px-6 py-8 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-slate-900 text-slate-100 antialiased"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}