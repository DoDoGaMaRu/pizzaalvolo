import './Header.css'
import menu from './img/menu_main.png'
import logo from './img/logo_main.png'
import pizza from './img/pizza_main.png'
import plane from './img/plane_main.png'

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
    let middleItems = ['피자', '스페셜반반피자', '세트', '사이드', '하프엔하프', '멤버십·제휴할인', '이벤트']
    let rightItems = ['마이페이지', '회원가입', '로그인']

    return (
        <div class="main-tap-top">
            <div class="tap-top-left">
                <img class="icon-menu" src={menu}></img>
                <img class="icon-logo" src={logo}></img>
            </div>
            <div class="tap-top-middle">
                {middleItems.map(e=>TopMiddleText(e))}
            </div>
            <div class="tap-top-right">
                <div class="top-right-layout">
                    <div class="top-right-text-layout">
                        {rightItems.map(e=>TopRightText(e))}
                    </div>
                    <img class="icon-pizza" src={pizza}></img>
                </div>
            </div>
        </div>
    )
}

function TopMiddleText(text) {
    return (
        <span class="top-middle-text">{text}</span>
    )
}

function TopRightText(text) {
    return (
        <span class="top-right-text">{text}</span>
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