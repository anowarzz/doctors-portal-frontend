import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "9.00 am to 5.00 pm Everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-accent to-info",
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Albuquerque , New Mexico",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      description: "+008854653434",
      icon: phone,
      bgClass: "bg-gradient-to-r from-accent to-info",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
