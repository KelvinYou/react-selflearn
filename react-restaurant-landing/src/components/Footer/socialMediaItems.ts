import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

interface SocialMediaInterface {
  link: string,
  icon: any,
}

const socialMediaItems: SocialMediaInterface[] = [
  {
    link: "https://kelvinyou.vercel.app/",
    icon: CgProfile,
  },
  {
    link: "https://github.com/KelvinYou/",
    icon: AiFillGithub,
  },
  {
    link: "https://www.linkedin.com/in/kelvin-you-a29644198/",
    icon: FaLinkedinIn,
  },
  {
    link: "https://www.instagram.com/kelvinyou0220/",
    icon: AiFillInstagram,
  },
  
];

export default socialMediaItems;