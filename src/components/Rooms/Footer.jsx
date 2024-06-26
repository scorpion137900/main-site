import React from "react";
import { useAVToggle } from "@100mslive/react-sdk";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
  selectPeers,
} from "@100mslive/react-sdk";

import {
  faMicrophoneSlash, faMicrophone, faVideo, faVideoSlash, faUserPlus,
  faArrowUpRightFromSquare, faMessage, faFaceSmile, faGear, faEllipsis
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const peers = useHMSStore(selectPeers);
  const userCount = peers.length;
  const { isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  return (
    // <div className="main_control">
    //      <div className="main_controls_button" onClick={toggleAudio}>
    //         {isLocalAudioEnabled ? (
    //         <><FontAwesomeIcon icon={faMicrophoneSlash} size="lg" /><span 
    //           className="button_name">Mute</span></>
    //         ): (
    //         <><FontAwesomeIcon icon={faMicrophone} size="lg" /><span 
    //           className="button_name">Unmute</span></>
    //         )}
    //         </div>
    //         <div className="main_controls_button" onClick={toggleVideo}>
    //         {isLocalVideoEnabled ? (
    //         <><FontAwesomeIcon icon={faVideoSlash} size="lg" /><span 
    //           className="button_name">Stop Video</span></>
    //         ): (
    //         <><FontAwesomeIcon icon={faVideo} size="lg" /><span 
    //           className="button_name">Start Video</span></>
    //         )}
    //         </div>
    // </div>
    <>
      <div className="main_control">
        <div className="main_controls_button" onClick={toggleAudio}>
          {isLocalAudioEnabled ? (
            {/* <><FontAwesomeIcon icon={faMicrophoneSlash} size="lg" /><span
              className="button_name">Mute</span></> */}
          ) : (
            {/* <><FontAwesomeIcon icon={faMicrophone} size="lg" /><span
              className="button_name">Unmute</span></> */}
          )}
        </div>
        <div className="main_controls_button" onClick={toggleVideo}>
          {isLocalVideoEnabled ? (
            {/* <><FontAwesomeIcon icon={faVideoSlash} size="lg" /><span
              className="button_name">Stop Video</span></> */}
          ) : (
            {/* <><FontAwesomeIcon icon={faVideo} size="lg" /><span
              className="button_name">Start Video</span></> */}
          )}
        </div>
      </div>
      <div className="main_controls_section">
        <div className="main_controls_button">
          <div>
            {/* <FontAwesomeIcon icon={faUserPlus} size="lg" /><>{userCount}</> */}
          </div>
          <span className="button_name">Participants</span>
        </div>
        <div className="main_controls_button">
          {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg"
            color="" /> */}
          <span className="button_name">Share Screen</span>
        </div>
        <div className="main_controls_button">
          {/* <FontAwesomeIcon icon={faMessage} size="lg" /> */}
          <span className="button_name">Chat</span>
        </div>
        <div className="main_controls_button">
          {/* <FontAwesomeIcon icon={faFaceSmile} size="lg" /> */}
          <span className="button_name">Reactions</span>
        </div>
        <div className="main_controls_button">
          {/* <FontAwesomeIcon icon={faGear} size="lg" /> */}
          <span className="button_name">Settings</span>
        </div>
        <div className="main_controls_button">
          {/* <FontAwesomeIcon icon={faEllipsis} size="lg" /> */}
          <span className="button_name">More</span>
        </div>
      </div>
      <div className="main_controls_section">
        <div className="main_controls_button">
          {isConnected && (
            <button
              id="leave-btn"
              className="btn-danger"
              onClick={() => hmsActions.leave()}
            >
              Leave
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Footer;