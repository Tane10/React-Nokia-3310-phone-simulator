import Key_0 from "../images/nokia/num_keys/0_btn.svg"
import Key_1 from "../images/nokia/num_keys/1_btn.svg"
import Key_2 from "../images/nokia/num_keys/2_btn.svg"
import Key_3 from "../images/nokia/num_keys/3_btn.svg"
import Key_4 from "../images/nokia/num_keys/4_btn.svg"
import Key_5 from "../images/nokia/num_keys/5_btn.svg"
import Key_6 from "../images/nokia/num_keys/6_btn.svg"
import Key_7 from "../images/nokia/num_keys/7_btn.svg"
import Key_8 from "../images/nokia/num_keys/8_btn.svg"
import Key_9 from "../images/nokia/num_keys/9_btn.svg"
import Hash_key from "../images/nokia/hash_btn.svg"
import Star_btn from "../images/nokia/star_btn.svg"
import Call_btn from "../images/nokia/call_btn.svg"
import Action_btn from "../images/nokia/nokia_actionBtn.svg"
import UpDown_btn from "../images/nokia/up_down_btn.svg"
import Up_icon from "../images/nokia/up_icon.svg"
import Down_icon from "../images/nokia/down_icon.svg"
import { Button, Grid} from "@material-ui/core"
import React from 'react';
import ScreenComponent from "./screen_componet"

const numberValue = ["2", "3", "4", "5", "6", "7", "8", "9", " "];

// TODO: write funtion to capture numbers and send to screnn compent then click up down arrows to chnage words
export default function NumberKeyPad() {

    const [numberCapture, setNumberCapture] = React.useState("");
    const [incrementWord, setIncrementWord] = React.useState();
    const captureNumbers = (value) => setNumberCapture(numberCapture + value);
    const changeWord = (value) => setIncrementWord(value);

    return (
        <div>
            <div>
                <ScreenComponent text={numberCapture} arrows={incrementWord} />
            </div>
            <div style={{ zIndex: '2', gridArea: 'overlap', position: "relative", top: "100px" }}>
                <Grid container justify="center" alignItems="center" style={{ zIndex: '1', gridArea: 'overlap' }} >
                    <img alt="" src={Action_btn} style={{ position: "relative", top: "25px" }} />
                </Grid>

                <Grid container justify="center" alignItems="center" style={{ zIndex: '1', gridArea: 'overlap', position: "relative", bottom: "20px", right: "40px" }} >
                    <img alt="" src={Call_btn} style={{ position: "relative", left: "10px" }} />
                    <img alt="" src={UpDown_btn} style={{ position: "relative", left: "70px", top: "5px" }} />
                </Grid>
                <Grid container justify="center" alignItems="center" style={{ zIndex: '3', gridArea: 'overlap', position: "relative", bottom: "50px", left: "10px" }} >
                    <Button onClick={()=> changeWord("+")} size="small" style={{ position: "relative", left: "100px", bottom: "20px" }}><img alt="" src={Up_icon} /></Button>
                    <Button onClick={()=> changeWord("-")} size="small"><img alt="" src={Down_icon} /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button size="small"><img alt="" src={Key_1} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[0])}} size="small"><img alt="" src={Key_2} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[1])}}  size="small"><img alt="" src={Key_3} /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={() => {captureNumbers(numberValue[2])}} size="small"><img alt="" src={Key_4} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[3])}} size="small"><img alt="" src={Key_5} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[4])}} size="small"><img alt="" src={Key_6} /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={() => {captureNumbers(numberValue[5])}} size="small"><img alt="" src={Key_7} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[6])}} size="small"><img alt="" src={Key_8} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[7])}} size="small"><img alt="" src={Key_9} /></Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Button size="small"><img alt="" src={Star_btn} /></Button>
                    <Button onClick={() => {captureNumbers(numberValue[8])}} size="small"><img alt="" src={Key_0} /></Button>
                    <Button size="small"><img alt="" src={Hash_key} /></Button>
                </Grid>
            </div >
        </div>
    )
}