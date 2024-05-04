import { Box, Button, Paper, TextField } from "@mui/material";
import { useCallback, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../api";
import JoinScreen from "../components/Meeting/JoinScreen";
import MeetingView from "../components/Meeting/MeetingView";
import Meeting from "./Meeting";
const Rooms = () => {
  // const [roomId, setRoomId] = useState("");
  // const navigate = useNavigate();
  // const handleNavRoom = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     if (!roomId) return;
  //     navigate(`/room/${roomId}`);
  //   },
  //   [navigate, roomId]
  // );

  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };
  return (
    <Box
      py={"90px"}
      minHeight={"56vh"}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <Paper
        elevation={4}
        sx={{ padding: "20px", maxWidth: "500px", width: "100%" }}
      >





        {/* {authToken && meetingId ? (
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: true,
              webcamEnabled: false,
              name: "C.V. Raman",
            }}
            token={authToken}
          >
            <MeetingConsumer>
              {() => <Container meetingId={meetingId} />}
            </MeetingConsumer>
          </MeetingProvider>
        ) : (
          <JoinScreen getMeetingAndToken={getMeetingAndToken} />
        )
        } */}
        <MeetingProvider
          config={{
            meetingId: "t42a-a01x-45pw",
            micEnabled: true,
            webcamEnabled: true,
            name: "scorpion's Org",
          }}
          token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkMTllNjNhMS1lNDZhLTQyMjktYjk1ZS02MzNiY2I4NGJlMjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNDgzNjg3NCwiZXhwIjoxNzE0OTIzMjc0fQ.7VVf_F2AxpnJygdx5l3HoS2k9pftZPqa708nBygX5ts"
        >
          <Meeting />
        </MeetingProvider>
      </Paper>
    </Box>
  );
};

export default Rooms;
