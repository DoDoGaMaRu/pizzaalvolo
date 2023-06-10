import TabMenu from "./component/TabMenu";
import MyInfo from "./component/MyInfo";
import "./MyPage.css"
import {useCallback, useState} from "react";
import OrderHistoryPage from "./component/OrderHistoryPage";

export default function MyPage() {
    const [curTab, setCurTab] = useState("정보수정");
    const onChangeTabMenu = useCallback((text) => {
        setCurTab(text);
    })
    const showPage = () => {
        switch(curTab){
            case '주문내역':
                return <OrderHistoryPage></OrderHistoryPage>
            case '정보수정':
                return <MyInfo></MyInfo>
        }
    }
    return(
        <div className="mypage">
            <TabMenu onChangeTabMenu={onChangeTabMenu}></TabMenu>
            <div>
                {showPage()}
            </div>
        </div>
    )
}