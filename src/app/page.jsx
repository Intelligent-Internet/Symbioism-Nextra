import "./globals.css"
import Image from 'next/image'
import Link from 'next/link'
import { Podcast, CloudDownload, BookOpen, Github } from 'lucide-react';
import TripodGraphic from '../components/TripodGraphic';
import FlywheelGraphic from '../components/FlywheelGraphic';
import QuoteBlock from '../components/QuoteBlock';
import StarryBackground from '../components/StarryBackground';

export default function IndexPage() {
  return (
    <div className="relative">
      {/* Main Background */}
      <div className="absolute inset-0 z-0">
        <StarryBackground starCount={240} />
      </div>
      
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-white container mx-auto max-w-7xl px-4 pt-2sm:px-6 lg:px-8 mb-30">
          <div className="grid md:grid-cols-2 gap-2 items-center">
            {/* Left side: Title, Subtitle, Button */}
            <div className="pl-20 text-center md:text-left">
              <h1 className="text-8xl font-bold tracking-tighter leading-none pt-4">
                THE <br />
                <span className="text-[#BAE9F4]">LAST</span><br />
                ECONOMY
              </h1>
              <p className="mt-10 text-4xl">
                An Operating System for a New World
              </p>
              <a href="/docs/the-last-economy/introduction" className="mt-8 px-6 py-3 rounded-2xl bg-[#BAE9F4] text-[#191E1B] font-bold text-lg hover:opacity-80 hover:cursor-pointer transition-colors shadow-[0_10px_30px_0_rgba(186,233,244,0.3)] inline-block">
                Start Reading
              </a>
            </div>
            {/* Right side: Book Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-2xl h-[640px] overflow-hidden">
                <Image
                  src="/the-last-economy.png"
                  alt="The Last Economy book cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Bottom part: Description and Links */}
          <div className="mt-14 text-center max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-bold">
              Our economic operating system is obsolete.<br />
              The fundamental rules of our civilization are being rewritten in real-time.<br />
              This is the emergency manual for what comes next.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold"><CloudDownload /> Download PDF</a>
              <a href="#" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold"><Podcast /> Podcast</a>
              <a href="#" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold"><BookOpen /> Kindle</a>
              <a href="#" className="border-2 border-[#BAE9F4] hover:bg-[#BAE9F4]/50 transition-colors py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-bold"><Github /> Github</a>
            </div>
          </div>
        </section>

        {/* The Symbioism Section */}
        <section className="text-white container mx-auto max-w-5xl pt-2 sm:pt-4 lg:pt-6 mb-10 border-2 border-[#BAE9F4] rounded-2xl p-8">
          <div className="text-left">
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold font-[Montserrat] leading-tight">
                Symbioism
              </h2>
              <a href="/symbioism" className="bg-[#BAE9F4] text-black text-lg font-semibold px-3 py-1 rounded-full whitespace-nowrap hover:bg-[#BAE9F4]/80 transition-colors">
                Read More →
              </a>
            </div>
            <p className="mt-8 text-4xl text-[#BAE9F4]">
              A Third Path for the Intelligence Age
            </p>
            <p className="mt-6 text-xl">
              Humanity stands at a crossroads defined by a new form of power. The means of intellectual production can now be generated at near-zero cost. This inverts our world. The new scarcity is not capital, but trust, coordination, and verifiable truth. This power presents two paths to ruin.
            </p>
          </div>
        </section>

        {/* The Intelligent Economics Section */}
        <section className="text-white container mx-auto max-w-5xl pt-2 sm:pt-4 lg:pt-6 mb-30 border-2 border-[#BAE9F4] rounded-2xl p-8">
          <div className="text-left">
            <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold font-[Montserrat] leading-tight">
                Intelligent Economics
              </h2>
              <span className="bg-[#BAE9F4] text-black text-lg font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                Coming Soon
              </span>
            </div>
            <p className="mt-8 text-4xl text-[#BAE9F4]">
              The Symbioism Economics Framework
            </p>
            <p className="mt-6 text-xl">
              The theoretical edifice of 20th-century economics, built on the twin pillars of scarcity and equilibrium, is crumbling. This paper argues that incremental fixes are insufficient. We require a complete reconstruction of economic science, moving its foundations from the contingent psychology of human preference to the universal physics of information and computation. This is the charter for that reconstruction: a new paradigm we call Intelligent Economics.
            </p>
          </div>
        </section>

        {/* River is Rising Section */}
         <div className="relative z-10 pt-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight">
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
