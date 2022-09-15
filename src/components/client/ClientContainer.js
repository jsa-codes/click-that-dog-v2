import { useState  } from 'react';
import { ClientList } from './ClientList';

export const ClientContainer = () => {
    
    const [searchClient, setSearchClient] = useState("")

    return <>
        <ClientSearch />
        <ClientList />
    </>
}