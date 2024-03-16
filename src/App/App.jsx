import ContactForm from "../component/ContactForm/ContactForm.jsx";
import SearchBox from "../component/SearchBox/SearchBox.jsx";
import ContactList from "../component/ContactList/ContactList.jsx";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
