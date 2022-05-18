import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";

const ProductLink = [
  {
    id: 1,
    name: "Smartfon",
  },
  {
    id: 2,
    name: "Kompyuter",
  },
  {
    id: 3,
    name: "Noutbook",
  },
  {
    id: 4,
    name: "Aksesuar",
  },
  {
    id: 5,
    name: "Kyim-kechak",
  },
  {
    id: 6,
    name: "Mayishiy-Texnika",
  },
  {
    id: 7,
    name: "Oziq-Ovqat",
  },
];

export default function ScrollableTabsButtonPrevent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const matches = useMediaQuery("(min-width:600px)");

  const MediaLinkA = () => {
    return (
      <Box
        sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "8px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable auto tabs example"
          scrollButtons="auto"
        >
          {ProductLink.map((item, index) => {
            return <Tab key={index} label={item.name} />;
          })}
        </Tabs>
      </Box>
    );
  };

  const MediaLinkB = () => {
    return (
      <Box sx={{ bgcolor: "background.paper", borderRadius: "8px" }}>
        <Tabs orientation="vertical" value={value} onChange={handleChange}>
          {ProductLink.map((item, index) => {
            return <Tab key={index} label={item.name} />;
          })}
        </Tabs>
      </Box>
    );
  };
  return matches == true ? <MediaLinkB /> : <MediaLinkA />;
}
