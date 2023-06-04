import "./HomeLogoutOrder.css"
export default function HomeLogoutOrder() {
    return (
        <div className="btn-red-order">
            <div className="inner-div">
                <img className="btn-delivery-icon" src={require('./HomeLogoutOrderImages/bike.png')} />
                <div className="btn-delivery-text"> 배달주문 </div>
            </div>
            <div className="btn-red-line"></div>
            <div className="inner-div">
                <img className="btn-delivery-icon" src={require('./HomeLogoutOrderImages/box.png')} />
                <div className="btn-delivery-text"> 포장주문 </div>
            </div>
        </div>
    )
}