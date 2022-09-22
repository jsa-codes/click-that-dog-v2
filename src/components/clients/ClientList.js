
import { useEffect, useState } from 'react'
import "./ClientList.css"


export const ClientList = () => {

    // This is the user that is logged in 
    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser)

    const [clients, setClients] = useState([])
    const [userObject, setUser] = useState([])
    const [trainerObject, setTrainer] = useState([])

    
    // Fetches users that are not trainers
    // Returns
    //      id, fullName, email, isTrainer : false

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?_id=${clickThatDogUserObject.id}`)
                .then(response => response.json())
                .then((objectFromJson) =>  {
                    setUser(objectFromJson[0])
                    })
                .then(() => {
                    fetch(`http://localhost:8088/trainers?_id=${userObject.trainerId}`)
                    .then(response => response.json())
                    .then((trainerObjectFromJson) =>  {
                        setTrainer(trainerObjectFromJson[0])
                    })
                    .then(() => {
                        fetch(`http://localhost:8088/clients?trainerId=${trainerObject.id}&_expand=user`)
                            .then(response => response.json())
                    // Client Array with Trainer Id of the user that is logged in.
                            .then((clientArray) =>  {
                            setClients(clientArray)
                    })
            })
            }) 
        }, 
    )

    

    return <>
    <h2>Current Clients</h2>


        <article className='clients'>

            {
                clients.map(
                    (client) => {
                        
                        return <section className="client" key={`user--${client?.id}`}>
                            <h3><a href="google.com" target="_blank">{client?.user?.fullName}</a></h3>
                            <p><a href="mailto: abc@example.com">{client?.user?.email}</a></p>
                            
                            
                        </section>
                    }
                )
                

            }
            
        </article>
    
    </>
}