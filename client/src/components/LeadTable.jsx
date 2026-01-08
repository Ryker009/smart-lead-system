import "./LeadTable.css";

export default function LeadTable({ leads }) {
  return (
    <div className="table-wrapper">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Confidence</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((l) => (
          <tr key={l._id} className={l.probability > 0.6 ? "verified" : "to-check"}>
            <td>{l.name}</td>
            <td>{l.country}</td>
            <td>{(l.probability * 100).toFixed(1)}%</td>
            <td>{l.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
