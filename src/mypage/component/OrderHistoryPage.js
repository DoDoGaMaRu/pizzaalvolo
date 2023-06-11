import uncheckedImg from "./Icon/unchecked.svg";
import { FaStar } from 'react-icons/fa';
import Rating from "./StarRate";
import {useEffect, useState} from "react";
import OrderHistoryComponent from "./OrderHistoryComponent";

const ARRAY = [0, 1, 2, 3, 4];

export default function OrderHistoryPage() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    let user_sn = 1;

    useEffect(() => {fetch(`http://202.31.202.34:443/order/${user_sn}`, {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setOrders(data);
        setLoading(false);
    })}, loading)

    return (
        <div>
            {
                loading ? (
                    <div>로딩 중</div>
                ) : (
                    orders.order.map((order) => (
                        <OrderHistoryComponent order={order}></OrderHistoryComponent>
                    ))
                )
            }
        </div>
    )
}