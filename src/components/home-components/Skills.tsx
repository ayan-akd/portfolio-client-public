"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import lott from "@/assets/lottie.json";
import { motion } from "framer-motion";
import { TSkill } from "@/schemas/skills.schema";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // This will disable server-side rendering for Lottie
});

export default function Skills({ data }: { data: TSkill[] }) {
  // Group skills by category
  const groupedSkills = data.reduce((acc, skill) => {
    const category = skill.category.charAt(0).toUpperCase() + skill.category.slice(1);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, TSkill[]>);

  // Convert the grouped skills object to an array for mapping
  const skillCategories = Object.entries(groupedSkills).map(([category, skills]) => ({
    category,
    skills
  }));

  return (
    <div className="pt-20">
      <div className="flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side - Title & Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="lg:w-4/12 flex flex-col justify-center items-center"
        >
          <h1 className="md:text-start text-center text-5xl mt-16 pb-12 font-bold">
            My Skills
          </h1>
          <div className="lg:w-auto md:w-2/4">
            <Lottie animationData={lott} />
          </div>
        </motion.div>

        {/* Right Side - Skill Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center pb-12"
        >
          {skillCategories.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, scale: 0, x: 500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: index * 0.25 }}
              className="bg-slate-200 dark:bg-black p-5 rounded-lg shadow-lg text-center h-96 flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl mb-5 text-pinky font-bold">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {section.skills.map((skill) => (
                  <motion.div
                    key={skill._id}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    className="flex items-center justify-center flex-col gap-1"
                  >
                    <div className="relative">
                      <Image
                        className={`w-8 ${
                          skill.name === "Next.js" ||
                          skill.name === "GitHub" ||
                          skill.name === "Vercel"
                            ? "dark:invert"
                            : ""
                        }`}
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                      />
                    </div>
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
