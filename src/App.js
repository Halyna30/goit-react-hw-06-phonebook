import React from 'react';
import { connect } from 'react-redux';
import actions from './Redux/actions';
import FormContacts from './Components/FormContacts/FormContacts';
import Filter from './Components/Filter/Filter';
import ListContacts from './Components/ListContacts/ListContacts';

const App = ({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <FormContacts onSubmit={onAddContact} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />

      <ListContacts contacts={contacts} onDelete={onDeleteContact} />
    </>
  );
};

// state = {
//   contacts: [],
//   filter: '',
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedСontacts = JSON.parse(contacts);

//   if (parsedСontacts) {
//     this.setState({ contacts: parsedСontacts });
//   }
// }

// componentDidUpdate(prevState) {
//   const nextСontacts = this.state.contacts;
//   const prevСontacts = prevState.contacts;

//   if (nextСontacts !== prevСontacts) {
//     localStorage.setItem('contacts', JSON.stringify(nextСontacts));
//   }
// }

// handleSubmit = ({ name, number }) => {
//   const isInContacts = this.state.contacts.find(
//     item => item.name.toLowerCase() === name.toLowerCase(),
//   );
//   if (isInContacts) {
//     alert(`${name} is already in contacts`);
//     return;
//   }

//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   this.setState(({ contacts }) => ({
//     contacts: [contact, ...contacts],
//   }));
// };

// changeFilter = event => {
//   const { value } = event.target;

//   this.setState({
//     filter: value,
//   });
// };

// handlerDelete = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
  onChangeFilter: value => dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
