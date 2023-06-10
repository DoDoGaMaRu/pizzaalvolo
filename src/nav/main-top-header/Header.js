import './Header.css'
import menu from './img/menu_main.png'
import logo from './img/logo_main.png'
import pizza from './img/pizza_main.png'
import plane from './img/plane_main.png'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div id="main-tab-header-layout">
            <div class="main-tap-header">
                <TapTop />
                <TapSlide />
                <TapNav />
            </div>
        </div>
    )
}

function TapTop() {
    let middleItems = [{text: '피자', url: '/pizza'}, {text: '스페셜반반피자', url: ''}, {text: '세트', url: ''}, {text: '사이드', url: ''}, {text: '하프엔하프', url: ''}, {text: '멤버십·제휴할인', url: ''}, {text: '이벤트', url: ''}]
    let rightItems = [{text: '마이페이지', url: '/mypage'}, {text: '회원가입', url: ''}, {text: '로그인',  url: ''}]

    return (
        <div class="main-tap-top">
            <div class="tap-top-left">
                <img class="icon-menu" src={menu}></img>
                <Link to={"/"}><img class="icon-logo" src={logo}></img></Link>
            </div>
            <div class="tap-top-middle">
                {middleItems.map(e=>TopMiddleText(e))}
            </div>
            <div class="tap-top-right">
                <div class="top-right-layout">
                    <div class="top-right-text-layout">
                        {rightItems.map(e=>TopRightText(e))}
                    </div>
                    <Link to={'/basket'}>
                    <img class="icon-pizza" src={pizza}></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function TopMiddleText(prop) {
    return (
        <Link to={prop.url}><span class="top-middle-text">{prop.text}</span></Link>
    )
}

function TopRightText(prop) {
    return (
        <Link to={prop.url}><span class="top-right-text">{prop.text}</span></Link>
    )
}


function TapSlide() {
    return(
        <div class="main-tap-slide">
            <img class="icon-plane" src={plane}></img>
        </div>
    )
}


function TapNav() {

}

export default Header;