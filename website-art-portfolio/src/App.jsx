
import Menu, {drawerWidth} from "./assets/Menu.jsx";
import { Route, Routes } from "react-router-dom";
import Series from "./pages/Series.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";

function App() {
    const [vw, setVw] = useState(window.innerWidth); //vw is the variable, setVw is the function to set the value of vw
    useEffect(() => {  
        const handleResize = () => setVw(window.innerWidth);//set the value of vw to the current window width
        window.addEventListener("resize", handleResize); //listens to the resize event and calls handleResize when the window is resized
        return () => window.removeEventListener("resize", handleResize); //cleanup function to remove the event listener when the component is unmounted
    }, []);

    
    return( 

    <>
      <Box sx={{display: "flex"}}>
            {vw > 800 ? <Menu/> : null}
            <Box sx={{bgcolor: '#ffffff65', ml: vw > 800 ? `${drawerWidth}px` : 0, width: '100%', justifyItems: 'center'}}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/series" element={<Series />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Box>
        </Box>
    </>
        
    );
}

export default App
