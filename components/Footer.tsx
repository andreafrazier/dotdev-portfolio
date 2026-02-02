import { Code, Link as LinkIcon , Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Andrea Frazier</h3>
            <p className="text-gray-300 text-sm">
              Full-Stack Developer & Technical Consultant building platforms and
              providing professional services in Detroit and remotely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/work" className="text-gray-300 hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              
            <a href="https://github.com/andreafrazier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
            >
                <Code className="h-6 w-6" />
            </a>
              
            <a  href="https://linkedin.com/in/andreafrazier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
            >
                <LinkIcon className="h-6 w-6" />
            </a>
              
            <a  href="mailto:andrea@andreafrazier.dev"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
            >
            
                <Mail className="h-6 w-6" />
            </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Andrea Frazier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}