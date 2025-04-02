import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import {Link} from 'react-router-dom';

import MainHeader from '../views/main/mainHeader';
const useStyles = makeStyles(theme => ({
  root: {
  
  },
  content: {
  
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = true;

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  
  return (
    <div >
      <main >
        <div >
        {children}
        </div>
      </main>
      
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;