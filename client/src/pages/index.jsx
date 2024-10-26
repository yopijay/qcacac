// Libraries
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Components
import Navbar from "core/global/components/navbar";

// Pages
import Home from "./home";

// Custom styles
const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start,',
    alignItems: 'stretch',
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden'
}

const Index = () => {
    return (
        <Box display= "flex">
            <Navbar />
            <Box sx= { content }>
                <Routes>
                    <Route exact path= "/*" element= { <Home /> } />
                </Routes>
            </Box>
        </Box>
    );
}

export default Index;