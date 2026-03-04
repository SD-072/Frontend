const DestinationCard = ({ title, image, text }) => {
  // TODO: Link to /destination/:slug
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img src={image} alt="Tokyo" className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold hover:text-primary">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
