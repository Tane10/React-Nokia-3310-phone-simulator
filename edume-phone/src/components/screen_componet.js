import { Button, Grid, makeStyles, withStyles , ThemeProvider,Typography, createMuiTheme} from "@material-ui/core"
import React from 'react';
import nokiafc22 from '../fonts/nokiafc22.ttf';


export default function ScreenComponent(){


    const theme = createMuiTheme({
        typography: {
          fontFamily: 'nokiafc22',
        },})

    return (
        <div style={{ zIndex: '3', gridArea: 'overlap', }}>
            <ThemeProvider theme={theme}>

<Typography>iubibobvojbv</Typography>
</ThemeProvider>
        </div>

    )
}