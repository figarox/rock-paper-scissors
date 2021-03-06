import React from "react";
import { Route, Routes } from "react-router-dom";
import StartLevel from "../Page/StartLevel";
import CL from "../Page/changeLevel";
import LevelOne from "../Page/LevelOne";
import LevelTwo from "../Page/LevelTwo";

const Page = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<StartLevel/>}/>
                <Route path="/ChangeLevel" element={<CL/>}/>
                <Route path="/LevelOne" element={<LevelOne/>}/>
                <Route path="/LevelTwo" element={<LevelTwo/>}/>
            </Routes>
      </>
     );
}
 
export default Page;