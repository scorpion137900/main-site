import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Button, Typography } from "@mui/material";
const dates = [
  {
    time: "10:00Am",
    date: "10/1/2024",
    Status: "إضغط للحجز",
  },
  {
    time: "9:00Am",
    date: "11/1/2024",
    Status: "إضغط للحجز",
  },
  {
    time: "10:00pm",
    date: "10/2/2024",
    Status: "إضغط للحجز",
  },
  {
    time: "11:00Am",
    date: "20/1/2024",
    Status: "إضغط للحجز",
  },
  {
    time: "10:00pm",
    date: "10/3/2024",
    Status: "إضغط للحجز",
  },
];
export default function TimesTimeline() {
  return (
    <>
      {dates.length > 3 && (
        <Typography
          sx={{
            textAlign: "center",
          }}
          color={"text.main"}
        >
          Scroll here to view All Times{" "}
        </Typography>
      )}
      <Box
        sx={{
          minHeight: "250px",
          overflow: "auto",
          maxHeight: "250px",
        }}
      >
        <Timeline
          position="left"
          sx={{
            "& .MuiTimelineItem-root:before": {
              display: "none",
            },
            cursor: "pointer",
            width: "100%",
          }}
        >
          {dates.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    background:
                      "linear-gradient( 109.6deg, #03aeaf 11.2%, #0097a3 91.2% )",
                    p: "10px",
                    borderRadius: "5px",
                    minHeight: "40px",
                    color: "white",
                  }}
                >
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center", mb: "5px"
                  }}>

                    <Typography>{item.time}</Typography>
                    <Typography>{item.date}</Typography>
                  </Box>
                  <Button variant="outlined" color="light">{item.Status}</Button>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box >
    </>
  );
}
