import { Card } from "primereact/card";
import React, { useState } from "react";
import image from "../images/xiaocons.png";

function EventCard() {
  let header1= "The show";
  return (
    <div className="card">
      <Card title={header1}>
        <div className="inline-flex m-0">
          <img src={image} alt="test" class="responsive" />
          <div>
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EventCard;
