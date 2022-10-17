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

    const createData = (data) =>{
        data.id = Date.now(); //para tratar de crear un id unico
        setDb([...db,data]);
    };
    const updateData = (data) =>{
        let newData = db.map(el => el.id === data.id? data : el );
        setDb(newData);
    };
    const deleteData = (id) =>{
        let isDelete = window.confirm(`Esta seguro de eliminar el registro con el id  ${id}`);
        if (isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }
        //else{

        //}
    };
    return(
        <>
            <h1> CRUD APP</h1>
            <CrudForm createData = {createData} updateData ={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData ={deleteData} />
        </>
    )
}

export default CrudApp;