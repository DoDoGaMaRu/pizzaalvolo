import TabMenu from "./component/TabMenu";
import MyInfo from "./component/MyInfo";
import "./MyPage.css"

export default function MyPage() {
    return(
        <div className="mypage">
            <TabMenu></TabMenu>
            <MyInfo></MyInfo>
        </div>
    )
}