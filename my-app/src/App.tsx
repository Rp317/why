import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './addClass.css';
import why from './why';
interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <div id="joe">
          <div className="header">
            <button id="dropdown">drop-down</button>
            <h2 id="logo">shmoblel bassroom</h2>
            <button id="addClass" onClick={Hello}>
              add class
            </button>
            <button id="account"> account</button>
          </div>
          <div id="ez">
            <button id="to-do"></button>
            <button id="calander"></button>
          </div>
          <div id="classes">
            <button className="classeses"></button>
            <button className="classeses"></button>
            <button className="classeses"></button>
            <button className="classeses"></button>
          </div>
          </div>

          <div className="invis" id="owo">
            <div className="header">
              <button
                onClick={function thing() {
                  document.getElementById('owo')!.style.display = 'none';
                  document.getElementById('joe')!.style.display = 'block';
                }}
              id="x">
                X
              </button>
              <h1 id="thing">Join class</h1>
              <button id="joinButton" onClick={function asdf() {
                why()
              }}>Join</button>
            </div>
            <div id="userData">
              <h3>You're currently signed in as</h3>
              <img></img>
              <h2 id="user">user</h2>
              <h2>email</h2>
              <button>switch account</button>
            </div>
            <div id="classCode">
              <h1>Class code</h1>
              <h3>Ask your teacher for the class code, then enter it here.</h3>
              <input id="ur" onFocus={function awepfppd() {
                document.getElementById("joinButton")!.style.pointerEvents = "all";
              }}></input>
            </div>
            <div id="textz">
              <h1>To sign in with a class code</h1>
              <p>(bullet point) Use an authorized account</p>
              <p>
                {' '}
                (bullet point) Use a class code with 5-7 letters or numbers, and
                no spaces or symbols
              </p>
              <p>
                If you have trouble joining the class, go to the{' '}
                <a href="https://support.google.com/edu/classroom/answer/6020297?hl=enauthuser=0#zippy=%2Ci-forgot-or-lost-the-class-code%2Cmy-class-code-doesnt-work">
                  Help center article
                </a>
              </p>
            </div>
          </div>
      </div>
    );
  }
}

function thing() {
  let items = document.getElementById('classeses');
  items!.appendChild(document.createElement('owo'));
}

export default App;