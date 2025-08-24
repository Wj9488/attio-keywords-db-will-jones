import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AttioLogo from '@/public/attio-logo.png';
import CtaButton from "@/components/CtaButton";
import Line from "@/components/Line";

const Nav = () => {
  // Scroll direction state
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          if (currentScrollY < 10) {
            setShowNav(true);
          } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setShowNav(false);
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up
            setShowNav(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          menuButtonRef.current && 
          !menuButtonRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [ 
    { text: 'How I\'d track effectiveness', href: '/effectiveness' },
    { text: 'How I\'d rank for a keyword', href: '/how-i-would-rank' }
  ];

  return (
    <>
      <nav 
        className={`fixed border-b border-gray-200 top-0 w-full bg-white py-3 px-4 md:py-5 z-50 transition-transform duration-300 ease-in-out ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="container mx-auto w-[98%] lg:w-[70%] xl:w-[90%] 3xl:w-[60%] flex items-center justify-between">
            <Link href="/">
                <div className="flex items-end gap-2">
                    <Image src={AttioLogo} alt="Attio Logo" width={100} height={100} />
                    <p className="text-sm font-bold tracking-tighter text-darker-gray">Keywords</p>
                </div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 tracking-tight text-nav-gray text-[15px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="transition-all duration-200 ease-in-out hover:opacity-70"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <CtaButton />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-3">
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg px-3 py-2 mr-2"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            <CtaButton />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          ref={menuRef}
          className="fixed top-0 w-full bg-white shadow-lg rounded-b-xl z-40 overflow-y-auto pt-20 pb-8 px-5"
        >
          <div className="flex flex-col h-fit">
            {/* Navigation Links */}
            <div className="flex-1">
              <ul className="flex flex-col gap-2 text-2xl tracking-tight text-gray-800">
                {navLinks.map((link, index) => (
                  <li key={link.href} className="py-2">
                    <Link 
                      href={link.href} 
                      className="transition-all duration-200 ease-in-out hover:opacity-70 tracking-tight"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Nav;