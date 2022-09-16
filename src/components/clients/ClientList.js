import { useEffect, useState } from 'react'
import "./ClientList.css"


export const ClientList = () => {


    const [clients, setClients] = useState([])

useEffect(
    () => {
        fetch(`http://localhost:8088/clients?_expand&_expand=user`)
        .then(response => response.json())
        .then((clientsArray) =>  {
        setClients(clientsArray)
        })
    }, []
)

    return <>
    <h2>Current Clients</h2>

        <article className='clients'>

            {
                clients.map(
                    (client) => {
                        return <section className="all-clients">
                            <h3>{client?.user?.fullName}</h3>
                            <p>{client?.phoneNumber}</p>
                            <p>{client.phoneNumber}</p>
                            <p>{client?.user?.email}</p>
                            <p><a href="_target">{client?.user?.email}</a></p>
                        </section>
                    }
                )
                

            }
            
        </article>
    
    </>
}