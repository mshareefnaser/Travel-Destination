//tourDetails.js
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
function ToursDetails(props) {
  const { id } = useParams();
  const filteredTour = props.arrData.filter((tour) => tour.id === id);
  const seeMoreText = filteredTour[0].info;
  const seeLessText = filteredTour[0].info.split(' ').slice(0, 20).join(' ');
  const [seeMore, setSeeMore] = useState(false);
  function handleSeeMore() {
    setSeeMore(!seeMore);
  }
  console.log(filteredTour);
  return (<>
    <div>
      {filteredTour.map((tour) =>
        <>
          <Card>
            <Card.Img variant="top" src={tour.image} />
            <Card.Body>
              <Card.Text>
                <h3>{tour.name}</h3>
                {seeMore ? (
                  <div>
                    <p>{seeMoreText}</p>
                    <button onClick={handleSeeMore}>see less</button>
                  </div>
                ) : (
                  <div>
                    <p>{seeLessText} ...</p>
                  <button onClick={handleSeeMore}>see more</button>
                  </div>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </>


      )}
    </div>
  </>)
}
export default ToursDetails;