

import { useOutletContext, Link } from "react-router-dom";

import Player from "./Player";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function PlayersTable() {

    const { players } = useOutletContext();

    console.log(players);

    // let rowsTest = players.map((player) => {
    //     let names = player.name.split(' ')
    //     console.log(names)
    //     let profileLink = <Link to={`/players/${player.id}`}>Player Profile</Link>
    //     // let profileLink = <a>
    //     return (
    //         { id: player.id, firstName: names[0], lastName: names[1], jersey_number: player.jersey_number, points: player.points, games_played: player.games_played, profile: profileLink }
    //     )
    // })

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name', width: 200 },
        { field: 'jersey_number', headerName: 'Jersey Number', width: 150 },
        { field: 'points', headerName: 'Points Scored', width: 150 },
        { field: 'games_played', headerName: '# of Games Played', width: 160 },
        { field: 'profile', headerName: 'Profile', width: 150 },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
        // {
        //     field: 'age',
        //     headerName: 'Age',
        //     type: 'number',
        //     width: 90,
        // },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    const playersComponents = players.map(player => {
        return (
            // <div key={player.id}>
            //     <Player playerchar={player} />
            //     <Link to={`/players/${player.id}`}>Player Profile</Link>
            // </div>
            <tbody key={player.id}>
                <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.jersey_number}</td>
                    <td>{player.points}</td>
                    <td>{player.games_played}</td>
                    <td>
                        <Link to={`/players/${player.id}`}>Player Profile</Link>
                    </td>
                </tr>
            </tbody>
        )
    })


    return (
        // <ul>
        //     {playersComponents}
        //     {/* <Link to={`/players/${player.id}`}>Player Profile</Link> */}
        // </ul>
        <div>



            <div>
                <h1>All Players Stats</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Jersey Number</th>
                            <th>Points Scored</th>
                            <th># of Games Played</th>
                            <th>Profile</th>
                        </tr>
                    </thead>

                    {playersComponents}
                </table >
            </div>

            {/* <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowsTest}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div> */}
        </div>
    )
};

export default PlayersTable;