import { Link } from 'react-router-dom'

// This function should accept a single customer object as a "prop"
export const Client = ({id, fullName, email}) => {
    return <section className='client'>
                <div>
                    Name: <Link to={`/clients/${id}`}>{fullName}</Link>
                </div>
                <div>Email: {email}</div>
                
            </section>
}