import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./TrainingSessions.css"

export const TrainingSessions = () => {


        const [trainingSessions, setTrainingSessions] = useState([])
        const navigate = useNavigate()
        

        useEffect(
            () => {
                fetch(`http://localhost:8088/trainingSessions?_expand=clientDog`)
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
                                <h4>Date: {trainingSession.todaysDate}</h4>
                                <h4>Dog's Name: {trainingSession.clientDog.dogName}</h4>
                                <h4>Behavior Trained: {trainingSession.behaviorName}</h4>
                                <h4>Location: {trainingSession.locationName}</h4>
                                <h4>Time Spent: {trainingSession.timeSpent} minutes</h4>
                                <h4>Treats: {trainingSession.treatsUsed}</h4>
                                <h4>Brief Description: {trainingSession.description}</h4>
                            </section>
                        }
                    )
                }
    
            </article >
        
        </>
    }




   