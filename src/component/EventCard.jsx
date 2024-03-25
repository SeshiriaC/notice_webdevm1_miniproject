import { useState } from "react";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function EventCard(props) {
  const print = (
    <>
      <img src={props.print} alt="Affiche de l'évènement" />
    </>
  );

  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <Card
        title={props.header}
        subTitle="event by NextG"
        header={print}
        className="my-5 mx-6 shadow-8 md:w-25rem"
      >
        <p className="m-2">{props.paragraph}</p>
        <div className="card flex justify-content-center m-2">
          <Button
            label="Détails"
            icon="pi pi-external-link"
            onClick={() => setVisible(true)}
          />
          <Dialog
            header={props.header}
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            {props.details}
          </Dialog>
        </div>
      </Card>
    </div>
  );
}

export default EventCard;
