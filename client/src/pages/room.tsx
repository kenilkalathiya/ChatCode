import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RoomControls from "../components/RoomControls";
import { Grid, GridItem, Box } from "@chakra-ui/react"
import { ChatDiscord, ChatDiscordButton } from "../components/ChatDiscord";

const Room = (props) => {
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [editorSize, setEditorSize] = useState(8);
    const [chatSize, setChatSize] = useState(2);

    const manageSize = ()=>{
        if(isChatOpen){
            setEditorSize(10);
            setChatSize(0);
        } else {
            setEditorSize(8);
            setChatSize(2);
        }
        setIsChatOpen(!isChatOpen);

        
    }
  return (
    <div>
      <Navbar />
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
        >
        <GridItem colSpan={chatSize} colStart={11}  bg="tsizeomato" > 
            <div onClick={manageSize}><ChatDiscordButton></ChatDiscordButton></div>
        </GridItem>
    </Grid>
      
      <Grid
        h="80vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
        >
        <GridItem colSpan={editorSize}  >
            <RoomControls />
         </GridItem>
        <GridItem colSpan={chatSize}   > 
            {/* <div onClick={manageSize}><ChatDiscordButton></ChatDiscordButton></div> */}
            {isChatOpen ? <Box><ChatDiscord></ChatDiscord> </Box> : null}
        </GridItem>
    </Grid>
   
    </div>
  );
};

export default Room;