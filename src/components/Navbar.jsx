"use client";

import Link from "next/link";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent hover:from-amber-500 hover:to-amber-700 transition-all"
          >
            Ustawi Gallery
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navlinks.map((link) => {
              const isActive =
                pathname === link.path || pathname.startsWith(link.path + "/");
              const hasSubmenu = link.submenu && link.submenu.length > 0;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() =>
                    hasSubmenu && setOpenDropdown(link.display)
                  }
                  onMouseLeave={() => hasSubmenu && setOpenDropdown(null)}
                >
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                    }`}
                  >
                    {link.display}
                    {hasSubmenu && (
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
                    )}
                    {isActive && !hasSubmenu && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full" />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasSubmenu && openDropdown === link.display && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.submenu.map((sublink) => {
                        const isSubActive = pathname === sublink.path;
                        return (
                          <Link
                            key={sublink.path}
                            href={sublink.path}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isSubActive
                                ? "text-amber-700 bg-amber-50 font-medium"
                                : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
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
              className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sell"
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-amber-700 hover:to-amber-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sell Art
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-6 w-6 text-gray-700"
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
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navlinks.map((link) => {
              const isActive =
                pathname === link.path || pathname.startsWith(link.path + "/");
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isDropdownOpen = mobileDropdown === link.display;

              return (
                <div key={link.path}>
                  {hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => handleMobileDropdownToggle(link.display)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-amber-50 text-amber-700"
                            : "text-gray-700 hover:bg-gray-50 hover:text-amber-700"
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
                                    ? "bg-amber-50 text-amber-700 font-medium"
                                    : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
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
                          ? "bg-amber-50 text-amber-700"
                          : "text-gray-700 hover:bg-gray-50 hover:text-amber-700"
                      }`}
                    >
                      {link.display}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 space-y-2 border-t mt-4">
              <Link
                href="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-amber-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sell"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center hover:from-amber-700 hover:to-amber-800 transition-colors"
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
