import { ClientViews } from './ClientViews';
import { TrainerViews } from './TrainerViews';


export const ApplicationViews = () => {

  const clickThatDogUser = localStorage.getItem("click_that_dog_user")
  const clickThatDogUserObject = JSON.parse(clickThatDogUser) 
  
    if (clickThatDogUserObject.trainer) {
      // Return employee views
      return <TrainerViews />
    }
    else {
    // Return customer views
      return <ClientViews />
    }
}