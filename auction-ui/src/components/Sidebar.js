import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AppsIcon from '@mui/icons-material/Apps';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
// import MenuAppBar from './Appbar';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const location = useLocation(); // React Hook
  const indexLoc = location.pathname;
  console.log(indexLoc);

  const drawer = (
    <div>
      
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" noWrap component="div" alignItems="center">
          CPO Auction
        </Typography>
      </Toolbar>
      <Divider
        sx={{
          borderColor: '#2D3748'
        }}
      />
      <List>    
        <ListItem>
          <ListItemButton
          selected={indexLoc === "/manageArtWork"}
          // onClick={(event)=>{setSelectedIndex(1); navigate("/manageArtWork");}}
          onClick={()=>{navigate("/manageArtWork")}}
          >
            <ListItemIcon sx= {{ color: '#FFFFFF' }}>
              {<AppsIcon />}
            </ListItemIcon>
            <ListItemText primary= "Dashboard" />
          </ListItemButton>    
        </ListItem>
        

        <ListItem>
          <ListItemButton
          selected={indexLoc === "/manageAuctions"}
          // onClick={(event)=>{setSelectedIndex(2); navigate("/manageAuctions");}}
          onClick={()=>{navigate("/manageAuctions")}}
          >
            <ListItemIcon sx= {{ color: '#FFFFFF' }}>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Auctions" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
          selected={indexLoc === "/"}
          onClick={()=>{navigate("/manageAuctions")}}>
            <ListItemIcon sx= {{ color: '#FFFFFF' }}>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Bids" />
          </ListItemButton>
        </ListItem>
        
        <ListItem>
          <ListItemButton
          selected={indexLoc === "/"}
          onClick={()=>{navigate("/manageAuctions")}}>
            <ListItemIcon sx= {{ color: '#FFFFFF' }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
          selected={indexLoc === "/"}
          onClick={()=>{navigate("/manageAuctions")}}>
            <ListItemIcon sx= {{ color: '#FFFFFF' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <Box sx={{ px: 2, py: 3 }} >
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            px: 3,
            py: '11px',
            borderRadius: 1
          }}
        >
          <div>
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              CPO Auction System
            </Typography>
            <Typography
              color="neutral.400"
              variant="body2"
            >
              Version
              {' '}
              : Beta (Prototype)
            </Typography>
          </div>
          {/* <SelectorIcon
            sx={{
              color: 'neutral.500',
              width: 14,
              height: 14
            }}
          /> */}
        </Box>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Blockchain-Based Auction System
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
          PaperProps={{
            sx: {
              backgroundColor: 'rgb(29,37,55)',
              color: '#FFFFFF',
              width: 280
            }
          }}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
      
    </Box>
    
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
