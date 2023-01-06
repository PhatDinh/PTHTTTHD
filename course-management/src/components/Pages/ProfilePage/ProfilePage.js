
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { json, Navigate, useNavigate } from 'react-router-dom';
import avatar from '../../../images/fat.jpg';
import Navbar from "../../Navbar/Navbar";
import './ProfilePage.css'



function ProfilePage() {


    const navigate = useNavigate();


    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                `http://localhost:8080/api/users/${localStorage.getItem('id')}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            }
            ).then(res => {
                if (!res.ok) throw new Error(res.status);
                else return res.json();
            }).then(data => {
                console.log(data);
            })
        }
        fetchData();
    }, [])


    const handleOut = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="profile">
            <Navbar title="ACCOUNT" />
            <img src={avatar} className='profile-avatar' />
            <div className="profile-header">
                <h4>Profile</h4>
                <div className='profile-content'>
                    <h2>Phạm Tiên Trung</h2>
                    <p>10-4-1994</p>
                    <p>phamtientrung94@traindemy.edu.vn</p>
                </div>
                <h4>Skill</h4>
                <div className='profile-content'>
                    <p>Information system trainer</p>
                </div>
                <Box sx={{
                    marginTop: 5
                }}>
                    <Button fullWidth variant="contained" onClick={handleOut} sx={{
                        borderRadius: 2
                    }}>LOG OUT</Button>
                </Box>
            </div>


        </div>
    )
}


export default ProfilePage