import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import contactData from "../../../contact.json";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(contactData);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactList={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
