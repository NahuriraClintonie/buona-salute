import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/navigation";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Buona Salute Global Initiatives" className="h-12 md:h-14 w-auto" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">Buona Salute</p>
            <p className="text-xs text-muted-foreground leading-tight">Global Initiatives</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
                {item.children && (
                  <span className="material-icons-outlined text-sm ml-0.5 align-middle">expand_more</span>
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-elevated py-2 min-w-[180px] animate-fade-in">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-icons-outlined text-foreground">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-max py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                  }}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children &&
                  item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
