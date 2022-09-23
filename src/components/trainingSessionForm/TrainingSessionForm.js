import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainingSessionForm.css';

export const TrainingSessionForm = () => {
    // State starts as empty object
    const [session, update] = useState({});
    const [dogs, setDogs] = useState([]);
    const [client, setClient] = useState({});

    const navigate = useNavigate();

    const localClickThatDogUser = localStorage.getItem('click_that_dog_user');
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser);

    useEffect(() => {
        fetch(`http://localhost:8088/clientDogs`)
            .then((response) => response.json())
            .then((clientDogArray) => {
                setDogs(clientDogArray);
            });
        fetch(`http://localhost:8088/clients?userId=${clickThatDogUserObject.id}`)
            .then((response) => response.json())
            .then((data) => {
                setClient(data[0]);
            });
    }, []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        /* 
      TO-DO : Create the object to be saved to the API

     {
        "clientDogId": 1,
        "todaysDate": "9-16-2022",
        "behaviorTypeId": 1,
        "behaviorName": "Sit",
        "locationName": "Yard",
        "timeSpent": 5,
        "treatsUsed": "Liver",
        "rating": 8,
        "description": "Had a great session today! We worked on sit in the front yard."
     }

      */

        const sessionToSendToAPI = {
            clientDogId: session.clientDogId,
            todaysDate: session.todaysDate,
            behaviorTypeId: session.behaviorTypeId,
            behaviorName: session.behaviorName,
            locationName: session.locationName,
            timeSpent: session.timeSpent,
            treatsUsed: session.treatsUsed,
            rating: session.rating,
            description: session.description,
        };

        /* 
      TO-DO : Perform the fetch() to POST the object to the API
    */

        fetch(`http://localhost:8088/trainingSessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sessionToSendToAPI),
        })
            .then((response) => response.json())
            .then(() => {
                navigate('/trainingSessions');
            });
    };

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
                            update(copy);
                        }}
                    />
                    <label htmlFor='dogName'>Dog's Name:</label>
                    <select
                        className='dogName-select'
                        onChange={(evt) => {
                            const copy = { ...session };
                            copy.clientDogId = evt.target.value;
                            update(copy);
                        }}
                    >
                        <option value={0}>Please Select a Dog</option>
                        {dogs.map((dog) => {
                            if (dog.clientId === client.id) {
                                return <option value={dog.id}>{dog.dogName}</option>;
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
                            update(copy);
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
                            update(copy);
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
                            update(copy);
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
                            update(copy);
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
                            update(copy);
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
                            update(copy);
                        }}
                    />
                </div>
            </fieldset>

            <div className='submit-session--div'>
                <button
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className='button-29 btn btn-primary'
                >
                    Submit Session
                </button>
            </div>
        </form>
    );
};
//         <>
//     <form className="training-session__form">
//       <h2>Today's Training Session</h2>
//       <fieldset>

//         <p>
//         <label htmlFor='date'>Today's Date:<input type="date" name="birthDate"/></label>
//         </p>
//         <p>
//         <label>
//             Behavior:
//           <select name="behavior">
//             <option>--None--</option>
//             <option>Sit</option>
//             <option>Down</option>
//             <option>Place</option>
//             <option>Hand Touch</option>
//             <option>Shake</option>
//             <option>Close</option>
//             <option>Side</option>
//             <option>Come</option>
//             <option>Hand Signal for Sit</option>
//             <option>Hand Signal for Down</option>
//             <option>Go to your house</option>
//             <option>Tug</option>
//             <option>Get It</option>
//             <option>Sit in Car</option>
//             <option>Down in Car</option>
//             <option>Close Down</option>
//             <option>Side Down</option>
//             <option>Watch Me</option>
//             <option>Nail Trimming</option>
//             <option>Walking on Leash</option>
//             <option>Go Explore</option>
//             <option>Find It</option>
//           </select>
//         </label>
//       </p>

//     <p>
//         <label>Location Name: </label>
//         <input
//           name="locationName"
//           type="text"
//           placeholder="Location of training"
//           // value={session.location}
//           // onClick={}
//           />
//       </p>

//     <p>
//         <label>
//             Time Spent:
//           <select name="timeSpent">
//             <option>--None--</option>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//             <option>6</option>
//             <option>7</option>
//             <option>8</option>
//             <option>9</option>
//             <option>10</option>
//             <option>11</option>
//             <option>12</option>
//             <option>13</option>
//             <option>14</option>
//             <option>15</option>
//             <option>16</option>
//             <option>17</option>
//             <option>18</option>
//             <option>19</option>
//             <option>20</option>
//             <option>21</option>
//             <option>22</option>
//             <option>23</option>
//             <option>24</option>
//             <option>25</option>
//             <option>26</option>
//             <option>27</option>
//             <option>28</option>
//             <option>29</option>
//             <option>30</option>
//             <option>31</option>
//             <option>32</option>
//             <option>33</option>
//             <option>34</option>
//             <option>35</option>
//             <option>36</option>
//             <option>37</option>
//             <option>38</option>
//             <option>39</option>
//             <option>40</option>
//             <option>41</option>
//             <option>42</option>
//             <option>43</option>
//             <option>44</option>
//             <option>45</option>
//             <option>46</option>
//             <option>47</option>
//             <option>48</option>
//             <option>49</option>
//             <option>50</option>
//             <option>51</option>
//             <option>52</option>
//             <option>53</option>
//             <option>54</option>
//             <option>55</option>
//             <option>56</option>
//             <option>57</option>
//             <option>58</option>
//             <option>59</option>
//             <option>60</option>

//           </select>
//         </label>
//       </p>
// <p>
//         <label>Treats Used:</label>
//         <input
//           type="text"
//           name="treats"
//           placeholder="Treats Used"
//           // value={session.location}
//           // onClick={}
//         />
//       </p>

//       <p>
//         <label>
//             Rating:
//           <select name="rating">
//             <option>--None--</option>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//             <option>6</option>
//             <option>7</option>
//             <option>8</option>
//             <option>9</option>
//             <option>10</option>
//           </select>
//         </label>
//       </p>

//         <p>
//         <label htmlFor='description'>Brief Description:</label>
//           <br />
//           <input
//             required autoFocus
//             type="text"
//             className="form-control"
//             placeholder="Description of Session"
//             value={session.description}

//       </p>

// <p>
//         <button type="submit" className='btn btn-primary'>Submit</button>
//       </p>

//      </fieldset>
//   </form>
//     </>
