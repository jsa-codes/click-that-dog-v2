import { ClientNav } from './ClientNav'
import { TrainerNav } from './TrainerNav'
import "./NavBar.css"



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