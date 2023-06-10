import "./PizzaTable.css"
import {Link} from "react-router-dom";
export default function PizzaTable({pizza_list, cur_page}) {
    return (
        <div className="pizza-card-form">
            <div className="pizza-menu-card">
                <div className="pizza-menu-item">
                    <div className="container">
                        <div className="pizza-img-container">
                            <img src={pizza_list[2 * (cur_page - 1)].img_url} alt="" height="240px"/>
                        </div>
                        <div className="item">
                            <div>
                                {pizza_list[2 * (cur_page - 1)].name}
                            </div>
                            <div>
                                {pizza_list[2 * (cur_page - 1)].price}
                            </div>
                        </div>
                    </div>
                    <div className="click-active-shadow-box">
                        <Link to={`/review/${pizza_list[2 * (cur_page - 1)].id}`} className="view-button">
                            <div className="inner-container">
                                <img src="data:image/png;base64,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"
                                    className="view-card" /> 리뷰보기
                            </div>
                        </Link>
                        <div className="basket-button" onClick={AddBasket}>
                            <div className="inner-container">
                                <img src="data:image/png;base64,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"
                                     className="basket-card" /> 장바구니
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            {
                pizza_list.length - 1 === 2 * (cur_page - 1) ?
                    null :
                    <div className="pizza-menu-card">
                        <div className="pizza-menu-item">
                            <div className="container">
                                <div className="pizza-img-container">
                                    <img src={pizza_list[2 * (cur_page - 1) + 1].img_url} alt="" height="240px"/>
                                </div>
                                <div className="item">
                                    <div>
                                        {pizza_list[2 * (cur_page - 1) + 1].name}
                                    </div>
                                    <div>
                                        {pizza_list[2 * (cur_page - 1) + 1].price}
                                    </div>
                                </div>
                            </div>
                            <div className="click-active-shadow-box">
                                <Link to={`/review/${pizza_list[2 * (cur_page - 1) + 1].id}`} className="view-button">
                                    <div className="inner-container">
                                        <img src="data:image/png;base64,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"
                                             className="view-card" /> 리뷰보기
                                    </div>
                                </Link>
                                <div className="basket-button" onClick={AddBasket}>
                                    <div className="inner-container">
                                        <img src="data:image/png;base64,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"
                                             className="basket-card" /> 장바구니
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

function AddBasket() {
    alert('장바구니에 담겼습니다.')
    {/*TODO 장바구니에 추가 */}
}