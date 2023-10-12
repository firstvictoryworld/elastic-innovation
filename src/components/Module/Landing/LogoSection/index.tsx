import { motion } from 'framer-motion';
import React from 'react';

import { logoItems } from '../../../../constants';

const LogoSection = () => {
  return (
    <div className="relative z-20 mb-24 px-3 md:px-9 ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="xxl:40 rounded-md bg-black px-4 py-12 sm:px-8 md:px-20 lg:px-28 xl:px-32"
      >
        <div className="relative h-0.5 bg-[#8E8E8E]">
          <div className="absolute -top-7 bottom-1/2 left-1/2 -translate-x-[50%] bg-black px-12 py-4 font-black text-[#8E8E8E]">
            Trusted Clients
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-x-4 gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {logoItems.map((logo) => (
            <img
              className="m-auto max-h-[100px]"
              src={`/assets/images/${logo.name}`}
              alt={logo.name}
              key={logo.name}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LogoSection;
