import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_NAMES } from './graphql/Query'
import { SUBMIT_NAME } from './graphql/Mutation'

function App() {
  const {
    loading: namesLoading,
    error: namesError,
    data: namesData,
    refetch: namesRefetch
  } = useQuery(GET_NAMES)
  const [submitname] = useMutation(SUBMIT_NAME)
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const regex = new RegExp('^[a-zA-Z0-9]*$')
    if (regex.test(name)) {
      const data = await submitname({
        variables:{
          name: name
        }
      })
      setName('')
      namesRefetch()
    } else {
      alert("please enter a valid name(with only letters and numbers).")
    }

  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <span>enter a name</span><br/>
        <input type="text" value={name} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <div>{
        namesLoading ?
        (<span>Loading...</span>) :
        namesError ?
        (<span>Error...</span>) :
        (namesData.getNames.map((na, index) => <span key={index}>{na}<br/></span>))
      }</div>
    </div>
  );
}

export default App;
