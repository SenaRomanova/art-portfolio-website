
import Menu, {drawerWidth} from "./assets/Menu.jsx";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import AnotherLions from "./pages/AnotherLions.jsx";
import NomadicBeauties from "./pages/NomadicBeauties.jsx";
import Sirens from "./pages/Sirens.jsx";
import TheInnerFish from "./pages/TheInnerFish.jsx";
import ThePenates from "./pages/ThePenates.jsx";
import TotemsAndTalismans from "./pages/TotemsAndTalismans.jsx";
import FishCover from "./assets/FishCover.jpg";
import Template from "./pages/PageTemplate.jsx";
import OverlayWindow from "./assets/OverlayWindow.jsx";
import Dialog from "@mui/material/Dialog";

import FishProcess from "./assets/FishProcess.jpg";
import ExampleDetail1 from "./assets/ExampleDetail1.png";
import ExampleDetail2 from "./assets/ExampleDetail2.png";

function App() {
    const [vw, setVw] = useState(window.innerWidth); //vw is the variable, setVw is the function to set the value of vw
    useEffect(() => {  
        const handleResize = () => setVw(window.innerWidth);//set the value of vw to the current window width
        window.addEventListener("resize", handleResize); //listens to the resize event and calls handleResize when the window is resized
        return () => window.removeEventListener("resize", handleResize); //cleanup function to remove the event listener when the component is unmounted
    }, []);

    const imageList = ([
        FishCover,
        FishProcess,
        ExampleDetail1,
        ExampleDetail2
        ]);

    const content = (
        <>   

        {/* <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", width: '100%', bgcolor: 'grey'}}>
            <Routes>
                <Route path="/example" element={<OverlayWindow imageList={imageList} isOpen={true}/>}/>
            </Routes>
        </Box> */}

        <Box sx={{display: "flex"}}>
            {vw > 800 ? <Menu/> : null}
            <Box sx={{bgcolor: '#ffffff65', width: '100%', justifyItems: 'center'}}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/anotherlions" element={<AnotherLions />}/>
                    <Route path="/nomadicbeauties" element={<NomadicBeauties />}/>
                    <Route path="/sirens" element={<Sirens />}/>
                    <Route path="/theinnerfish" element={<TheInnerFish />}/>
                    <Route path="/thepenates" element={<ThePenates />}/>
                    <Route path="/totemsandtalismans" element={<TotemsAndTalismans />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Box>
        </Box>
        </>
    );

    
    return( 
        <>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", overflow: 'hidden', bgcolor: '#000000', height: '24vh', borderBottom: '2px solid #ce0000ff'}}>
            <Box
            component="img"
            src={FishCover}
            alt="Logo"
            sx={{
                paddingBottom: '0.5em',
                width: 'auto',
                height: '60vw', 
                alignContent: 'center',
                justifyContent: 'center',
                position: 'relative',
                top: '50px'
            }}/>
        </Box>

        <Box 
        sx={{ maxWidth: 1500, margin: '0 auto' }}>
            {content}
        </Box>
    </>
        
    );
}

export default App
