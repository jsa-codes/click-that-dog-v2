import { Outlet, Route, Routes } from 'react-router-dom';
import { ClientProfileForm } from '../profileForm/ClientProfileForm';
import { TrainerList } from '../trainers/TrainerList';
import { TrainingSessionForm } from '../trainingSession/TrainingSessionForm';




export const ClientViews = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Click That Dog</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is Client Profile Form 🐕‍🦺</h3>

          <Outlet />
        </>
      }>

        <Route path="trainingSession" element={<TrainingSessionForm />}></Route>
        <Route path="trainers/list" element={<TrainerList />}></Route>
        <Route path='profileForm' element={ <ClientProfileForm />}/>
          
      </Route>
    </Routes>
  )
}
