import uncheckedImg from "./Icon/unchecked.svg";
import { FaStar } from 'react-icons/fa';
import Rating from "./StarRate";
import {useState} from "react";

const ARRAY = [0, 1, 2, 3, 4];

export default function OrderHistoryPage() {
   const [toggle, setToggle] = useState(false);
   const click = () => {
       setToggle(!toggle)
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
                    <div role="button" className="review-btn" onClick={click}> 후기작성 </div>
                    {toggle ?
                        <div className="number-area">
                            <div className="number-area-left">
                                <Rating></Rating>
                            </div>
                            <div className="number-area-right">
                                <div className="input-number-box">
                                    <input type="text" placeholder="매우맛있음" />
                                    <span className="btn-modify-number-gray">등록</span>
                                </div>
                            </div>
                        </div> : null
                    }

                </div>
            </div>
        </div>
    )
}