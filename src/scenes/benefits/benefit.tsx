import { BenefitType, SelectedPage } from "@/assets/shared/type";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childvariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
const Benefit = ({ children, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
    variants={childvariant}
    className="md:basis-1/3  mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {children}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3 text-sm"> {description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => {
          setSelectedPage(SelectedPage.ContactUs);
        }}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
