// import {type ReactNode} from 'react';
import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage/HomePage";

export default function App(){
  return(
    
      <Routes>
        <Route index element={<HomePage />}/>
        {/*index همان path="/" است بهتر است از index استفاده کنیم  */}
      </Routes>
    
   
  )

}