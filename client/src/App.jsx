// Libraries
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';

// Core
import { theme } from 'core/global/themes/theme'; // Theme

// Pages
import Main from "./pages";

const App = () => {
    const client = new QueryClient();
    
    return (
        <ThemeProvider theme= { theme() }>
            <Router>
                <QueryClientProvider client= { client }>
                    <Routes>
                        <Route path= "*" element= { <Main /> } />
                    </Routes>
                </QueryClientProvider>
            </Router>
        </ThemeProvider>
    );
}

export default App;