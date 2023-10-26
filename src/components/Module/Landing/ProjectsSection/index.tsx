import { motion } from 'framer-motion';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';

import {
  initialLeftSlideAndFadeConfig,
  initialMobileFramerConfig,
  initialRightSlideAndFadeConfig,
  projects,
  whileInViewSlideConfig,
} from '../../../../constants';

const CustomPrevArrow = (onClickHandler: () => void, hasPrev: boolean, label: string) => (
  <button
    type="button"
    onClick={onClickHandler}
    style={{
      position: 'absolute',
      right: '240px',
      zIndex: 1,
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
    }}
    disabled={!hasPrev}
    aria-label={label}
    className="!-bottom-[200px] md:!-bottom-[120px]"
  >
    <img src="/assets/images/circle-arrow-left.png" alt="circle-arrow-left" />
  </button>
);

const CustomNextArrow = (onClickHandler: () => void, hasNext: boolean, label: string) => (
  <button
    type="button"
    onClick={onClickHandler}
    style={{
      position: 'absolute',
      right: '100px',
      zIndex: 1,
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
    }}
    disabled={!hasNext}
    aria-label={label}
    className="!-bottom-[200px] md:!-bottom-[120px]"
  >
    <img src="/assets/images/circle-arrow-right.png" alt="circle-arrow-right" />
  </button>
);
const ProjectsSection = () => {
  return (
    <div className="relative z-20 py-0 pt-20 md:py-36">
      <motion.div className="custom-container mx-auto mb-20 flex items-center justify-end space-x-4">
        <span className="text-3.5xl font-semibold leading-34.52px text-green-special-2">
          Our Projects
        </span>
        <div className="h-[3px] w-24 bg-green-special-1" />
      </motion.div>
      <motion.div
        initial={isMobile ? initialMobileFramerConfig : initialLeftSlideAndFadeConfig}
        whileInView={whileInViewSlideConfig}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="project-cards mb-16 md:mb-20"
      >
        {/* <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          showStatus={false}
          renderArrowPrev={CustomPrevArrow}
          renderArrowNext={CustomNextArrow}
        >
          {new Array(4).fill('_').map((_, index) => (
            <div key={index * index}>
              <img src="/assets/images/project-1.png" alt="project-1" />
            </div>
          ))}
        </Carousel> */}
        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((item: any, index: number) => (
            <motion.div
              initial={
                isMobile ? initialMobileFramerConfig : initialRightSlideAndFadeConfig
              }
              whileInView={whileInViewSlideConfig}
              transition={{ duration: 0.3, delay: 0.3 * (index + 1) }}
              viewport={{ once: true }}
              key={`${item.id}`}
              className="group relative h-[400px] w-full overflow-hidden rounded-2xl"
            >
              <img src={item.image} className="z-5 h-full w-full object-cover" alt="" />
              <div className="absolute right-[100%] top-0 z-10 h-full w-full bg-[#0009] p-12 text-white transition-all duration-700 group-hover:right-0">
                <p className="mb-2 text-center text-5xl font-black md:text-6xl">
                  {item.name}
                </p>
                <p className="font mt-14 text-center text-3xl text-[#fff95] md:text-4xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
