import GeneralButton from "./assets/GeneralButton.jsx";
import Header from "./Header.jsx"
import Container from "@mui/material/Container";

function App() {
    return( 
        <Container sx={{bgcolor: "darkgray", height: "100vh", width: "100vh", padding: "10vh"}}>
            <Header
                content={{ text: 'Inna Romanova'}}
            />
            <nav>
                <ul>
                    <li><GeneralButton content = "Home" /></li>
                    <li><GeneralButton content = "Meet the Artist" /></li>
                    <li><GeneralButton content = "Gallery" /></li>
                    <li><GeneralButton content = "Contact" /></li>
                </ul>
            </nav>
        </Container>
    );
}

export default App
