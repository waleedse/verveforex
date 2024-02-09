import React from 'react';
import FrontRoutes from '../Routes/FrontRoutes';
import Navbar from './common/Navbar';

function Frontend() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <FrontRoutes></FrontRoutes>
    </ React.Fragment>
  );
}

export default Frontend;
