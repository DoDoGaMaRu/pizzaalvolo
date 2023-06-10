import "./HomeLogoutOrder.css"
import {Link} from "react-router-dom";
export default function HomeLogoutOrder() {
    return (
        <div className="btn-red-order">
            <Link to={"/pizza"} className="inner-div">
                <img className="btn-delivery-icon" src={require('./HomeLogoutOrderImages/bike.png')} />
                <div className="btn-delivery-text"> 배달주문 </div>
            </Link>
            <div className="btn-red-line"></div>
            <div className="inner-div">
                <img className="btn-delivery-icon" src={require('./HomeLogoutOrderImages/box.png')} />
                <div className="btn-delivery-text"> 포장주문 </div>
            </div>
        </div>
    )
}