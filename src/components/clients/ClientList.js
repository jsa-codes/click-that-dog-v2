import { useEffect, useState } from 'react'
import { Client } from "./Client";
import "./ClientList.css"


export const ClientList = () => {


    const [clients, setClients] = useState([])
    

useEffect(
    () => {
        fetch(`http://localhost:8088/clients?isTrainer=false`)
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
                            <h3>{client.fullName}</h3>
                            <p>{client?.user?.phoneNumber}</p>
                            <p><a href="_target">{client.email}</a></p>
                        </section>
                    }
                )
                

            }
            
        </article>
    
    </>
}