// import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sessions.css"


export const SessionList = ({searchTermState}) => {
 /* 
======================================================================
     useState() - (Purpose? "Used to define initial component state")
======================================================================
*/
  // Initial state of "tickets" is an empty array
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFiltered] = useState([])
  // DO NOT show emergency tickets by default, which is why it is set to "false"
  const [emergency, setEmergency] = useState(false) 
  const [openOnly, updateOpenOnly] = useState(false) 
  // Needed for navigation
  const navigate = useNavigate()


  const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
  // honeyUserObject has the Primary Key of user and the Staff key that is going to be "true" or "false"
  const clickThatDogUserObject = JSON.parse(localClickThatDogUser) 
/* 
========================================================
     USE EFFECT - (Purpose? "Observe Component State")
                         aka - Event Listeners
========================================================
*/
// USE-EFFECT #1)- First "state change"
  useEffect(
      () => {
        // Go get ALL of the tickets (We are logged in as an employee by default)
        // Employees can see all tickets
        fetch(`http://localhost:8088/trainingSessions`)
        //Get the response back, parse the json data into an actual JS array
          .then(response => response.json())
          // Pass in a parameter to capture all of that data we got after all of the json processes are done
          .then((sessionArray) => {
            // Call the setter function ("setTickets")
            // Pass it what we want the new value to be
              setSessions(sessionArray)
          })
    // When this array is empty, you are observing initial component state
    }, []
  );

  // USE-EFFECT #2) - Watch for the "tickets" state to change - 2nd "state change"
  useEffect(
    () => {
      // IF the user is staff, setFiltered() is passed ALL tickets
      if (clickThatDogUserObject.trainer) {
        setFiltered(sessions)
      }
      else {
        // OTHERWISE...filter all tickets by looking for the tickets where the ticket's userId matches the honeyUserObject's id...store the returned tickets in the variable "myTickets"
        // setFiltered() is then passed the array "myTickets"
        const mySessions = sessions.filter(session => session.userId === clickThatDogUserObject.id)
        setFiltered(mySessions)
      }
    }, [ sessions ] // Observing specific state variable "tickets"
  )

  // USE-EFFECT #3) - Set filtered tickets to be "emergencyTickets"
  useEffect(
    () => {
      // IF true...
      if (emergency) {
        // Filter the tickets array
        // Check to see if the emergency property on the ticket is "true"
        // Those tickets that are store in the variable emergencyTickets
        const emergencySessions = sessions.filter(session => session.emergency === true)
        setFiltered(emergencySessions)
      }
      else {
        setFiltered(sessions)
      }
    }, [ emergency ]
  )
// Open Tickets
  useEffect(
    () => {
      if (openOnly) {
        
        const openSessionArray = sessions.filter(session => {
          return session.userId === clickThatDogUserObject.id && session.dateCompleted === ''
        })
        setFiltered(openSessionArray)
      }
       else {
        const mySessions = sessions.filter(session => session.userId === clickThatDogUserObject.id)
        setFiltered(mySessions)
       }
    }, [ openOnly ]
  )

  // Searched Tickets
  useEffect(
    () => {
      const searchedSessions = sessions.filter(session => {
        return session.description.toLowerCase().startsWith(searchTermState.toLowerCase())
    })
    setFiltered(searchedSessions)
    }, [ searchTermState ]

  )




  /* The curly brackets after the opening <article> below is string interpolation 
  {
        tickets.map(
          (ticket) => {
            return <section className="ticket">
              <header>{ticket.description}</header>
              <footer>Emergency: {ticket.emergency ? "🆘" : "No"}</footer>
            </section>
          }
        )
      } 
  */
  return <>
    {
        clickThatDogUserObject.trainer
         ? <>
         <button onClick={ () => {setEmergency(true) } } >Emergency Only</button>
         <button onClick={ () => {setEmergency(false) } } >Show All</button>
         </>
         : <>
         <button onClick={() => navigate("/ticket/create")}>Create Session</button>
         <button onClick={() => updateOpenOnly(true) }>Open Session</button>
         <button onClick={() => updateOpenOnly(false) }>All My Sessions</button>
         </>
    }
  
    <h2>List of Sessions</h2>

    <article className="sessions">
      
      {
        filteredSessions.map(
          (session) => {
            return <section className="session" key={`session--${session.id}`}>
              <header>{session.description}</header>
              <footer>Emergency: {session.emergency ? "🆘" : "No"}</footer>
            </section>
          }
        )
      }
    </article>
    </>
}

/* 
======================
* Notes

======================
*/
