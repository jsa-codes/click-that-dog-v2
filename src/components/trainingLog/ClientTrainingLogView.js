import { Outlet, Routes, Route } from 'react-router-dom'
import { TrainingSessionForm } from '../trainingSession/TrainingSessionForm'

export const ClientTrainingLogView = () => {
    
return (
    <Routes>
      <Route path="/" element={
        <>
          <p>Training Log View</p>

          <Outlet />
        </>
      }>
          
        
          <Route path="training/form" element={ <TrainingSessionForm /> } />
          
      </Route>
    </Routes>
  )
    
}