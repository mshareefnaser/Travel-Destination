// tours.js
import Tour from './tour/Tour';

function Tours(props) {
  return (
    <div>
      {props.arrData.map((tour) => (
        <Tour id={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default Tours;
