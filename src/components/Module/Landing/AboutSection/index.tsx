import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';

import {
  initialLeftSlideAndFadeConfig,
  initialMobileFramerConfig,
  initialRightSlideAndFadeConfig,
  whileInViewSlideConfig,
} from '../../../../constants';
import { RootState } from '../../../../redux/reducers';
import TextGradient from '../../../Common/TextGradient';

const AboutSection = () => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div className="custom-container relative z-20 ml-auto mr-auto flex flex-col items-center gap-0 space-x-4 space-y-8 lg:flex-row xl:gap-10">
      <motion.div
        initial={isMobile ? initialMobileFramerConfig : initialRightSlideAndFadeConfig}
        whileInView={whileInViewSlideConfig}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <img
          src="/assets/images/about-company.jpg"
          alt="people-group"
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={isMobile ? initialMobileFramerConfig : initialLeftSlideAndFadeConfig}
        whileInView={whileInViewSlideConfig}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2"
      >
        <div className="flex items-center space-x-4">
          <div className="h-[3px] w-24 bg-green-special-1" />
          <span className="text-3.5xl font-semibold leading-34.52px text-green-special-2">
            About Company
          </span>
        </div>
        <TextGradient
          colors={['#7770B3', '#22A295']}
          additionalClassNames="text-5xl md:text-6.5xl font-black my-11 inline-block leading-none"
        >
          Innovators in Digital Solutions
        </TextGradient>
        <p
          className={classNames(
            'mt-1 text-3.5xl leading-34.52px',
            { 'text-white': isDarkMode },
            { 'text-black': !isDarkMode },
          )}
        >
          At Elastic Innovations, we&apos;re pioneers in digital solutions. We craft
          bespoke software and applications, ensuring innovation, efficiency, and user
          satisfaction. With a proven track record of success, we&apos;re your trusted
          partner for digital transformation and growth. Join us on the journey to
          excellence.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSection;
