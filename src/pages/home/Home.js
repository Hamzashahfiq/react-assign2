import Navbar from '../../components/header/Navbar';
import Headerimg from '../../assets/images/headerpic.png'; 


function Home() {
    return (
        <div className="container-fluid">
            <div className="row" style={{}}>
                  <Navbar />
            </div>
            <div className="row">
                  <img src={Headerimg} alt="" />
            </div>
        </div>
        
    )
}

export default Home;