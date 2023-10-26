import React from 'react';
import { Link } from 'react-router-dom';

import { icons, policies } from '../../constants';
import Button from '../Common/Button';

const Footer = () => {
  return (
    <div className="bg-black bg-footer bg-cover bg-no-repeat">
      <div className="custom-container mx-auto py-10">
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-8 xl:grid-cols-2 xl:gap-y-0">
          <div>
            <h2 className="footer-title relative inline text-3xl font-black text-white sm:text-5xl md:text-7xl lg:text-[128px] lg:leading-extra-large">
              Let&lsquo;s work Together
            </h2>
          </div>
          <div>
            <p className="pb-4 text-white">
              Lorem ipsum dolor sit amet consectetur. Amet etiam ornare pharetra
              curability enim. Aenean sed urna sed proin neque. Malesuada velit risus
              netus in. At ultrices non facilisis in nascetur maecenas. <br />
              Nunc augue est malesuada nulla. Orci dignissim nulla aliquam sit sapien mi
              velit. Tempus ac scelerisque semper vestibulum dictumst mauris nec proin.
              Fermentum vitae pharetra tellus cursus massa pharetra proin viverra.
              Volutpat auctor parturient pellentesque bibendum sem quam velit nula est.
              Fermentum mauris nisi venenatis ac viverra sed. Non mus viverra aliquet
              risus. Est eu faucibus turpis vitae molestie massa egestas. Proin
              consectetur nam in at cras faucibus. Vel magna duis sit augue tristique
              volutpat donec amet. Eget dictum cursus nibg mi in. <br />
              Et tempus platea ut consectetur retrum. Purus donec sagittis etiam in et vel
              nibh platea neque. At volutpat.
            </p>
            <Button additionalClassNames="bg-gradient-to-r from-pink-special to-green-special">
              Let&lsquo;s talk{' '}
              <img src="/assets/images/Vector-icon.png" alt="vector-icon" />
            </Button>
          </div>
        </div> */}
        <div className="mt-12 grid grid-cols-1 items-center gap-x-0 gap-y-8 md:gap-x-8 md:gap-y-0 lg:grid-cols-4">
          <div className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 md:gap-y-0">
            <div className="flex flex-col items-center md:block">
              <img
                src="/assets/images/logo-footer.png"
                alt="Futura Text Logo"
                className="w-2/3"
              />
              {/* <div className="mt-4 flex flex-wrap items-center">
                {icons.map((item) => (
                  <img
                    src={`/assets/images/${item.icon}.png`}
                    alt={item.icon}
                    key={item.icon}
                    className="mb-4 mr-8"
                  />
                ))}
              </div> */}
            </div>
            <div className="flex flex-col items-center md:block">
              <h3 className="text-3.5xl uppercase leading-37.5px text-white">address</h3>
              <p className="mt-4 text-center leading-18.75px text-white md:text-left">
                Babatan Mukti blok i-12A, Desa/Kelurahan Babatan, Kec. Wiyung, Kota
                Surabaya, Provinsi Jawa Timur, 60227, Indonesia
              </p>
            </div>
            <div className="flex justify-center space-y-4 md:justify-between lg:space-y-0">
              <div className="flex flex-col items-start xxl:items-center">
                <h3 className="text-3.5xl uppercase leading-37.5px text-white">
                  contact us
                </h3>
                <div className="mt-4 flex flex-col items-center leading-18.75px text-white md:items-start">
                  <p>085733664939</p>
                  <p>admin@elasticinnovations.com</p>
                </div>
              </div>
            </div>
            {/* <div className="md:pl-6">
              <h3 className="mb-4 text-3.5xl uppercase leading-37.5px text-white">
                our policies
              </h3>
              <div className="flex flex-col space-y-4">
                {policies.map((policy) => (
                  <Link
                    to={policy.link}
                    key={policy.title}
                    className="leading-18.75px text-white"
                  >
                    {policy.title}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/mockup 2.png"
              alt="Futura-Logo-Monogram-1"
              className="w-4/5"
            />
            {/* <img
              src="/assets/images/Futura-Logo-Monogram 1.png"
              alt="Futura-Logo-Monogram-1"
              className="w-4/5"
            /> */}
          </div>
        </div>
        <p className="mt-10 text-center font-bold leading-18.75px text-[#8E8E8E]">
          PT ELASTIC INNOVATION SOLUTIONS © 2023 All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
