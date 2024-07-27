import React, { useEffect, useState } from 'react';
import userAPI from "../../sevices/usersAPI";

export default function MyProfile() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const { username } = await userAPI.getUserInfo();
                setUsername(username);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo();
    }, []);

    return (
        <div>
            Hello, {username}
        </div>
    );
}
