export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero Comming Soon...',
  }

import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex items-center'>
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default DashboardLayout;