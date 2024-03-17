import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contactList }) {
  return (
    <ul className={css.list}>
      {contactList.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}
