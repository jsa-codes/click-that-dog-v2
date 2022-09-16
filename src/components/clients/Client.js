import { Link } from 'react-router-dom'

// This function should accept a single customer object as a "prop"
export const Customer = ({id, fullName, email, phoneNumber}) => {
    return <section className='customer'>
                <div>
                    <Link to={`/customers/${id}`}>Name: {fullName}</Link>
                </div>
                <div>Email: {email}</div>
                <div>Phone: {phoneNumber}</div>
            </section>
}