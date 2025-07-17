import "./globals.css"

export default function IndexPage() {
  return (
    <div>
      <div className="relative z-10 pt-24 sm:pt-32 pb-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             {/* Main Title */}
             <h1 className="text-4xl text-[#BAE9F4] sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight whitespace-nowrap ">
               Symbioism
             </h1>
             
             {/* Subtitle */}
             <h2 className="text-xl text-white sm:text-3xl lg:text-5xl font-bold mb-12 sm:mb-16 font-[Montserrat] max-w-4xl mx-auto lg:leading-normal">
               A Third Path for the Intelligence Age
             </h2>

             {/* Description */}
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
               Humanity stands at a crossroads defined by a new form of power. The means of intellectual production can now be generated at near-zero cost. This inverts our world. The new scarcity is not capital, but trust, coordination, and verifiable truth.
             </p>

           </div>
         </div>

         {/* Third Path Section */}
         <div className="relative z-10">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
               We are building the <span className="text-[#BAE9F4]">Third Path</span>
             </h2>
             
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
               Intelligent Internet is not a utopian dream; it is an architected protocol that rewrites the rules of our economy. It introduces a system built on contribution, not extraction. It aligns technological progress with human flourishing. It creates abundance by design.
             </p>

             {/* Logo and Path Image */}
             <div className="relative flex justify-center items-center sm:mb-[-80px]">
               <div className="relative w-32 h-32 sm:w-48 sm:h-48">
               </div>
             </div>

             {/* Path Background Image */}
             <div className="relative w-full max-w-6xl mx-auto h-40 sm:h-60 lg:h-80 sm:mb-[-40px]">
             </div>
           </div>
         </div>

                 {/* Architecture Section */}
         <div className="relative z-10 pb-12 sm:pb-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 font-[Montserrat] leading-tight">
               <span className="text-white">The Architecture for a </span>
               <span className="text-[#BAE9F4]">Better Future</span>
             </h2>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Constitution */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-full flex items-center justify-center">
                </div>
                <h3 className="text-lg font-bold text-[#BAE9F4] mb-4 font-[Montserrat]">Constitution</h3>
                <div className="bg-[#191E1B] border border-[#BAE9F4] rounded-lg p-6 h-32 flex items-center">
                  <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '20px' }}>
                    Founded on the Tripod of Justice: Dignity for all beings, Capability to flourish, and Viability for our planet.
                  </p>
                </div>
              </div>

              {/* Economy of Abundance */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-full flex items-center justify-center">
                </div>
                <h3 className="text-lg font-bold text-[#BAE9F4] mb-4 font-[Montserrat]">Economy of Abundance</h3>
                <div className="bg-[#191E1B] border border-[#BAE9F4] rounded-lg p-6 h-32 flex items-center">
                  <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '20px' }}>
                    A dual-currency system (ICC & IFC) where value is created from Proof-of-Benefit, rewarding contributions to the common good.
                  </p>
                </div>
              </div>

              {/* Intelligence for All */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-full flex items-center justify-center">
                </div>
                <h3 className="text-lg font-bold text-[#BAE9F4] mb-4 font-[Montserrat]">Intelligence for All</h3>
                <div className="bg-[#191E1B] border border-[#BAE9F4] rounded-lg p-6 h-32 flex items-center">
                  <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '20px' }}>
                    Guaranteed universal access to a personal AI agent (UBAI) to augment our skills and empower every individual.
                  </p>
                </div>
              </div>

              {/* Guardian Lattice */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-full flex items-center justify-center">
                </div>
                <h3 className="text-lg font-bold text-[#BAE9F4] mb-4 font-[Montserrat]">Guardian Lattice</h3>
                <div className="bg-[#191E1B] border border-[#BAE9F4] rounded-lg p-6 h-32 flex items-center">
                  <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '20px' }}>
                    An automated immune system of auditable AIs that ensures the protocol is transparent, fair, and accountable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Complete Blueprint Section */}
         <div className="relative z-10 py-12 sm:py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 font-[Montserrat] leading-tight">
               <span className="text-white">The Complete </span>
               <span className="text-[#BAE9F4]">Blueprint</span>
             </h2>
             
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] text-center max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
               Intelligent Internet is a comprehensive, multi-layered framework. We invite you to explore the vision, engine, and blueprint.
             </p>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* The Core */}
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Core</h3>
                <h4 className="text-lg font-semibold text-white mb-6 font-[Montserrat]">Symbioism</h4>
                <p className="text-base text-[#D5DCE0] mb-8 font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Understand the philosophy and the new social contract designed for the Intelligence Age.
                </p>
                <a 
                  href="https://symbioism.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#BAE9F4] text-black px-12 py-3 rounded-full font-bold text-base font-[Montserrat] border-2 border-[#BAE9F4] hover:bg-transparent hover:text-[#BAE9F4] transition-all duration-300"
                  style={{ boxShadow: '0px 10px 30px rgba(186, 233, 244, 0.3)' }}
                >
                  Symbioism.com
                </a>
              </div>

              {/* The Blueprint */}
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Blueprint</h3>
                <h4 className="text-lg font-semibold text-white mb-6 font-[Montserrat]">Whitepaper</h4>
                <p className="text-base text-[#D5DCE0] mb-8 font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  The complete technical specification for the Intelligent Internet protocol. This is the guide for builders.
                </p>
              </div>

              {/* The Compass */}
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Compass</h3>
                <h4 className="text-lg font-semibold text-white mb-6 font-[Montserrat]">Master Plan</h4>
                <p className="text-base text-[#D5DCE0] mb-8 font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Dive into the mechanics of the MIND Economy, the dual-currency system, and Proof-of-Benefit.
                </p>
              </div>
            </div>
          </div>
        </div>

                 {/* River is Rising Section */}
         <div className="relative z-10 py-12 sm:py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight">
               <span className="text-white">The River is </span>
               <span className="text-[#BAE9F4]">Rising</span>
               <span className="text-white">. Join the Flow.</span>
             </h2>
             
             <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-10 sm:mb-12 font-[Montserrat] leading-relaxed px-4">
               The future is not something we wait for; it&apos;s something we build. The tools are here. The community is waiting. The work begins now.
             </p>

             {/* Main Join Button */}
             <button 
               className="bg-[#BAE9F4] text-[#191E1B] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl font-[Montserrat] mb-12 sm:mb-16 hover:shadow-xl transition-all duration-300"
               style={{ boxShadow: '0px 15px 40px rgba(186, 233, 244, 0.4)' }}
             >
               Join us
             </button>

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
      </div>
  )
}
