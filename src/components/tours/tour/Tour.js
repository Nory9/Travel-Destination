import Card from 'react-bootstrap/Card';
import './Tour.css'
import { Link } from "react-router-dom";
function Tour(props){
    return(
      <>
      <Link className='link' to={`/city/${props.id}`}>
        <Card className='card'>
        <Card.Img  variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
           <h6>{props.name}</h6> 
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      </>
    );
}

export default Tour;