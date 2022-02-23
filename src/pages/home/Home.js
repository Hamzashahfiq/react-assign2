import Navbar from '../../components/header/Navbar';
import styles from './HomeStyle';
import Hero from '../../components/hero/Hero';
import Reputation from '../../components/reputation/Reputation';

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


        </div>
    )
}

export default Home;