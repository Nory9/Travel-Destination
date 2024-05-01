// import Header from './components/header/Header';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours'
// import db from '/home/noor/travel-destination/src/data/db.json'
const toursData= require('/home/noor/travel-destination/src/data/db.json');
function Home(){
    return (
        <>
        <Header/>
        {
        toursData.map(ele=>{
            return (<Tours name={ele.name} info ={ele.info} price={ele.price} image={ele.image}/>)
        })
        }
        <Footer/>
        </>
    )
}

export default Home;