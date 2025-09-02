import React from "react";
import Body from "./bodyimg";
import Head from "./header";
import Cards from "./cardssp";
import Homepage from "./homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cricketcadrs from "./cricketcards";
import Ipllive from "./ipl";
import Testlive from "./testmatch";
import Worldlive from "./worldcup";
import Volleybollcadrs from "./volleyboll";
import Mensvolleyboll from "./mensvolley";
import Kabaddi from "./kabaddi";
import About from "./about";

import Gamescards from "./gamescards";
import LeagueTable from "./ipltable";
import Newmain from "./newmain";
import Loginpage from "./loginpage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        <Route index element={<Newmain/>}/>
          <Route path="/Head" element={<Head />} />
          <Route path="/home" element={<Body />} />
          <Route path="login" element={<Loginpage/>}/>
         
          <Route path="/sports" element={<Cards/>} />
        
          <Route path="/gameacards" element={<Gamescards/>}/>
          
          <Route path="/click" element={<Cricketcadrs/>} />
          <Route path="/clickilp" element={<Ipllive/>}/>
          <Route path="/ilptable" element={<LeagueTable/>}/>
          <Route path="/clicktest" element={<Testlive/>}/>
          <Route path="/clickworld" element={<Worldlive/>}/>

          <Route path="/click1" element={<Volleybollcadrs/>} />
          <Route path="/volley" element={<Mensvolleyboll/>}/>
          <Route path="/click3" element={<Kabaddi/>}/>
          <Route path="/about" element={<About/>}/>
          
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;