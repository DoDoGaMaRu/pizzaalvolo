import React from "react";
import "../../index.css";

const StorekeeperMainPage = () => {
    return (
        <div className="page">
            <form className="wrapper-box">
                <div className="nav">
                    <div>
                        <a>마이페이지</a>
                    </div>
                    <div>
                        <a>로그아웃</a>
                    </div>
                </div>
                <h1>MyPage</h1>
                <button className="Rbtn">메뉴등록</button>
                <button className="Cbtn">판매수량확인</button>
            </form>
        </div>
    );
};

export default StorekeeperMainPage;
