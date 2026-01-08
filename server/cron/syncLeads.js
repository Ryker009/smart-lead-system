import cron from "node-cron";
import Lead from "../models/Lead.js";

const startCron = () => {
  cron.schedule("*/5 * * * *", async () => {
    const leads = await Lead.find({ status: "Verified", synced: false });

    for (let lead of leads) {
      console.log(
        `[CRM Sync] Sending verified lead ${lead.name} to Sales Team...`
      );
      lead.synced = true;
      await lead.save();
    }
  });
};

export default startCron;
