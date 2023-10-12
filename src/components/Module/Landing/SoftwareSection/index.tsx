import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

import { softwareDatum } from '../../../../constants';
import { RootState } from '../../../../redux/reducers';
import Button from '../../../Common/Button';
import Software from '../../../Common/Icons/Software';
import TextGradient from '../../../Common/TextGradient';

const SoftwareSection = () => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div className="relative mx-auto py-10 md:py-28">
      <img
        src="/assets/images/Light-BG-Blurred 1.png"
        alt="Light-BG-Blurred 1"
        className={classNames('z-2 absolute top-0 h-full w-full', {
          'mix-blend-color': isDarkMode,
        })}
      />
      <div className="custom-container relative mx-auto flex flex-col items-center gap-x-16 space-y-16 xl:flex-row xl:space-x-8 xl:space-y-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full xl:w-7/12"
        >
          <h1
            className={classNames(
              'break-words text-6xl font-black leading-none md:text-8xl md:leading-[107px]',
              { 'text-white': isDarkMode },
              { 'text-black': !isDarkMode },
            )}
          >
            World-class Software <span className="text-[#7671B3]">Solutions</span>
          </h1>
          <p
            className={classNames(
              'mt-6 text-3.5xl leading-34.52px',
              { 'text-white': isDarkMode },
              { 'text-black': !isDarkMode },
            )}
          >
            Experience success through innovation. Our world-class software solutions
            bring your vision to life. Let&apos;s create the future together.
          </p>
          <div className="flex flex-col space-x-0 space-y-8 pt-9 sm:flex-row sm:space-x-8 sm:space-y-0">
            <Button additionalClassNames="bg-gradient-to-r from-pink-special to-green-special">
              Let&lsquo;s talk{' '}
              <img src="/assets/images/Vector-icon.png" alt="vector-icon" />
            </Button>
            <Button additionalClassNames="border border-green-special">
              <TextGradient colors={['#24A195', '#7571B3']}>
                Download Portfolio
              </TextGradient>
              <img src="/assets/images/svg/Download.svg" alt="download-icon" />
            </Button>
          </div>
          <div className="mt-20 flex flex-col items-center space-y-6 md:flex-row md:items-start md:space-y-0">
            {softwareDatum.map((item) => (
              <div key={item.type} className="flex items-stretch">
                <div
                  className={classNames(
                    'flex flex-col items-center md:items-start',
                    { 'text-white': isDarkMode },
                    { 'text-black': !isDarkMode },
                  )}
                >
                  <span className="text-4.5xl font-bold leading-none">{item.data}</span>
                  <span className="text-3.5xl font-bold leading-none">{item.type}</span>
                </div>
                {item.border && (
                  <div
                    className={classNames(
                      'mx-16 hidden w-[1px] md:block',
                      { 'bg-white': isDarkMode },
                      { 'bg-black': !isDarkMode },
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full xl:flex xl:w-5/12 xl:justify-end"
        >
          <Software />
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareSection;
