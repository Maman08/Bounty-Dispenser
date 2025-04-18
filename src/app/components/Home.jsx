// v1 of home page

// import React, { useState } from 'react';
// import { Github, Zap, Lock, Users, Code, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

// const AnimatedBaseLogo = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
//       <svg
//         width="400"
//         height="400"
//         viewBox="0 0 100 100"
//         className="animate-pulse opacity-0.3"
//       >
//         <circle cx="50" cy="50" r="45" fill="none" stroke="#bbd8ff" strokeWidth="8" />
//         <rect x="30" y="30" width="40" height="40" fill="#bbd8ff" />
//       </svg>
//     </div>
//   );
// };

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);

//   const features = [
//     {
//       icon: <Layers size={32} />,
//       title: "Base Network Supercharged",
//       description: "Leverage the speed and efficiency of Base's L2 technology. Experience lightning-fast transactions and minimal fees, supercharging your open-source collaboration.",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <Github size={32} />,
//       title: "GitHub-Base Bridge",
//       description: "Seamlessly connect GitHub workflows with Base Network's robust infrastructure. Assign bounties with a simple `/bounty 0.5ETH` command, bridging Web2 and Web3 effortlessly.",
//       color: "from-indigo-500 to-blue-500"
//     },
//     {
//       icon: <Zap size={32} />,
//       title: "Instant Base Rewards",
//       description: "Harness Base's rapid finality for instant contributor payouts. One command `/reward @username`, and funds are transferred at L2 speed.",
//       color: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: <Lock size={32} />,
//       title: "Base-Secured Escrow",
//       description: "Utilize Base Network's security model for ironclad bounty protection. Your funds are as secure as Base itself until the bounty conditions are met.",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: <Users size={32} />,
//       title: "Global Base Talent Pool",
//       description: "Tap into the rapidly growing Base ecosystem. Attract developers who are at the forefront of L2 innovation and Ethereum scaling solutions.",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <Code size={32} />,
//       title: "Base-Native Development",
//       description: "Foster a new generation of Base-native applications. Every bounty contributes to expanding the Base ecosystem, driving adoption and innovation.",
//       color: "from-red-500 to-rose-500"
//     }
//   ];

//   return (
//     <div className="relative min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
//       <AnimatedBaseLogo />

//       <main className="relative container mx-auto px-4 py-16 z-10">
//         <section className="text-center mb-20">
//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Accelerate Base Network Adoption</h2>
//           <p className="text-xl mb-8 text-gray-400">Empowering open-source collaboration on Base's cutting-edge L2 infrastructure</p>
//           <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">Launch on Base</button>
//         </section>

//         <section className="mb-20">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform -skew-y-6 shadow-xl"></div>
//             <div className="relative bg-gray-800 p-8 rounded-lg shadow-2xl">
//               <h3 className="text-3xl font-bold mb-6 text-center">Revolutionize Open-Source on Base</h3>
//               <div className="grid grid-cols-2 gap-8">
//                 <div>
//                   {features.map((feature, index) => (
//                     <button
//                       key={index}
//                       className={`w-full text-left p-4 rounded-lg mb-4 transition ${activeFeature === index ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
//                       onClick={() => setActiveFeature(index)}
//                     >
//                       <div className="flex items-center">
//                         <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${feature.color}`}>
//                           {feature.icon}
//                         </div>
//                         <span className="font-semibold">{feature.title}</span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//                 <div className="bg-gray-700 p-6 rounded-lg">
//                   <h4 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h4>
//                   <p className="text-gray-300 mb-4">{features[activeFeature].description}</p>
//                   <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
//                     Explore feature <ChevronRight size={20} className="ml-2" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="mb-20">
//           <h3 className="text-3xl font-bold mb-8 text-center">Driving Base Network Adoption</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//               <div className="text-4xl font-bold text-blue-500 mb-4">01</div>
//               <h4 className="text-xl font-semibold mb-2">Onboard Developers</h4>
//               <p className="text-gray-400">Introduce developers to Base through meaningful, rewarded contributions. Watch the ecosystem grow with each bounty.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//               <div className="text-4xl font-bold text-blue-500 mb-4">02</div>
//               <h4 className="text-xl font-semibold mb-2">Accelerate Projects</h4>
//               <p className="text-gray-400">Speed up development of Base-native applications. Turn ideas into reality with incentivized collaboration.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
//               <div className="text-4xl font-bold text-blue-500 mb-4">03</div>
//               <h4 className="text-xl font-semibold mb-2">Expand Use Cases</h4>
//               <p className="text-gray-400">Foster innovation across various sectors. Each project on BountyBase showcases Base Network's versatility.</p>
//             </div>
//           </div>
//         </section>

//         <section className="text-center mb-20">
//           <h3 className="text-3xl font-bold mb-8">Join the Base Revolution</h3>
//           <p className="text-xl mb-8 text-gray-400">Be part of the movement that's reshaping the future of Ethereum scaling</p>
//           <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">Start Building on Base</button>
//         </section>

//         <section className="bg-gray-800 p-8 rounded-lg shadow-xl">
//           <h3 className="text-3xl font-bold mb-6 text-center">Why BountyBase on Base Network?</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h4 className="text-xl font-semibold mb-4">For Projects</h4>
//               <ul className="space-y-2">
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Tap into Base's growing developer ecosystem</li>
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Leverage L2 speed for rapid development cycles</li>
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Minimize gas costs for bounty management</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-4">For Contributors</h4>
//               <ul className="space-y-2">
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Get rewarded in Base-native tokens</li>
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Build skills in cutting-edge L2 technology</li>
//                 <li className="flex items-center"><ArrowUpRight size={20} className="mr-2 text-blue-500" /> Be part of Base's innovative ecosystem</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="relative container mx-auto px-4 py-8 text-center text-gray-500 z-10">
//         <p>&copy; 2024 BountyBase. Accelerating open-source innovation on Base Network.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;





//v2 of home page

import React from 'react';
import { Github, Zap, Shield, Users, Bot, Lock } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground.jsx';
import FeatureCard from './FeatureCard.jsx';
import StatsCard from './StatsCard.jsx';
import HeroSection from './HeroSection.jsx';

function Home() {
  const features = [
    {
      icon: Github,
      title: 'GitHub-Native Integration',
      description: 'Manage bounties directly from GitHub with simple commands like /bounty and /reward.',
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure Smart Contracts',
      description: 'Guaranteed payments through Ethereum and Polygon smart contracts.',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      title: 'AI-Powered Analysis',
      description: 'Lit Protocol AI analyzes PRs and tracks progress automatically.',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Privacy-First KYC',
      description: 'Anon Aadhaar ensures secure, privacy-preserving verification.',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant transactions and minimal fees on Base Network.',
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with developers worldwide and grow the Web3 ecosystem.',
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <HeroSection />

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <StatsCard value="10,000+" label="Developers" />
            <StatsCard value="$2M+" label="Bounties Paid" />
            <StatsCard value="1,000+" label="Projects" />
            <StatsCard value="24hr" label="Avg. Resolution" />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powered by Web3 Innovation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of open-source collaboration with our cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <footer className="border-t border-gray-800 py-12">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2024 Bounty-Hub. Built with ❤️ </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
