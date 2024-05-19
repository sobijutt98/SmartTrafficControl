import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineGraph = () => {
    const count = useSelector((state) => state.counter);
    const options = {};


    let x = [], y = [];
    count.map((datum) => {
        let d = datum?.payload;
        x.push(d.average_speed);
        y.push(d.vehicle_count);
    })
    var lineChartData = {
        labels: x,
        datasets: [
            {
                label: "Vehicles",
                data: y,
                borderColor: "rgb(75, 192, 192)",
            }
        ]
    }

    // let x = [], red_y = [], yellow_y = [], green_y = [];
    // count.map((datum) => {
    //     let d = datum?.payload;
    //     x.push(d.average_speed);
    //
    //     switch(d.traffic_light_status) {
    //         case 'red':
    //             red_y.push(d.vehicle_count)
    //         break;
    //         case 'yellow':
    //             yellow_y.push(d.vehicle_count)
    //         break;
    //         case 'green':
    //             green_y.push(d.vehicle_count)
    //         break;
    //     }
    // })
    // var lineChartData = {
    //     labels: x,
    //     datasets: [
    //         {
    //             label: "Vehicles",
    //             data: red_y,
    //             borderColor: "rgb(255,0,0)",
    //         },
    //         {
    //             label: "Vehicles",
    //             data: yellow_y,
    //             borderColor: "rgb(255,234,0)",
    //         },
    //         {
    //             label: "Vehicles",
    //             data: green_y,
    //             borderColor: "rgb(0,255,12)",
    //         },
    //     ]
    // }

    return <Line options={options} data={lineChartData} />;
};
