import { RouteObject, useRoutes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/paginas/home';
import PeopleSelected from "./components/templates/people_selected";

function App() {
  
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "persona/:personaId",
          element: <div className="col-12 col-md-8 swapi-col">
            <PeopleSelected/>
          </div>,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  
  return <div>{element}</div>;
  // return (
  //   <Home />
  // );
}

export default App;
