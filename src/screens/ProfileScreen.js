import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            dispatch(logout());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (!user) {
        navigate('/'); // Redirect to login page if user is not logged in
        return null;
    }

    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlansScreen />
                            <button onClick={handleSignOut} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
