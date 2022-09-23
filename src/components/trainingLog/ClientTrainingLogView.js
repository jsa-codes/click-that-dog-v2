import { Outlet, Routes, Route } from 'react-router-dom'
import { TrainingSessionForm } from '../trainingSessions/TrainingSessionForm'

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
          
        
          <Route path="trainingSessions" element={ <TrainingSessionForm /> } />
          
      </Route>
    </Routes>
  )
    
}