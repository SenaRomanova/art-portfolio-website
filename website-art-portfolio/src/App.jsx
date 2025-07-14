import GeneralButton from "./assets/GeneralButton.jsx";
import Menu from "./assets/MenuButton.jsx";
import Header from "./Header.jsx"
import Box from '@mui/material/Box';

function App() {
    return( 
        <>
            <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: 'center', p:0.5}}>
                <Header content={{ text: 'Inna Romanova'}}/>
                <Menu/>
            </Box>
                
        </>
    );
}

export default App
