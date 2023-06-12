import "./Basket.css"
import {useEffect, useState} from "react";

const x_icon = "data:image/svg+xml;base64,PHN2ZyBpZD0i64W47Jej7KeAIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MiIgaGVpZ2h0PSI5MiIgdmlld0JveD0iMCAwIDkyIDkyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzAwMDAwMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDYiIGN5PSI0NiIgcj0iNDYiLz4KICA8cGF0aCBpZD0iYnRuX3giIGNsYXNzPSJjbHMtMiIgZD0iTTI3My4wMTQsNzAxTDI3NSw2OTkuMDEzLDMwMi45ODYsNzI3LDMwMSw3MjguOTg2Wm0yOS45NzIsMEwzMDEsNjk5LjAxMywyNzMuMDE0LDcyNywyNzUsNzI4Ljk4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIgLTY2OCkiLz4KICA8cmVjdCBpZD0i7IKs6rCB7ZiVXzEiIGRhdGEtbmFtZT0i7IKs6rCB7ZiVIDEiIGNsYXNzPSJjbHMtMyIgeD0iNDQiIHk9IjQ0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ii8+Cjwvc3ZnPgo="
const minus_icon = "data:image/svg+xml;base64,PHN2ZyBpZD0iXy0iIGRhdGEtbmFtZT0iLSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NjYzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIi8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxOCIgeT0iMjkiIHdpZHRoPSIyNSIgaGVpZ2h0PSIzIi8+Cjwvc3ZnPgo="
const plus_icon = "data:image/svg+xml;base64,PHN2ZyBpZD0iXyIgZGF0YS1uYW1lPSIrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgdmlld0JveD0iMCAwIDYyIDYyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzQxYjZlNjsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIGZpbGw6ICM0MWI2ZTY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMxIiBjeT0iMzEiIHI9IjMwIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjI4LDg2N2gyNXYzSDYyOHYtM1ptMTEtMTFoM3YyNWgtM1Y4NTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjA5IC04MzcpIi8+CiAgPHJlY3QgaWQ9IuyCrOqwge2YlV8yIiBkYXRhLW5hbWU9IuyCrOqwge2YlSAyIiBjbGFzcz0iY2xzLTMiIHg9IjMwIiB5PSIzMCIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPgo8L3N2Zz4K"

export default function Basket() {
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`http://202.31.202.34:443/basket/1`, {})
            .then(res => res.json()).then(data => {
                setDatas(data.basket)
                setLoading(false)
            }
        )
    }, [loading])
    let total_price = 0
    return(
        <div>{
            loading ? (
                <div> 로딩 중... </div>
            ) : (<div className="basket_container">
                <div className="basket_header">
                    <div className="basket_title">장바구니</div>
                </div>
                <div className="basket_layout">
                    <div className="basket_item">
                        <div className="order_basket_list_header">
                            <div className="order_basket_list_menu">메뉴</div>
                            <div className="order_basket_list_count">수량</div>
                            <div className="order_basket_list_price">가격</div>
                            <div className="order_basket_list_change">변경</div>
                            <div className="order_basket_list_change">삭제</div>
                        </div>
                        {datas.map(data => (
                            total_price += data.price,
                                <Item data={data} />
                        ))}
                    </div>
                    <div className="bottom">
                        <div className="total_layout">
                            <h4 className="sum_total">합계</h4>
                            <h4 className="total">
                                총
                                <font className="total_price"> {total_price} </font>
                                원
                            </h4>
                        </div>
                        <div className="submit_button" onClick={() => {
                            setLoading(true)
                            OrderSubmit(datas)
                        }}>주문하기</div>
                    </div>
                </div>
            </div>)
        }</div>

    )
}

function OrderSubmit(datas) {
    const detailArr = []
    datas.map(data => {
        detailArr.push({menu_id: data.menu_id, count: 1})
    })
    const post = {user_sn: 1, detail: detailArr}
    fetch("http://202.31.202.34:443/order", {
        method: "post",
        headers: {
        "content-type": "application/json"
        },
        body: JSON.stringify(post)
    })
   fetch("http://202.31.202.34:443/basket/deleteAll", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({user_sn: 1})
    })
    alert("주문했습니다!")
}

function Item({data}) {
    return(
        <div className="order_basket_item">
            <div className="basket_toolbar">
                <img className="x_button" src={x_icon} />
            </div>
            <div className="basket_body">
                <div className="body_image_area">
                    <img src={data.img_url} className="basket_item_image" />
                </div>
                <div className="body_left_area">
                    <div className="menu_name">
                        {data.name}
                    </div>
                </div>
                <div className="body_right_area">
                    <div className="number_picker_outer">
                        <div className="number_picker">
                            <img className="minus" src={minus_icon} />
                            <span className="number_count">
                                1
                            </span>
                            <img className="plus" src={plus_icon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="basket_footer">
                <div className="footer_left">
                    <div className="change_option_button">
                        옵션변경
                    </div>
                </div>
                <div className="footer_center">
                    <div className="price">
                        {data.price}
                    </div>
                </div>
                <div className="footer_right">
                    <div className="change_save_button">
                        변경저장
                    </div>
                </div>
            </div>
        </div>
    )
}