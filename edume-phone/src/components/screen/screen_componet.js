import { Grid, Typography, Button } from "@material-ui/core"
import React, { useState, useEffect, useRef } from 'react';
import convertWords from "../../api/convertWords"
import UpDown_btn from "../../images/nokia/up_down_btn.svg"
import Up_icon from "../../images/nokia/up_icon.svg"
import Down_icon from "../../images/nokia/down_icon.svg"
import Call_btn from "../../images/nokia/call_btn.svg"
import "./screen_componet.css"
import "../../fonts/nokiafc22.ttf"

export default function ScreenComponent({ text }) {
    const [message, setMessage] = useState([]);
    const [wordList, setWordList] = useState([]);
    const [counter, setCounter] = useState(0);
    const [word, setWord] = useState("");

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

    const fetchWords = async (string) => {
        if (string.includes(" ")) return "space"
        else {
            if (string !== "") {
                const wordArray = await convertWords(string);
                return wordArray
            }
        }
    }

    const clearChar = () => {
        console.log("current message:", message)
        console.log("current word:", word)
        console.log("current text:", text)

        const lastCharText = text.length - 1
        const newText = text.replace(text[lastCharText], "");

        const lastCharWord = word.length - 1
        const newWord = word.replace(word[lastCharWord], "");

        console.log("current text:", newText)
        console.log("current word:", newWord)

        text = newText
    }

    useEffect(() => {
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

            <Grid className="upDownBtnContainer" container justify="center" alignItems="center">
                <img className="upDownBtnImg" alt="" src={UpDown_btn} />
                <Button className="upBtn" onClick={() => changeWord("+")} size="small" ><img alt="" src={Up_icon} /></Button>
                <Button className="downBtn" onClick={() => changeWord("-")} size="small" ><img alt="" src={Down_icon} /></Button>
            </Grid>
        </div>
    )
}