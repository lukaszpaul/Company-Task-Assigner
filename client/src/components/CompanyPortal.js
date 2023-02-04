import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {CompanyPortalBanner, TaskForm, TskFrmLabel, CreateTaskButton } from '../styles/CompanyElements'
import { app } from '../firebase-config';

function CompanyPortal() {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    date: "",
    assigner: "",
    task: ""
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const db = app.database();
    const tasksRef = db.ref("tasks");
    tasksRef.push(formData);
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/companyportal')
    }

    if (!authToken) {
      navigate('/login');
    } else {
      window.location.reload();
       // temporary so logout button updates
    }
  }, []);

  return (
    <>
      <CompanyPortalBanner>Dashboard</CompanyPortalBanner>

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
      <hr />

    </>
  )
}

export default CompanyPortal;