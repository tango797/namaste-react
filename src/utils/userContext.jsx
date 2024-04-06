import React from 'react';
import { Context } from 'react';
import { createContext } from 'react';

const UserContext = createContext({
    LoggedInUser :"Defualt user"
});

export default UserContext;
