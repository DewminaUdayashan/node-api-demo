import {v4} from 'uuid';

const users = [];

export const getUsers = (req,res)=>{
    res.send(users);
};

export const getUserById = (req,res)=>{
    const {id}  = req.params;
    const filteredUser = users.find((user)=>user.id===id);
    res.send(filteredUser);
};

export const createUser = (req,res)=>{
    const user = req.body;
    users.push({...user,id:v4()})
    res.status(201).send('User added to the MOCK DB');
};


export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user)=>user.id===id);

    if(firstName){
        user.firstName = firstName;
    }
    res.send('Updated');
};