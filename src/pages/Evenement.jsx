import Menu from "../component/Menu";
import EventCard from '../component/EventCard';
import PageFooter from "../component/PageFooter";

function Evenement() {

  const header = (
    <>
      <Menu></Menu>
    </>
  );
  return (
    <div>
      {header}
      <EventCard></EventCard>
      <h1>EVENT</h1>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Evenement;
