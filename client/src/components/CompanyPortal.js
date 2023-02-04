import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyPortal() {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (!authToken) {
      navigate('/login');
    } else {
      window.location.reload();
       // temporary so logout button updates
    }
  }, []);

  return (
    <div>CompanyPortal</div>
  );
}

export default CompanyPortal