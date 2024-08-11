import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({theme}) => ({
    width: "100%",
    borderRadius: 10,
    '& .MuiOutlinedInput-input': {
        padding: 8,
        color: "#000",
        fontSize: 14,
        borderRadius: 10,
        minHeight: 24
    },

    '& label': {
        ...theme.typography.input,
        color: "#fff",
        marginTop: -5,
        fontSize: 12
    },
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiIconButton-root': {
        backgroundColor: '#fff',
    },
    "& .Mui-error-root": {
        color: '#fff !important',
    },
    "& .MuiFormHelperText-root": {
        color: '#fff !important',
    },
    "& .MuiFormLabel-root.Mui-error": {
        color: "#fff !important",
        // borderColor: "#f5f5f5 !important",
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#fff',
        borderRadius: 10,
        minHeight: 24,
        '& fieldset': {
            borderColor: theme.palette.black["3"],
        },
        '&:hover fieldset': {
            borderColor: theme.palette.black["2"],
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.black["0"],
        },
    },
}));

export default StyledTextField;