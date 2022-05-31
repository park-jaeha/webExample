import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** 화면 구성 */
import Drawer from "../Controllers/Account/DrawerController";
import Testpage from "./Testpage";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Testpage />} /> */}
                <Route path="/" element={<Drawer />}>
                    <Route path="/testPage" element={<Testpage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
