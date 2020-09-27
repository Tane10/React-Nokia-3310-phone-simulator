import React from 'react';
import './App.css';
import { VoicemailOutlined, SpaceBarOutlined } from '@material-ui/icons';
import { Button, Grid, Typography, ButtonGroup } from '@material-ui/core';
import { convertWords } from "./api/convertWords";

function App() {

  const phoneKeyboardObject = [
    {
      num_1_key: {
        labelName: <VoicemailOutlined />,

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
    }
  ];

  const [wordString, setWordString] = React.useState("");

  function keyBoardClick(btn) {

    if (wordString === "") {
      setWordString(btn)
    } else {
      const newWord = wordString + btn;
      setWordString(newWord)
    }
  };

  const phoneButton = phoneKeyboardObject.map((key, idx) => {
    const btnNum = `${idx + 1}`;
    let buttonValue = key[`num_${idx + 1}_key`].keyValue;

    return <Button onClick={() => keyBoardClick(btnNum)} variant="outlined" >
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
            {wordString}_
          </Typography>
        </Grid>

        <Grid container justify="center" alignItems="center" >
          <Grid item xs={8} sm={2} md={5} >
            <div>
              {phoneButton}
              <Button onClick={() => keyBoardClick(0)} variant="outlined" >
                0<SpaceBarOutlined />
              </Button>
            </div>
          </Grid>
          <Grid item xs={5} sm={2} md={5}>
            <Button variant="contained" color="primary" onClick={() => convertWords(wordString)}> Convert</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;