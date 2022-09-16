import { useEffect, useState } from 'react'

export const TrainingSessions = () => {


        const [trainingSessions, setTrainingSessions] = useState([])

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

            <article className="trainingSessions">
                {
                    trainingSessions.map(
                        (trainingSession) => {
                            return <section>
                                <p>{trainingSession.todaysDate}</p>
                                <h3>{trainingSession.behaviorName}</h3>
                                <p>{trainingSession.locationName}</p>
                                <p>{trainingSession.timeSpent} minutes.</p>
                                <p>{trainingSession.treatsUsed}</p>
                                <footer>{trainingSession.description}</footer>
                            </section>
                        }
                    )
                }

            </article >
        
        </>
}