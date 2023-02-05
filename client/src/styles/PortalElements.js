// File: /src/styles/PortalElements.js

import styled from 'styled-components';

export const Banner = styled.h1 `
    font-family: 'Inter', sans-serif;
    font-size: xx-large;
    font-weight: 800;
    text-decoration: underline;
    display: grid;
    place-content: center;
`;

// =================== Task Form Elements =================== \\

export const TaskForm = styled.form`
  width: 500px;
  zoom: 125%;
  font-family: 'Inter', sans-serif;
  margin-left: auto;
  margin-right: auto;
`;

export const TskFrmLabel = styled.label`
  font-weight: bold;
  margin-bottom: -10px;
`;

export const CreateTaskButton = styled.button`
  background: #D9D9D9;
  border-radius: 30px;
  font-weight: bold;
  font-size: medium;
  width: 200px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -30px;

  &:hover {
    cursor: pointer;
    box-shadow: -2px 3px 30px 1px rgba(0, 0, 0, 0.46);
    -webkit-box-shadow: -2px 3px 30px 1px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: -2px 3px 30px 1px rgba(0, 0, 0, 0.46);
  }
`;

// const Row = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// =================== Pending Tasks Elements =================== \\

// export const PendingTasksContainer = styled.div `
//     display: grid;
//     place-items: center;
// `;

// export const TaskCard = styled.div`
//   position: absolute;
//   width: 2000px;
//   height: 103px;
//   background: #D9D9D9;
//   border-radius: 25px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const DueDate = styled.h3`
//   width: 170px;
//   height: 49px;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 24px;
//   color: #000000;
//   text-align: right;
// `;

// export const AssignedBy = styled.h3`
//   width: 531px;
//   height: 29px;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 24px;
//   color: #000000;
// `;

// export const Description = styled.p`
//   width: 1304px;
//   height: 58px;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 20px;
//   line-height: 24px;
//   color: #000000;
// `;

export const TskSpan = styled.span `
    font-weight: bold;
    text-decoration: underline;
`;


// Original

export const PendingTasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%;
  place-items: center;
`;


export const TaskCard = styled.div`
  width: 710px;
  height: 80%;
  background: #D9D9D9;
  border-radius: 25px;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TaskContainer = styled.div`
`;

export const DueDate = styled.h3 `
    width: 250px;
    height: 49px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;

    padding: 10px 10px;
    margin-left: -450px;

    
`;

export const AssignedBy = styled.h3 `
    width: 531px;
    height: 29px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;


    margin-top: -35px;
    padding: 10px 10px;
    margin-left: -170px;


`;

export const Description = styled.p `
    width: 705px;
    height: 187px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;

    padding: 0px 10px;
`;

export const CompleteTaskButton = styled.button`
 display: inline-block;
 padding: 0.9rem 1.8rem;
 font-size: 16px;
 font-weight: 700;
 color: black;
 border: 3px solid rgb(70, 252, 146);
 cursor: pointer;
 position: relative;
 background-color: transparent;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
 
 &::before {
   content: "";
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(70, 252, 146);
   transform: translateX(-100%);
   transition: all .3s;
   z-index: -1;
 }
 
 &:hover::before {
   transform: translateX(0);
 }
`;

export const SubmissionInputLink = styled.input`
    width: 680px;
    margin-bottom: 10px;
    height: 20px;
`;