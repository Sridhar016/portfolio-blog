import Image from "next/image";
import styles from "./page.module.css";
import ProjectSection from "../components/ProjectSection";
import PostsSection from "../components/PostsSection";
import Link from "next/link";
import { Github, Linkedin, Mail } from 'lucide-react';
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <HeroSection />
      <ProjectSection />
      <PostsSection />
    </div>

  );
}
