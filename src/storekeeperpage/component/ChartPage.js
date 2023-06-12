import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "../../index.css";


export default function ChartPage({menuData}, {chartData}) {

    const menus = [...menuData];
    const [chart, setChart] = useState([...chartData]);

    const labels = Object.keys(chart);
    const data = Object.values(chart);

    setChart({
        labels: labels,
        datasets: [
            {
                label: "주간 매출",
                data: data,
            },
        ],
    });

    const ctx = document.getElementById("chart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: chart
    })

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td colSpan={2} style={{textAlign: "center"}}>
                        메뉴
                    </td>
                </tr>
                </thead>
                <tbody>
                {menus.menuData.map((menu) => (
                    <tr key={menu.id}>
                        <td>{menu.name}</td>
                        <td style={{paddingLeft: "10px"}}>{menu.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <canvas id="salesChart"></canvas>
        </div>
    );
}

