export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
  leetcode?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  college: string;
  cgpa: number;
  sem1Sgpa: number;
  sem2Sgpa: number;
  interests: string[];
  statusText: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutBio: string;
  socials: SocialLinks;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  iconName?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  isHighlight?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string; // "AI / ML" | "IoT & Automation" | "Full Stack" | "Database"
  highlight?: string; // e.g. "Geminathon 2026", "Computer Vision + IoT + Automation"
  isFeatured?: boolean;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  architecturePoints?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  roleOrType: string;
  subtitle: string;
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  cgpa: number;
  semesters: {
    sem: string;
    sgpa: number;
  }[];
  courseworkHighlights: string[];
}
