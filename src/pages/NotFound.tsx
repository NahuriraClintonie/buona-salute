import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-muted/30">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
          <span className="material-icons-outlined text-brand-gold text-5xl">construction</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Under Construction</h1>
        <p className="text-lg text-muted-foreground mb-2">
          This page is still being built.
        </p>
        <p className="text-muted-foreground mb-8">
          We're working hard to bring you this content. Please check back soon or explore our other pages.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all shadow-lg"
        >
          <span className="material-icons-outlined">home</span>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
