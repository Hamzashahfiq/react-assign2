import Navbar from '../../components/header/Navbar';
import styles from './HomeStyle';
import Hero from '../../components/hero/Hero';
import Reputation from '../../components/reputation/Reputation';
import AboutUs from '../../components/aboutUs/AboutUs';
import Service from '../../components/service/Service';
function Home() {
    return (
        <div className="container-fluid" style={styles.zeroMP}>
            <div className="row" style={styles.zeroMP}>
                <Navbar />
            </div>
            <div className="row" style={styles.zeroMP}>
                <Hero />
            </div>
            <div className="row" style={styles.zeroMP}>
                <Reputation />
            </div>
            <div className="row" style={styles.zeroMP}>
                <AboutUs />
            </div>
            <div className="row" style={styles.zeroMP}>
               <Service />
            </div>
            


        </div>
    )
}

export default Home;