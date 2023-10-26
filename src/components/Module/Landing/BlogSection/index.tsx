import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import {
  blogItems,
  initialLeftSlideAndFadeConfig,
  initialMobileFramerConfig,
  initialRightSlideAndFadeConfig,
  whileInViewSlideConfig,
} from '../../../../constants';
import TextGradient from '../../../Common/TextGradient';
import BlogPostModal from './BlogPostModal';

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState('');

  return (
    <div className="relative z-20 py-28">
      <div className="custom-container mx-auto">
        <motion.div
          initial={isMobile ? initialMobileFramerConfig : initialLeftSlideAndFadeConfig}
          whileInView={whileInViewSlideConfig}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 flex items-center space-x-4">
            <div className="h-[3px] w-24 bg-green-special-1" />
            <span className="text-3.5xl font-semibold leading-34.52px text-green-special-2">
              Our Blog
            </span>
          </div>
          <TextGradient
            colors={['#7770B3', '#22A295']}
            additionalClassNames="text-5xl md:text-6.5xl font-black"
          >
            Case Studies
          </TextGradient>
        </motion.div>
        <motion.div
          initial={isMobile ? initialMobileFramerConfig : initialRightSlideAndFadeConfig}
          whileInView={whileInViewSlideConfig}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0 xl:grid-cols-4"
        >
          {blogItems.map((blog, index) => (
            <motion.button
              key={`${blog.id}-${index}`}
              className="group cursor-pointer overflow-hidden rounded-10px bg-gray-special bg-opacity-25"
              onClick={() => setSelectedBlog(blog.id)}
              initial={
                isMobile ? initialMobileFramerConfig : initialRightSlideAndFadeConfig
              }
              whileInView={whileInViewSlideConfig}
              transition={{ duration: 0.3, delay: 0.3 * (index + 1) }}
              viewport={{ once: true }}
            >
              <div className="w-full overflow-hidden ">
                <img
                  className="h-[250px] w-full object-cover transition-all duration-[3000ms] group-hover:scale-150"
                  src={`/assets/images/${blog.image}`}
                  alt={blog.image}
                />
              </div>
              <div className="px-4 pb-4 pt-8">
                <p className="text-right text-3.5xl font-black leading-34.52px">
                  {blog.title}
                </p>
                <div className="mt-7 flex justify-between">
                  <span className="text-sm text-[#7E7E7E]">{blog.time}</span>
                  <span className="text-sm text-[#7E7E7E]">{blog.date}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
        {selectedBlog && (
          <BlogPostModal
            isOpen={!!selectedBlog}
            onClose={() => setSelectedBlog('')}
            postId={selectedBlog}
          />
        )}
      </div>
    </div>
  );
};

export default BlogSection;
