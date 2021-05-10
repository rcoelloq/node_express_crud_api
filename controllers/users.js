import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Usuarios de la base de datos: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`Usuario [${user.username}] agregado a la base de datos.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`Usuario con id ${req.params.id} ha sido eliminado`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`Username ha sido actualizado a: ${req.body.username}. Año ha sido actualizado a: ${req.body.age}`)
};