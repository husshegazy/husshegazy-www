import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { XIcon } from "@/components/icons/x";
import type React from "react";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
};

export type Category = {
  title: string;
  page: string | undefined;
  href: string;
};

export type Meta = {
  title: string;
  description: string;
  image: Image;
};

export type SiteConfig = {
  meta: Meta;
  name: string;
  headshot: string;
  title: string;
  description: string;
  socials: Array<Social>;
  //categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
  meta: {
    title: "Huss Hegazy",
    description: "Huss Hegazy Website",
    image: {
      src: "/headshot.jpg",
      alt: "Huss Hegazy",
    },
  },
  name: "Huss Hegazy",
  headshot: "/headshot.jpg",
  title: "Software Developer",
  description: `Hi I am Huss!`,
  socials: [
    {
      platform: "GitHub",
      link: "https://github.com/husshegazy",
      icon: <GithubIcon />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/husshegazy/",
      icon: <LinkedInIcon />,
    },
    {
      platform: "X",
      link: "https://x.com/husshegazy/",
      icon: <XIcon />,
    },
  ],
  // categories: [
  //   {
  //     title: "All",
  //     page: undefined,
  //     href: "/posts",
  //   },
  //   {
  //     title: "Technical",
  //     page: "tech",
  //     href: "/posts/tech",
  //   },
  //   {
  //     title: "Food",
  //     page: "food",
  //     href: "/posts/food",
  //   },
  //   {
  //     title: "Travel",
  //     page: "travel",
  //     href: "/posts/travel",
  //   },
  // ],
};
