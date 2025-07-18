import React from 'react';
import Link from 'next/link';
import { X, Github } from 'lucide-react';
import DiscordIcon from './DiscordIcon';

const Footer = () => {
  return (
    <footer className="bg-[#191E1B] text-white py-12 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigate */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Navigate</h3>
            <ul className="text-[#D5DCE0] space-y-2">
              <li><Link href="/docs/philosophy" className="hover:text-white">Framework</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="text-[#D5DCE0] space-y-2">
              <li><Link href="https://ii.inc" className="hover:text-white" target="_blank">Intelligent Internet</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-start justify-start md:justify-end space-x-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><X size={20} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><Github size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
