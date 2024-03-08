import * as React from 'react';
import Button from '@mui/material/Button';

function TextButton({ text}) {
    return (
        <Button variant= "contained" onClick={() => { console.log(`${text}`); }}> { text } </Button>
    );
}

export default TextButton;