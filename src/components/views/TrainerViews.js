import { Outlet, Route, Routes } from 'react-router-dom';
import { TrainerProfileForm } from "../profileForm/TrainerProfileForm"
import { ClientList } from "../clients/ClientList"
import "./TrainerViews.css"




// THIS IS THE LANDING PAGE FOR LOGGED IN TRAINERS
export const TrainerViews = () => {
  return (
    <Routes>
      <Route path="/"  element={
        <>
          <h1 className='trainer-dashboard--heading'>Click That Dog!</h1>
          <div className='click--tagline'>Discover The Joy In Training Your Dog</div>
          <h3 className='trainer-dashboard--welcomeMessage'>Welcome to your Trainer's Dashboard!</h3>
          <div className='trainer-dashboard--message'>
            <p>Everything you need is just a click away.</p>
            <p>At the top of this page you have access to your <b>Clients</b> and your <b>Profile</b>.</p>
            <p>In case you need to update your profile, just click on <i>"My Profile".</i></p>
          </div>
         

          <Outlet />
        </>
      }>

        <Route path='profileForm' element={ <TrainerProfileForm />}/>
        <Route path="clients" element={<ClientList />}></Route>
      </Route>

    
    </Routes>
  )
}
      


