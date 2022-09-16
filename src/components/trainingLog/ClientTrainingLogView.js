import { Outlet, Routes, Route } from 'react-router-dom'
import { TrainingSessionForm } from '../trainingSession/TrainingSessionForm'

export const ClientTrainingLogView = () => {
    
return (
    <Routes>
      <Route path="/" element={
        <>
          <h2>Training Log</h2>
          <p>Client can view a list of ALL training sessions. </p>

          <Outlet />
        </>
      }>
          
        
          <Route path="training/form" element={ <TrainingSessionForm /> } />
          
      </Route>
    </Routes>
  )
    
}