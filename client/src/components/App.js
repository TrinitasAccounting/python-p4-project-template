import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

import NavBar from "./NavBar";





function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('/players')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])


  return (
    // players.map((player) => )
    <div>
      <NavBar />
      <h1>Player Stats Page</h1>
      <Outlet />
    </div>
  );
}

export default App;
