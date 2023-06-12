import {useState} from "react";
import Rating from "./StarRate";

export default function OrderHistoryComponent({order}) {
    console.log(order);
    const [toggle, setToggle] = useState(false);
    const [review, setReview] = useState(order)
    const [info, setInfo] = useState("");
    const [score, setScore] = useState(0);
    const [isWrite, setIsWrite] = useState(order.review);//Todo DB에서 리뷰 유무를 받아 설정
    const [id, setId] = useState(order.id);
    const click = () => {
        setToggle(!toggle)
    }
    const write = () => {
        setToggle(!toggle);
        setIsWrite(true);
        setReview({...review, star: {score}, info: {info}})
        console.log(score);
        console.log(info);
        const post = {
            order_id: id,
            user_sn: 1,
            star: score,
            info: info,
        };
        console.log(post);
        fetch("http://202.31.202.34:443/review", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        });
    }
    return (
        <div className="my-info-page">
            <div className="top-text">
                주문내역
            </div>
            <div className="body-container">
                <div className="padding-box">
                    <div className="input-text-box">
                        <div className="title">
                            주문일자
                        </div>
                        <div className="value">
                            {review.regdate}
                        </div>
                    </div>
                    <div className="input-text-box">
                        <div className="title">
                            주문메뉴
                        </div>
                        <div className="value">
                            {review.detail}
                        </div>
                    </div>
                    <div className="input-text-box">
                        <div className="title">
                            결제금액
                        </div>
                        <div className="value">
                            {review.price}
                        </div>
                    </div>
                    <div className="input-text-box">
                        <div className="title">
                            배달자정보
                        </div>
                        <div className="value">

                        </div>
                    </div>
                    <div role="button" className="review-btn" onClick={isWrite ? null : click}> 후기작성 </div>
                    {toggle ?
                        <div className="number-area">
                            <div className="number-area-left">
                                <Rating setScore={setScore}></Rating>
                            </div>
                            <div className="number-area-right">
                                <div className="input-number-box">
                                    <input type="text" onChange={(e) => setInfo(e.target.value)} placeholder="매우맛있음" />
                                    <span className="btn-modify-number-gray" onClick={() => {
                                        click();
                                        write();
                                    }}>등록</span>
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}