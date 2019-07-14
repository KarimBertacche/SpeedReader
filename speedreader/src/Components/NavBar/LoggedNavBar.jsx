import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StylesLoggedNavBar = styled.nav`


`;


export default function LoggedNavBar() {
    return (
        <StylesLoggedNavBar>
            <h1>SpeedReader</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Sign out</NavLink>
            </div>
        </StylesLoggedNavBar>
    );
};