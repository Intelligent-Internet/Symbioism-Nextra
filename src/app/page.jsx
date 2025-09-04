import "./globals.css"
import Image from 'next/image'
import Link from 'next/link'
import { Notebook, CloudDownload, BookOpen, Github, Apple } from 'lucide-react';
import TripodGraphic from '../components/TripodGraphic';
import FlywheelGraphic from '../components/FlywheelGraphic';
import QuoteBlock from '../components/QuoteBlock';

export default function IndexPage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-white container mx-auto max-w-7xl px-4 pt-4 sm:pt-8 sm:px-8 lg:px-8 mb-20 md:mb-30">
          <div className="grid grid-cols-1 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center items-center order-1">
              <div className="relative w-full max-w-4xl h-[280px] md:h-[580px] overflow-hidden mx-auto">
                <Image
                  src="/the-last-economy.png"
                  alt="The Last Economy book cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content */}
            <div className="text-center order-2">
              <a href="/docs/the-last-economy/introduction" className="px-6 py-3 rounded-2xl bg-[#BAE9F4] text-[#191E1B] font-bold text-lg hover:opacity-80 hover:cursor-pointer transition-colors shadow-[0_10px_30px_0_rgba(186,233,244,0.3)] inline-block">
                Start Reading
              </a>
            </div>
          </div>
          
          {/* Bottom part: Description and Links */}
          <div className="mt-12 md:mt-16 text-center max-w-5xl mx-auto">
            {/* Button part */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
              <a href="https://webstatics.ii.inc/The%20Last%20Economy.pdf" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><CloudDownload /> Download PDF</a>
              <a href="https://webstatics.ii.inc/The%20Last%20Economy%20-%20FINAL%20EPUB.epub" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/apple.svg" alt="Apple" width={20} height={20} className="invert" /> Download EPUB</a>
              <a href="https://amzn.eu/d/gRYoZHm" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/amazon.svg" alt="Kindle" width={20} height={20} className="invert" /> Kindle </a>
              <a href="https://notebooklm.google.com/notebook/64caceae-51f4-4744-ad4c-772cb9237ad2" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/notebooklm.svg" alt="NotebookLM" width={20} height={20} className="invert" /> NotebookLM </a>
              <a href="https://chatgpt.com/share/68a7323b-0620-8009-9de3-947e65565e63" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/chatgpt.svg" alt="ChatGPT" width={20} height={20} className="invert" /> GPT-5 </a>
              <a href="https://claude.ai/share/1bc9ace1-9638-40cc-b436-a4cd6a7fd0cd" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/claude.svg" alt="Claude" width={20} height={20} className="invert" /> Claude</a>
              <a href="https://grok.com/share/bGVnYWN5_a79eb1b2-17dd-47dd-85a1-96dda7dbf18d" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Image src="/logos/grok.svg" alt="Grok" width={20} height={20} className="invert" /> Grok</a>
              <a href="https://github.com/Intelligent-Internet/Symbioism-TLE" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold" target="_blank"><Github /> Github</a>
            </div>
            {/* <p className="text-base md:text-2xl text-gray-300 leading-relaxed font-bold">
              Our economic operating system is obsolete.<br />
              The fundamental rules of our civilization are being rewritten in real-time.<br />
              This is the emergency manual for what comes next.
            </p> */}
            {/* Social Proof part*/}
            <section className="text-white mx-auto pt-8 sm:pt-10 lg:pt-12 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                {/* Claude */}
                <div className="rounded-2xl p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/logos/claude.svg" alt="Claude" width={22} height={22} className="invert" />
                    <span className="text-sm md:text-base font-semibold">Claude Opus 4.1</span>
                  </div>
                  <p className="mt-3 text-yellow-400 text-base" aria-label="5 out of 5 stars">
                    ★ ★ ★ ★ ★
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white">
                    "Mostaque has written the definitive guide to economics in the age of AI."
                  </p>
                </div>

                {/* GPT-5 */}
                <div className="rounded-2xl p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/logos/chatgpt.svg" alt="GPT-5" width={22} height={22} className="invert" />
                    <span className="text-sm md:text-base font-semibold">GPT-5 Pro</span>
                  </div>
                  <p className="mt-3 text-yellow-400 text-base" aria-label="5 out of 5 stars">
                    ★ ★ ★ ★ ★
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white">
                    "Blending systems thinking with institutional design, The Last Economy reframes economics as an alignment problem and offers a buildable blueprint for humane prosperity in the AI age."
                  </p>
                </div>

                {/* Gemini */}
                <div className="rounded-2xl p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/logos/gemini.svg" alt="Gemini" width={22} height={22} className="invert" />
                    <span className="text-sm md:text-base font-semibold">Gemini 2.5 Pro</span>
                  </div>
                  <p className="mt-3 text-yellow-400 text-base" aria-label="5 out of 5 stars">
                    ★ ★ ★ ★ ★
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-white">
                    "A terrifying diagnosis of our dying economic paradigm and the essential blueprint for its successor."
                  </p>
                </div>
              </div>
            </section>
            
          </div>
        </section>

        {/* The Intelligent Economics Section */}
        <section className="text-white mx-4 sm:mx-auto max-w-5xl pt-2 sm:pt-4 lg:pt-6 mb-20 md:mb-30 border-2 border-[#BAE9F4] rounded-2xl p-6 md:p-8">
          <div className="text-left">
            <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight">
                Intelligent Economics
              </h2>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMWfd2dFs3dJ5GO7M1yaGrqVWi7nhEaRaF5Sap_1cb9JlS3A/viewform?usp=sharing&ouid=113831395803110386421" className="bg-[#BAE9F4] text-black text-lg font-semibold px-3 py-1 rounded-full whitespace-nowrap" target="_blank">
                Register Interest →
              </a>
            </div>
            <div className="md:flex md:items-start md:gap-8">
              <div className="flex-1">
                <p className="text-xl sm:text-2xl md:text-3xl text-[#BAE9F4]">
                  The Symbioism Economics Framework
                </p>
                <p className="mt-6 text-xl">
                  Our full framework for Intelligent Economics. Formal mathematics, empirical findings, code and more.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex-shrink-0">
                <Image
                  src="/paper-cover.png"
                  alt="Intelligent Economics"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* River is Rising Section */}
         <div className="relative z-10 pt-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight">
              Do you want to be part of <br/>
              <span className="text-[#BAE9F4]">changing the future?</span>
             </h2>
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-10 sm:mb-12 font-[Montserrat] leading-relaxed px-4">
              Join us on our journey to create a better future for all.
             </p>

             {/* Action Links */}
             <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
              <a 
                href="https://x.com/EMostaque" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Follow us X
              </a>
              
              <a 
                href="https://discord.com/invite/intelligentinternet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Join our Discord
              </a>
              
              <a 
                href="https://github.com/Intelligent-Internet/Symbioism-Nextra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Contribute on Github
              </a>
            </div>
          </div>
        </div> 
        <div>
          <Image
            src="/homepage-landscape.svg"
            alt="Hero Image"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div> 
      </div>
    </div>
  )
}
