import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/RateReview';
import InsightsIcon from '@mui/icons-material/Insights';
import ForumIcon from '@mui/icons-material/Forum';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

import SidebarB from './SidebarB';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard v0.1</h2>
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/evaluations">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Evaluations" />
        </ListItem>
        <ListItem component={Link} to="/reviews">
          <ListItemIcon>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem component={Link} to="/insights">
          <ListItemIcon>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem component={Link} to="/forum">
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Forum" />
        </ListItem>
        <ListItem component={Link} to="/help">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </div>
  );
};

// export default Sidebar;
export default SidebarB;