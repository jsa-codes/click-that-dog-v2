
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./ClientList.css"


export const ClientList = () => {

    // Getting user from local storage
    const localClickThatDogUser = localStorage.getItem("click_that_dog_user")
    const clickThatDogUserObject = JSON.parse(localClickThatDogUser)

    // SETTING INITIAL STATE
    const [clients, setClients] = useState([])
    const [userObject, setUser] = useState({})
    const [trainerObject, setTrainer] = useState({})

    
    // USE EFFECTS
    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${clickThatDogUserObject.id}`)
                .then(response => response.json())
                .then((objectFromJson) =>  {
                    setUser(objectFromJson)
                    })
               
        }, []
    )

    useEffect(
        () => {
             fetch(`http://localhost:8088/trainers?userId=${userObject.id}`)
                    .then(response => response.json())
                    .then((trainerObjectFromJson) =>  {
                        setTrainer(trainerObjectFromJson[0])
                    })
        }, [userObject]
    )

    useEffect(
        () => {
            if (trainerObject) {
                
                fetch(`http://localhost:8088/clients?trainerId=${trainerObject.id}&_expand=user`)
                    .then(response => response.json())
            // Client Array with Trainer Id of the user that is logged in.
                    .then((clientArray) =>  {
                        setClients(clientArray)
                    })
            }
        
        }, [trainerObject]
    )

    

    return <>
    
    <h2 className='currentClients-heading'>Current Clients</h2>

        <article className='clients'>

            {
                clients.map(
                    (client) => {
                        
                        return <section className="client" key={`user--${client?.id}`}>
                            <Link to="/clientProfile"><h3>{client?.user?.fullName}</h3></Link>
                            <p><a href="mailto: abc@example.com">{client?.user?.email}</a></p>
                            
                            
                        </section>
                    }
                )
                

            }
            
        </article>
    
    </>
}