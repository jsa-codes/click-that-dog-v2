import { Outlet, Route, Routes } from 'react-router-dom';
import { TrainerProfileForm } from '../profileForms/TrainerProfileForm';



// Only for logged in
export const TrainerCreateProfile = () => {
  return (
    <Routes>
      <Route path="/"  element={
        <>
          <h1>Click That Dog</h1>
          <div>Discover The Joy In Training Your Dog</div>
          
          <p>There will be a profile form on this page for the Trainer to complete.</p>

          <Outlet />
        </>
      }>

      </Route>

      

         <Route path="/trainer-profile-form" element={
        <TrainerProfileForm />
      }></Route>
    </Routes>
  )
}
