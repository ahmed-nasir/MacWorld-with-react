import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Area,
    AreaChart,
    PieChart,
    Pie,
} from 'recharts';

const Deshboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"'>
            <h1 className='text-4xl font-semibold text-center'>Deshboard page</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-11'>
                <div className='max-w-md mx-auto'>
                    <LineChart className='z-10' width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />

                    </LineChart>
                </div>
                <div >
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="invest" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        {/* <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
                    </PieChart>
                </div>
                <div>4</div>
            </div>
        </div>
    );
};

export default Deshboard;