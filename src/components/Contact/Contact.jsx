import { IoMdContact } from "react-icons/io";
import { MdPhoneEnabled } from "react-icons/md";
import css from "./Contact.module.css";

export default function Contact({ contact, onRemove }) {
  return (
    <li className={css.card}>
      <div>
        <p>
          <IoMdContact className={css.icon} />
          {contact.name}
        </p>
        <p>
          <MdPhoneEnabled className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onRemove(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
