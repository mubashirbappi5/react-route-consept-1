import { LineChart,Line,XAxis,YAxis,CartesianGrid ,Tooltip } from 'recharts';


const Chart1 = () => {
  const chartData = [
    { name: "Alice Johnson", math: 92, science: 88, english: 95, history: 89 },
    { name: "Bob Smith", math: 76, science: 82, english: 78, history: 80 },
    { name: "Charlie Brown", math: 65, science: 70, english: 60, history: 58 },
    { name: "David Wilson", math: 45, science: 50, english: 55, history: 49 },
    { name: "Emma Davis", math: 90, science: 92, english: 94, history: 93 },
];



      
    return (
        <div>
            <LineChart width={500} height={300} data={chartData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="name" stroke="#8884d8" />
    <Line type="monotone" dataKey="math" stroke="#82ca9d" />
  </LineChart>
            
        </div>
    );
};

export default Chart1;