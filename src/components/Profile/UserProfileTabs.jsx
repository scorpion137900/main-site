import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Comment from '../Comment';
import SessionReports from './SessionReports';
import ForgetPasswordReset from '../Auth/ResetPassword';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', my: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="text" >
          <Tab label="My Session Reports" {...a11yProps(0)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="BookMarks" {...a11yProps(1)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="Comments" {...a11yProps(2)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="My Current Bouquet" {...a11yProps(3)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="Book Time" {...a11yProps(4)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="Change Password" {...a11yProps(5)} sx={{ fontWeight: "700", color: 'text.main' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        <SessionReports />

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1,].map(() => <Comment />)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        4
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        5
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ForgetPasswordReset />
      </CustomTabPanel>
    </Box>
  );
}