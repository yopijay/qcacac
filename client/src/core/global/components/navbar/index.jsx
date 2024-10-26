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
                    <Avatar alt= "QCACACE" src= { Logo } sx= {{ width: 60, height: 60 }} component= { Link } to= "/" />
                    <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" spacing= { 4 }>
                        { (Navs.client).map((nav, index) => <Typography component= { Link } key= { index } to= { nav.link } sx= { navs }>{ nav.label }</Typography> )}
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    );
}

export default Index;