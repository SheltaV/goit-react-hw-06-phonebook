// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   componentDidUpdate() {
//     localStorage.setItem('contact-item', JSON.stringify(this.state.contacts))
//   }

//   componentDidMount() {
//     const contactItem = localStorage.getItem('contact-item')
//     if (contactItem !== null) {
//       this.setState({contacts: JSON.parse(contactItem)})
//     }
//   }

//   addNewContact = newContact => {
//     const findName = this.state.contacts.map(find => find.name)
//     if (findName.includes(newContact.name)) {
//       return window.alert('Contact with this name already exists.')
//     } else {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, {id: nanoid(), ...newContact}]
//     }))
//     }
//   }

//   addFilter = newFilter => {
//     this.setState({filter: newFilter})
//   }

//   getFilteredContacts = () => {
//     const { contacts } = this.state;
//     return contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
//   }

//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }))
//   }
  
//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts()

//     return (<div>
//     <h1>Phonebook</h1>
//     <ContactForm onAdd={this.addNewContact} />
      
//     <h2>Contacts</h2>
//     <Filter items={filter} addFilter={this.addFilter} />
//       <ContactList items={filteredContacts} onDelete={this.deleteContact} />
//     </div>)
//   }
// };
