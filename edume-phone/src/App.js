import React from 'react';
import './App.css';
import VoicemailOutlinedIcon from '@material-ui/icons/VoicemailOutlined';
import { Button, Grid, Typography, ButtonGroup } from '@material-ui/core';

function App() {

  // const voiceMail = <VoicemailIcon />;

  const phoneKeyboardObject = [
    {
      num_1_key: {
        labelName: <VoicemailOutlinedIcon />,

      }
    },
    {
      num_2_key: {
        labelName: "abc",
        keyValue: ["a", "b", "c"]
      }
    },
    {
      num_3_key: {
        labelName: "def",
        keyValue: ["d", "e", "f"]
      }
    },
    {
      num_4_key: {
        labelName: "ghi",
        keyValue: ["g", "h", "i"]
      }
    },
    {
      num_5_key: {
        labelName: "jkl",
        keyValue: ["j", "k", "l"]
      }
    },
    {
      num_6_key: {
        labelName: "mno",
        keyValue: ["m", "n", "o"]
      }
    },
    {
      num_7_key: {
        labelName: "pqrs",
        keyValue: ["p", "q", "r", "s"]
      }
    },
    {
      num_8_key: {
        labelName: "tuv",
        keyValue: ["t", "u", "v"]
      }
    },
    {
      num_9_key: {
        labelName: "wxyz",
        keyValue: ["w", "x", "y", "z"]
      }
    },
  ];

  const [buttonState, setButtonState] = React.useState({
    buttonLabel: "",
    buttonValue: "",
    index: 0
  });

  const [wordString, setWordString] = React.useState("");
  const [clickCount, setClickCount] = React.useState(0);

  function keyBoardClick(btn, key) {

    // console.log("click count ", clickCount)
    // console.log("btn stuff ", btn.length)
    // console.log("key stuff ", key)

    if (key !== "num_1_key") {

      if (key === buttonState.buttonLabel) {
        console.log("hi")

        if (clickCount <= btn.length) {

          console.log("low")
          setButtonState({
            buttonLabel: key,
            buttonValue: btn[clickCount],
            index: clickCount
          });

          setClickCount(clickCount + 1);

          console.log(buttonState, clickCount)
        }

      } else {

        setButtonState({
          buttonLabel: key,
          buttonValue: btn[clickCount],
          index: clickCount
        });

        setClickCount(0);
        console.log(buttonState)

        console.log('in dat else')

        console.log("click count ", clickCount)
        console.log("btn stuff ", btn[clickCount])
        console.log("key stuff ", key)
      }

    }

  };

  const phoneButton = phoneKeyboardObject.map((key, idx) => {
    const btnNum = idx + 1;
    let buttonValue = key[`num_${idx + 1}_key`].keyValue;
    let keyName = `num_${idx + 1}_key`;

    return <Button onClick={() => keyBoardClick(buttonValue, keyName)} variant="outlined" value={buttonValue}>
      {btnNum} {buttonValue}
    </Button>;
  })


  return (
    < div >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={8} sm={9} md={12}>
          <Typography align="center" >Enter message here</Typography>
        </Grid>
        <Grid item xs={8} sm={9} md={6} container justify="center" alignItems="center" style={{
          height: "100px",
          width: "100px",
          backgroundColor: "#D1DCDF",
          paddingTop: "8px",
          paddingBottom: "8px"
        }}>
          <Typography>
            {wordString}
          </Typography>
        </Grid>

        <Grid container justify="center" alignItems="center" >
          <Grid item xs={8} sm={2} md={4} >
            <div>
              {phoneButton}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;