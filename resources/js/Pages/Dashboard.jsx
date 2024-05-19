import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {useEffect} from "react";
// import Counter from '../features/counter/Counter.jsx'
import { useSelector, useDispatch } from "react-redux";
import { pushData, popData } from "../features/counter/counterSlice.js";
import { LineGraph } from "../Components/line.jsx";
import axios from "axios";
import TRAFFIC_DATA_LIMIT from "@/config.js";

export default function Dashboard({ auth }) {

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    var dataLoaded = false;

    window.Echo.private('dashboard-private.'+auth.user.id).stopListening('TrafficData');
    window.Echo.private('dashboard-private.'+auth.user.id)
        .listen('TrafficData', (data) => {
            dispatch(pushData(data.data));

            if(count.length > TRAFFIC_DATA_LIMIT){
                dispatch(popData());
            }
        });
    const fetchData = () => {
        if(!dataLoaded){
            axios.get('http://127.0.0.1:8000/get-traffic-recent-data')
                .then(response => {
                    let data = response?.data?.data;
                    data.map((datum) => {
                        dispatch(pushData(datum));
                        dataLoaded = true;
                    })
                })
                .catch(error => {
                    // Handle error
                    console.error('Error fetching data:', error);
                });
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    // const consoleState = () => {
    //     console.log(count);
    // }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <LineGraph />
                        {/*<p>{JSON.stringify(count)}</p>*/}
                        {/*<button onClick={consoleState}>Display state</button>*/}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
