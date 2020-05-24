import React, {useState} from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import GoogleLogin from 'react-google-login';

import {CLIENT_ID} from './config';

function App() {
  let [signedIn, setSignedIn] = useState(false);

  const responseGoogleSuccess = (response) => {
    console.log(response);
    setSignedIn(true);
  }

  const responseGoogleFail = (response) => {
    console.log(response);
  }

  function SignedIn(){

  }

  function SignedOut() {
    return(
      <div>
        <div className="button-area">
          <Button>
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFail}
              cookiePolicy={'single_host_origin'}
            />
          </Button>
        </div>
        <p>
          Want to see your plants? Login above!
        </p>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NatureDex... Gotta Catch Em Call</h1>
        <p>
          When going for a hike or a walk, you see lots of different plants.
          Ever seen a beautiful flower and wondered what it was called?
          Or a tree with unique leaves whose name you just can’t quite remember?
          NatureDex is here to help you identify and keep track of all the cool plants you encounter on your adventures!
        </p>
        <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/ndNDPgYblGo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Demo Video"
        ></iframe>
        <p>
          NatureDex identifies plants by analyzing photos that you take or upload from your camera roll.
          After analysis, NatureDex provides the common and scientific names of the identified plant so you can easily learn more about the plants you find.
          NatureDex also keeps a record of all the plants you’ve spotted before so you can look back at all of the trees and plants you’ve “captured”!
        </p>

        {signedIn
          ? <p>SignedIn</p>
          : SignedOut()
        }

        <div className="button-area">
          <Button className="button" variant="contained">
            <a href="https://devpost.com/software/naturedex">More Info</a>
          </Button>
        </div>
        <div className="button-area">
          <Button className="button" variant="contained">
            <a href="https://github.com/ReshmiCode/BackyardHacks20">Source Code</a>
          </Button>
        </div>
        <p>
          Made with 💖 by Megan Tran, Reshmi Ranjith, Saloni Shivdasani, and
          Vincent Vu
        </p>
      </header>
    </div>
  );
}

export default App;