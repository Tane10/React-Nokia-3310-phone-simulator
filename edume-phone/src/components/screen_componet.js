import { Grid, ThemeProvider, Typography, createMuiTheme } from "@material-ui/core"
import React from 'react';
import convertWords from "../api/convertWords"

export default function ScreenComponent({ text, arrows }) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'nokiafc22',
        },
    })

    const [message, setMessage] = React.useState(text);
    const [wordList, setWordList] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {

        const fetchWords = async (string) => {
            if (string !== "") {
                const wordArray = await convertWords(string);
                setWordList(wordArray)
            }
        }

        const changeWord = (increment) => {
            if(increment === "-" && counter !== 0) setCounter(counter - 1)
            if(increment === "+" && !counter <= wordList.length) setCounter(counter + 1)
        }

        fetchWords(text);
        console.log("wordList: ", wordList)
        if (wordList.length <0 !== undefined) setMessage(wordList[counter])


        changeWord(arrows)
        console.log("counter: ",counter)



    }, [message, text, arrows])

    return (
        <div style={{ zIndex: '3', gridArea: 'overlap', }}>
            <Grid container>

            </Grid>
            <ThemeProvider theme={theme}>
                {message}
                <Typography></Typography>
            </ThemeProvider>
        </div>
    )
}