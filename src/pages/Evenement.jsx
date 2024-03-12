import Menu from "../component/Menu";
import EventCard from '../component/EventCard';

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
    </div>
  );
}

export default Evenement;
