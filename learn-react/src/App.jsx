// import React from 'react'; // Remove this line if using React 17 or newer.
import "./App.css";
import Card from "./component/card";
import img from "./assets/img.png";
function App() {
  return (
    <>
      <Card
        image={img}
        name="Jonas schedtman"
        paragraph="fullstuck developer"
      />
    </>
  );
}

export default App;
