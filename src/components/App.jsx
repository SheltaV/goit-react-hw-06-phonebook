import { useEffect, useState } from "react";
import { ContactForm } from './Form/Form';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from './Filter/Filter';


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact-item')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact-item', JSON.stringify(contacts))
  }, [contacts])

  const addNewContact = newContact => {
    const findName = contacts.map(find => find.name)
    if (findName.includes(newContact.name)) {
      return window.alert('Contact with this name already exists.')
    } else {
    setContacts(prevState => 
      [...prevState, newContact]
    )
    }
  }
  
  const addFilter = newFilter => {
    setFilter(newFilter)
  }

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      // console.log(contact)
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }  

  const deleteContact = (contactId) => {
    setContacts(prevState => 
      prevState.filter(contact => 
        contact.name !== contactId
      ))
  }

  const filteredContacts = getFilteredContacts();
  
    return (<div>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addNewContact} />
      
    <h2>Contacts</h2>
    <Filter items={filter} addFilter={addFilter} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>)
};
