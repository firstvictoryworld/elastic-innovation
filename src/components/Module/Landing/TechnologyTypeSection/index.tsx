import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reducers';
import TextGradient from '../../../Common/TextGradient';

const TechnologyTypeSection = () => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div
      className={classNames('relative z-20 bg-cover bg-no-repeat', {
        'bg-tech': isDarkMode,
      })}
    >
      <div className="custom-container mx-auto my-30">
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4">
            <div className="h-[3px] w-24 bg-green-special-1" />
            <span className="text-3.5xl font-semibold leading-34.52px text-green-special-2">
              What We Do
            </span>
          </div>
          <p
            className={classNames(
              'mb-1 mt-12 text-4xl font-semibold leading-51.78px md:text-5xl',
              { 'text-white': isDarkMode },
              { 'text-black': !isDarkMode },
            )}
          >
            What we provide
          </p>
          <TextGradient
            colors={['#7770B3', '#22A295']}
            additionalClassNames="text-5xl md:text-6.5xl font-black"
          >
            Discover Our Comprehensive Services
          </TextGradient>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2 xxl:grid-cols-3 xxl:gap-y-0"
        >
          <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-pink-special-1 to-green-special-3 px-9 pt-9 text-white">
            <div>
              <div className="flex items-center justify-between">
                <h5 className="flex flex-col text-2xl font-semibold">
                  Mobile Application <span>Development</span>
                </h5>
                <img src="/assets/images/Vector-icon-2.png" alt="Vector-icon-2" />
              </div>
              <p className="mt-9">
                We turn your concepts into powerful mobile apps. Our expert team
                specializes in iOS and Android development, providing end-to-end
                solutions. From ideation to design, development, testing, and launch, we
                ensure your app is user-friendly, secure, and scalable. With a commitment
                to excellence, we offer post-launch support to keep your app up to date.
              </p>
            </div>
            <div className="top-32 flex justify-center ">
              <img
                src="/assets/images/mobile-app-service.jpg"
                alt="phone-1"
                className="mt-10 h-[400px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 pt-11">
            <div className="flex flex-col justify-between space-x-2 rounded-3xl bg-gradient-to-r from-green-special-4 to-green-special-5 py-8 pr-4 sm:flex-row">
              <img
                src="/assets/images/web-apps-top.png"
                alt="web-apps-top"
                className="mt-4"
              />
              <div className="text-white">
                <div className="mb-9 flex items-center justify-between">
                  <h5 className="flex flex-col text-2xl font-semibold">
                    Web Application <span>Development</span>
                  </h5>
                  <img src="/assets/images/Vector-icon-2.png" alt="Vector-icon-2" />
                </div>
                <p>
                  We design and build cutting-edge web applications, ensuring scalability
                  and security. Our focus is on creating innovative solutions that drive
                  your business forward, from concept to deployment.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-red-special to-red-special-1 px-2 py-12 pr-4 sm:flex-row sm:pl-7">
              <div className="text-white sm:flex-grow">
                <div className="flex items-center justify-between">
                  <h5 className="flex flex-col text-2xl font-semibold">
                    Desktop <span>Application</span> <span>Development</span>
                  </h5>
                  <img src="/assets/images/Vector-icon-2.png" alt="Vector-icon-2" />
                </div>
                <p className="mt-5">
                  We specialize in crafting robust desktop applications that streamline
                  operations and enhance productivity. Our solutions are tailored to your
                  unique requirements.
                </p>
              </div>
              <img
                src="/assets/images/desktopApplicationService.png"
                alt="Desktop-App-ui"
                className="-mr-40 ml-3 h-[250px]"
              />
            </div>
          </div>
          <div className="col-span-1 mt-72 flex flex-col justify-end lg:col-span-2 lg:mt-64 xxl:col-span-1 xxl:mt-0">
            <div className="rounded-3xl bg-gradient-to-b from-blue-special to-blue-special-1">
              <div className="flex justify-center">
                <img src="/assets/images/brain.png" alt="brain" className="-mt-88" />
              </div>
              <div className="p-10 text-white">
                <div className="flex items-center justify-between">
                  <h5 className="flex flex-col text-2xl font-semibold">
                    AI <span>Development</span>
                  </h5>
                  <img src="/assets/images/Vector-icon-2.png" alt="Vector-icon-2" />
                </div>
                <p className="mt-9">
                  Unlock the potential of AI for your business with our AI as a service.
                  We provide ready-to-integrate machine learning solutions that optimize
                  processes, analyze data, and drive innovation. Harness the power of AI
                  to gain a competitive edge in a rapidly evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyTypeSection;
