"use client";
import { TAbout } from "@/schemas/about.schema";
import { motion } from "framer-motion";
import { JSX } from "react";
import { FaCode, FaPalette, FaLayerGroup } from "react-icons/fa";

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, JSX.Element> = {
    "FaPalette": <FaPalette className="text-4xl" />,
    "FaCode": <FaCode className="text-4xl" />,
    "FaLayerGroup": <FaLayerGroup className="text-4xl" />
    // Add more icons as needed
  };
  
  return iconMap[iconName] || null;
};

export default function About({data}: {data:TAbout}) {
  const getAge = () => {
    const birthDate = new Date("2001-06-22");
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }

    return age;
  };
  const { name, email, bio, phone, address, services } = data;
  return (
    <div className="overflow-hidden">
      {/* about section  */}
      <div>
        <motion.h1
          initial={{ opacity: 0, scale: 0, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="text-5xl mt-16 lg:mb-0 mb-5 font-bold md:text-start text-center"
        >
          About Me
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <motion.p
          initial={{ opacity: 0, scale: 0, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className=" md:text-start text-center"
        >
          {bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="space-y-2 mb-5"
        >
          <h3>Name: {name}</h3>
          <hr />
          <h3>
            Email:{" "}
            <a className="text-blue-400" href={`mailto:${email}`}>
              {email}
            </a>
          </h3>
          <hr />
          <h3>Age: {getAge()}</h3>
          <hr />
          <h3>Education:</h3>
          <h3>
            {" "}
            {data.education[0].degree}
            <br />
            {data.education[0].institution}
          </h3>
          <h3>SSC and HSC : Cantonment Public School and College, Rangpur</h3>
          <hr />
          <h3>Phone: {phone}</h3>
          <hr />
          <h3>Location: {address}</h3>
          <hr />
        </motion.div>
      </div>
      {/* services section  */}
      <div>
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-5xl mt-16 mb-10 font-bold md:text-start text-center"
          >
            Services I provide
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              initial={{ opacity: 0, scale: 0, y: 200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              key={service.id}
              className="p-8 rounded-2xl text-center bg-slate-200 dark:bg-black shadow-xl backdrop-blur-sm hover:shadow-pinky/20 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{getIconComponent(service.iconName)}</div>
              <h3 className="text-2xl mb-4 font-bold text-pinky">
                {service.title}
              </h3>
              <p className="">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
