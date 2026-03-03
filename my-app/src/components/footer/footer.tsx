import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, Twitter, Linkedin } from 'lucide-react';

const sections = [
  {
    title: "Product",
    links: [
      { name: "Live Demo", href: "#" },
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Adro", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: '#', icon: <Github className="h-5 w-5" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="h-5 w-5" /> },
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> }
];

const Footer = () => {
  return (
    <footer className="w-full relative -mt-24 z-20 text-slate-800">
      {/* Background with enhanced glass effect */}
      <div
        className="absolute inset-0 bg-white/[0.03] border-t border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]"
        style={{
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)'
        }}
      />

      {/* Faded top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-px z-30"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3) 50%, transparent)'
        }}
      />

      <div className="relative px-8 md:px-12 pt-32 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Logo and Description - Leftmost alignment and more width */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-0 w-fit transition-transform hover:scale-[1.02] active:scale-95">
              <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center border border-white/10 bg-white/5">
                <Image
                  src="/logo.png"
                  alt="Adro Logo"
                  width={36}
                  height={36}
                  className="object-cover rounded-full"
                />
              </div>
              <Image
                src="/adrofont.png"
                alt="Adro"
                width={115}
                height={36}
                className="object-contain -ml-1.5"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Adro is an AI-powered data analytics platform that transforms CSV and Excel files into intelligent dashboards and actionable insights in seconds.
            </p>
            {/* Social Links for Desktop */}
            <div className="hidden md:flex items-center gap-5 mt-4">
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-600 hover:scale-110 transition-all duration-200"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Adro. All rights reserved. • Built for modern data teams
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;