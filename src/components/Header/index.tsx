import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { icons } from '../../constants';

const Header = () => {
  const [isMobileMenuShowed, setIsMobileMenuShowed] = useState(false);
  const handleMobileMenu = () => {
    setIsMobileMenuShowed(!isMobileMenuShowed);
  };

  return (
    <div className="custom-container relative top-0 z-10 mx-auto">
      <div className="flex items-center justify-between py-2 ">
        <Link to="/">
          <img
            src="/assets/images/Elastic-Innovation-Solutions-logo-1.png"
            alt="logo"
            className="h-[50px] cursor-pointer"
          />
        </Link>
        {/* <div className="hidden space-x-12 md:flex">
          {icons.map((item) => (
            <img
              key={item.icon}
              src={`/assets/images/${item.icon}.png`}
              alt={item.icon}
            />
          ))}
        </div>
        <img
          src="/assets/images/Hamburger Menu.png"
          alt="menu"
          className="cursor-pointer"
          onClick={handleMobileMenu}
        /> */}
        <div className="mt-4 flex flex-col items-end font-semibold leading-18.75px">
          <p>085733664939</p>
          <p>admin@elasticinnovations.com</p>
        </div>
      </div>
      {isMobileMenuShowed && (
        <div className="flex items-center justify-center space-x-12 py-4 md:hidden">
          {icons.map((item) => (
            <img
              key={item.icon}
              src={`/assets/images/${item.icon}.png`}
              alt={item.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
