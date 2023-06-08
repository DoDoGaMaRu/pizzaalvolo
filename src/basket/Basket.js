import "./Basket.css"

export default function Basket() {
    return(
        <div className="basket_container">
            <div className="basket_header">
                <div className="basket_title">장바구니</div>
            </div>
            <div className="basket_layout">
                <div className="basket_item">

                </div>
                <div className="bottom">
                    <div className="total_layout">
                        <h4 className="sum_total">합계</h4>
                        <h4 className="total">
                            총
                            <font className="total_price">1111</font>
                             원
                        </h4>
                    </div>
                    <div className="submit_button">주문하기</div>
                </div>
            </div>
        </div>
    )
}