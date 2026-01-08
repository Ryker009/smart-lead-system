import Lead from "../models/Lead.js";
import { enrichName } from "../services/nationalizeService.js";

export const processLeads = async (req, res) => {
  const { names } = req.body;

  const results = await Promise.all(
    names.map(async (name) => {
      const data = await enrichName(name);
      const top = data.country?.[0];

      const probability = top?.probability || 0;
      const status = probability > 0.6 ? "Verified" : "To Check";

      return Lead.create({
        name,
        country: top?.country_id || "Unknown",
        probability,
        status,
      });
    })
  );

  res.json(results);
};

export const getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};
