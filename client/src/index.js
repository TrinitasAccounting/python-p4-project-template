import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import PlayersTable from "./components/PlayersTable";
import NewPlayerForm from "./components/NewPlayerForm";
import PlayerProfile from "./components/PlayerProfile";
import Teams from './components/Teams';
import PlayersOnTeam from "./components/PlayersOnTeam";
import NewTeamForm from "./components/NewTeamForm";


// _________Note: To render any children the '<Outlet /> has to be included___________________
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <PlayersTable />
            },
            {
                path: '/add_player',
                element: <NewPlayerForm />
            },
            {
                path: "/players/:id",
                element: <PlayerProfile />
            },
            {
                path: '/teams',
                element: <Teams />
            },
            {
                path: '/teams/players/:id',
                element: <PlayersOnTeam />
            },
            {
                path: '/add_team',
                element: <NewTeamForm />
            }

        ]
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
