import { Link } from 'react-router-dom'

// This function should accept a single customer object as a "prop"
export const Client = ({id, fullName, email, phoneNumber}) => {
    return <section className='client'>
                <div>
                    <Link to={`/clients/${id}`}>Name: {fullName}</Link>
                </div>
                <div>Email: {email}</div>
                <div>Phone: {phoneNumber}</div>
            </section>
}