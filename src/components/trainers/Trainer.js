import { Link } from 'react-router-dom';

// This function should accept a single customer object as a "prop"
export const Client = ({ id, fullName, email }) => {
    return (
        <section className='trainer'>
            <div>
                Name: <Link to={`/trainers/${id}`}>{fullName}</Link>
            </div>
            <div>Email: {email}</div>
        </section>
    );
};
