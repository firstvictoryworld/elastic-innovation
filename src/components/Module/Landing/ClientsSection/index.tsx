import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { testimonials } from '../../../../constants';
import { RootState } from '../../../../redux/reducers';
import TextGradient from '../../../Common/TextGradient';

const ClientsSection = () => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div
      className={classNames('relative z-20 bg-gray-special', {
        'bg-opacity-25': isDarkMode,
      })}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="custom-container mx-auto py-26"
      >
        <div data-aos="fade-left" className="flex justify-center">
          <div className="z-4 relative flex h-0.5 w-full items-center justify-center space-x-4 sm:w-1/2 md:w-1/3">
            <div className="h-full w-20 bg-green-special-1 " />
            <span className="text-3.5xl font-black text-green-special-1">
              Testimonials
            </span>
            <div className="h-full w-20 bg-green-special-1 " />
          </div>
        </div>
        <div className="mt-11 text-center">
          <TextGradient
            colors={['#7770B3', '#22A295']}
            additionalClassNames="text-5xl md:text-6.5xl font-black inline-block leading-none"
          >
            What Our Clients Say
          </TextGradient>
        </div>
        <div className="mt-18 grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="hidden flex-col space-y-12 md:flex">
            <div className="flex items-center justify-between">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-1.jpg"
                alt="avatar-1"
              />
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-2.jpg"
                alt="avatar-2"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-3.jpg"
                alt="avatar-3"
              />
            </div>
            <div className="flex items-center justify-between">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-4.jpg"
                alt="avatar-4"
              />
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-5.jpg"
                alt="avatar-5"
              />
            </div>
          </div>
          <div className="client-cards col-span-2">
            <Carousel
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showStatus={false}
            >
              {testimonials.map((item, index) => (
                <div
                  key={item.id}
                  className="client-card relative rounded-xl bg-gradient-to-r from-pink-special-3 to-pink-special-2 px-9 pb-12 pt-16"
                >
                  <p className="text-left text-2xl leading-25.89px text-white">
                    {item.comment}
                  </p>
                  <div className="mt-11 flex flex-col text-left text-white">
                    <span className="text-3.5xl font-black leading-34.52px">
                      {item.user}
                    </span>
                    <span className="text-2xl leading-25.89px">{item.designation}</span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="hidden flex-col space-y-12 lg:flex">
            <div className="flex items-center justify-between">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-6.jpg"
                alt="avatar-6"
              />
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-7.jpg"
                alt="avatar-7"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-8.jpg"
                alt="avatar-8"
              />
            </div>
            <div className="flex items-center justify-between">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-9.jpg"
                alt="avatar-9"
              />
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="/assets/images/avatar/avatar-10.jpg"
                alt="avatar-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsSection;
