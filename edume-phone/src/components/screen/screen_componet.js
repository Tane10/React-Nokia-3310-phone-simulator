import { Grid, ThemeProvider, Typography, createMuiTheme, Button } from "@material-ui/core"
import React from 'react';
import convertWords from "../../api/convertWords"
import UpDown_btn from "../../images/nokia/up_down_btn.svg"
import Up_icon from "../../images/nokia/up_icon.svg"
import Down_icon from "../../images/nokia/down_icon.svg"
import Call_btn from "../../images/nokia/call_btn.svg"
import  "./screen_componet.css"

//TODO: delete a letter from the message
//TODO: get words wrapping
export default function ScreenComponent({ text, arrows }) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'nokiafc22',
        },
    })

    const [message, setMessage] = React.useState([]);
    const [wordList, setWordList] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    const [word, setWord] = React.useState("");

    const changeWord = (increment) => {
        if (wordList.length !== 0) {
            if (increment === "-" && counter !== 0) {
                setCounter(counter - 1)
                setWord(wordList[counter])
            }

            if (increment === "+" && counter <= (wordList.length - 2)) {
                setCounter(counter + 1)
                setWord(wordList[counter])
            }
        }
    }

    const clearChar = () => {
        const lastChar = text.length - 1
        const newWord = text.replace(text[lastChar], "");
        text = newWord
        setCounter(0)
        return text
        console.log("newword:", newWord)
        console.log("old text:", text)
        console.log("wordlidt:", wordList)
        // setMessage(newWord)
    }

    React.useEffect(() => {

        const fetchWords = async (string) => {
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
                    setWord(wordList[counter])
                    setMessage([...message, " "])
                    setCounter(0)
                    text = "";
                    // console.log("picking up the space")

                } else {
                    if (message.includes(" ")) {
                        //if message already has a space add the next letter
                        if (message[message.length - 1] !== " ") {
                            message.splice((message.length - 1), 1, res[counter])
                            setMessage(message)
                            setWord(res[counter])
                            setWordList(res)
                        } else {
                            //if message has a space add the next letter
                            setWord(res[counter])
                            setMessage([...message, word])
                        }

                    } else {
                        setWord(res[counter])
                        setMessage([word])
                        setWordList(res)
                    }
                }
            }

        })

    }, [text, word, counter])

    return (
         <div className="screen" >
         <div className="screenDiv" >
         <Typography className="screenText" >{message.join(" ")}</Typography>
         </div>

         <Grid className="callBtnContainer" container justify="center" alignItems="center">
             <Button size="small" ><img alt="" src={Call_btn} /> </Button>
         </Grid>

         <Grid  className="upDownBtnContainer" container justify="center" alignItems="center">
             <img  className="upDownBtnImg" alt="" src={UpDown_btn} />
             <Button className="upBtn" onClick={() => changeWord("+")} size="small" ><img alt="" src={Up_icon} /></Button>
             <Button className="downBtn" onClick={() => changeWord("-")} size="small" ><img alt="" src={Down_icon} /></Button>
         </Grid>
     </div>
    )
}