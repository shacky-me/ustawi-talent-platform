"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navlinks } from "@/config/navlinks";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (display) => {
    setOpenDropdown(openDropdown === display ? null : display);
  };

  const handleMobileDropdownToggle = (display) => {
    setMobileDropdown(mobileDropdown === display ? null : display);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu when clicking anywhere outside on small screens
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleViewportClick = (e) => {
      // Only apply on small screens (below Tailwind's lg breakpoint ~1024px)
      if (typeof window !== "undefined" && window.innerWidth >= 1024) return;

      const clickedInsideMenu = e.target.closest(".mobile-menu-container");
      const clickedToggleButton = e.target.closest(".mobile-menu-button");
      if (!clickedInsideMenu && !clickedToggleButton) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleViewportClick);
    return () => document.removeEventListener("click", handleViewportClick);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm border-b border-slate-100" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo/Ustawi.png"
              alt="Ustawi Gallery logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navlinks.map((link, index) => {
              const isActive =
                pathname === link.path ||
                (link.path && pathname.startsWith(link.path + "/"));
              const hasSubmenu = link.submenu && link.submenu.length > 0;

              return (
                <div
                  key={link.display || index}
                  className="relative dropdown-container"
                >
                  {hasSubmenu ? (
                    <button
                      onClick={() => handleDropdownToggle(link.display)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive
                          ? "text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.display}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.display ? "rotate-180" : ""
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive
                          ? "text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.display}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {hasSubmenu && openDropdown === link.display && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.submenu.map((sublink) => {
                        const isSubActive = pathname === sublink.path;
                        return (
                          <Link
                            key={sublink.path}
                            href={sublink.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isSubActive
                                ? "text-slate-900 bg-slate-100 font-medium"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                          >
                            {sublink.display}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/signin"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sell"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sell Art
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors mobile-menu-button"
          >
            <svg
              className="h-6 w-6 text-slate-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg mobile-menu-container">
          <div className="px-6 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navlinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path && pathname.startsWith(link.path + "/"));
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isDropdownOpen = mobileDropdown === link.display;

              return (
                <div key={link.display || link.path}>
                  {hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => handleMobileDropdownToggle(link.display)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {link.display}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Submenu */}
                      {isDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.submenu.map((sublink) => {
                            const isSubActive = pathname === sublink.path;
                            return (
                              <Link
                                key={sublink.path}
                                href={sublink.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                                  isSubActive
                                    ? "bg-slate-100 text-slate-900 font-medium"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                              >
                                {sublink.display}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {link.display}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 space-y-2 border-t border-slate-200 mt-4">
              <Link
                href="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sell"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center hover:bg-slate-800 transition-colors"
              >
                Sell Art
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
