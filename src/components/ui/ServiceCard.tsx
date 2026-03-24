const ServiceCard = ({ title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-primary font-bold">{price}</p>
    </div>
  );
};

export default ServiceCard;