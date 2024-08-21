import Intro from "@/components/homepage/Intro";
import ServicesAndRates from "@/components/homepage/ServicesAndRates";
import WorkplaceMassage from "@/components/homepage/WorkplaceMassage";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Intro />
      <ServicesAndRates />
      <WorkplaceMassage />
    </div>
  );
}
