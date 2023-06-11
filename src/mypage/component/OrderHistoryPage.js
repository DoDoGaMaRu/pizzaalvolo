import uncheckedImg from "./Icon/unchecked.svg";
import { FaStar } from 'react-icons/fa';
import Rating from "./StarRate";
import {useState} from "react";

const ARRAY = [0, 1, 2, 3, 4];

export default function OrderHistoryPage() {
    const [info, setInfo] = useState("");
    const [score, setScore] = useState(0);
   const [toggle, setToggle] = useState(false);
   const [isWrite, setIsWrite] = useState(false);//Todo DB에서 리뷰 유무를 받아 설정
    const [review, setReview] = useState( {
        order_id:"",
        user_sn:"",
        star:"",
        info:"",
    })
   const click = () => {
       setToggle(!toggle)
   }
   const write = () => {
       setToggle(!toggle);
        setIsWrite(true);
        console.log(score);
        console.log(info);
        setReview({...review, star: {score}, info: {info}})
        const post = {
            review: review,
        };

        fetch("url", {
            method: "post",
            header: {
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

                        </div>
                    </div>
                    <div className="input-text-box">
                        <div className="title">
                            주문메뉴
                        </div>
                        <div className="value">

                        </div>
                    </div>
                    <div className="input-text-box">
                        <div className="title">
                            결제금액
                        </div>
                        <div className="value">

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