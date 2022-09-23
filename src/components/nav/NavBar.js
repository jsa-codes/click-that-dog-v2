import { ClientNav } from './ClientNav'
import { TrainerNav } from './TrainerNav'
import "./NavBar.css"


// STEP 1) Getting user from localStorage
// STEP 2) Checking to see IF the user is a Trainer or Client
// STEP 3) IF the user is a Trainer then show TrainerNav
//            ELSE Show th
export const NavBar = () => {
   
    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser) 

  
    if (clickThatDogUserObject.trainer) {
      // Return employee views
      return <TrainerNav />
    }
    else {
    // Return customer views
      return <ClientNav />
    }
}