import { SEO } from "@src/components/SEO";
import HomepageContent from "@components/HomepageComponent";


export default function Home() {
  return (
    <>
      <SEO title={"Homepage"} description={"Kanban task app"} />
      <HomepageContent />
    </>
  );
}
