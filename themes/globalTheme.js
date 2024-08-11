import {createTheme} from "@mui/material";
import markProBook from "../public/font/FontFont_FF.Mark.Pro.Book_1.woff";
import markPro from "../public/font/FontFont_FF.Mark.Pro.woff";

const theme = createTheme({
    direction: 'ltr',
    components: {
        MuiCssBaseline: {
            styleOverrides:
                {
                    html: {
                        scrollBehavior: 'smooth',
                    },
                    '*': {
                        scrollMarginTop: 20
                    },
                    body: {
                        overflowX: "hidden",
                        backgroundColor: "#f9f9f9",
                        "& a": {
                            textDecoration: "none",
                            color: "inherit",
                        },
                        '& .max-width-1136': {
                            maxWidth: '1136px !important'
                        },
                        '& .max-width-1312': {
                            maxWidth: '1312px !important'
                        },
                        '& .section-margin-bottom': {
                            marginBottom: '144px !important',
                            '@media (max-width:900px)': {
                                marginBottom: '104px !important',
                            }
                        },
                        minHeight: "100vh",
                        margin: 0,
                    },
                    "@font-face": {
                        fontFamily: "markPro",
                        fontStyle: "normal",
                        fontWeight: 500,
                        src: `url(${markPro}) format('woff')`,
                        fontDisplay: 'swap'
                    },
                }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'save'},
                    style: ({theme}) => ({
                        backgroundColor: '#01a754',
                        borderRadius: 4,
                        height: 25,
                        minWidth: 100,
                        overflow: 'hidden',
                        boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 16px 24px 0 rgba(0, 0, 0, 0.06)',
                        padding: 10,
                        fontSize: 11,
                        fontWeight: 500,
                        fontFamily: 'roboto',
                        lineHeight: 1,
                        letterSpacing: 'normal',
                        textTransform: 'capitalize',
                        color: '#E5EAF2',
                        '&:hover': {
                            backgroundColor: '#018040',
                        },
                        '&:active': {
                            backgroundColor: '#131313',
                        },
                        '&:disabled': {
                            opacity: 0.5,
                            color: '#fff',
                        },

                        '@media (max-width:900px)': {
                            padding: 5,
                        },
                    }),
                },
            ],
        },
    },
    palette: {
        border: '#e3e3e3',
        main: '#01a754',
        mainHover: '#018040',
        black: {
            0: '#000000',
            1: '#333333',
            2: '#666666',
            3: '#999999',
            4: '#c4c4c4',
            5: '#f5f5f5',
        },
        purple: {
            0: '#877fd7',
            1: '#4f429d',
        },
        red: {
            0: '#E01249',
            1: '#E01149',
            2: '#c01249',
            3: 'rgba(224,18,73,0.7)',
            hover: '#b60033',
        },
        yellow: {
            0: '#f49e14',
            1: '#fee12b',
            2: '#ceb627',
            hover: '#b97810',
        },
        green: {
            0: '#0BD862',
            1: '#0BA362',
            hover: '#098550',
        },
        white: {
            0: '#E5EAF2',
            1: '#f1f5f8',
            2: '#fffafa',
            3: '#f6f7f9',
        },
        gray: {
            0: '#CCCCCC',
            1: '#E0E0E0',
            2: '#6E6E6E',
            'hover': '#424242',
            3: '#DDDDDD',
            4: '#707070',
            5: '#EEE',
            6: '#D6D6D6',
        },

    },
    typography: {
        fontFamily: [
            'markPro',
            'roboto',
        ].join(','),

        dashboardH2: {
            fontFamily:'markPro',
            fontSize: "1.125rem",
            fontWeight: 900,
            letterSpacing: "normal",
            lineHeight: 1.2,
            textAlign: "center",
            '@media (max-width:900px)': {
                fontSize: "1.000rem",
            },
        },
        dashboardSubtitle: {
            fontFamily:'markPro',
            fontSize: "1.000rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",
            '@media (max-width:900px)': {
                fontSize: "0.875rem",
            },
        },
        dashboardBody: {
            fontFamily:'markPro',
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "normal",
            lineHeight: 1.8,
            textAlign: "center",
            '@media (max-width:900px)': {
                fontSize: "0.750rem",
                lineHeight: 2,
            },
        },
        dashboardCaption: {
            fontFamily:'markPro',
            fontSize: "0.750rem",
            fontWeight: "normal",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",

            '@media (max-width:900px)': {
                fontSize: "0.625rem",
                lineHeight: 1.5,
            },
        },
        dashboardButton: {
            fontFamily:'markPro',
            fontSize: "0.875rem",
            fontWeight: "bold",
            letterSpacing: "normal",
            lineHeight: 1.6,
            textAlign: "center",
            '@media (max-width:900px)': {
                fontSize: "0.750rem",
                lineHeight: 1.2,
            },
        },
    },
})
export default theme;
