import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboutSpecialist from './AboutSpecialist';
import Reviews from './Reviews';
import SpecialistVideos from './SpecialistVideos';
import SpecialistArticles from './SpecialistArticles';

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

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', my: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="text" >
          <Tab label="عن الخبير" {...a11yProps(0)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="تقييمات" {...a11yProps(1)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="فيديوهات" {...a11yProps(2)} sx={{ fontWeight: "700", color: 'text.main' }} />
          <Tab label="مقالات" {...a11yProps(3)} sx={{ fontWeight: "700", color: 'text.main' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        <AboutSpecialist />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Reviews />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SpecialistVideos />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SpecialistArticles />
      </CustomTabPanel>
    </Box>
  );
}