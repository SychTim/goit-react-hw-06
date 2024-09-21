import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem("myContList");

    if (!localData) {
      console.log(localData);

      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
    return JSON.parse(localData);
  });

  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([...contacts]);

  useEffect(() => {
    setFilteredList(() =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, contacts]);

  useEffect(() => {
    localStorage.setItem("myContList", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(data) {
    setContacts([
      ...contacts,
      { id: nanoid(), name: data.name, number: data.number },
    ]);
  }

  function removeContact(id) {
    setContacts(() => contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} onChange={setFilter} />
      <ContactList data={filteredList} onRemove={removeContact} />
    </div>
  );
}

export default App;
