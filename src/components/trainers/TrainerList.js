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
            fetch(`http://localhost:8088/users?&isTrainer=true`)
            .then(response => response.json())
            .then((trainersArray) =>  {
            setTrainers(trainersArray)
            })
        }, []
    )

    return <>
        <h2 className='available-trainers--heading'>Available Trainers</h2>

        <article className='trainers'>

            {
                trainers.map(
                    (trainer) => {
                        return (
                            <section className='all-trainers'>
                                <img src='https://img.izismile.com/img/img2/20091118/funny_crazy_faces_13.jpg' />
                                <h3>{trainer.fullName}</h3>
                                <p>
                                    <a href='_target'>{trainer.email}</a>
                                </p>
                            </section>
                        );
                    }
                )
                

            }
            
        </article>
        </>   
}