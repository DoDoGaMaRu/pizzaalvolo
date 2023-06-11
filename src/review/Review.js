import "./Review.css"
import {useLocation, useParams} from "react-router-dom";
import Rating from "./StarRate";
import {useEffect, useState} from "react";

export default function Review() {
    const location = useLocation()
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://202.31.202.34:443/review/${location.state.id}`, {})
            .then(res => res.json()).then(data => {
                setReviews(data)
                setLoading(false)
        })
    }, loading)
    return(
        <div> {
            loading ? (<div> 로딩 중... </div>) :
            (<div className="review_container">
                <div className="review_header">
                    <div className="review_title">리 뷰</div>
                    <div className="review_menu">
                        <img className="menu_image" src={location.state.img_url}/>
                        <div className="menu_info_area">
                            <div className="menu_name">{location.state.name}</div>
                            <div className="menu_price">{location.state.price} 원</div>
                        </div>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_item_list_header">
                        <div className="review_item_list_score">별점</div>
                        <div className="review_item_list_review">리뷰</div>
                        <div className="review_item_list_user">작성자</div>
                    </div>
                    {reviews.map((review) => (
                        <Item prop={review} />
                    ))}
                </div>
            </div>)
        }
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