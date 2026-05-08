import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight, Activity, Beaker, ShieldCheck, HeartPulse,
  Leaf, Droplets, Flower2, Monitor, CalendarDays, Check
} from 'lucide-react';
import { GradientDots } from '../components/ui/gradient-dots';

gsap.registerPlugin(ScrollTrigger);

const smoothScroll = (e) => {
  e.preventDefault();
  const target = e.currentTarget.getAttribute('href');
  if (target && target.startsWith('#')) {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Planes', href: '#planes' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, width: 'calc(100% - 3rem)', maxWidth: '1200px',
      borderRadius: '3rem', padding: '0.65rem 0.65rem 0.65rem 1.75rem',
      background: scrolled ? 'rgba(14, 12, 35, 0.92)' : 'rgba(14,12,35,0.55)',
      backdropFilter: 'blur(24px)',
      border: scrolled ? '1px solid rgba(166,117,163,0.3)' : '1px solid rgba(166,117,163,0.1)',
      transition: 'all 0.45s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
    }}>
      <div style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--fg-white)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '2px' }}>
        <span style={{ color: 'var(--color-primary)' }}>MB</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>.</span>
        <span>DÍAZ</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={smoothScroll} style={{
            fontFamily: '"Sora", sans-serif', fontSize: '0.875rem', fontWeight: 500,
            color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
          >{l.label}</a>
        ))}
      </div>

      <a href="#contacto" onClick={smoothScroll} style={{
        background: 'var(--color-primary)', color: 'var(--fg-white)',
        padding: '0.8rem 1.6rem', borderRadius: '2rem',
        fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.85rem',
        textDecoration: 'none', whiteSpace: 'nowrap',
        boxShadow: '0 4px 20px rgba(196,108,184,0.3)',
      }}>Consulta gratis</a>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada con fade + scale suave
      gsap.from(heroRef.current, { opacity: 0, scale: 0.98, duration: 0.8, ease: 'power2.out' });
      gsap.from('.hero-anim', { y: 50, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'power4.out', delay: 0.25 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={heroRef} className="hero-section" style={{
      minHeight: '100dvh', position: 'relative', overflow: 'visible',
      display: 'flex', alignItems: 'center',
      background: 'var(--color-gradient-start)', paddingTop: '6rem',
      paddingBottom: '10rem',
    }}>
      {/* Background gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--color-gradient-start) 0%, var(--bg-mid) 70%, var(--bg-deep) 100%)', zIndex: 0 }} />
      {/* Radial glow */}
      <div style={{ position: 'absolute', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, var(--color-primary-dark) 0%, transparent 60%)', top: '-10%', right: '-10%', opacity: 0.3, filter: 'blur(120px)', zIndex: 1, pointerEvents: 'none' }} />
      {/* Bottom fade-out to merge with cards */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '280px', background: 'linear-gradient(to bottom, transparent 0%, var(--bg-deep) 100%)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 3, padding: '0 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="hero-anim" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {/* Punto con pulso animado */}
            <span style={{ position: 'relative', width: '8px', height: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', animation: 'pulse-dot 2s ease-out infinite' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 12px var(--color-accent)', display: 'inline-block', position: 'relative', zIndex: 1 }} />
            </span>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Protocolos de Alta Precisión
            </span>
          </div>

          <h1 className="hero-anim" style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--fg-white)', lineHeight: 1.1, letterSpacing: '-0.04em' }}>Biología que</span>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', color: 'var(--color-primary)', lineHeight: 0.9, letterSpacing: '-0.02em', filter: 'drop-shadow(0 0 40px rgba(196,108,184,0.4))' }}>sana desde</span>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: 'var(--fg-white)', lineHeight: 1.1, letterSpacing: '-0.04em' }}>la raíz.</span>
          </h1>

          <p className="hero-anim" style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--color-support-2)', maxWidth: '540px', lineHeight: 1.8, margin: '2rem 0 3rem' }}>
            Asesoría en alimentación natural para que vivan más, sanen mejor y eviten lo innecesario.
          </p>

          <div className="hero-anim" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Botón CTA con shimmer */}
            <a href="#contacto" onClick={smoothScroll} className="cta-shimmer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'var(--color-accent)', color: 'var(--fg-white)',
              padding: '1.15rem 2.25rem', borderRadius: '3rem',
              fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(202,122,41,0.35)',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(202,122,41,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(202,122,41,0.35)'; }}
            >Consulta gratis</a>

            {/* Punto CUPOS con pulso */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', animation: 'pulse-dot 2s ease-out infinite 0.5s' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block', position: 'relative', zIndex: 1 }} />
              </span>
              <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.72rem', color: 'var(--color-support-1)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Cupos limitados
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes inline */}
      <style>{`
        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(196,108,184,0.6); }
          70% { transform: scale(2.2); opacity: 0; box-shadow: 0 0 0 10px rgba(196,108,184,0); }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .cta-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          transition: none;
        }
        .cta-shimmer:hover::after {
          animation: shimmer 0.6s ease-in-out;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-revealed {
          animation: fadeSlideUp 0.65s ease-out forwards;
        }
        .card-hidden {
          opacity: 0;
          transform: translateY(32px);
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </section>
  );
}

// ── HERO FEATURE CARDS (emergen desde el hero, sin corte) ───────────────────
function HeroFeatureCards() {
  const [termText, setTermText] = useState('');
  const fullText = 'Integr';
  const [termIdx, setTermIdx] = useState(0);
  const cardsRef = useRef([]);

  // Typewriter loop
  useEffect(() => {
    if (termIdx < fullText.length) {
      const t = setTimeout(() => {
        setTermText(p => p + fullText[termIdx]);
        setTermIdx(i => i + 1);
      }, 200);
      return () => clearTimeout(t);
    } else {
      const reset = setTimeout(() => { setTermText(''); setTermIdx(0); }, 2000);
      return () => clearTimeout(reset);
    }
  }, [termIdx]);

  // Staggered fade-in con Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || '0';
            setTimeout(() => {
              el.classList.remove('card-hidden');
              el.classList.add('card-revealed');
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardsRef.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  const cards = [
    {
      id: 'card-diagnostica',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Baraja Diagnóstica',
      desc: 'Un sistema predictivo basado en la bioquímica de su especie.',
      extra: (
        <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(196,108,184,0.15)', border: '1px solid rgba(196,108,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
            <Check size={14} />
          </div>
          <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'var(--fg-white)' }}>Menos visitas al veterinario</span>
        </div>
      ),
    },
    {
      id: 'card-algoritmos',
      icon: <Monitor size={20} />,
      badge: 'LIVE TELEMETRY',
      title: 'Algoritmos de Vida',
      desc: null,
      extra: (
        <div style={{ background: 'rgba(0,0,0,0.35)', borderRadius: '0.75rem', padding: '1rem 1.25rem' }}>
          <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.65rem', color: 'rgba(196,108,184,0.5)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SYSTEM OUTPUT:</div>
          <div style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.85rem', color: 'var(--color-primary)' }}>
            &gt;&nbsp;{termText}<span style={{ animation: 'blink 1s step-end infinite', color: 'var(--color-accent)' }}>█</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontFamily: '"Fira Code", monospace', fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)' }}>
            <span>VID: BMP720</span>
            <span>STATUS: DESCRIP_DONE</span>
          </div>
        </div>
      ),
    },
    {
      id: 'card-agenda',
      icon: <CalendarDays size={20} />,
      title: 'Agenda Protocolo',
      desc: 'Sistema de gestión para cada etapa de su recuperación.',
      extra: (
        <div>
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem' }}>
            {days.map((d, i) => (
              <div key={d} style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: i === 3 ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                border: i === 3 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Sora", sans-serif', fontSize: '0.65rem', fontWeight: 600,
                color: i === 3 ? '#fff' : 'rgba(255,255,255,0.3)',
              }}>{d}</div>
            ))}
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '0.5rem', padding: '0.65rem 1rem',
            fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center',
          }}>GUARDAR PROTOCOLO</div>
        </div>
      ),
    },
  ];

  return (
    <section style={{
      background: 'var(--bg-deep)',
      padding: '0 2rem 8rem',
      /* Cards emergen con translateY negativo desde el hero */
      marginTop: '-7rem',
      position: 'relative', zIndex: 4,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              id={card.id}
              ref={el => cardsRef.current[i] = el}
              className="card-hidden"
              data-delay={i * 130}
              style={{
                background: 'rgba(20,17,48,0.85)',
                border: '1px solid rgba(166,117,163,0.12)',
                borderRadius: '1.25rem',
                padding: '2rem',
                backdropFilter: 'blur(16px)',
                /* Sombra dramática hacia arriba */
                boxShadow: '0 -8px 40px rgba(0,0,0,0.45), 0 20px 50px rgba(0,0,0,0.3)',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(196,108,184,0.4)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 -8px 40px rgba(0,0,0,0.45), 0 24px 60px rgba(196,108,184,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(166,117,163,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 -8px 40px rgba(0,0,0,0.45), 0 20px 50px rgba(0,0,0,0.3)';
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)' }}>{card.icon}</div>
                {card.badge && (
                  <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.6rem', color: 'var(--color-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>{card.badge}</span>
                )}
              </div>

              <h3 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--fg-white)', margin: '0 0 0.6rem', letterSpacing: '-0.02em' }}>
                {card.title}
              </h3>
              {card.desc && (
                <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  {card.desc}
                </p>
              )}

              <div style={{ marginTop: card.desc ? 0 : '1rem' }}>{card.extra}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>
    </section>
  );
}

// ── MANIFIESTO ────────────────────────────────────────────────────────────────
function Manifiesto() {
  const secRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manif-el', { y: 35, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: secRef.current, start: 'top 80%' } });
    }, secRef);
    return () => ctx.revert();
  }, []);

  const pillars = [
    { label: 'Nutrición', desc: 'La base de todo. Sin ella, ninguna otra terapia dura.', icon: <HeartPulse size={16} /> },
    { label: 'Fitoterapia', desc: 'Plantas medicinales que refuerzan el sistema Inmune.', icon: <Leaf size={16} /> },
    { label: 'Aromaterapia', desc: 'Aceites esenciales con acción terapéutica demostrada.', icon: <Droplets size={16} /> },
    { label: 'Flores de Bach', desc: 'Equilibrio emocional que impacta la salud física.', icon: <Flower2 size={16} /> },
  ];

  return (
    <section id="manifiesto" ref={secRef} style={{ position: 'relative', padding: '8rem 2rem', overflow: 'hidden', background: 'var(--bg-deep)' }}>
      <GradientDots 
        duration={25} 
        colorCycleDuration={8} 
        dotSize={6} 
        spacing={12} 
        backgroundColor="var(--bg-deep)"
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(166,117,163,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(166,117,163,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(100,44,117,0.15) 0%, transparent 70%)', zIndex: 0 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        <p className="manif-el" style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
          Lo normal es gastar en veterinarios, medicamentos y cirugías.
        </p>
        <h2 className="manif-el" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', color: 'var(--fg-white)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 4rem', maxWidth: '900px' }}>
          Nosotros preguntamos: ¿y si el origen está en lo que{' '}
          <span style={{ color: 'var(--color-primary)' }}>come?</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {pillars.map((p, i) => (
            <div key={i} className="manif-el" style={{ borderTop: '1px solid rgba(166,117,163,0.2)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                {p.icon}
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-primary)' }}>{p.label}</span>
              </div>
              <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── STACK TERAPÉUTICO ─────────────────────────────────────────────────────────
function StackTerapeutico() {
  const secRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stack-hdr', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: secRef.current, start: 'top 80%' } });
      gsap.from('.stack-card', { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: secRef.current, start: 'top 72%' } });
    }, secRef);
    return () => ctx.revert();
  }, []);

  const modules = [
    {
      num: '01', tag: 'MÓDULO BASE', title: 'Consulta de Nutrición Básica',
      desc: 'Evaluación completa de la dieta actual y protocolo de transición a alimentación natural adaptado al animal.',
      featured: false,
    },
    {
      num: '02', tag: 'STACK COMPLETO', title: 'Consulta Integral',
      desc: 'Nutrición + Fitoterapia + Aromaterapia + Flores de Bach. Una sola sesión con todos los módulos activos.',
      featured: true,
    },
    {
      num: '03', tag: 'MÓDULO AVANZADO', title: 'Fitoterapia y Aromaterapia',
      desc: 'Para animales con base nutricional correcta. Refuerzo terapéutico con plantas medicinales y aceites esenciales.',
      featured: false,
    },
  ];

  return (
    <section id="servicios" ref={secRef} style={{
      background: '#0f0f13',
      padding: '7rem 5vw',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="stack-hdr" style={{ marginBottom: '3.5rem' }}>
          <span style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.72rem',
            color: 'rgba(130, 100, 200, 0.5)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1.1rem',
          }}>
            // servicios[]
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            margin: 0,
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.4em',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, color: '#ffffff' }}>
              El stack
            </span>
            <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, color: '#6b5ce7' }}>
              terapéutico
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {modules.map((m, i) => (
            <div
              key={i}
              className="stack-card"
              style={{
                background: m.featured ? '#111228' : '#10101e',
                border: m.featured ? '1.5px solid #5555ff' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                padding: '2rem 2rem 2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                boxShadow: m.featured ? '0 0 0 1px rgba(85,85,255,0.08), 0 0 28px rgba(85,85,255,0.07)' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                if (!m.featured) e.currentTarget.style.borderColor = 'rgba(107,92,231,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = m.featured ? '#5555ff' : 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Number — top right, large, semitransparent */}
              <span style={{
                position: 'absolute', top: '1.1rem', right: '1.5rem',
                fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '3.2rem',
                color: m.featured ? 'rgba(107,92,231,0.1)' : 'rgba(255,255,255,0.05)',
                letterSpacing: '-0.04em', lineHeight: 1,
                pointerEvents: 'none', userSelect: 'none',
              }}>
                {m.num}
              </span>

              {/* Tag */}
              <span style={{
                fontFamily: '"Fira Code", monospace', fontSize: '0.6rem', fontWeight: 500,
                color: 'rgba(107,92,231,0.7)', letterSpacing: '0.16em',
                textTransform: 'uppercase', display: 'block', marginBottom: '1.4rem',
              }}>
                {m.tag}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1.2rem',
                color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.02em', margin: '0 0 1rem',
              }}>
                {m.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.42)', lineHeight: 1.72, margin: 0,
              }}>
                {m.desc}
              </p>

              {/* Bottom accent line on featured */}
              {m.featured && (
                <div style={{
                  position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(107,92,231,0.5), transparent)',
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ── PLANES / PRECIOS ──────────────────────────────────────────────────────────
function Plans() {
  const plans = [
    {
      id: 'plan-basica',
      tag: 'Nutrición natural',
      name: 'Consulta Básica',
      price: '$50',
      period: '/ consulta',
      desc: 'Ideal para iniciar a tu perro o gato en una dieta 100% natural.',
      features: [
        'Evaluación del estado actual',
        'Diseño de dieta personalizada',
        'Guía de transición paso a paso',
        '1 control post-inicio (15 días)',
      ],
      btnLabel: 'Consulta gratis',
      highlight: false,
      recommended: false,
    },
    {
      id: 'plan-integral',
      tag: 'Nutrición + Terapias completas',
      name: 'Consulta Integral',
      price: '$90',
      period: '/ consulta',
      desc: 'Abordaje multiescala para revertir patologías y potenciar longevidad.',
      features: [
        'Evaluación clínica profunda',
        'Diseño de dieta terapéutica',
        'Protocolo de Fitoterapia',
        'Flores de Bach personalizadas',
        'Soporte continuo por 1 mes',
      ],
      btnLabel: 'Consulta gratis',
      highlight: true,
      recommended: true,
    },
    {
      id: 'plan-botanica',
      tag: 'Fitoterapia y Aromaterapia',
      name: 'Sesión Botánica',
      price: '$40',
      period: '/ consulta',
      desc: 'Protocolo botánico específico para homeostasis emocional y física.',
      features: [
        'Evaluación emocional/física',
        'Fórmula floral a medida',
        'Protocolo de aromaterapia',
        'Seguimiento quincenal',
      ],
      btnLabel: 'Consulta gratis',
      highlight: false,
      recommended: false,
    },
  ];

  return (
    <section id="planes" style={{ background: 'var(--bg-deep)', padding: '10rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.72rem', color: 'rgba(166,117,163,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            // planes[]
          </span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--fg-white)', margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            Inversión en <span style={{ color: 'var(--color-primary)' }}>Longevidad</span>.
          </h2>
          <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Programas diseñados no como un gasto médico, sino como una inversión directa en años de vida de calidad para tu animal.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {plans.map((p) => (
            <div
              key={p.id}
              id={p.id}
              style={{
                background: p.highlight ? 'rgba(28, 42, 35, 0.95)' : 'rgba(18,15,40,0.85)',
                border: p.highlight ? '1px solid rgba(196,108,184,0.25)' : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '1.5rem',
                padding: '2.5rem 2rem',
                position: 'relative',
                marginTop: p.recommended ? '0' : '2rem',
              }}
            >
              {/* Recommended badge */}
              {p.recommended && (
                <div style={{
                  position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--color-accent)', color: '#fff',
                  fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '0.72rem',
                  letterSpacing: '0.1em', padding: '0.45rem 1.25rem', borderRadius: '2rem',
                  whiteSpace: 'nowrap',
                }}>RECOMENDADO</div>
              )}

              {/* Plan name */}
              <h3 style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.7rem', color: 'var(--fg-white)', margin: '0 0 0.4rem', letterSpacing: '-0.01em' }}>
                {p.name}
              </h3>
              <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 500, fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                {p.tag}
              </span>

              {/* Price */}
              <div style={{ margin: '1.75rem 0 1.25rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '3.5rem', color: 'var(--fg-white)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {p.price}
                </span>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
                  {p.period}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 1.75rem' }}>
                {p.desc}
              </p>

              {/* Features list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {p.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={16} color={p.highlight ? 'var(--color-primary)' : 'rgba(255,255,255,0.35)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contacto"
                onClick={smoothScroll}
                style={{
                  display: 'block', textAlign: 'center',
                  background: p.highlight ? 'var(--color-accent)' : 'transparent',
                  border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--fg-white)',
                  padding: '1.1rem', borderRadius: '3rem',
                  fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: p.highlight ? '0 8px 30px rgba(202,122,41,0.35)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {p.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contacto" style={{ background: 'var(--color-gradient-end)', padding: '8rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top, transparent 0%, var(--bg-deep) 100%)' }} />
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--fg-white)', lineHeight: 1.1, marginBottom: '2rem' }}>
          La consulta que marca un <span style={{ color: 'var(--color-primary)' }}>antes y un después.</span>
        </h2>
        <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '1.2rem', color: 'var(--color-support-2)', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
          Los turnos son limitados por la dedicación que requiere cada caso clínico. Escribime por WhatsApp para reservar tu espacio.
        </p>
        <a href="https://wa.me/54911XXXXXXXX" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '1rem',
          background: 'var(--color-accent)', color: 'var(--fg-white)',
          padding: '1.5rem 3.5rem', borderRadius: '4rem',
          fontSize: '1.2rem', fontWeight: 800, textDecoration: 'none',
          boxShadow: '0 20px 50px rgba(202,122,41,0.4)',
          fontFamily: '"Sora", sans-serif', transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span>Ir a WhatsApp</span>
          <ArrowUpRight size={24} />
        </a>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deep)', padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontFamily: '"Sora", sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--fg-white)', marginBottom: '0.5rem' }}>María Belén Díaz</h3>
          <p style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-support-1)' }}>NUTRICIÓN ANIMAL INTEGRATIVA</p>
          <p style={{ fontFamily: '"Sora", sans-serif', fontSize: '0.85rem', color: 'var(--fg-muted)', maxWidth: '280px', marginTop: '1.5rem', lineHeight: 1.7 }}>
            Medicina biológica y evolutiva aplicada a pequeños animales.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>NAVEGACIÓN</span>
            {[['Inicio','#inicio'],['Manifiesto','#manifiesto'],['Servicios','#servicios'],['Planes','#planes']].map(([l,h]) => (
              <a key={h} href={h} onClick={smoothScroll} style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif' }}>{l}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 700 }}>REDES</span>
            <a href="#" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="#" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
            <a href="#" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.56V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
              TikTok
            </a>
            <a href="mailto:" style={{ color: 'var(--color-support-2)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: '"Sora", sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Gmail
            </a>
          </div>
        </div>
      </div>



      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: '"Fira Code", monospace', fontSize: '0.7rem', color: 'var(--fg-faint)' }}>
        <span>© 2025 MARÍA BELÉN DÍAZ. TODOS LOS DERECHOS RESERVADOS.</span>
        <span>SYS_RUNNING</span>
      </div>
    </footer>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function PresetD() {
  return (
    <div style={{ background: 'var(--bg-deep)', color: 'var(--fg-white)', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      <Navbar />
      <Hero />
      <HeroFeatureCards />
      <Manifiesto />
      <StackTerapeutico />
      <Plans />
      <CTA />
      <Footer />

      {/* Status Badge */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 1000,
        background: 'rgba(10, 10, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        borderRadius: '999px',
        padding: '0.6rem 1.2rem',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}>
        <div style={{ position: 'relative', width: '8px', height: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#22c55e', animation: 'pulse-green 2s infinite' }} />
          <span style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <span style={{ fontFamily: '"Fira Code", monospace', color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600 }}>
          Consultas disponibles: Activo
        </span>
      </div>
      <style>{`
        @keyframes pulse-green {
          0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
          70% { transform: scale(2.2); opacity: 0; box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
