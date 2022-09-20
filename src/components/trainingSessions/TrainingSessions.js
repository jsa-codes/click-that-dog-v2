import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./TrainingSessions.css"

export const TrainingSessions = () => {


        const [trainingSessions, setTrainingSessions] = useState([])
        const navigate = useNavigate()
        

        useEffect(
            () => {
                fetch(`http://localhost:8088/trainingSession`)
                .then(response => response.json())
                .then((trainingSessionArray) =>  {
                    setTrainingSessions(trainingSessionArray)
                })
            }, []
        )

        return <>
            <h2>List of Training Sessions</h2>
            
            <button onClick={() => navigate("/session/create")}>New Session</button>
    
            <article className="trainingSessions">
                {
                    trainingSessions.map(
                        (trainingSession) => {
                            return <section className='single-session'>
                                <p>Date: {trainingSession.todaysDate}</p>
                                <h3>Behavior Trained: {trainingSession.behaviorName}</h3>
                                <p>Location: {trainingSession.locationName}</p>
                                <p>Time Spent: {trainingSession.timeSpent} minutes</p>
                                <p>Treats: {trainingSession.treatsUsed}</p>
                                <footer>Brief Description: {trainingSession.description}</footer>
                            </section>
                        }
                    )
                }
    
            </article >
        
        </>
    }




   