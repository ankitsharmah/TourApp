import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div className="title-container">
        <h2 className="title">Plan with Ankit</h2>
      </div>
      <div className="contains-cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
