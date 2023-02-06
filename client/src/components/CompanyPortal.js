import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import {CompanyPortalBanner} from '../styles/CompanyElements'
// import { app } from '../firebase-config';

function CompanyPortal() {
  let navigate = useNavigate()
  
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
}

export default CompanyPortal;