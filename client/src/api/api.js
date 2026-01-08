const BASE_URL = "http://localhost:5000/api/leads";

export const processNames = async (names) => {
  const res = await fetch(`${BASE_URL}/process`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ names }),
  });
  return res.json();
};

export const fetchLeads = async () => {
  const res = await fetch(`${BASE_URL}/all`);
  return res.json();
};
