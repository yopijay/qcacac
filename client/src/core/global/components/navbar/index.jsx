// Libraries
import { AppBar, Avatar, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Constants
import Navs from "core/constants/Navs.json";

// Assets
import Logo from "assets/images/logo.png";

// Custom styles
import { appbar, navs } from "./style";

const Index = () => {
    return (
        <AppBar position= "fixed" sx= { appbar }>
            <Container maxWidth= "lg">
                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 }>
                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 } component= { Link } to= "/" sx= {{ textDecoration: 'none' }}>
                        <Avatar alt= "QCACACE" src= { Logo } sx= {{ width: 60, height: 60 }} />
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= {{ fontFamily: 'Montserrat ExtraBold', textTransform: 'uppercase', color: '#1B4168' }}>Quezon City Animal Care & Adoption Center</Typography>
                            <Typography sx= {{ fontFamily: 'Montserrat ExtraBold', textTransform: 'uppercase', color: '#1B4168' }}>E - Services</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 4 }>
                        { (Navs.client).map((nav, index) => <Typography component= { Link } key= { index } to= { nav.link } sx= { navs }>{ nav.label }</Typography> )}
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    );
}

export default Index;