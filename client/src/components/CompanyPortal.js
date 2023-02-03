import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



function CompanyPortal() {

let navigate = useNavigate()
useEffect(() => {
  let authToken = sessionStorage.getItem('Auth Token')

  if (authToken) {
      navigate('/companyportal')
  }

  if (!authToken) {
      navigate('/login')
  }
}, [])





  return (
    <div>CompanyPortal</div>
  )
}

export default CompanyPortal;