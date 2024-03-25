import Menu from "../component/Menu";
import EventCard from "../component/EventCard";
import PageFooter from "../component/PageFooter";

function Home() {
  const header = (
    <>
      <Menu></Menu>
    </>
  );

  const foot = (
    <>
      <PageFooter></PageFooter>
    </>
  );

  return (
    <div id="pageContainer">
      <div>
        {header}
      </div>
      <div className="mx-3 my-3">
        <EventCard></EventCard>
      </div>
      <div className="mx-3 my-3">
        <EventCard header="Let's begin"></EventCard>
      </div>
      <div>
        {foot}
      </div>
    </div>
  );
}

export default Home;
