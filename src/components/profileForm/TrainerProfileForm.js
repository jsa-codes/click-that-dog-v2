

import { Outlet, Route, Routes } from 'react-router-dom';



// Only for logged in
export const TrainerProfileForm = () => {
  return (
    <Routes>
      <Route path="/"  element={
        <>
          <h1>Click That Dog</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is the Trainer's View 👨‍🏫</h3>
          <p>Profile Form will be here</p>

          <Outlet />
        </>
      }></Route>

    </Routes>
  )
}
