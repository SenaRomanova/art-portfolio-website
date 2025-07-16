import GeneralButton from "./assets/GeneralButton.jsx";
import Menu from "./assets/Menu.jsx";
import Header from "./assets/Header.jsx"
import Box from '@mui/material/Box';

function App() {
    return( 
        <>
            <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center', p:0.5}}>
                <Menu/>
                <Header content={{ text: 'Inna Romanova'}}/>
            </Box>
                
        </>
    );
}

export default App
