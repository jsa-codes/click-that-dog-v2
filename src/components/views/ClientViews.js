import { Outlet, Route, Routes } from 'react-router-dom';
import { ClientProfile } from '../clients/ClientProfile';
import { ClientProfileForm } from '../profileForm/ClientProfileForm';
import { TrainerList } from '../trainers/TrainerList';
import { TrainingSessionForm } from '../trainingSessionForm/TrainingSessionForm';
import { TrainingSessions } from '../trainingSessions/TrainingSessions';
import "./ClientViews.css"


// When the client hits submit they should be taken to their Training Log — displays ALL of their training sessions.

export const ClientViews = () => {


  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1 className='client-views--heading'>Click That Dog!</h1>
          <div className='client-views--tagLine'>Discover The Joy In Training Your Dog</div>
          <div className='welcome-message'>
            <h3>Welcome! We're so glad you're here today.</h3>
            <p>Ready to do some training?</p>
            <p>"Click" the <b>New Session</b> link above.</p>
            
          </div>
          

          

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
        
