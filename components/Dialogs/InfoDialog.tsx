import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Dialog from "@mui/material/Dialog";


const InfoDialog = ({open, handleClose, data}) => {


    function flattenObject(obj, parent = '', result = {}) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let propName = parent ? `${parent}-${key}` : key;

                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    flattenObject(obj[key], propName, result);
                } else {
                    result[propName] = obj[key];
                }
            }
        }
        return result;
    }

    function showProperties(obj) {
        let flattened = flattenObject(obj);
        let result = "";

        for (let key in flattened) {
            result += `${key}: ${flattened[key]}\n`;
        }

        return result
    }


    return (
        <Dialog
            onClose={handleClose}
            open={open}
        >
            <DialogTitle sx={{m: 0, p: 2}}>
                User Detail
            </DialogTitle>
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon/>
            </IconButton>
            <DialogContent>
                <Typography sx={{
                    textAlign: 'justify',
                    whiteSpace: 'break-spaces'
                }}>
                    {showProperties(data)}
                </Typography>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    )
}

export default InfoDialog
