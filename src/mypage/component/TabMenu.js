import TabComponent from "./TabComponent";
import "./TabMenu.css"
import {useCallback, useState} from "react";
const menu_title_list = [
    "주문내역", "쿠폰함", "MY CLASS", "비행기스탬프", "정보수정", "회원탈퇴"
]
export default function TabMenu({onChangeTabMenu}) {
    const [tabMenu, setTabMenu] = useState(menu_title_list[0]);
    const onChangeTab = useCallback((text) => {
        onChangeTabMenu(text);
        setTabMenu(text);
    })
    return(
        <div className="mypage-tab">
            <div className="mypage-tab-table" border="1">
                {
                    menu_title_list.map((title) => (
                        <TabComponent cur_tab={tabMenu} title={title} onChangeTab={onChangeTab}></TabComponent>
                    ))
                }
            </div>
        </div>
    )
}