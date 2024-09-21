import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredData.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
