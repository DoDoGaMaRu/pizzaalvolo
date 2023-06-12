import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../index.css";

export default function ChartPage({ menu_data, chart_data }) {
    console.log("CHART_PAGE");
    console.log(menu_data);
    console.log(chart_data);
    const menus = [...menu_data];
    const charts = [...chart_data];

    useEffect(() => {
        const chartConfigs = charts.map((chart) => {
            const labels = [chart.day_of_week];
            const data = [chart.total_sales];

            return {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "주간 매출",
                            data: data,
                        },
                    ],
                },
            };
        });

        const ctx = chartRef.current.getContext("2d");
        if (ctx.chart) {
            ctx.chart.destroy(); // 기존 차트 제거
        }

        chartConfigs.forEach((chartConfig) => {
            ctx.chart = new Chart(ctx, chartConfig);
        });
    }, [charts]);

    const chartRef = useRef(null);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td colSpan={2} style={{ textAlign: "center" }}>
                        메뉴
                    </td>
                </tr>
                </thead>
                <tbody>
                {menus.map((menu) => (
                    <tr key={menu.id}>
                        <td>{menu.name}</td>
                        <td style={{ paddingLeft: "10px" }}>{menu.count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <canvas ref={chartRef} id="salesChart"></canvas>
        </div>
    );
}
