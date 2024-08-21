import UpcomingAppointments from "@/components/patients/UpcomingAppointments";
import LatestReceipt from "@/components/patients/LatestReceipt";
import { Suspense } from "react";

const patientDashboardPage = () => {
  return (
    <section>
      {/* show what appointments are coming up, if it's unconfirmed show a confirm and give consent section. If there's no appointments, show a book a massage button that takes the page down to calendar */}
      <UpcomingAppointments />
      {/* show a list of upcoming available appointments that the user can click on to book. Include a "show more" button to take to full page of avilable appts with calendar */}
      <LatestReceipt />
      {/* section for what has passed: show recent receipts, and stretching videos recommended to the patient */}
    </section>
  );
};

export default patientDashboardPage;
