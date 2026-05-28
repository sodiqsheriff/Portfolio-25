// "use client"

// import { motion } from "framer-motion"

// const experiences = [
//   {
//     role: "Lead Full-Stack Engineer",
//     company: "Figpe",
//     period: "Mar 2024 – Sep 2025",
//     description: "Architected and led development of the core SPA (React/TypeScript/MongoDB), cutting page load time by 30%. Managed AWS infrastructure, built CI/CD pipelines reducing deployment from hours to under 15 mins, and established engineering standards that dropped bug rates by 40%.",
//     tags: ["React", "AWS", "MongoDB", "CI/CD"]
//   },
//   {
//     role: "Full-Stack Developer (Contract)",
//     company: "Holoway",
//     period: "Dec 2023 – Mar 2024",
//     description: "Shipped 3 production MVPs in under 6 weeks each. Integrated Stripe payments and Mapbox geolocation. One product acquired 500 active users in its first month with zero performance incidents.",
//     tags: ["MERN", "Firebase", "Stripe", "Mapbox"]
//   },
//   {
//     role: "Frontend Developer",
//     company: "Techy Teams",
//     period: "Sep 2023 – Feb 2024",
//     description: "Built a 40-component Storybook design system reducing frontend dev time by ~35% and eliminating design drift. Defined REST API schemas via contract-first development.",
//     tags: ["Storybook", "React", "REST APIs"]
//   },
//   {
//     role: "Full-Stack Developer & Technical Tutor",
//     company: "OLAK TECH",
//     period: "Jun 2022 – Sep 2023",
//     description: "Built full-stack applications using modern JS frameworks. Mentored junior developers and introduced agile/scrum practices that improved sprint predictability within 6 weeks.",
//     tags: ["Node.js", "Agile", "Mentorship"]
//   }
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-24 px-4 relative z-10">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//             Professional <span className="text-gradient">Journey</span>
//           </h2>
//         </motion.div>

//         <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
//           {experiences.map((exp, index) => (
//             <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors duration-500 group-hover:bg-primary z-10">
//                 <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform"></div>
//               </div>
//               <motion.div 
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl"
//               >
//                 <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
//                   <h3 className="font-bold text-xl text-white">{exp.role}</h3>
//                   <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full whitespace-nowrap">
//                     {exp.period}
//                   </span>
//                 </div>
//                 <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
//                 <p className="text-gray-400 leading-relaxed text-sm mb-4">
//                   {exp.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {exp.tags.map(tag => (
//                     <span key={tag} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
