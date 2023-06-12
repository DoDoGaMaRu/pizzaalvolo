import TabMenu from "./component/TabMenu";
import MyInfo from "./component/MyInfo";
import "./MyPage.css"
import {useCallback, useState} from "react";
import OrderHistoryPage from "./component/OrderHistoryPage";
import {useParams} from "react-router-dom";

export default function MyPage() {
    const detail = useParams().detail;
    const [curTab, setCurTab] = useState(detail);
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
            <TabMenu onChangeTabMenu={onChangeTabMenu} detail={curTab}></TabMenu>
            <div>
                {showPage()}
            </div>
        </div>
    )
}