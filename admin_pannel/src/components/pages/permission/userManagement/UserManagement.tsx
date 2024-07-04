import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './user.css'

import { Table } from './userTable/Table';
import { useContext, useEffect } from 'react';
import UIContext from '../../../../contexts/uiContext/UIContext';

const UserManagement = () => {
  const { setDashboardHeader} = useContext(UIContext)
  const navigate = useNavigate();
  const handleNavigateToAddUser = () =>{
    navigate("/permission/add-user")
  }

  useEffect(() => {
    setDashboardHeader("Admin Management")
  },[setDashboardHeader])
  return (
    <div>
      <div className="add-user-btn">
        <Button className='blue-btn' variant="contained" onClick={handleNavigateToAddUser}>
          Add Admin
        </Button>
      </div>
      <Table />
    </div>
  );
};

export default UserManagement;
