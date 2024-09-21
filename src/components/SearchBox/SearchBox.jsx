import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onChange }) {
  function handleChange(evt) {
    onChange(evt.target.value);
  }

  return (
    <div className={css.container}>
      <label htmlFor="filtInp">Find contacts by name</label>
      <input type="text" id="filtInp" value={filter} onChange={handleChange} />
    </div>
  );
}
