import { Outlet, Route, Routes } from 'react-router-dom';
import { TrainerProfileForm } from '../profileForms/TrainerProfileForm';



// ONLY FOR LOGGED IN TRAINERS
export const TrainerViews = () => {
  return (
    <Routes>
      <Route path="/"  element={
        <>
          <h1>Click That Dog</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is the Trainer's View 👨‍🏫</h3>
          <p>➡️ IF the Trainer is a Member, he/she should be able to see a list of their current clients here.</p>
          <p>➡️ The trainer should also be able to click on a client and then be directed to that client's training log.</p>

          <Outlet />
        </>
      }>

      </Route>

      <Route path="/client-container"  element={
        <>
          

          <Outlet />
        </>
      }>

      </Route>
      


      <Route path="/trainer-profile-form" element={
          <>
            <TrainerProfileForm />
          </>
      }></Route>
    </Routes>
  )
}
