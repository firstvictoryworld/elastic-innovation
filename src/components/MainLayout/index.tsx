import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';
import Footer from '../Footer';
import Header from '../Header';

interface IMainLayoutProps {
  children: ReactNode;
}
const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  const isDarkMode = useSelector((state: RootState) => state.commonReducer.isDarkMode);

  return (
    <div
      className={classNames(
        // 'w-screen overflow-x-hidden',
        'h-screen overflow-auto',
        { 'bg-white': !isDarkMode },
        { 'bg-[#121212]': isDarkMode },
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
