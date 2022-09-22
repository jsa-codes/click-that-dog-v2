import { Outlet, Route, Routes } from 'react-router-dom';
import { ClientProfile } from '../clients/ClientProfile';
import { ClientProfileForm } from '../profileForm/ClientProfileForm';
import { TrainerList } from '../trainers/TrainerList';
import { TrainingSessionForm } from '../trainingSessionForm/TrainingSessionForm';
import { TrainingSessions } from '../trainingSessions/TrainingSessions';


// When the client hits submit they should be taken to their Training Log — displays ALL of their training sessions.

export const ClientViews = () => {


  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Click That Dog!</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is the Client Dashboard 🐕‍🦺</h3>
          <p>This is the view they see once they've logged in.</p>

          

          <Outlet />
        </>
      }>

        <Route path="trainingSessionForm" element={<TrainingSessionForm />}></Route>
        <Route path="trainingSessions" element={<TrainingSessions />}></Route>
        <Route path="trainers" element={<TrainerList />}></Route>
        <Route path='profileForm' element={ <ClientProfileForm />}/>
        <Route path='clientProfile' element={ <ClientProfile />}/>
          
        <Route path="session/create" element={ <TrainingSessionForm />}/>
        
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
        
