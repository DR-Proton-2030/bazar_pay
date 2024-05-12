import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './user.css'

import { Table } from './userTable/Table';

const UserManagement = () => {
  const navigate = useNavigate();
  const handleNavigateToAddUser = () =>{
    navigate("/permission/add-user")
  }
  return (
    <div>
      <div className="add-user-btn">
        <Button className='button' variant="contained" style={{backgroundColor: "#49BB43", fontFamily: "Railway, sans-serif"}}onClick={handleNavigateToAddUser}>
          Add User
        </Button>
      </div>
      <Table />
    </div>
  );
};

export default UserManagement;
