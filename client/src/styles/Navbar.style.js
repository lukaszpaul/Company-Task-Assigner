import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #5B695A;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000000;
    `;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarExtendedContainer = styled.div`
`;
export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    text-decoration: none;
    margin-left: 5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NavbarLinkRight = styled(Link)`
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 5px;
    margin-right: 15px;
    margin-top: 30px;
`;

export const LogoutButton = styled.button`
    position: absolute;
    width: 141px;
    height: 40px;
top: 30px;
    right: 50px;
    background: #D9D9D9;
    border-radius: 30px;

    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: medium;

    &:hover {
        cursor: pointer;
        box-shadow: -2px 3px 30px 1px rgba(0,0,0,0.46);
        -webkit-box-shadow: -2px 3px 30px 1px rgba(0,0,0,0.46);
        -moz-box-shadow: -2px 3px 30px 1px rgba(0,0,0,0.46);
    }
    `

export const Logo = styled.img`
    margin: 10;
    max-width: 240px;
    height: auto;
    border: 0;
`;

export const NavbarLinkPortal = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    margin-right: 15px;
    margin-top: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;