"use client";
import { motion as m } from "framer-motion";
import { MdOutlineFileDownload, MdContactPhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { TAbout } from "@/schemas/about.schema";
export default function Intro({ data }: { data: TAbout }) {
  const convertToDirectDownloadLink = (driveLink: string): string => {
  // Check if it's a Google Drive link
  if (driveLink.includes("drive.google.com")) {
    let fileId = "";

    // Format: https://drive.google.com/file/d/FILE_ID/view
    const viewMatch = driveLink.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (viewMatch) {
      fileId = viewMatch[1];
    }

    // Format: https://drive.google.com/open?id=FILE_ID
    const openMatch = driveLink.match(/[?&]id=([a-zA-Z0-9-_]+)/);
    if (openMatch) {
      fileId = openMatch[1];
    }

    if (fileId) {
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
  }

  return driveLink;
};
  return (
    <div className="max-w-[2520px] mx-auto  mt-12 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20 ">
        <div className="md:order-1 order-2 text-center md:text-start  overflow-hidden">
          <m.h1
            initial={{ opacity: 0, scale: 0, x: -500 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="text-4xl font-bold"
          >
            Hi, I&apos;m {data.name}
          </m.h1>
          <m.h3
            initial={{ opacity: 0, scale: 0, x: -500 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="text-4xl font-semibold mt-2"
          >
            A {data.title}
          </m.h3>
          <div className="flex md:justify-start flex-wrap justify-center items-center gap-1 my-5">
            <m.div
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              <a
                // href="https://drive.usercontent.google.com/download?id=1wUrp6FGy6sliuezbQY2F42NuoGVTOCN8"
                href={convertToDirectDownloadLink(data.resumeLink as string)}
                download="Ayan_Kumar_Das_Resume.pdf"
                className="button-hover"
              >
                <Button className="button-hover">
                  <MdOutlineFileDownload />
                  Download Resume
                </Button>
              </a>
            </m.div>
            <m.div
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              <Link href={"/projects"}>
                <Button className="button-hover">
                  See Projects
                  <FaArrowRight />
                </Button>
              </Link>
            </m.div>
            <m.div
              initial={{ opacity: 0, scale: 0, x: -500 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 1 }}
            >
              <Link href={"/contact"}>
                <Button className="button-hover">
                  <MdContactPhone />
                  Contact
                </Button>
              </Link>
            </m.div>
          </div>
        </div>
        <div className="md:order-2 order-1" style={{ perspective: 2000 }}>
          <m.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center drop-shadow-glow"
          >
            <Image
              className="rounded-full lg:w-3/4"
              priority
              src={data.image}
              alt=""
              width={500}
              height={500}
            />
          </m.div>
        </div>
      </div>
    </div>
  );
}
