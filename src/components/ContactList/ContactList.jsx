import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ data, onRemove }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <Contact contact={contact} key={contact.id} onRemove={onRemove} />
      ))}
    </ul>
  );
}
