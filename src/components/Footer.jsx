import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#191E1B] text-white py-12 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigate */}
          {/* <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Navigate</h3>
            <ul className="text-[#D5DCE0] space-y-2">
              <li><Link href="/docs/index" className="hover:text-white">Framework</Link></li>
            </ul>
          </div> */}

          {/* Resources */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="text-[#D5DCE0] space-y-2">
              <li><Link href="https://ii.inc" className="hover:text-white" target="_blank">Intelligent Internet</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-start justify-start md:justify-end space-x-4">
            <a href="https://discord.gg/KNW9ny3cyf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <svg width="20" height="20" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104.193 21.6675C96.2307 17.9423 87.7173 15.2349 78.8168 13.6934C77.7238 15.6696 76.4467 18.3277 75.5662 20.4422C66.1048 19.0194 56.7304 19.0194 47.4429 20.4422C46.5626 18.3277 45.2566 15.6696 44.1537 13.6934C35.2436 15.2349 26.7205 17.9522 18.7585 21.6872C2.69904 45.9552 -1.65441 69.6203 0.522323 92.9494C11.1738 100.904 21.4963 105.736 31.6447 108.898C34.1504 105.449 36.3851 101.783 38.3103 97.9197C34.6437 96.5264 31.132 94.8071 27.8138 92.8112C28.6941 92.159 29.5551 91.4771 30.387 90.7756C50.6257 100.242 72.6156 100.242 92.6125 90.7756C93.4542 91.4771 94.3151 92.159 95.1858 92.8112C91.8578 94.8169 88.3365 96.5362 84.6699 97.9296C86.5951 101.783 88.8202 105.459 91.3355 108.907C101.494 105.745 111.826 100.914 122.477 92.9494C125.031 65.905 118.114 42.4572 104.193 21.6675ZM41.0675 78.6022C34.9921 78.6022 30.0097 72.9304 30.0097 66.0236C30.0097 59.1167 34.8857 53.4351 41.0675 53.4351C47.2495 53.4351 52.2317 59.1068 52.1253 66.0236C52.135 72.9304 47.2495 78.6022 41.0675 78.6022ZM81.932 78.6022C75.8566 78.6022 70.8742 72.9304 70.8742 66.0236C70.8742 59.1167 75.75 53.4351 81.932 53.4351C88.1139 53.4351 93.0963 59.1068 92.9899 66.0236C92.9899 72.9304 88.1139 78.6022 81.932 78.6022Z" fill="white"/>
              </svg>
            </a>
            <Youtube 
              href='https://www.youtube.com/@ii_posts/videos'
              className='text-white w-6 h-6 cursor-pointer'
              target="_blank"
            />
            <a href="https://x.com/EMostaque" target="_blank" rel="noopener noreferrer" className="text-white w-6 h-6 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 300 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M178.57 127.15L290.27 0H263.81L166.78 110.38L89.34 0H0L117.13 166.93L0 300.25H26.46L128.86 183.66L210.66 300.25H300M36.01 19.54H76.66L263.79 281.67H223.13" fill="white"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
