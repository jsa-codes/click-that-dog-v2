import { Outlet, Route, Routes } from 'react-router-dom';
// import { TicketForm } from '../tickets/TicketForm';
// import { TicketList } from '../tickets/TicketList';



export const ClientViews = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1>Click That Dog</h1>
          <div>Discover The Joy In Training Your Dog</div>
          <h3>This is the Client's View 🐕‍🦺</h3>

          <Outlet />
        </>
      }>
          
        
          {/* <Route path="tickets" element={ <TicketList /> } />
          <Route path="ticket/create" element={ <TicketForm /> } /> */}
      </Route>
    </Routes>
  )
}
