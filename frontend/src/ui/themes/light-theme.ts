import { capitalize, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#9661ff',
            main: '#6B2AEE',
            dark: '#581eCD',
        },
        secondary:{
            light: '#2dfff2',
            main: '#02e7d9',
            dark: '#1dd6cb',
        },
        text:{
            primary: '#707070',
            secondary: '#9b9b9b'
        },
        error:{
            main: '#fC3C00'
        },
        warning:{
            main: '#FCA600'
        },
        success: {
            main: '#00d34d'
        },
        grey:{
            50: '#FAFAFA',
            100: '#F0f0f0',
            200: '#d7d9dd',
            300: '#c4c4c4',
            400: '#9b9b9b',
        }
    },
    breakpoints: {
        values:{
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
        }
    },
    typography: {
        fontFamily: 'Poppins, Roboto, sans-serif'
    },
    shape: {
        borderRadius: 3
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: '2px',
                    ':hover': {
                        borderWidth: '2px',
                    },
                },
            },
            variants: [
                {
                    props: {
                        variant: 'contained', color: 'secondary'
                    },
                    style: {
                        color: 'white',
                    },
                }
            ]
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0,0,0,0.5)',
                }
            }
        }
    },
});

export default theme;