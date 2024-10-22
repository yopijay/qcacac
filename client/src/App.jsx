// Libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';

// Core
import { theme } from 'core/global/themes/theme'; // Theme

const App = () => {
    const client = new QueryClient();
    
    return (
        <ThemeProvider theme= { theme() }>
            <Router>
                <QueryClientProvider client= { client }>
                    testing
                </QueryClientProvider>
            </Router>
        </ThemeProvider>
    );
}

export default App;