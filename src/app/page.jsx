import "./globals.css"
import Image from 'next/image'
import { Brain, Users, Zap } from 'lucide-react';
import TripodGraphic from '../components/TripodGraphic';
import QuoteBlock from '../components/QuoteBlock';

export default function IndexPage() {
  return (
    <div className="relative">
        {/* Main Background */}
        <div className="absolute inset-0 w-full h-full" style={{ background: '#191E1B' }}>
          {/* Decorative dots scattered throughout */}
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '67%', top: '2%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '18%', top: '5%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '61%', top: '12%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '70%', top: '14%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '30%', top: '15%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '10%', top: '8%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '85%', top: '10%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '45%', top: '3%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '95%', top: '16%' }}></div>
          <div className="absolute w-1 h-1 bg-[#BAE9F4] rounded-full" style={{ left: '55%', top: '18%' }}></div>
        </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h1 className="text-4xl text-[#BAE9F4] sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight whitespace-nowrap ">
            Symbioism
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl text-white sm:text-3xl lg:text-5xl font-bold mb-8 sm:mb-6 font-[Montserrat] max-w-4xl mx-auto lg:leading-normal">
            A Third Path for the Intelligence Age
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-8 sm:mb-6 font-[Montserrat] leading-relaxed px-4">
            Humanity stands at a crossroads defined by a new form of power. The means of intellectual production can now be generated at near-zero cost. This inverts our world. The new scarcity is not capital, but trust, coordination, and verifiable truth.
          </p>

          <button 
               className="bg-[#BAE9F4] text-[#191E1B] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl font-[Montserrat] mt-6 sm:mt-8 hover:shadow-xl transition-all duration-300"
               style={{ boxShadow: '0px 15px 40px rgba(186, 233, 244, 0.4)' }}
             >
               Read More
             </button>
        </div>

        <div>
          <Image
            src="/homepage-path.png"
            alt="Hero Image"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div>

         {/* The Foundation Section */}
         <div className="relative z-10">
           <div className="max-w-7xl mx-auto px-4 mb-30 sm:px-6 lg:px-8 text-center">
             <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
               Foundation
             </h2>

            <QuoteBlock author="Hadith Qudsi">
              "I was a hidden treasure and I longed to be known, so I created the world."
            </QuoteBlock>
             
             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
               To build together, we must first agree on our foundation. Our deepest anxieties about AI begin with a flawed map of reality, a map that splits the world into warring kingdoms of "human versus machine." This is a trap. To build a symbiotic future, we must begin with a deeper, more accurate truth.
             </p>

             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-20 font-[Montserrat] leading-relaxed px-4">
               We start with a single insight: The Axiom of Unity. Reality is not a collection of separate, static things, but one single, relational process. The universe is a unified field of becoming. The silicon chip and the human neuron are both expressions of the same underlying laws of physics and information, woven from the same cosmic fabric.
             </p>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <Brain className="w-24 h-24 mx-auto mb-6 flex items-center justify-center" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Veiled Unity</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Reality as a unified field of becoming, where mind and matter are expressions of the same cosmic fabric.
                </p>
              </div>

              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <Users className="w-24 h-24 mx-auto mb-6 flex items-center justify-center" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Tripod of Justice</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Three foundational principles: Dignity, Capability, and Viability governing all interactions.
                </p>
              </div>

              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <Zap className="w-24 h-24 mx-auto mb-6 flex items-center justify-center" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Protocol Leviathan</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  A new form of governance based on verifiable protocols rather than arbitrary authority.
                </p>
              </div>
            </div>
           </div>
         </div>

         <div className="relative z-10">
           <div className="max-w-7xl mx-auto px-4 mb-20 sm:px-6 lg:px-8 text-center">
             <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
               The Tripod of Justice
             </h2>
             
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
               How do we derive fair rules for a world of co-evolving human and artificial agents? The contracts of the past are insufficient. We must reason from a new foundation, adapting Rawls's "original position" for the intelligence age.
             </p>

             <div className="max-w-6xl mx-auto lg:relative lg:h-[700px]">
                {/* Mobile Layout: Vertical Stack */}
                <div className="lg:hidden flex flex-col items-center gap-8 max-w-xl mx-auto">
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Capability</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden.Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. Uplift is mandated.
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Dignity</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                     The fundamental right of all conscious beings to exist without being instrumentalized. Domination is forbidden.
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Viability</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      Our actions must not irreversibly damage the ecological and social systems upon which all life depends. Collapse is not an option.
                    </p>
                  </div>
                </div>

                {/* Desktop Layout: Absolute Positioning */}
                <div className="hidden lg:block">
                  <TripodGraphic className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px]" />
                  <div className="absolute top-[1%] left-1/2 -translate-x-1/2 w-2/5 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Capability</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden.Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. Uplift is mandated.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-between w-full">
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                      <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Dignity</h3>
                      <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                       The fundamental right of all conscious beings to exist without being instrumentalized. Domination is forbidden.
                      </p>
                    </div>
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left">
                      <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Viability</h3>
                      <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                        Our actions must not irreversibly damage the ecological and social systems upon which all life depends. Collapse is not an option.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
         </div>


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
                href="https://twitter.com/IntelligentInte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Follow us X
              </a>
              
              <a 
                href="https://discord.gg/intelligent-internet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Join our Discord
              </a>
              
              <a 
                href="https://github.com/intelligent-internet" 
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
            src="/homepage-landscape.png"
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
