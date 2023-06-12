import './Header.css'
import menu from './img/menu_main.png'
import logo from './img/logo_main.png'
import pizza from './img/pizza_main.png'
import plane from './img/plane_main.png'
import {Link} from "react-router-dom";
import {useState} from "react";

function Header() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <div id="main-tab-header-layout">
            <div class="main-tap-header">
                <TapTop setOpenNav={setOpenNav} />
                <TapSlide />
                <TapNav openNav={openNav} setOpenNav={setOpenNav} />
            </div>
        </div>
    )
}

function TapTop({setOpenNav}) {
    let middleItems = [{text: '피자', url: '/pizza'}, {text: '스페셜반반피자', url: '#'}, {text: '세트', url: '#'}, {text: '사이드', url: '#'}, {text: '하프엔하프', url: '#'}, {text: '멤버십·제휴할인', url: '#'}, {text: '이벤트', url: '#'}]
    let rightItems = [{text: '마이페이지', url: '/mypage'}, {text: '점주페이지', url: ''}]

    return (
        <div class="main-tap-top">
            <div class="tap-top-left">
                <img class="icon-menu" src={menu} onClick={() => setOpenNav((e) => !e)}></img>
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


function TapNav({openNav, setOpenNav}) {
    let navItems = [
            [{text: '피자', url: '/pizza'}, {text: '전체피자', url: '/pizza'}, {text: '스페셜반반피자',  url: '#'}, {text: '세트메뉴',  url: '#'}, {text: '하프엔하프',  url: '#'}],
            [{text: '사이드 메뉴', url: '#'}],
            [{text: '멤버십·제휴할인', url: '#'}, {text: '멤버십 혜택', url: '#'}, {text: '통신사 제휴 할인',  url: '#'}],
            [{text: '이벤트', url: '#'}],
            [{text: '매장찾기', url: '#'}, {text: '지역명 찾기', url: '#'}, {text: '매장명 찾기',  url: '#'}, {text: '현위치 찾기',  url: '#'}],
            [{text: '마이페이지', url: '/mypage'}, {text: '주문내역', url: '#'}, {text: '쿠폰함',  url: '#'}, {text: 'MY CLASS', url: '#'}, {text: '비행기스템프', url: '#'}, {text: '정보수정',  url: '/mypage'}, {text: '회원탈퇴',  url: '#'}],
            [{text: '주문하기', url: '/pizza'}, {text: '배달주문하기', url: '/pizza'}, {text: '포장주문하기', url: '#'}, {text: '간편주문', url: '#'}, {text: 'E쿠폰',  url: '#'}, {text: '선물하기',  url: '#'}],
        ]

    return(
        <div className = "main-tap-nav" style={openNav ? {} : {height: '0'}}>
            <div class="nav-main">
                {navItems.map(e => TapNavCollapse(e, setOpenNav))}
            </div>
            <div class="nav-bottom">
                <span class="nav-bottom-item">회사소개></span>
                <span class="nav-bottom-item">가맹문의></span>
                <span class="nav-bottom-item">고객센터></span>
                <span class="nav-bottom-item">단체주문></span>
            </div>
        </div>
    )
}

function TapNavCollapse(prop, setOpenNav) {
    return (
        <div class="tap-nav-collapse">{prop.map(e => NavItem(e, setOpenNav))}</div>
    )
}

function NavItem(prop, setOpenNav) {
    return (
        <div class="nav-item">
            <Link to={prop.url}><div class="text-box" onClick={() => setOpenNav((e) => !e)}>{prop.text}</div></Link>
        </div>
    )
}

export default Header;