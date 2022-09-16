import { useEffect, useState } from 'react'


export const TrainerList = () => {

    // Fetch trainers
    // set state for trainers
    // useEffect to fetch trainers
    // map through the trainers

    const [trainers, setTrainers] = useState([])

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
                        return <section className="all__trainers">
                            <h3>{trainer?.user?.fullName}</h3>
                            <p><a href="_target">{trainer?.user?.email}</a></p>
                        </section>
                    }
                )
                

            }
            
        </article>
        </>
   
       

        
    
}