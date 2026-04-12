import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Buona Salute" className="h-12 w-auto rounded" />
              <div>
                <p className="font-bold text-background">Buona Salute</p>
                <p className="text-sm text-background/70">Global Initiatives</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Access to Medicine Through Collective Action. Empowering communities in Uganda for better healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Programs", "Impact", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-sm text-background/70 hover:text-brand-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-background mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {["Partner With Us", "Volunteer", "Donate", "Join a Patient Group"].map((item) => (
                <li key={item}>
                  <Link
                    to="/get-involved"
                    className="text-sm text-background/70 hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <span className="material-icons-outlined text-brand-gold text-lg">location_on</span>
                <span>Wakaliga, Lubaga Division, Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons-outlined text-brand-gold text-lg">email</span>
                <span>info@buonasalute.org</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons-outlined text-brand-gold text-lg">phone</span>
                <div className="flex flex-col">
                  <a href="tel:+256772333412" className="hover:text-brand-gold transition-colors">+256 772 333 412</a>
                  <a href="tel:+256782196628" className="hover:text-brand-gold transition-colors">+256 782 196 628</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Buona Salute Global Initiatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
