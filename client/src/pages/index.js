import { SEO } from "@src/components/SEO";
import HomepageContent from "@components/Home";
import AddNewTaskBtn from "@components/AddNewTaskBtn";


export default function Home() {
  return (
    <>
      <SEO title={"Homepage"} description={"Kanban task app"} />
      <AddNewTaskBtn />
      <HomepageContent />
    </>
  );
}
