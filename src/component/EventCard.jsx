import { Card } from "primereact/card";

function EventCard(props) {
  return (
    <div>
      <Card title={props.header}>
        <div className="block m-0">
          <img src={props.print} alt="Affiche de l'évènement" width={500} height={"auto"} />
          <div>
              {props.paragraph}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EventCard;
