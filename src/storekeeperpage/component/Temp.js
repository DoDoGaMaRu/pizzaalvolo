import {useEffect, useState} from "react";
import PizzaPage from "./ChartPage";
import ChartPage from "./ChartPage";

export default function Tempp() {
    const [menuData, setMenuData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {fetch('http://202.31.202.34:443/order/totalCountEachMenu', {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setMenuData(data.menu_data);
        console.log("TOTAL_COUNT");
        console.log(data);
    })}, loading)

    useEffect(() => {fetch('http://202.31.202.34:443/order/chart', {
        method: 'Get'
    }).then(res => res.json()).then(data => {
        setChartData(data.chart);
        console.log("CHART");
        console.log(data);
        setLoading(false);
    })}, loading)

    return (
        <div>
            {
                loading ? (
                    <div>로딩 중</div>
                ) : (
                    <ChartPage menu_data={menuData} chart_data={chartData}></ChartPage>
                )
            }
        </div>
    )
}