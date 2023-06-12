import {useEffect, useState} from "react";
import PizzaPage from "./PizzaPage";

export default function Temp() {
    const [pizzaList, setPizzaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {fetch('http://202.31.202.34:443/menu', {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setPizzaList(data);
        console.log(data.menus);
        setLoading(false);
    })}, loading)

    return (
        <div>
            {
                loading ? (
                    <div>로딩 중</div>
                ) : (
                    <PizzaPage pizzaList={pizzaList.menus}></PizzaPage>
                )
            }
        </div>
    )
}