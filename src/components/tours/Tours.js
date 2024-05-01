
import './Tours.css'
function Tours(props){

    return (
       <div id="contanier">
       <div class="card">
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p>Price: {props.price}</p>
        </div>
        </div>
    );
}

export default Tours;