import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainingSessions.css';

export const TrainingSessions = () => {
    const [trainingSessions, setTrainingSessions] = useState([]);
    const [dog, setDog] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8088/trainingSessions?_expand=clientDog`)
            .then((response) => response.json())
            .then((trainingSessionArray) => {
                setTrainingSessions(trainingSessionArray);
            });
    }, []);

    return (
        <>
            <h2>List of Training Sessions</h2>

            <div className='new-session-button--div'>
                <button
                    className='button-29'
                    onClick={() => navigate('/session/create')}
                >
                    New Session
                </button>
            </div>

            <article className='trainingSessions'>
                {trainingSessions.map((trainingSession) => {
                    return (
                        <section className='single-session'>
                            <h4 className='trainingSession--info'>Date: </h4>
                            {trainingSession.todaysDate}
                            <h4 className='trainingSession--info'>
                                Dog's Name:{' '}
                            </h4>
                            {trainingSession.clientDog.dogName}
                            <h4 className='trainingSession--info'>
                                Behavior Trained:{' '}
                            </h4>
                            {trainingSession.behaviorName}
                            <h4 className='trainingSession--info'>
                                Location:{' '}
                            </h4>
                            {trainingSession.locationName}
                            <h4 className='trainingSession--info'>
                                Time Spent:{' '}
                            </h4>
                            {trainingSession.timeSpent} minutes
                            <h4 className='trainingSession--info'>Treats: </h4>
                            {trainingSession.treatsUsed}
                            <h4 className='trainingSession--info'>
                                Brief Description:{' '}
                            </h4>
                            {trainingSession.description}
                        </section>
                    );
                })}
            </article>
        </>
    );
};
