import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";

function EventCard() {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  const card1 = (
    <div className="card">
      <Card
        title="Advanced Card"
        subTitle="Card subtitle"
        header={header}
        className="md:w-25rem"
      >
        <div className="card ">
          <Accordion activeIndex={1}>
            <AccordionTab header="Plus d'informations">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </Card>
    </div>
  );

  return <div className="card m-2 my-5 flex">{card1}</div>;
}

export default EventCard;
