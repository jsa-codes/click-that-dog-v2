import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ClientProfileForm.css"




export const ClientProfileForm = () => {

    const [clientProfile, updateProfile] = useState({})
    const [currentClient, setCurrentClient] = useState({})

    const navigate = useNavigate()

    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser)

    useEffect(
      () => {
        fetch(`http://localhost:8088/clients?userId=${clickThatDogUserObject.id}`)
        .then(response => response.json())
        .then((data) =>  {
          setCurrentClient(data[0])
      })
      }, []
    )

    const handleSaveButtonClick = (event) => {
      event.preventDefault()

       const clientProfileToSendToAPI = {
        clientId:currentClient.id,
        fullName:clientProfile.fullName,
        email: clientProfile.email,
        dogName: clientProfile.dogName,
        dogAge: clientProfile.dogAge,
        breed: clientProfile.breed,
        gender: clientProfile.gender
       }

       fetch(`http://localhost:8088/clientDogs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(clientProfileToSendToAPI)

      })
      .then(response => response.json())
      .then(() =>  {
          navigate("/clientProfile")
      })
    }

    return (
        <form className="client-profile--Form">
            <h2 className="clientProfileForm__title">My Profile</h2>
            <fieldset className='overallForm'>
              <div className="form-group">
                  
              
              <label htmlFor="email">Dog's Name:</label>
              <input
                  required autoFocus
                  type="text"
                  className="form-control"
                  placeholder="What's your dog's name?"
                  value={clientProfile.dogName}
                  onChange={
                    (evt) => {
                      const copy = {...clientProfile}
                      copy.dogName = evt.target.value
                      updateProfile(copy)
                    }
                  } />
              
              <label htmlFor="breed">Dog's Breed:</label>
              <input
                  required autoFocus
                  type="text"
                  className="form-control"
                  placeholder="What breed is your dog?"
                  value={clientProfile.breed}
                  onChange={
                    (evt) => {
                      const copy = {...clientProfile}
                      copy.breed = evt.target.value
                      updateProfile(copy)
                    }
                  } />
              <label htmlFor="email">Dog's Gender:</label>
              <input
                  required autoFocus
                  type="text"
                  className="form-control"
                  placeholder="Is your dog male or female?"
                  value={clientProfile.gender}
                  onChange={
                    (evt) => {
                      const copy = {...clientProfile}
                      copy.gender = evt.target.value
                      updateProfile(copy)
                    }
                  } />
              <label htmlFor="email">Dog's Age:</label>
              <input
                  required autoFocus
                  type="text"
                  className="form-control"
                  placeholder="How old is your dog?"
                  value={clientProfile.dogAge}
                  onChange={
                    (evt) => {
                      const copy = {...clientProfile}
                      copy.dogAge = evt.target.value
                      updateProfile(copy)
                    }
                  } />
              
              
              
              
              </div>
            </fieldset>
            
            <div className='create-profile--div'>
              <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button-29 btn btn-primary">
                  Create Profile
              </button>
            </div>
        </form>
      
      )
    }
    
   