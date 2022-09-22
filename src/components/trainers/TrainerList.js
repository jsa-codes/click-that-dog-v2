import { useEffect, useState } from 'react'
import "./TrainerList.css"


export const TrainerList = () => {

    const [trainers, setTrainers] = useState([])
    
    // Fetch trainers
    // set state for trainers
    // useEffect to fetch trainers
    // map through the trainers


    useEffect(
        () => {
            fetch(`http://localhost:8088/trainers?_expand&_expand=user`)
            .then(response => response.json())
            .then((trainersArray) =>  {
            setTrainers(trainersArray)
            })
        }, []
    )

    return <>
        <h2>Available Trainers</h2>

        <article className='trainers'>

            {
                trainers.map(
                    (trainer) => {
                        return <section className="all-trainers">
                            <h3>{trainer?.user?.fullName}</h3>
                            <p><a href="_target">{trainer?.user?.email}</a></p>
                        </section>
                    }
                )
                

            }
            
        </article>
        </>   
}