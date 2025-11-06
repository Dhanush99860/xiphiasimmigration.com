'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

import { headerMenu } from './Navigation/menu.data';
import Logo from './LogoWhite/index';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeaderLink from './Navigation/MobileHeaderLink';
import TopBar from './Navigation/TopBar';
import GlobalSearch from '@/components/GlobalSearch';

import { Menu, X, Moon, Sun, LogIn } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const lastYRef = useRef(0);
  const rAFRef = useRef<number | null>(null);
  const burgerBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLElement | null>(null);
  const lastFocusableRef = useRef<HTMLElement | null>(null);

  const colorMode = useMemo(() => (resolvedTheme || theme) ?? 'light', [resolvedTheme, theme]);
  const isDark = colorMode === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  // Direction-aware scroll with hysteresis (prevents jitter)
  useEffect(() => {
    lastYRef.current = window.scrollY || 0;
    const DELTA = 12;
    const HIDE_AT = 140;
    const SHOW_AT = 40;
    const COMPACT_AT = 80;

    const onScroll = () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      rAFRef.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const dy = y - lastYRef.current;
        if (Math.abs(dy) < DELTA) return;

        const goingDown = dy > 0;
        const goingUp = dy < 0;

        setCompact(y > COMPACT_AT);
        if (goingDown && y > HIDE_AT) setShowTopBar(false);
        if (goingUp && y < SHOW_AT) setShowTopBar(true);

        lastYRef.current = y <= 0 ? 0 : y;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  // Close drawer on route change
  useEffect(() => {
    if (drawerOpen) setDrawerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Body lock + focus trap for drawer
  useEffect(() => {
    const docEl = document.documentElement;
    const prevOverflow = docEl.style.overflow;
    const prevPadRight = docEl.style.paddingRight;

    if (drawerOpen) {
      const sw = window.innerWidth - docEl.clientWidth;
      docEl.style.overflow = 'hidden';
      if (sw > 0) docEl.style.paddingRight = `${sw}px`;

      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a,button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      if (focusables && focusables.length > 0) {
        firstFocusableRef.current = focusables[0];
        lastFocusableRef.current = focusables[focusables.length - 1];
        setTimeout(() => firstFocusableRef.current?.focus(), 10);
      }

      return () => {
        docEl.style.overflow = prevOverflow;
        docEl.style.paddingRight = prevPadRight;
        burgerBtnRef.current?.focus();
      };
    }
  }, [drawerOpen]);

  // Esc + Tab cycle (drawer)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!drawerOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setDrawerOpen(false);
      } else if (e.key === 'Tab') {
        const first = firstFocusableRef.current;
        const last = lastFocusableRef.current;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  // Reduced motion
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(m.matches);
    apply();
    m.addEventListener?.('change', apply);
    return () => m.removeEventListener?.('change', apply);
  }, []);

  // Swipe-to-close (mobile)
  useEffect(() => {
    if (!drawerOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    let startX = 0,
      currentX = 0,
      dragging = false;

    const onStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      currentX = startX;
      dragging = true;
      drawer.style.transition = 'none';
    };
    const onMove = (e: TouchEvent) => {
      if (!dragging) return;
      currentX = e.touches[0].clientX;
      const dx = Math.max(0, currentX - startX);
      drawer.style.transform = `translateX(${dx}px)`;
    };
    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      const dx = Math.max(0, currentX - startX);
      drawer.style.transition = '';
      drawer.style.transform = '';
      if (dx > 60) setDrawerOpen(false);
    };

    drawer.addEventListener('touchstart', onStart, { passive: true });
    drawer.addEventListener('touchmove', onMove, { passive: true });
    drawer.addEventListener('touchend', onEnd);
    drawer.addEventListener('touchcancel', onEnd);

    return () => {
      drawer.removeEventListener('touchstart', onStart);
      drawer.removeEventListener('touchmove', onMove);
      drawer.removeEventListener('touchend', onEnd);
      drawer.removeEventListener('touchcancel', onEnd);
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[9999] focus:rounded-lg focus:bg-black/80 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* STICKY header (in-flow, so content never overlaps) */}
      <header
        className={[
          'sticky top-0 z-50 w-full overflow-visible',
          'will-change-transform [transform:translateZ(0)]',
          'transition-[background-color,backdrop-filter,box-shadow,padding] ease-out',
          reducedMotion ? 'duration-0' : 'duration-300',
          'bg-primary/95 dark:bg-zinc-950',
          'backdrop-blur-md',
          compact ? 'shadow-lg' : 'shadow-md',
        ].join(' ')}
      >
        {/* TopBar — keep overall header height constant; slide with translateY */}
        <div className="relative h-[55px] overflow-visible">
          <div
            aria-hidden={!showTopBar}
            className={[
              'absolute inset-x-0 top-0 h-[55px]',
              'transition-transform ease-out',
              reducedMotion ? 'duration-0' : 'duration-300',
              showTopBar ? 'translate-y-0' : '-translate-y-full',
            ].join(' ')}
          >
            <TopBar />
          </div>
        </div>

        {/* Main row — moves up when TopBar hides (no height collapse) */}
        <div className="mx-auto max-w-screen-2xl px-4">
          <div
            className={[
              'transition-transform ease-out',
              reducedMotion ? 'duration-0' : 'duration-300',
              showTopBar ? 'translate-y-0' : '-translate-y-[55px]',
              compact ? 'mb-1' : 'mb-2',
              'mt-[10px]',
            ].join(' ')}
          >
            <div
              className={[
                'relative flex items-center justify-between rounded-2xl ring-1 ring-white/10',
                'bg-white/[0.06] dark:bg-white/5',
                'backdrop-saturate-[1.4] dark:backdrop-saturate-[1.3]',
                'before:absolute before:inset-0 before:-z-10 before:rounded-2xl',
                'before:bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]',
                'dark:before:bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]',
                compact ? 'px-3 py-2' : 'px-4 py-2.5',
                'transition-[padding,ring-color,transform,box-shadow] ease-out',
                reducedMotion ? 'duration-0' : 'duration-300',
                'hover:ring-white/20',
              ].join(' ')}
            >
              {/* Left: logo */}
              <Logo />

              {/* CENTER (mobile only): GlobalSearch trigger (placeholder UI) */}
              <div className="pointer-events-none absolute inset-x-0 flex justify-center px-12 lg:hidden">
                <GlobalSearch className="max-w-[520px]" placeholder="Search…" />
              </div>

              {/* Desktop navigation */}
              <nav
                className="hidden lg:flex flex-grow items-center justify-center gap-1 xl:gap-2"
                aria-label="Main navigation"
              >
                {headerMenu.map((item, i) => (
                  <HeaderLink key={i} item={item} />
                ))}
              </nav>

              {/* Right: actions */}
              <div className="ml-3 flex items-center gap-1 sm:gap-2">
                {/* Theme toggle (desktop) */}
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="hidden lg:inline-flex h-9 w-9 items-center justify-center rounded-xl text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Moon className="h-5 w-5 dark:hidden" aria-hidden />
                  <Sun className="hidden h-5 w-5 dark:inline" aria-hidden />
                </button>

                {/* Desktop CTA */}
                <Link
                  href="/personal-booking"
                  aria-label="Book a personal consultation"
                  className="hidden lg:inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Book a Personal Consultation
                </Link>

                {/* Burger (mobile) */}
                <button
                  ref={burgerBtnRef}
                  onClick={() => setDrawerOpen((s) => !s)}
                  aria-label="Toggle mobile menu"
                  aria-expanded={drawerOpen}
                  aria-controls="mobile-menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:hidden"
                >
                  {drawerOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop — click outside to close (mobile only) */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-[49] bg-black/50 backdrop-blur-[2px] lg:hidden"
            aria-hidden="true"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          id="mobile-menu"
          ref={drawerRef}
          data-state={drawerOpen ? 'open' : 'closed'}
          className={[
            'fixed right-0 top-0 z-[50] h-dvh w-[88%] max-w-[420px] rounded-l-2xl outline-none lg:hidden',
            'transition-transform will-change-transform',
            reducedMotion ? 'duration-0' : 'duration-300',
            drawerOpen ? 'translate-x-0' : 'translate-x-full',
            'bg-white dark:bg-zinc-900',
          ].join(' ')}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation drawer"
          tabIndex={-1}
        >
          <div className="flex h-dvh min-h-0 flex-col overscroll-contain">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
              <Logo />
              <div className="flex items-center gap-1.5">
                <Link
                  href="https://www.xiphiasimmigration.com/XIPHIAS/Account/Login"
                  aria-label="Login"
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-800 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-white dark:hover:bg-white/10"
                >
                  <LogIn className="h-5 w-5" aria-hidden />
                </Link>

                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-800 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-white dark:hover:bg-white/10"
                >
                  <Moon className="h-5 w-5 dark:hidden" aria-hidden />
                  <Sun className="hidden h-5 w-5 dark:inline" aria-hidden />
                </button>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-800 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-white dark:hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden />
                </button>
              </div>
            </div>

            {/* Scrollable MENU area */}
            <nav className="flex-1 min-h-0 overflow-y-auto bg-white px-4 py-3 dark:bg-zinc-900" aria-label="Mobile navigation">
              <div className="rounded-xl bg-zinc-50 p-2 dark:bg-zinc-800">
                {headerMenu.map((item, i) => (
                  <MobileHeaderLink key={i} item={item} closeMenuAction={() => setDrawerOpen(false)} />
                ))}
              </div>

              <div className="pb-28" />
              <div className="h-[env(safe-area-inset-bottom)]" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}