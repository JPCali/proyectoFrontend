import "./Services.css";
import { ServiceCard } from "../../components/ServicesCard/ServiceCard";

export function Services() {
  const Services = [
    { name: "Service 1", description: "Description 1" },
    { name: "Service 2", description: "Description 2" },
    { name: "Service 3", description: "Description 3" },
    { name: "Service 4", description: "Description 4" },
    { name: "Service 5", description: "Description 5" },
  ];

  return (
    <>
      <p>SERVICES</p>
      {Services.map((element) => {
        return <ServiceCard key={element.name} Services={element} />;
      })}
    </>
  );
}
