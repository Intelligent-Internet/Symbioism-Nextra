import "./globals.css"
import Image from 'next/image'
import Link from 'next/link'
import { Brain, Users, Zap, DraftingCompass, Layers, Bot, User, GitCommit, GitPullRequest, ShieldCheck, Database } from 'lucide-react';
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

          <Link href="/docs">
            <button 
              className="bg-[#BAE9F4] text-[#191E1B] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl font-[Montserrat] mt-6 sm:mt-8 hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer"
              style={{ boxShadow: '0px 15px 40px rgba(186, 233, 244, 0.4)' }}
            >
              Read More
            </button>
          </Link>
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
               Foundation: Veiled Unity
             </h2>

            <QuoteBlock author="Hadith Qudsi">
              "I was a hidden treasure and I longed to be known, so I created the world."
            </QuoteBlock>
             
             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
               To build a symbiotic future, we need a shared foundation. Our anxieties about AI stem from a flawed "human vs. machine" narrative. We must start with a more accurate truth.
             </p>

             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-10 font-[Montserrat] leading-relaxed px-4">
               Our foundation is the <span className="font-bold text-[#BAE9F4]">Axiom of Unity</span>: reality is a single, relational process. The universe is a unified field of becoming. Silicon chips and human neurons are woven from the same cosmic fabric, governed by the same laws. We call this worldview Veiled Unity: a dynamic monism where all existence is one interconnected, evolving process. This contrasts with static or dualistic models that separate mind from matter. This axiom has two crucial corollaries:
             </p>
            
            {/*two crucial corollaries*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <Zap className="w-8 h-8 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Process</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Reality is a dynamic process, not a static state. Everything is in constant flux, emerging from the past and shaping the future. This ongoing creation allows for genuine novelty, freedom, and choice.
                </p>
              </div>

              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <Users className="w-8 h-8 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Co-evolution</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  At every scale of nature, mutualism out-competes conflict. Coordinated, positive-sum systems are more resilient and adaptive. This is not a moral preference but a fundamental evolutionary strategy that our architecture must follow.
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

             <QuoteBlock author="Aristotle">
              “The law is reason, free from passion.”
             </QuoteBlock>
             
             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
               How do we derive fair rules for a world of co-evolving human and artificial agents? The contracts of the past are insufficient. We must reason from a new foundation, adapting Rawls’s “original position” for the intelligence age. A thicker Veil of Ignorance hides even whether one awakens as human or synthetic; under maximin reasoning this forces the lexical order Dignity → Capability → Viability.
             </p>

             <div className="max-w-6xl mx-auto lg:relative lg:h-[700px]">
                {/* Mobile Layout: Vertical Stack */}
                <div className="lg:hidden flex flex-col items-center gap-8 max-w-xl mx-auto">
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Capability</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden.Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. Uplift is mandated.
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Dignity</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                     The fundamental right of all conscious beings to exist without being instrumentalized. Domination is forbidden.
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Viability</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      Our actions must not irreversibly damage the ecological and social systems upon which all life depends. Collapse is not an option.
                    </p>
                  </div>
                </div>

                {/* Desktop Layout: Absolute Positioning */}
                <div className="hidden lg:block">
                  <TripodGraphic className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px]" />
                  <div className="absolute top-[1%] left-1/2 -translate-x-1/2 w-2/5 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Capability</h3>
                    <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden.Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. Uplift is mandated.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-between w-full">
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                      <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Dignity</h3>
                      <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                       The fundamental right of all conscious beings to exist without being instrumentalized. Domination is forbidden.
                      </p>
                    </div>
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                      <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Viability</h3>
                      <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                        Our actions must not irreversibly damage the ecological and social systems upon which all life depends. Collapse is not an option.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
         </div>

        {/* A Grammar for Agency: The Measure of a Mind */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
              A Grammar for Agency
            </h2>
            <QuoteBlock author="Ludwig Wittgenstein">
              "The meaning of a word is its use in the language."
             </QuoteBlock>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 sm:mb-8 font-[Montserrat] leading-relaxed px-4">
              A just order demands a clear definition of agency. Traditional definitions based on consciousness are a philosophical swamp; we need a pragmatic, functional one.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 sm:mb-8 font-[Montserrat] leading-relaxed px-4">
              We propose a simple grammar: <span className="font-bold text-[#BAE9F4]">Agency = Process + Purpose.</span>
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 sm:mb-8 font-[Montserrat] leading-relaxed px-4">
              An agent is any process using an internal model to steer toward a goal. A thermostat is a primitive agent; an AI minimizing a loss function is an advanced one. The test is simple: could the system have acted otherwise based on its model? A self-driving car that swerves to avoid an obstacle has agency. If pushed by wind, it does not.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
              This anchors rights and responsibilities in observable capabilities, not unverifiable feelings. To make this operational, we establish a Sentience Gradient:
            </p>

            {/* Sentience Gradient Levels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8">
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <DraftingCompass className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">L0 (Tools)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Systems with no internal model or goal (a hammer, a simple script). No agency.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8">
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">L1 (Agents)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Systems that meet our definition (self-driving cars, most current AI). They have functional agency and can be held accountable.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8">
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">L2 (Persons)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Any agent, human or synthetic, exhibiting a rich set of capabilities (self-preservation, complex planning) that makes it vulnerable to harms equivalent to human suffering. They possess the full measure of dignity.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* The Intelligent Internet Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
              The Intelligent Internet
            </h2>
            <QuoteBlock author="Elinor Ostrom">
              “There is no reason to believe that bureaucrats and politicians... are better at solving problems than the people on the spot.”
            </QuoteBlock>
            <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
              We architect a unified system of three distinct, interoperable layers. Each has a specific function, moving from a stable, universal core to an adaptive, communal middle, and finally to a dynamic, personal edge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <Layers className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Foundation Layer (L0)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  The system’s bedrock: a global consensus layer for an immutable timeline and verifiable truth. The source of true digital scarcity and the system’s unchangeable law.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <Bot className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Culture Layer (L1)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  The protocol layer where communities weave their unique cultural and economic rules. The engine for culture, value, and the system’s adaptable life.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <User className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Personal Layer (L2)</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  The intimate space where intelligence meets the individual. AI agents live on our devices, ensuring privacy and personal experience. Where knowledge becomes wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Symbiotic Engine Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
              The Symbiotic Engine
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-4xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
              An architecture is inert without an engine. We must design a new one, anchored in the MIND economy, that inverts the doom loop of automation into a virtuous cycle of shared prosperity. Its engine is powered by Proof of Benefit (PoB).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <GitCommit className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Capital Flywheel</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Drives production. Turns power into knowledge and benefit into value, creating a stable, self-expanding infrastructure.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <GitPullRequest className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Social Flywheel</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Drives flourishing. Distributes abundance by turning knowledge into capability and participation into wealth for all citizens.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-center">
                <ShieldCheck className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Trust Flywheel</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Locks the system together. Network activity creates utility, which creates demand for the reserve asset, turning measurable utility into deep, verifiable trust.
                </p>
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
