// tour.js
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
function Tour(props) {
  const name = props.tour.name;
  const image = props.tour.image;
  return (
    <Link to={`/city/${props.id}`}>
      <Card className="bg-dark text-white" style={{ width: '400px', margin: 30, display: 'inline-block' }}>
        <Card.Img src={image} alt={name} style={{ height: '300px', width: '400px' }} />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );

}

export default Tour;
