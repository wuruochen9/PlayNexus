import React from 'react'; 
import { useState, useEffect } from 'react'         //This imports the useState and useEffect hooks from the React library.
import api from './api/axiosConfig';                //This assigns the export of axiosConfig.js to variable "api"

function App() {

  //const [state, setSate] =  useState(initial_value)
  //state is used to hold the values. like the variable
  //setState is a function to set the values of state
  const [records, setRecords] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //Execute automatically when app starts
  useEffect(() => {
    fetchRecords();
  }, []);

  //Define CRUD functions
  const fetchRecords = async () => {
    const response = await api.get('/api/records');
    setRecords(response.data);
    console.log(response.data);
  };

  const createRecord = async () => {
    await api.post('/api/records', { name, description });
    fetchRecords(); //update records to the newest when the databse is changed
    setName('');    //empty the Name and Description
    setDescription('');
  };

  const updateRecord = async (id) => {
    await api.put(`/api/records/${id}`, { name, description });
    fetchRecords();
    setName('');
    setDescription('');
  };

  const deleteRecord = async (id) => {
    await api.delete(`/api/records/${id}`);
    fetchRecords();
  };

  //JSX for UI design
  return (
    <div>
      <h1>Nexus</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="Description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={createRecord}>Create</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.Name}</td>
              <td>{record.LongDescript}</td>
              <td>
                <button onClick={() => updateRecord(record.id)}>Update</button>
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;