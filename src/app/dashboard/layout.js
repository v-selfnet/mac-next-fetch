export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero Comming Soon...',
  }

import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h1>Sidebar</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;