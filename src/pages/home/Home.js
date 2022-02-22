import Navbar from '../../components/header/Navbar';
import styles from './HomeStyle';
import Hero from '../../components/hero/Hero'

console.log(styles.headerBg);
function Home() {
    return (
        <div className="container-fluid" style={styles.zeroMP}>
            <div className="row">
                <Navbar />
            </div>
                <Hero />
        </div>
    )
}

export default Home;