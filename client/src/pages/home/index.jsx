// Libraries
import { Box, Container, Stack, Typography } from "@mui/material";

// Custom styles
import { btn, container, subtitle, title } from "./style";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <Box sx= { container }>
            <Container maxWidth= "lg">
                <Stack direction= "row" justifyContent= "flex-end" alignItems= "center">
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-end" sx= {{ maxWidth: '40%' }} spacing= { 3 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "flex-end">
                            <Typography sx= { subtitle }>Animals are our friends</Typography>
                            <Typography sx= { title }>Give our Pets a Better Home</Typography>
                        </Stack>
                        <Typography sx= { btn } component= { Link } to= "/">Find your pets</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Index;