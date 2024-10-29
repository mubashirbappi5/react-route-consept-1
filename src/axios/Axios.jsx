import axios from "axios";
import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';


const Axios = () => {
    const [phone, setphone] = useState([])
    const[loading, setloading]= useState(true)
    useEffect(()=>{
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(data => {
        const phonedata = data.data.data
        const fakeData = phonedata.map(phone => {
            const obj ={
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
       
        setphone(fakeData)
        setloading(false)
    })
    },[])
    console.log(phone)

    return (
        <div>
          {
            loading &&   <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
          }
            <BarChart width={500} height={300} data={phone}>
            <CartesianGrid strokeDashoffset="3 3"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar  dataKey="price" fill="#8884d8"/>

            </BarChart>

            
            
        </div>
    );
};

export default Axios;