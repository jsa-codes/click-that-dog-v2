import { useState  } from 'react';
import { ClientList } from './ClientList';
import { ClientSearch } from './ClientSearch';

export const ClientContainer = () => {
    
    const [searchClient, setSearchClient] = useState("")

    return <>
        <ClientSearch setterFunction={setSearchClient}/>
        <ClientList searchClientState={searchClient}/>
    </>
}