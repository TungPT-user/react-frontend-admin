import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ProductContext } from "../Data/ProductContext";

const ChartPrice = () => {
  const productCtx = useContext(ProductContext);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: productCtx.laptops.map((product) => product.brand),
        datasets: [
          {
            label: "First dataset",
            data: productCtx.laptops.map((product) => product.price),
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      },
    });

    setChartData(myChart);
  }, [productCtx.laptops]);

  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default ChartPrice;
