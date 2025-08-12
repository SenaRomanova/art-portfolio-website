import PhoneMenu, { drawerWidth } from "./assets/PhoneMenu.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AnotherLions from "./pages/AnotherLions.jsx";
import NomadicBeauties from "./pages/NomadicBeauties.jsx";
import Sirens from "./pages/Sirens.jsx";
import TheInnerFish from "./pages/TheInnerFish.jsx";
import ThePenates from "./pages/ThePenates.jsx";
import TotemsAndTalismans from "./pages/TotemsAndTalismans.jsx";
import DesktopMenu from "./assets/DesktopMenu.jsx";
import Footer from "./assets/Footer.jsx";
import FishCover from './assets/FishCover.jpg';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import TermsOfService from "./pages/ToS.jsx";
import ContactForm from "./contacts/contact.jsx";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/AppTheme";
import PageHeader from "./assets/PageHeading.jsx";

function App() {
  
  const isDesktop = useMediaQuery("(min-width:900px)");

  const location = useLocation();
  
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
  setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const [isContacts, setIsContacts] = useState(false);

  useEffect(() => {
  setIsContacts(location.pathname === "/contacts");
  }, [location.pathname]);


  const content = (
    <Box
      sx={{
        bgcolor: "#ffffff65",
        maxWidth: 1400,
        justifyItems: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anotherlions" element={<AnotherLions />} />
        <Route path="/nomadicbeauties" element={<NomadicBeauties />} />
        <Route path="/sirens" element={<Sirens />} />
        <Route path="/theinnerfish" element={<TheInnerFish />} />
        <Route path="/thepenates" element={<ThePenates />} />
        <Route path="/totemsandtalismans" element={<TotemsAndTalismans />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<RefundPolicy />} />
        <Route path="/refund-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Box>
  );

  const fish = (
    <>
      {isDesktop ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              bgcolor: "#000000",
              height: "40vh",
              borderTop: "2px solid #ce0000ff",
              borderBottom: "2px solid #ce0000ff",
              "&:hover img": {
                  transform: "scale(1.02)", //zoom amt
                },
            }}
          >
            <Box
              component="img"
              src={FishCover}
              alt="Logo"
              sx={{
                width: "auto",
                height: "52vw",
                alignContent: "center",
                justifyContent: "center",
                position: "relative",
                top: 20,
                transition: "transform 0.8s ease",//zoom time
                transformOrigin: "center center",
              }}
            />
          </Box>
        ) : null}
      </>
  )

  return (
    <>
    
      <ThemeProvider theme={theme}>
        
          {isDesktop ? <DesktopMenu />  : <PhoneMenu/>}
        
        
        {isHome && fish}

        <Box sx={{ display: "flex", justifyContent: 'center' }}>{content}</Box>
        <Box sx={{display: 'flex', bgcolor: 'white', width: '100%', height: '25vh'}}/>
        
        {!isContacts && (
          <Box sx={{ display: "flex", width: '100%', justifyContent: 'center', padding: 3, flexDirection: 'column' }}>
            <Box sx={{display: "flex", justifyContent: 'center',}}>
            
              <PageHeader name={"Contact Us!"} /> 
            </Box>
            <ContactForm/>
          </Box>)}
        <Box sx={{ display: "flex" }}><Footer/></Box>
      </ThemeProvider>
    </>
  );
}

export default App;
