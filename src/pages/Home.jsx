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
    <>
      <div>{header}</div>
      <div className="flex justify-content-around flex-wrap">
        <div className="flex align-items-center justify-content-center w-4rem h-4rem border-round m-2">
          <EventCard></EventCard>
        </div>
        <div className="flex align-items-center justify-content-center w-4rem h-4rem border-round m-2">
          <EventCard></EventCard>
        </div>
        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-round m-2">
          <EventCard></EventCard>
        </div>
        <div className="absolute md:bottom-0 flex align-items-center justify-content-center w-4rem h-4rem">
          {foot}
        </div>
      </div>
    </>
  );
}

export default Home;
