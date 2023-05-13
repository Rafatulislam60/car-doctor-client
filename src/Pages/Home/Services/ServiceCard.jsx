import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Services" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl text-orange-500 font-bold">Price: ${price}</p>
          <FontAwesomeIcon className="text-orange-600 text-xl" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
