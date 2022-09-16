import { Outlet, Route, Routes } from 'react-router-dom';
import { ClientProfileForm } from '../profileForm/ClientProfileForm';
import { TrainerList } from '../trainers/TrainerList';
import { TrainingSessionForm } from '../trainingSession/TrainingSessionForm';


// When the client hits submit they should be taken to their Training Log — displays ALL of their training sessions.

export const ClientViews = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Click That Dog!</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is Client Dashboard 🐕‍🦺</h3>
          <p>This is the view they see once they've logged in.</p>

          <Outlet />
        </>
      }>

        <Route path="trainingSession" element={<TrainingSessionForm />}></Route>
        <Route path="trainers" element={<TrainerList />}></Route>
        <Route path='profileForm' element={ <ClientProfileForm />}/>
          
      </Route>
    </Routes>
  )
}

/* 
^ NOTES :
  - NAV BAR LINKS: (className="navbar__link")
    - Training 
      - /trainingSession
    - Trainers
      - /trainers
    - Profile
      - /profileForm
    - Logout 
      - onClick()
*/
