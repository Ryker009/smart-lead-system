import { useEffect, useState } from "react";
import NameInput from "../components/NameInput";
import LeadTable from "../components/LeadTable";
import Filter from "../components/Filter";
import { fetchLeads } from "../api/api";
import "./Dashboard.css";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    const data = await fetchLeads();
    setLeads(data);
  };

  const filtered =
    filter === "All" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div className="dashboard">
      <Navbar />
      <h1 style={{marginTop: "80px", textAlign : "center", fontSize : "50px", fontWeight : 600}}>Smart Lead Automation</h1>
      <NameInput onSubmit={loadLeads} />
      <Filter setFilter={setFilter} />
      <LeadTable leads={filtered} />
    </div>
  );
}
