import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        //{
        //    id: 'u1', 
        //    name: 'Franck Asket', 
        //    image: 'https://www.pexels.com/photo/woman-in-green-blazer-and-black-hijab-7897258/', 
        //    places: 3 
        //}
];

    return <UsersList items={USERS} />;
};

export default Users;