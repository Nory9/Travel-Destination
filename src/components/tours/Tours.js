
import './Tours.css'
import Tour from './tour/Tour'
import toursData from  '../../data/db.json'
function Tours(props){

    return (
       <div id="contanier">
        { toursData.map(ele=>{
            return (<Tour  name={ele.name} id={ele.id} image={ele.image}/>)
        }) }
       {/* <div class="card">
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p>Price: {props.price}</p>
        </div> */}
        </div>
    );
}

export default Tours;