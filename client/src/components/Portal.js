// File: /src/components/Portal.js

import React, { useEffect, useState } from 'react'
import {Banner, TaskForm, TskFrmLabel, CreateTaskButton, TaskCard, DueDate, AssignedBy, Description, TskSpan, PendingTasksContainer, CompleteTaskButton, SubmissionInputLink} from '../styles/PortalElements'
import { authentication, db } from '../firebase-config';
import {collection, getDocs, addDoc, doc, deleteDoc }  from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Portal() {

  const [taskList, setTaskList] = useState([]);


  // New Task States
  const [newDueDate, setNewDueDate] = useState("");
  const [newAssigner, setNewAssigner] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [newCompletionURL, setNewCompletionURL] = useState("");

  const tasksCollectionRef = collection(db, "tasks");
  const completedTasksCollectionRef = collection(db, "completedTasks");

  const getTaskList = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTaskList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const onSubmitTask = async () => {
    try {
      await addDoc(tasksCollectionRef, {
        dueDate: newDueDate,
        assigner: newAssigner,
        description: newDescription,
        userID: authentication?.currentUser?.email,
      });
      getTaskList();
    } catch (err) {
      console.error(err);
    }
  }; // <--- onSubmitTask() function ends here

  const getCompletedTaskList = async () => {
    try {
      const data = await getDocs(completedTasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTaskList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) =>  {
    // const taskDoc = doc(db, "tasks", id);
    await deleteDoc(doc(db, "tasks", id));
    window.location.reload(false);
  };

  const completeTask = async (taskID, completedDueDate, completedAssigner, completedDescription, completedURL) => {
    try{
      await addDoc(completedTasksCollectionRef, {
        dueDate: completedDueDate,
        assigner: completedAssigner,
        description: completedDescription,
        completionURL: completedURL,
      });
      getCompletedTaskList();
    } catch (err) {
      console.error(err);
    }
    deleteTask(taskID);
  } // <--- completeTask() function ends here

  
  // CAUSING PROBLEMS DON'T KNOW WHY?!
  // const completeTask = async (id) => {
  //   const taskDoc = doc(db, "tasks", id);
  //   await deleteDoc(taskDoc);
  //   window.location.reload('false');
  // };

  

  return (
    <>
      <Banner style={{marginBottom:'10px', marginTop:'12.5px'}}>Create a Task</Banner>

      <TaskForm>
      
        <TskFrmLabel for="duedate">Due Date:</TskFrmLabel> <br />
        <input id="duedate" type="date" onChange={(e) => setNewDueDate(e.target.value)}/><br />
      
        <TskFrmLabel for="assigner">Assigner:</TskFrmLabel><br />
        <input id="assigner" type="text" onChange={(e) => setNewAssigner(e.target.value)} /><br />
    
        <TskFrmLabel for="description">Description:</TskFrmLabel><br />
        <textarea id="description" name="description" placeholder='Perform the following task for me...' onChange={(e) => setNewDescription(e.target.value)}></textarea>
      
        <br /><br /><br />
        <CreateTaskButton onClick={onSubmitTask}>Create Task</CreateTaskButton>

      </TaskForm>

      <br /><br />
      <hr />

      <Banner style={{marginBottom:'50px', marginTop:'12.5px'}}>Pending Tasks</Banner>
      <PendingTasksContainer>
        {taskList.map((task) => (
          <TaskCard>
            <DueDate><TskSpan>Due Date</TskSpan>: {task.dueDate}</DueDate>
            <AssignedBy><TskSpan>Assigned By</TskSpan>: {task.assigner}</AssignedBy>
            <Description><TskSpan>Task</TskSpan>: {task.description}</Description>

            <SubmissionInputLink placeholder="Insert URL to document or repository..." onChange={(e) => setNewCompletionURL(e.target.value)}/>
            <CompleteTaskButton onClick={() => completeTask(task.id, task.dueDate, task.assigner, task.description, newCompletionURL)}>Complete</CompleteTaskButton>
          </TaskCard>
        ))}
      </PendingTasksContainer>
      
      <br /><br /><br />
  </>
  )
}

export default Portal;





// ===================================== ChatGPT Firebase Realtime Database Output ===================================== \\

/* <CompanyPortalBanner>Dashboard</CompanyPortalBanner>

<TaskForm onSubmit={handleSubmit}>

    <TskFrmLabel for="date">Date</TskFrmLabel> <br />
    <input id="date" type="date" value={formData.date} onChange={handleInputChange}></input>
    <br /><br />
    <TskFrmLabel for="assigner">Assigner</TskFrmLabel><br />
    <input id="assigner" type="text" value={formData.assigner} onChange={handleInputChange} placeholder=''></input>
    <br /><br />
    <TskFrmLabel for="task">Task</TskFrmLabel><br />
    <textarea id="task" name="task" value={formData.task} onChange={handleInputChange} placeholder='Perform the following task for me...'></textarea>
    <br /><br /><br />
    <CreateTaskButton type="submit">Create Task</CreateTaskButton>

</TaskForm>

<br /><br /><br />
<hr /> */

// react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Portal`. See https://reactjs.org/link/warning-keys for more information.
//     at O (http://localhost:3000/static/js/bundle.js:82665:8)
//     at Portal (http://localhost:3000/static/js/bundle.js:674:82)
//     at RenderedRoute (http://localhost:3000/static/js/bundle.js:77148:5)
//     at Routes (http://localhost:3000/static/js/bundle.js:77614:5)
//     at App
//     at Router (http://localhost:3000/static/js/bundle.js:77552:15)
//     at BrowserRouter (http://localhost:3000/static/js/bundle.js:75754:5)
// printWarning @ react-jsx-dev-runtime.development.js:87
// DevTools failed to load source map: Could not load content for chrome-extension

// react_devtools_backend.js:4012 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Portal`. See https://reactjs.org/link/warning-keys for more information.
//     at O (http://localhost:3000/static/js/bundle.js:82678:8)
//     at Portal (http://localhost:3000/static/js/bundle.js:674:82)
//     at RenderedRoute (http://localhost:3000/static/js/bundle.js:77161:5)
//     at Routes (http://localhost:3000/static/js/bundle.js:77627:5)
//     at App
//     at Router (http://localhost:3000/static/js/bundle.js:77565:15)
//     at BrowserRouter (http://localhost:3000/static/js/bundle.js:75767:5)


