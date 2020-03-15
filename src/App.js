import React from "react";
import "./App.css";
import NasaGrid from "./components/NasaGrid";
import styled from 'styled-components'

const topP = styled.p `
  @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`

function App() {
  return (
    <div className="App">
      <p>
        NASA Photo of the day
      </p>

      <NasaGrid />
    </div>
  );
}

export default App;
