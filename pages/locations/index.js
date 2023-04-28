import data from "../../locations.json";

const Locations = () => {
  return (
    <section className="container">
      {data.results.map((e) => (
        <div className="ep_card" key={e.id}>
          <img src={e.image} alt={e.name} className="card-image" />
          <div className="card-details">
            <h2 className="card-title">{e.name}</h2>
            <p className="card-text">
              <strong>Type:</strong> {e.type}
            </p>
            <p className="card-text">
              <strong>Dimension:</strong> {e.dimension}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Locations;
