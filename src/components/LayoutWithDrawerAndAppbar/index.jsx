import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import CommonIcons from 'components/CommonIcons';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';
import SimpleBarReact from 'simplebar-react';

import 'simplebar/src/simplebar.css';

import Logo from './Assets/logo.png';
import LeftMenu from './Components/LeftMenu';
import { leftmenu } from 'constants/leftmenu';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => {
  return {
    eachLink: {
      textDecoration: 'none',
      color: 'inherit',
      width: '100%',

      '&.active': {
        backgroundColor: theme.custom.colors.black,
        color: theme.custom.colors.white,
        '& .icon': {
          color: theme.custom.colors.white,
        },
      },
    },
    toolbar: {
      background: theme.custom.colors.white,
      color: theme.custom.colors.white,
    },
    divider: {
      borderColor: `${theme.custom.colors.lightblue} !important`,
    },
    topDrawer: {
      background: theme.custom.colors.white,
      border: 0,
      display: 'flex',
      position: 'sticky !important',
      top: 0,
      zIndex: 2,
      padding: '10px 25px',
      gap: '10px',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      '& .topDrawer_logo': {
        height: '40px',
        width: '40px',
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
  };
});

const propTypes = {
  topDrawer: PropTypes.node,
  header: PropTypes.node,
  leftMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.any,
      path: PropTypes.string,
    }),
  ),
};

const LayoutWithDrawerAndAppbar = (props) => {
  //! State
  const { topDrawer, header, window, children, leftMenu = [] } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //! Function
  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((mobileState) => !mobileState);
  }, []);

  //! Render
  const drawer = (
    <div>
      <Toolbar className={classes.topDrawer}>
        <div className="topDrawer_logo"></div>
        {topDrawer}
      </Toolbar>
      <SimpleBarReact style={{ maxHeight: 'calc(100vh - 64px)' }}>
        <LeftMenu leftMenu={leftmenu} />
      </SimpleBarReact>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 'none',
        }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <CommonIcons.Menu />
          </IconButton>

          {header}
        </Toolbar>
        <Divider className={classes.divider} />
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

LayoutWithDrawerAndAppbar.propTypes = propTypes;
export default LayoutWithDrawerAndAppbar;
