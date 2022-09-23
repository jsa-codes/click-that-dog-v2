import { useState } from 'react'


// THIS ALLOWS THE TRAINER TO VIEW THEIR PROFILE
export const TrainerProfile = () => {

    // Get user that is logged in
    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser)

    // Set initial state of trainers
    const [trainers, setTrainers] = useState([])

    

    return <>
    
        <h2>Your Trainer Profile</h2>
        <div>
            <p>This is the Trainer's Profile will be displayed.</p>
        </div>
    </>
}