import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "../index.css";

const ChartComponent = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const createChart = () => {
            // 가상의 판매 데이터 (메뉴별 판매 수량 및 요일)
            const salesData = {
                Monday: { menu1: 10, menu2: 15, menu3: 5 },
                Tuesday: { menu1: 8, menu2: 12, menu3: 3 },
                Wednesday: { menu1: 12, menu2: 20, menu3: 6 },
                Thursday: { menu1: 6, menu2: 10, menu3: 2 },
                Friday: { menu1: 14, menu2: 20, menu3: 8 },
                Saturday: { menu1: 18, menu2: 25, menu3: 10 },
                Sunday: { menu1: 16, menu2: 30, menu3: 9 },
            };

            // 요일별 총 매출 계산
            const weeklySales = {
                menu1: 0,
                menu2: 0,
                menu3: 0,
            };

            for (const day in salesData) {
                for (const menu in salesData[day]) {
                    weeklySales[menu] += salesData[day][menu];
                }
            }

            // 차트 데이터 생성
            const labels = Object.keys(weeklySales);
            const data = Object.values(weeklySales);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "주간 매출",
                        data: data,
                    },
                ],
            });
        };

        createChart(); // Call createChart only once when the component mounts
    }, []);

    useEffect(() => {
        if (chartData) {
            const ctx = document.getElementById("salesChart").getContext("2d");

            new Chart(ctx, {
                type: "bar",
                data: chartData,
            });
        }
    }, [chartData]);

    return (
        <div>
            <canvas id="salesChart"></canvas>
        </div>
    );
};

export default ChartComponent;
