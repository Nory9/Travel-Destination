
import './Tours.css'
import Tour from './tour/Tour'
import toursData from  '../../data/db.json'
function Tours(props){

    return (
       <div id="contanier">
        { toursData.map(ele=>{
            return (<Tour  name={ele.name} id={ele.id} image={ele.image}/>)
        }) }
        </div>
    );
}

export default Tours;