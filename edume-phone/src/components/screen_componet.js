import { Grid, ThemeProvider, Typography, createMuiTheme, Button } from "@material-ui/core"
import React from 'react';
import convertWords from "../api/convertWords"
import UpDown_btn from "../images/nokia/up_down_btn.svg"
import Up_icon from "../images/nokia/up_icon.svg"
import Down_icon from "../images/nokia/down_icon.svg"
import Call_btn from "../images/nokia/call_btn.svg"


export default function ScreenComponent({ text, arrows }) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'nokiafc22',
        },
    })

    const [message, setMessage] = React.useState("");
    const [wordList, setWordList] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const [word, setWord] = React.useState("");
    const [stringLength, setStringLength] = React.useState(0);
    const maxStringLength = 23;

    const changeWord = (increment) => {
        if (wordList.length !== 0) {

            if (increment === "-" && 0 <= counter) {
                setCounter(1 - counter)
                setMessage(wordList[counter])
            }
            if (increment === "+" && counter <= (wordList.length - 1)) {
                setCounter(counter + 1)
                setMessage(wordList[counter])
            }
            
        }
    }

    const clearChar = async () => {
        const lastChar = (text.length -1);
        const newWord = text.replace(text[lastChar], "");
        setMessage(newWord)
    }


    React.useEffect(() => {


        const fetchWords = async (string) => {
            console.log("incoming text: ", string)
            if (string.includes(" ")) return "space"
            else {
                if (string !== "") {
                    const wordArray = await convertWords(string);
                    return wordArray
                }
            }
        }

        fetchWords(text).then(res => {
            // set messasge in the then
            if (res !== undefined) {
                if (res === "space") {
                    console.log("space")
                    setWord(wordList[counter])
                    setMessage(word + " ")
                    setCounter(0)
                    text = "";

                } else {
                    console.log(res)
                    setMessage(message + res[counter])
                    setWordList(res)
                }
            }

        })

    }, [text, word])

    return (
        <div style={{ zIndex: '3', gridArea: 'overlap' }}>
            <Typography style={{ zIndex: '3', gridArea: 'overlap', position: "relative", top: "25px", left: "16px" }}>{message}</Typography>

            <Grid container justify="center" alignItems="center" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", top: "175px", right: "60px" }} >
                    <Button size="small" onClick={clearChar}><img alt="" src={Call_btn}/> </Button>
                </Grid>

            <Grid container justify="center" alignItems="center" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", top: "105px", left: "130px" }}>
                <img alt="" src={UpDown_btn} tyle={{ zIndex: '3', gridArea: 'overlap' }} />
                <Button onClick={() => changeWord("+")} size="small" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", right: "60px", bottom: "10px" }}><img alt="" src={Up_icon} /></Button>
                <Button onClick={() => changeWord("-")} size="small" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", right: "150px", top: "10px" }}><img alt="" src={Down_icon} /></Button>
            </Grid>
        </div>
    )
}