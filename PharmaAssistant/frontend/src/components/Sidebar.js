import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Divider, 
  Box 
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Generate Document', icon: <CreateIcon />, path: '/generate' },
  { text: 'Summarize Document', icon: <SummarizeIcon />, path: '/summarize' },
  { text: 'Compliance Check', icon: <CheckCircleOutlineIcon />, path: '/compliance' },
  { text: 'Simplify Text', icon: <FormatClearIcon />, path: '/simplify' },
  { text: 'Templates', icon: <DescriptionIcon />, path: '/templates' },
  { text: 'Regulatory Guidelines', icon: <GavelIcon />, path: '/guidelines' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          display: { xs: 'none', sm: 'block' } 
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
