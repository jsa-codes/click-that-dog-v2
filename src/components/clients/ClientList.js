
import { useEffect, useState } from 'react'
import { Client } from "./Client";
import "./ClientList.css"


export const ClientList = () => {


    const [clients, setClients] = useState([])
    

// Fetches users that are not trainers
// Returns
//      id, fullName, email, isTrainer : false
useEffect(
    () => {
        fetch(`http://localhost:8088/clients?_expand=user`)
        .then(response => response.json())
        .then((clientArray) =>  {
            setClients(clientArray)
        })
    }, []
)




    return <>
    <h2>Current Clients</h2>

        <article className='clients'>

            {
                clients.map(
                    (client) => {
                        
                        return <section className="client" key={`client--${client.id}`}>
                            <h3><a href="google.com" target="_blank">{client.user.fullName}</a></h3>
                            <p><a href="mailto: abc@example.com">{client.user.email}</a></p>
                            
                            
                        </section>
                    }
                )
                

            }
            
        </article>
    
    </>
}