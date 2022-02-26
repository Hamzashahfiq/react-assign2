
import Service from '../../components/service/Service';
import Ads from '../../components/adsSection/Ads';
import styles from './ServicePageStyle';

function ServicePage() {
    return (
        <div id="ServicePage" style={styles.serviceMainDiv}>
            <div className="row">
                <Service />
            </div>
            <div className="row">
                <Ads />
            </div>
        </div>

    )
}


export default ServicePage;