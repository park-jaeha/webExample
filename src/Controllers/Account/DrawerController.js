import * as React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
/** Component Import */
import Drawer from "../../Views/Account/Drawer";

const Center = styled.div`
    margin-top: 70px;
    padding-right:60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ...theme.mixins.Appbar;
`;

const DrawerController = (props) => {
    return (
        <div className="DrawerController">
            <Center>
                <Drawer />

                {/** react-router에서 중첩라우팅 시작점 지정을 위한 테그 */}
                <Outlet />
            </Center>
        </div>
    );
};
export default DrawerController;
