import { Grid, ThemeProvider, Typography, createMuiTheme, Button } from "@material-ui/core"
import React from 'react';
import convertWords from "../api/convertWords"
import UpDown_btn from "../images/nokia/up_down_btn.svg"
import Up_icon from "../images/nokia/up_icon.svg"
import Down_icon from "../images/nokia/down_icon.svg"

export default function ScreenComponent({ text, arrows }) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'nokiafc22',
        },
    })

    const [message, setMessage] = React.useState(" ");
    const [wordList, setWordList] = React.useState([]);
    const [counter, setCounter] = React.useState(0);


    const changeWord = (increment) => {
        if (wordList.length !== 0) {
            if (increment === "-" &&  0 <= counter) {
                setCounter(counter - 1)
                setMessage(wordList[counter])
            }
            if (increment === "+" && counter <= (wordList.length - 1) ) {
                setCounter(counter + 1)
                setMessage(wordList[counter])
            }
        }
    }

    React.useEffect(() => {
        const fetchWords = async (string) => {
            if (string !== " ") {
                const wordArray = await convertWords(string);
                return wordArray
            }
        }

        fetchWords(text).then(res => {
            if (res !== undefined) {
                console.log(res)
                setMessage(res[counter])
                setWordList(res)
            }
        })

    }, [text])

    return (
        <div style={{ zIndex: '3', gridArea: 'overlap' }}>
            <Typography  style={{ zIndex: '3', gridArea: 'overlap', position: "relative", top: "20px", left: "10px" }}>{message}</Typography>
            <Grid container justify="center" alignItems="center" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", top: "173px", left: "130px" }}>
                <img alt="" src={UpDown_btn} tyle={{ zIndex: '3', gridArea: 'overlap' }} />
                <Button onClick={() => changeWord("+")} size="small" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", right: "60px", bottom: "10px" }}><img alt="" src={Up_icon} /></Button>
                <Button onClick={() => changeWord("-")} size="small" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", right: "150px", top: "10px" }}><img alt="" src={Down_icon} /></Button>
            </Grid>
        </div>
    )
}