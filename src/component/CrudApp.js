import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id : 1,
        name : "Seya",
        constellation : "Pegaso"
    },    {
        id : 2,
        name : "Shiryu",
        constellation : "Dragón"
    },
    {
        id : 3,
        name : "Hyoga",
        constellation : "Cisne"
    },
    {
        id : 4,
        name : "Shun",
        constellation : "Andrómeda"
    },
]


const CrudApp =()=>{
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);
    //console.log(db);
    //db.map(el => console.log(el));
    const createData = (data) =>{
        data.id = Date.now(); //para tratar de crear un id unico
        console.log(db);
        console.log(data);
        setDb(...db,data);
        console.log(db);
    };
    const updateData = (data) =>{};
    const deleteData = (id) =>{};
    return(
        <>
            <h1> CRUD APP</h1>
            <CrudForm createData = {createData} updateData ={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData ={deleteData} />
        </>
    )
}

export default CrudApp;