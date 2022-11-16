
import avatar from '../../../images/fat.jpg';
import Navbar from "../../Navbar/Navbar";
import './ProfilePage.css'



function ProfilePage () {
    return(
        <div className="profile">
            <Navbar title="ACCOUNT"/>
            <img src={avatar} className='profile-avatar' />
            <div className="profile-header">
                <h4>Profile</h4>
                <div className='profile-content'>
                    <h2>Phạm Tiến Trung</h2>
                    <p>10-4-1994</p>
                    <p>phamtientrung94@traindemy.edu.vn</p>
                </div>
                <h4>Skill</h4>
                <div className='profile-content'>
                    <p>Information system trainer</p>
                </div>
            </div>
            
        </div>
    )
}


export default ProfilePage