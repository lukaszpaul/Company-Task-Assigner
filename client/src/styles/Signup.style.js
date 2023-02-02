import styled from 'styled-components';

export const SignupContainer = styled.div`

margin: auto;
width: 323px;
height: 353px;
left: 473px;
top: 218px;
margin-top: 150px;

display: flex;
background: #5B695A;
border-radius: 30px;
justify-content: center;

`;

export const SignupText = styled.div`
    text-decoration: none;
    display: flex;
    margin-top: 20px;


    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EmailText = styled.text`
    position: absolute;
    width: 230px;
    height: 33px;


    top: 295px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EmailInput = styled.input`
    border-radius: 20px;
    padding-left: 8px;
    position: absolute;
    width: 240px;
    height: 33px;
    top: 320px;


    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: black;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PasswordText = styled.text`
    position: absolute;
    width: 230px;
    height: 33px;
    top: 395px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const PasswordInput = styled.input`
    border-radius: 20px;

    position: absolute;
    width: 240px;
    height: 33px;
    top: 420px;
    padding-left: 8px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: black;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SubmitButton = styled.button`
    position: absolute;
    width: 141px;
    height: 40px;

top: 490px;

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
`;

export const OptionDrop = styled.form`
position: absolute;
border-radius: 30px;
height: 40px;

top: 500px;

`
export const CompanyText = styled.text`
position: absolute;



top: 480px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;

mix-blend-mode: normal;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`