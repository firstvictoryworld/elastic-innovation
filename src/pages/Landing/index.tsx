import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AboutSection from '../../components/Module/Landing/AboutSection';
import BlogSection from '../../components/Module/Landing/BlogSection';
import ClientsSection from '../../components/Module/Landing/ClientsSection';
import LogoSection from '../../components/Module/Landing/LogoSection';
import ProjectsSection from '../../components/Module/Landing/ProjectsSection';
import SoftwareSection from '../../components/Module/Landing/SoftwareSection';
import TechnologyTypeSection from '../../components/Module/Landing/TechnologyTypeSection';
import { RootState } from '../../redux/reducers';
const Landing = () => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div>
      <SoftwareSection />
      <div className="relative">
        <LogoSection />
        <TechnologyTypeSection />
        <AboutSection />
        <ProjectsSection />
        <ClientsSection />
        <BlogSection />
        {isDarkMode ? (
          <img
            src="/assets/images/gradient-bg-dark.png"
            alt="gradient-bg-dark"
            className="absolute top-0 h-full w-full mix-blend-color"
          />
        ) : (
          <img
            src="/assets/images/gradient-bg.png"
            alt="gradient-bg"
            className="absolute top-0 h-full w-full mix-blend-color"
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
