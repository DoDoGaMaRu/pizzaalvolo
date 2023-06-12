import React, { useState } from "react";
import "../../index.css";
import Temp from "./Temp";
import MenuRegistrationPage from "./MenuRegistrationPage";
import "./StoreKeeperMainPage.css"

const StorekeeperMainPage = () => {
    const [btnState, setBtnState] = useState("main");

    const changeToInsert = () => {
        setBtnState("insert");
    };

    const changeToRead = () => {
        setBtnState("read");
    };

    const showPage = () => {
        switch (btnState) {
            case "main":
                return (
                    <div className="main-page">
                        <form className="wrapper-box">
                            <h1>MyPage</h1>
                            <button className="Rbtn" onClick={changeToInsert}>
                                메뉴 등록
                            </button>
                            <button className="Cbtn" onClick={changeToRead}>
                                판매 내역
                            </button>
                        </form>
                    </div>
                );
            case "insert":
                return <MenuRegistrationPage />;
            case "read":
                return <Temp />;
        }
    };

    return <div>{showPage()}</div>;
};

export default StorekeeperMainPage;
