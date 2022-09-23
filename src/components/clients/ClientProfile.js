import { useState } from 'react'
import "./ClientProfile.css"


export const ClientProfile = () => {

  //  const [clientProfile, setClientProfile]= useState([])

  //  fetch(`http://localhost:8088/clients`)
  //  .then(response => response.json())
  //  .then((clientArray) =>  {
  //     setClientProfile(clientArray)
  //  })

   

    return  <>
    <h2 className='client-profile__heading'>My Profile</h2>
      <div>
        <p>This is where the Client's Profile will be displayed.</p>
      </div>
    </>
}