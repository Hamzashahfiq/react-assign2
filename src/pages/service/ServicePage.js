
import Service from '../../components/service/Service';
import Ads from '../../components/adsSection/Ads';

function ServicePage() {
    return (
        <div id="ServicePage">
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