import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const ClientDetails = () => {
    const {clientId} = useParams()
    const [client, updateClient] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/clients?_expand=user&userId=${clientId}`)
            .then(response => response.json())
            .then((data) =>  {
                const singleClient = data[0]
            updateClient(singleClient)
            })
        }, [clientId]
    )
    
    
    return <section className='client'>
        <header className='client__header'>{client?.user?.fullName}</header>
        <div>Email: {client.email}</div>
        
    </section>
}


