import "./Filter.css";

export default function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option>All</option>
      <option>Verified</option>
      <option>To Check</option>
    </select>
  );
}
