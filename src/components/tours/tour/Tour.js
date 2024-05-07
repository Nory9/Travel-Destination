import Card from 'react-bootstrap/Card';
import './Tour.css'
function Tour(props){
    return(
        <Card calssName="cc">
        <Card.Img  calssName= "card" variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
           <h6>{props.name}</h6> 
          </Card.Text>
        </Card.Body>
      </Card>
        // <div>
        //     <img src={props.image}></img>
        //     <h5>{props.name}</h5>
        // </div>
    );
}

export default Tour;