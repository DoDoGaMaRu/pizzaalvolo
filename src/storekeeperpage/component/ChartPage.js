import React from "react";
import "../../index.css";
import { Bar } from 'react-chartjs-2';
import "./ChartPage.css";
import Chart from 'chart.js/auto';

export default function ChartPage({ menu_data, chart_data }) {
    console.log("CHART_PAGE");
    console.log(menu_data);
    console.log(chart_data);
    const menus = [...menu_data];
    const charts = [...chart_data];

    const data = {
        labels: charts.map((data) => data.day_of_week),
        datasets:
            [{
                label: "주간 매출",
                data: charts.map((data) => data.total_sales),
            }]
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td className="table-title" colSpan={2}>
                        메뉴
                    </td>
                </tr>
                </thead>
                <tbody>
                {menus.map((menu) => (
                    <tr key={menu.id}>
                        <td>{menu.name}</td>
                        <td className="table-sell-cnt">{menu.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Bar data={data} />;
        </div>
    );
}
