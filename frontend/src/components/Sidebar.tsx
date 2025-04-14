import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/RateReview';
import InsightsIcon from '@mui/icons-material/Insights';
import ForumIcon from '@mui/icons-material/Forum';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f5f5f5', height: '100vh', padding: '20px' }}>
      <h2>Dashboard v0.1</h2>
      <List>
        <ListItem component="button">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Evaluations" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Forum" />
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;