import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ClientProfile.css';


export const ClientProfile = () => {

  // SETTING INITIAL STATE
    const { clientId } = useParams();
    const clientIdNum = parseInt(clientId);
    const [client, updateClient] = useState();
    const [clientWithDogs, updateClientWithDogs] = useState([]);

    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser)

    // FETCH CLIENTS AND ATTACH USER TO GAIN ACCESS TO FULL-NAME AND EMAIL
      // Looking for the (1) client whose clientIdNum equals the id of the client
        // Updating the client state with the client that was found
        //  Observing the state of clientIdNum
          // If that changes then the 

    useEffect(() => {
        fetch(
            `http://localhost:8088/clients?_expand=user&userId=${clickThatDogUserObject.id}`
        )
            .then((response) => response.json())
            .then((data) => {
                updateClient(data[0]);
            });
    }, [client]);    
       

    useEffect(() => {
        fetch(`http://localhost:8088/clients?userId=${clickThatDogUserObject.id}&_embed=clientDogs`)
            .then((response) => response.json())
            .then((arrayOfDogs) => {
                
                updateClientWithDogs(arrayOfDogs[0]);
            });
    }, []);
    

    if (client === undefined) {
        return <p>Client not found</p>;
    } else {
        return (
            <section className='client'>
                <header className='client__header'>
                    Name: {client?.user?.fullName}
                </header>
                <div className='client--email'>Email: {client?.user?.email}</div>
                <ul>
                    {
                      clientWithDogs?.clientDogs.map((clientDog) => (
                          <li
                              style={{
                                  float: 'unset',
                                  border: 'solid 1px black',
                                  padding:'1rem',
                                  borderRadius: '4px',
                                  marginBottom: '1rem',
                              }}
                          >
                              <h3>Dogs Name: {clientDog.dogName}</h3>
                              <p>Dog's Age: {clientDog.dogAge}</p>
                              <p>Breed: {clientDog.breed}</p>
                              <p>Breed: {clientDog.gender}</p>
                          </li>
                      ))
                    }
                </ul>
            </section>
        );
    }
};
