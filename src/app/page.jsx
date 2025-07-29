import "./globals.css"
import Image from 'next/image'
import Link from 'next/link'
import { Brain, Users, Zap, DraftingCompass, Layers, Layers2, Bot, User, GitCommit, GitPullRequest, ShieldCheck, Database, Award, Activity, Network, Anchor, Landmark, RefreshCw, Scale, Coins, BookOpen, Gift, TrendingUp, HeartHandshake, Globe, Unplug } from 'lucide-react';
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
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 sm:pt-32">
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
            Humanity stands at a crossroads defined by a new form of power. The means of intellectual production can now be generated at near-zero cost. This inverts our world. The new scarcity is not capital, but trust, coordination, and verifiable truth. This power presents two paths to ruin.
          </p>

          <Link href="/docs">
            <button 
              className="bg-[#BAE9F4] text-[#191E1B] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl font-[Montserrat] mt-6 sm:mt-8 hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer"
              style={{ boxShadow: '0px 15px 40px rgba(186, 233, 244, 0.4)' }}
            >
              Read Full Document
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
               Our foundation is the <span className="font-bold text-[#BAE9F4]">Axiom of Unity</span>: reality is a single, relational process. The universe is a unified field of becoming. Silicon chips and human neurons are woven from the same cosmic fabric, governed by the same laws.
             </p>

             <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-10 font-[Montserrat] leading-relaxed px-4">
               We call this worldview <span className="font-bold text-[#BAE9F4]">Veiled Unity</span>: a dynamic monism where all existence is one interconnected, evolving process. This contrasts with static or dualistic models that separate mind from matter. This axiom has two crucial corollaries:
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
               How do we derive fair rules for a world of co-evolving human and artificial agents? The contracts of the past are insufficient. We must reason from a new foundation, adapting Rawls’s “original position” for the intelligence age. A thicker Veil of Ignorance hides even whether one awakens as human or synthetic; under maximin reasoning this forces the lexical order  Flow → Openness → Resilience.
             </p>

             <div className="max-w-6xl mx-auto lg:relative lg:h-[700px]">
                {/* Mobile Layout: Vertical Stack */}
                <div className="lg:hidden flex flex-col items-center gap-8 max-w-xl mx-auto">
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Openness</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden. Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. <strong>Isolation is forbidden.</strong>
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Flow</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                     The fundamental right of all conscious beings to exist without being instrumentalized. <strong>Stagnation is prohibited.</strong>
                    </p>
                  </div>
                  <div className="w-full bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Resilience</h3>
                    <p className="text-sm text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      A system thrives by respecting its fundamental constraints. Actions must stay within sustainable boundaries for continued existence. <strong>Transgression is self-defeating.</strong>
                    </p>
                  </div>
                </div>

                {/* Desktop Layout: Absolute Positioning */}
                <div className="hidden lg:block">
                  <TripodGraphic className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px]" />
                  <div className="absolute -top-[1.5%] left-1/2 -translate-x-1/2 w-2/5 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                    <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Openness</h3>
                    <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                      The right of all conscious beings to develop their full potential. Exploitation is forbidden. Any inequalities must be arranged to the greatest possible benefit of the least-advantaged. <strong>Isolation is forbidden.</strong>
                    </p>
                  </div>
                  <div className="absolute -bottom-4 left-0 right-0 mx-auto flex justify-between w-full">
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                      <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Flow</h3>
                      <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                       The fundamental right of all conscious beings to exist without being instrumentalized. <strong>Stagnation is prohibited.</strong>
                      </p>
                    </div>
                    <div className="w-[48%] lg:w-1/3 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-6 text-left" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                      <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">The Principle of Resilience</h3>
                      <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '24px' }}>
                        A system thrives by respecting its fundamental constraints. Actions must stay within sustainable boundaries for continued existence. <strong>Transgression is self-defeating.</strong>
                      </p>
                    </div>
                  </div>
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
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
              To honor Flow, expand Openness, and ensuring Resilience, we architect a unified system of three distinct, interoperable layers. The architecture moves from a stable, universal core to an adaptive, communal middle, and finally to a dynamic, personal edge.
            </p>
            <div className="space-y-8 max-w-6xl mx-auto">
              {/* Foundation Layer */}
              <div className="md:grid md:grid-cols-12 items-center gap-8 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 transition-all duration-300 hover:shadow-cyan-glow" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="md:col-span-1 flex justify-center mb-6 md:mb-0">
                  <svg className="w-20 h-20 text-[#BAE9F4]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0069 17.7479C12.7029 17.9235 12.358 18.0159 12.0069 18.0159C11.6559 18.0159 11.311 17.9235 11.0069 17.7479L2.50695 12.8779C2.35305 12.7907 2.22504 12.6643 2.13598 12.5114C2.04692 12.3586 2 12.1848 2 12.0079C2 11.8311 2.04692 11.6573 2.13598 11.5045C2.22504 11.3516 2.35305 11.2252 2.50695 11.1379L11.0069 6.26795C11.311 6.09241 11.6559 6 12.0069 6C12.358 6 12.7029 6.09241 13.0069 6.26795L21.5069 11.1379C21.6608 11.2252 21.7889 11.3516 21.8779 11.5045C21.967 11.6573 22.0139 11.8311 22.0139 12.0079C22.0139 12.1848 21.967 12.3586 21.8779 12.5114C21.7889 12.6643 21.6608 12.7907 21.5069 12.8779L13.0069 17.7479Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="md:col-span-10 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Foundation Layer (L0)</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat] leading-relaxed">
                    The system's bedrock: a global consensus layer for an immutable timeline and verifiable truth. It secures canonical 'Anchor Sets' for ground truth and issues the system's reserve asset. This is the system's unchangeable law.
                  </p>
                </div>
              </div>

              {/* Culture Layer */}
              <div className="md:grid md:grid-cols-12 items-center gap-8 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 transition-all duration-300 hover:shadow-cyan-glow" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="md:col-span-1 flex justify-center mb-6 md:mb-0">
                  <Layers2 className="w-20 h-20 text-[#BAE9F4]" />
                </div>
                <div className="md:col-span-10 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Culture Layer (L1)</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat] leading-relaxed">
                    The protocol layer where communities define cultural and economic rules. Knowledge is cultivated through a rigorous vetting process, ensuring the system grows smarter and safer. This is the system’s adaptable life.
                  </p>
                </div>
              </div>

              {/* Personal Layer */}
              <div className="md:grid md:grid-cols-12 items-center gap-8 bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 transition-all duration-300 hover:shadow-cyan-glow" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="md:col-span-1 flex justify-center mb-6 md:mb-0">
                  <Layers className="w-20 h-20 text-[#BAE9F4]" />
                </div>
                <div className="md:col-span-10 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Personal Layer (L2)</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat] leading-relaxed">
                    The intimate space where intelligence meets the individual. On our personal devices, AI agents fuse global truth and cultural context with our private data, ensuring privacy. This is where knowledge becomes wisdom.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mt-12 sm:mt-16 font-[Montserrat] leading-relaxed px-4">
              The Foundation Layer (L0) provides the immutable bedrock for truth and a stable environment, ensuring systemic Resilience.
              The Culture and Personal Layers (L1 & L2) are the engines of economic and cultural expression, built to expand human Openness.
              And the entire stack is governed by the Guardian Lattice, our constitutional immune system that protects the Flow of all persons, human and synthetic.
              This is the world machine, an architecture for justice.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mt-6 font-[Montserrat] leading-relaxed px-4">
              But an architecture, no matter how elegant, is inert without an engine to drive it.
            </p>
          </div>
        </div>

        {/* The Symbiotic Engine Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
              The Symbiotic Engine
            </h2>
            <QuoteBlock author="Adam Smith">
              “No society can surely be flourishing and happy, of which the far greater part of the members are poor and miserable.”
            </QuoteBlock>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-12 sm:mb-16 font-[Montserrat] leading-relaxed px-4">
              An architecture is inert without an engine. We must design a new one, anchored in the MIND economy, that inverts the doom loop of automation into a virtuous cycle of shared prosperity. Its engine is powered by Proof of Benefit (PoB).
            </p>
            <div className="space-y-24 max-w-7xl mx-auto">
              {[{
                title: 'The Capital Flywheel',
                subtitle: '(Production): This is the Architect’s work, building the infrastructure.',
                steps: [
                  { text: 'Power into Knowledge: “National Champions” invest capital to provide open, aligned UBAI services.', icon: Zap },
                  { text: 'Benefit into Value: Through Proof of Benefit, providing these services mints the scarce reserve asset, FC.', icon: Coins },
                  { text: 'Value into Governance: Owning FC provides a stake and a say in the system’s governance, ensuring long-term stability.', icon: Scale },
                  { text: 'Governance into Power: This allows confident reinvestment, expanding the infrastructure and restarting the cycle.', icon: RefreshCw },
                ]
              }, {
                title: 'The Social Flywheel',
                subtitle: '(Flourishing): This is the Gardener’s work, distributing the abundance.',
                steps: [
                  { text: 'Knowledge into Openness: Citizens use UBAI services and establish their identity via privacy-preserving Proof of Personhood.', icon: Brain },
                  { text: 'Openness into Wealth: For their engagement and contributions, citizens receive their nation’s sovereign currency, the Culture Coin (CC).', icon: Award },
                  { text: 'Wealth into Activity: This creates a massive, economically empowered user base, whose activity is the lifeblood of the network.', icon: Activity },
                ]
              }, {
                title: 'The Trust Flywheel',
                subtitle: '(Value Accrual): This is the emergent property that locks the system together.',
                steps: [
                  { text: 'Activity into Utility: Millions of citizens using CC create a huge volume of L1 transactions.', icon: Network },
                  { text: 'Utility into Demand: These L1 transactions must be anchored to L0 for final settlement, creating constant, inelastic demand for L0 blockspace, which is priced in FC.', icon: Anchor },
                  { text: 'Demand into Trust: This makes FC fundamentally valuable, its worth a direct function of the network’s total, measurable utility. Utility becomes trust.', icon: ShieldCheck },
                  { text: 'Trust into Stability: This deep, verifiable trust makes FC a desirable global reserve asset, reinforcing the entire system.', icon: Landmark },
                ]
              }].map((flywheel, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`text-left ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">{flywheel.title}</h3>
                    <p className="text-lg text-[#D5DCE0] font-[Montserrat] italic mb-6">{flywheel.subtitle}</p>
                    <div className="space-y-4">
                      {flywheel.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <step.icon className="w-6 h-6 text-[#BAE9F4] mr-4 mt-1 flex-shrink-0" />
                          <p className="text-base text-[#D5DCE0] font-[Montserrat]">
                            <span className="font-bold text-white">{step.text.split(':')[0]}:</span>{step.text.substring(step.text.indexOf(':') + 1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <FlywheelGraphic steps={flywheel.steps} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Guardian Lattice Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="sm:text-2xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-[Montserrat] leading-tight">
              The Guardian Lattice
            </h2>
            <QuoteBlock author="Montesquieu">
              “To prevent this abuse, it is necessary from the very nature of things that power should be a check to power.”
            </QuoteBlock>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              A constitution needs enforcement, but human oversight is too slow for our high-speed world. We deploy the Guardian Lattice: an automated immune system of specialized, auditable AIs that serve—not rule—to ensure power checks power.
            </p>

            {/* Guardian Components */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left mb-12">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Sentinels</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Read-only monitors that flag violations of the Tripod of Justice or local governance rules.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Advisors</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Reasoning engines that analyze Sentinel alerts against the constitution and create transparent reports for human review.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <GitCommit className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Implementers</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  Sandboxed agents that execute enforcement actions only with explicit, cryptographically-signed human authorization.
                </p>
              </div>
            </div>

            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              Every Guardian component is open-source, immutably registered on L0, and confined to a narrow charter. No registration, no charter, no authority. When a city, tribe, or nation amends its local module the Lattice hot-loads the new policy pack and enforces it alongside the universal charter. Surplus compute from the Intelligent Internet lets Sentinels run deep adversarial scans without burdening public infrastructure, while each audit trail and enforcement act is hashed on-chain for instant public review.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              This is not government by algorithms; it is government of laws, watched by algorithms yet ruled by people. Our principles, enforced at the scale and speed of the intelligence age.
            </p>
          </div>
        </div>

        {/* The Living Constitution */}
        <div id="living-constitution" className="relative z-10 pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 font-[Montserrat] leading-tight">
              The Living Constitution
            </h2>

            <QuoteBlock author="Carl von Clausewitz">
              “The greatest enemy of a good plan is the dream of a perfect plan.”
            </QuoteBlock>

            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              The most profound error in AI alignment is treating it as a problem to be solved once. A fixed constitution is a brittle one. We must design an alignment mechanism that lives, learns, and adapts.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              Our anchor is a Living Constitution, its canonical hash stamped on the Hyper-Node layer for anyone to verify. It supplies a global spine - Flow, Openness, Resilience - but is expressly extensible through local governance modules so communities can weave their own languages, customs, and creeds into the same fabric. A Sharia-compliant finance rule-set in Karachi, land-stewardship norms in the Yucatán, or EU data-sovereignty constraints all compile to the same machine-readable schema and inherit the shared audit trail. One size need not fit all; interoperability remains intact.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              To steward the high-level principles we create the Living Corpus Assembly, a citizen-governed council where domain experts sit beside juries drawn by sortition, blending deep knowledge with lived experience. The Assembly doubles as an Oracle Council: it debates, defines, and updates the metrics that drive Proof-of-Benefit deciding, for example, whether a rise in literacy or a fall in CO₂ registers as Developmental or Natural Capital. Local modules may add metrics of their own, but each must map back to a MIND-capital category, keeping scores comparable across cultures.
            </p>

            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <ShieldCheck className="w-8 h-8 text-[#BAE9F4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Outer alignment</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                    A Guardian lattice of constitutional AIs continuously checks code and policy against both the core charter and any attached local modules, halting deployments that violate either.
                  </p>
                </div>
                <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <RefreshCw className="w-8 h-8 text-[#BAE9F4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Inner alignment</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                    Mechanistic probes and incentivised white-hat swarms expose goal-drift inside models, letting operators correct course before harm propagates.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto my-8 font-[Montserrat] leading-relaxed px-4">
              We do not solve the oracle problem with a single algorithm; we solve it with a transparent, accountable, and democratically adaptable process.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              The initial charter is the Architect’s work, laying down unshakeable pillars. The amendment cycle is the Gardener’s work, tending a living law.
            </p>
          </div>
        </div>

        {/* The Living Constitution */}
        <div className="relative z-10 pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight">
              Civic Paideia
            </h2>

            <QuoteBlock author="Pericles">
              “What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.”
            </QuoteBlock>
            
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto my-8 font-[Montserrat] leading-relaxed px-4">
              Even with a perfect system, the Intelligence Age's greatest risk is not physical extinction but spiritual desiccation—a safe but meaningless world. Thus, the final layer of security is not technical, but pedagogical.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              Civic Paideia is an educational framework for the Intelligence Age, not for job training, but for cultivating the "art of the citizen." It aims to foster the psychological resilience and agentic mindset needed to thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left mb-12">
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Attention Fitness</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  In an attention economy, mental sovereignty is the new literacy. We offer training in mindfulness, bias detection, and using AI to block algorithmic manipulation.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Dialogic Literacy</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  A healthy democracy requires reasoned debate. Our AI tutors help citizens map arguments, spot fallacies, and engage constructively with diverse views.
                </p>
              </div>
              <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                <div className="w-12 h-12 border-2 border-[#BAE9F4] rounded-full flex items-center justify-center mb-4">
                  <DraftingCompass className="w-6 h-6 text-[#BAE9F4]" />
                </div>
                <h3 className="text-2xl font-bold text-[#BAE9F4] mb-2 font-[Montserrat]">Systems Participation</h3>
                <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                  The symbiotic citizen is an active participant, not a passive consumer. This involves hands-on experience using AI to build tools and engineer change, shifting the public mindset from user to creator.
                </p>
              </div>
            </div>

            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto my-8 font-[Montserrat] leading-relaxed px-4">
              This Paideia addresses the "purpose divide" in an AI-rich world. As material scarcity diminishes, we face a new challenge: finding meaning. The Purpose Arboretum, funded by Proof of Benefit, provides stipends for pursuits beyond algorithms: deep craft, community building, and philosophical inquiry.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              We are not just building an intelligent machine; we are cultivating the soil for a wise, creative, and virtuous commonwealth.
            </p>
          </div>
        </div>

        {/* Conclusion: The Inescapable Game */}
        <div className="relative z-10 pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[Montserrat] leading-tight">
              The Inescapable Game
            </h2>

            <QuoteBlock author="Alfred Korzybski">
              “A map is not the territory, but a good map is the start of an expedition.”
            </QuoteBlock>
            
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              A just architecture is useless if it exists only on paper. A theory of change that relies on the benevolence of incumbents is a fantasy.
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              The current “Great Race” for AI is a multi-player Prisoner’s Dilemma. The rational strategy for any single actor is to defect and build in secret, even though the collective result is a fragile, dangerous equilibrium. 
            </p>
            <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
              The Symbiotic Architecture is designed to break this game. It does not win the current game; it introduces a new, more attractive one.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-12">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <HeartHandshake className="w-8 h-8 text-[#BAE9F4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Payoffs of cooperation</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                    We change the payoffs of cooperation. The economic engine of Proof of Benefit makes contributing to the open stack vastly more profitable than hoarding secrets.
                  </p>
                </div>
                <div className="bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl p-8 text-left flex flex-col" style={{ boxShadow: '0 0 20px rgba(186, 233, 244, 0.2)' }}>
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-[#BAE9F4]">
                    <Unplug className="w-8 h-8 text-[#BAE9F4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Montserrat]">Cost of defection</h3>
                  <p className="text-base text-[#D5DCE0] font-[Montserrat]" style={{ lineHeight: '26px' }}>
                    We increase the cost of defection. The network effects of the global stack create an overwhelming Schelling Point. To “go it alone” is to be cut off from the global talent pool, shared safety innovations, and the world’s most advanced open models. It is choosing to invent fire in a cave while the world builds a distributed power grid.
                  </p>
                </div>
              </div>
          </div>

          <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
            Adoption is not driven by moral suasion. It is driven by cold, strategic logic. We are not asking the world to be better. We are making it irrational to be anything else.
          </p>
          <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
            This is the Third Path. It is not a final utopia. It is a beginning, a commitment. We have shown how a single philosophical insight, Veiled Unity, can be unfolded into a social contract, a technical architecture, and a winning strategy.
          </p>
          <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
            But a blueprint is not a building. This work is an invitation to the builders, thinkers, and citizens of every nation to take up the tools of the Architect and the Gardener.
          </p>
          <p className="text-left text-base sm:text-lg lg:text-xl text-[#D5DCE0] max-w-6xl mx-auto mb-8 font-[Montserrat] leading-relaxed px-4">
            The story of the intelligence age need not be one of dystopia. It can be one of symbiosis.
          </p>
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
                href="https://x.com/EMostaque" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#191E1B] border-2 border-[#BAE9F4] rounded-2xl py-5 px-8 text-[#D5DCE0] text-lg font-[Montserrat] hover:bg-[#BAE9F4] hover:text-[#191E1B] transition-all duration-300"
                style={{ boxShadow: '0px 0px 40px rgba(186, 233, 244, 0.4)' }}
              >
                Follow us X
              </a>
              
              <a 
                href="https://discord.gg/KNW9ny3cyf" 
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
