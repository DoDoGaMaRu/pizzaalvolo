import {useEffect, useState} from "react";
import PizzaPage from "./ChartPage";
import ChartPage from "./ChartPage";

export default function Temp() {
    const [menuData, setMenuData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {fetch('http://202.31.202.34:443/order/totalCountEachMenu', {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setMenuData(data);
        console.log(data);
    })}, loading)

    useEffect(() => {fetch('http://202.31.202.34:443/order/chart', {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setChartData(data);
        console.log(data);
        setLoading(false);
    })}, loading)

    return (
        <div>
            {
                loading ? (
                    <div>로딩 중</div>
                ) : (
                    <ChartPage menuData={menuData.menu_data} chartData={chartData.chart}></ChartPage>
                )
            }
        </div>
    )
}