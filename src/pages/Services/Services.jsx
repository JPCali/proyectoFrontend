import "./Services.css";
import { ServiceCard } from "../../components/ServicesCard/ServiceCard";

export function Services() {
  const Services = [
    { id: 1, name: "Service 1", description: "Description 1" },
    { id: 2, name: "Service 2", description: "Description 2" },
    { id: 3, name: "Service 3", description: "Description 3" },
    { id: 4, name: "Service 4", description: "Description 4" },
    { id: 5, name: "Service 5", description: "Description 5" },
  ];

  return (
    <>
      <p>SERVICES</p>
      {Services.map((element, index) => {
        return <ServiceCard Services={element} />;
      })}
    </>
  );
}
