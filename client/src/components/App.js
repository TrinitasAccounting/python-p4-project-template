import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

import NavBar from "./NavBar";





function App() {

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [coaches, setCoaches] = useState([])

  // Fetching all of the players using GET
  useEffect(() => {
    fetch('/players')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  // Fetching all of the teams using GET
  useEffect(() => {
    fetch('/teams')
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])

  // Fetching all of the coaches using GET
  useEffect(() => {
    fetch('/coaches')
      .then(res => res.json())
      .then(data => setCoaches(data))
  }, [])


  function addPlayer(newPlayerData) {
    fetch('/players', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlayerData)
    })
      .then(response => response.json())
      .then(newPlayerData => setPlayers([...players, newPlayerData]))
  }


  function addTeam(newTeamData) {
    fetch('/teams', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTeamData)
    })
      .then(response => response.json())
      .then(newTeamData => setTeams([...teams, newTeamData]))
  }





  function updatePlayer(id, playerDataForUpdate, setPlayerFromPlayerProfile) {
    fetch(`/players/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(playerDataForUpdate)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(updatedPlayerData => {
            setPlayerFromPlayerProfile(updatedPlayerData)
            setPlayers(players => players.map(player => {
              if (player.id === updatedPlayerData.id) {
                return updatedPlayerData
              }
              else {
                return player
              }
            }))
          })
        }
        else if (response.status === 400 || response.status === 404) {
          response.json().then(errorData => {
            alert(`Error: ${errorData.error}`)
          })
        }
        else {
          response.json().then(() => {
            alert("Error: Something went wrong")
          })
        }
      })
  }



  function deletePlayer(id) {
    fetch(`/players/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          setPlayers(playerData => playerData.filter(player => {
            return player.id !== id
          }))
        }
        else if (response.status === 404) {
          response.json().then(errorData => alert(`Error: ${errorData.error}`))
        }
      })
  }




  return (
    // players.map((player) => )
    <div>
      <NavBar />
      {/* <h1>Player Stats Page</h1> */}
      <Outlet context={{ players: players, teams: teams, coaches: coaches, addPlayer: addPlayer, deletePlayer: deletePlayer, updatePlayer: updatePlayer, addTeam: addTeam }} />
    </div>
  );
}

export default App;
