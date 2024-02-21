import React from "react"
import {useState} from 'react'
import {useEffect} from 'react'


function SelectedContact ({selectedContactId, setSelectedContactId}){
  const [contact, setContact] = useState()
 
  useEffect(() => {
    async function fetchSingleContact(){
     
      try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
          const result = await response.json()
          setContact(result)
      } catch (error) {
      console.error(error)
  }
}
fetchSingleContact()
  }, []);

 return (
  <div>{`${contact.name}`}</div>

  )
  
}

export default SelectedContact