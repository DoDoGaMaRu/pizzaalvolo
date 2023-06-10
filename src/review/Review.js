import "./Review.css"
import {useParams} from "react-router-dom";
import Rating from "./StarRate";

const dummy = {
    img: "https://img.pizzaalvolo.co.kr/uploads/tmp9D88.png",
    name: "쉬림프&핫치킨골드피자",
    count: 1
}
const review = {
    star: 3, info: "존맛탱", name: "qwer1234"
}

export default function Review() {
    const id = useParams()
    console.log(id)
    return(
        <div className="review_container">
            <div className="review_header">
                <div className="review_title">리 뷰</div>
                <div className="review_menu">
                    <img className="menu_image" src={dummy.img}/>
                    <div className="menu_info_area">
                        <div className="menu_name">{dummy.name}</div>
                        <div className="menu_price">{dummy.count} 원</div>
                    </div>
                </div>
            </div>
            <div className="review_item">
                <div className="review_item_list_header">
                    <div className="review_item_list_score">별점</div>
                    <div className="review_item_list_review">리뷰</div>
                    <div className="review_item_list_user">작성자</div>
                </div>
                {/* 리뷰 */}
                <Item prop={review}/>
            </div>
        </div>
    )
}

function Item({prop}) {
    return(
        <div className="item_container">
            <Rating star={prop.star}/>
            <div className="info">{prop.info}</div>
            <div className="name">{prop.name}</div>
        </div>
    )
}