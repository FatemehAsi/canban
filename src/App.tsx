// import {type ReactNode} from 'react';
import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import BoardPage from "./pages/BoardPage/BoardPage";
import RootLayout from "./layouts/RootLayout/RootLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App(){
  return(
    
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />}/>
          {/* index همان path="/" است بهتر است از index استفاده کنیم  */}
          <Route path="board/:id" element={<BoardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    
   
  )

}