import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const TrainingSessionEdit = () => {
    
    const { sessionId } = useParams()
    const [dogs, setDogs] = useState([]);
    const [client, updateLoggedInClient] = useState({});

    const navigate = useNavigate()

    
    
    const [session, editSession] = useState({
        clientDogId: "",
        todaysDate: "",
        behaviorTypeId: "",
        behaviorName: "",
        locationName: "",
        timeSpent: "",
        treatsUsed: "",
        rating: "",
        description: ""
    })

    useEffect(() => {
        fetch(`http://localhost:8088/clients/${client.id}`)
            .then((response) => response.json())
            .then((data) => {
                editSession(data);
            });
    }, [sessionId]);
   

     useEffect(() => {
            fetch(`http://localhost:8088/trainingSessions/${sessionId}`)
            .then(response => response.json())
            .then((data) =>  {
            editSession(data)
            })
        }, [sessionId]
    )

    const editButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/trainingSessions/${session.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(session)
        })
        .then(response => response.json())
        .then(() =>  {
        navigate("/trainingSessions")
        })
    }

    return (
        <form className='sessionForm'>
            <h2 className='sessionForm__title'>New Session</h2>
            <fieldset className='overall-form'>
                <div className='form-group'>
                    <label htmlFor='todaysDate'>Today's Date:</label>
                    <input
                        required
                        autoFocus
                        type='date'
                        className='form-control'
                        placeholder="Today's date"
                        value={session.todaysDate}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.todaysDate = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='dogName'>Dog's Name:</label>
                    <select
                        className='dogName-select'
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.clientDogId = evt.target.value;
                            editSession(copy);
                        }}
                    >
                        <option value={0}>Please Select a Dog</option>
                        {dogs.map((dog) => {
                            if (dog.clientId === client.id) {
                                return (
                                    <option value={dog.id}>
                                        {dog.dogName}
                                    </option>
                                );
                            }
                        })}
                    </select>

                    <label htmlFor='behaviorName'>Behavior Trained:</label>
                    <input
                        required
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Which behavior did you work on?'
                        value={session.behaviorName}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.behaviorName = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='location'>Location:</label>
                    <input
                        required
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Where did you work on this behavior?'
                        value={session.locationName}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.locationName = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='timeSpent'>Time Spent:</label>
                    <input
                        required
                        autoFocus
                        type='number'
                        className='form-control'
                        placeholder='How many minutes did you train?'
                        value={session.timeSpent}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.timeSpent = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='treatsUsed'>Treats Used:</label>
                    <input
                        required
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Which treats were used?'
                        value={session.treatsUsed}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.treatsUsed = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='rating'>Rate this Training Session:</label>
                    <input
                        required
                        autoFocus
                        type='number'
                        className='form-control'
                        placeholder='Rate this training session on a scale of 1 to 10'
                        value={session.rating}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.rating = evt.target.value;
                            editSession(copy);
                        }}
                    />
                    <label htmlFor='description'>Description:</label>
                    <input
                        required
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Brief description of Training Session'
                        value={session.description}
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.description = evt.target.value;
                            editSession(copy);
                        }}
                    />
                </div>
            </fieldset>

            <div className='submit-session--div'>
                <button
                    onClick={(clickEvent) => editButtonClick(clickEvent)}
                    className='button-29 btn btn-primary'
                >
                    Save Session
                </button>
                <button
                    onClick={() => navigate("/trainingSessions")}
                    className='button-29 btn btn-primary'
                >
                    CANCEL
                </button>
            </div>
        </form>
    );
}