
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import 
{  BsFileText, BsArrowDown, BsArrowUp, BsDatabase}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
 from 'recharts';
 import { BiDollarCircle, BiShoppingBag,} from "react-icons/bi";
 import { PieChart, Pie, Cell } from 'recharts';
 
 


 

function Home() {


    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('all'); 
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleTimeFrameChange = (event) => {
      setSelectedTimeFrame(event.target.value);
    };
  
    const products = [
      { productName: 'Abstack 3D', stack: '32 in stock', price:45.99, totalSale: 20 },
      { productName: 'Sarphens Illustration', stack: '32 in stock', price: 45.99, totalSale: 20 },
    
    ];
  
  
    const filteredProducts = products.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTimeFrame === 'all' ||20)
    );
  
   

   
  
  const datas = [
    { name: 'customers', value: 220 },
    { name: 'new customers', value: 520 },
    { name: 'Other', value: 210 }
  ];
  
  const RADIAN = Math.PI / 180;
  const COLORS = ['#ff007f', '#8b00ff', '#d3d3d3'];
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

    const data = [
        {
          name: 'Jan',
             
          Earnings:5000,
         amt:2000,   },
        {
          name: 'Feb',
        
          Earnings: 4098,
          amt: 2210,
        },
        {
          name: 'Mar',
        
          Earnings: 7500,
          amt: 2290,
        },
        {
          name: 'Apr',
          
          Earnings: 6008,
          amt: 2000,
        },
        {
          name: 'May',
          
          Earnings: 7000,
          amt: 2181,
        },
        {
          name: 'Jun',
          
          Earnings: 3000,
          amt: 2500,
        },
        {
          name: 'July',
          
          Earnings: 7300,
          amt: 2100,
        },
         {
          name: 'Aug',
          
          Earnings: 8200,
          amt: 2100,
        },
         {
          name: 'Sep',
          
          Earnings: 8000,
          amt: 2100,
        },
         {
          name: 'Oct',
          
          Earnings: 7600,
          amt: 2100,
        },
         {
          name: 'Nov',
          
          Earnings: 7300,
          amt: 2100,
        },
         {
          name: 'Dec',
        
          Earnings: 7800,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Shahrukh!</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earnings</h3>
                    <BiDollarCircle className='card_icon'/>
                </div>
                <h1>$198k</h1>
                <p><BsArrowUp className='card_icon'></BsArrowUp>37.8% this month</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsFileText className='card_icon'/>
                </div>
                <h1>$2,4k</h1>
                <p> <BsArrowDown className='card_icon'></BsArrowDown>2% this month</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <BsDatabase className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <p> <BsArrowDown className='card_icon'></BsArrowDown>2% this month</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total sales</h3>
                    <BiShoppingBag className='card_icon'/>
                </div>
                <h1>$89k</h1>
                <p> <BsArrowUp className='card_icon'></BsArrowUp>11% this week</p>
            </div>
        </div>

        <div className='charts'>
        
            <ResponsiveContainer width="100%" height="100%">
         
            <BarChart
           
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Earnings" fill="#8884d8" />
                <Bar  />
                </BarChart>
            </ResponsiveContainer>
          
             


    <div id='container'>
 
    <div className='charts12'>
      <strong className='chartcolor'>Customers</strong>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={datas}
            cx="50%"
            cy="45%"
            startAngle={90}
            endAngle={450}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            innerRadius={40} // Adjust innerRadius to create the doughnut shape
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
    </div>

    <div id='table-container'>
    <div className='product'>
      <div className='headers'>
      <p>Product Information</p>
        <label htmlFor='timeFrameSelect'>
            </label>
        <div className='search-container'>
          <BsSearch className='search-icon' />
          <input
            type='text'
            placeholder='Search product...'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
       
        
          <select
            id='timeFrameSelect'
            value={selectedTimeFrame}
            onChange={handleTimeFrameChange}
          >
            <option value='all'>All</option>
            <option value='last20days'>Last 20 Days</option>
           
          </select>
       
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th className='cell'>Product Name</th>
            <th className='cell'>Tech Stack</th>
            <th className='cell'>Price</th>
            <th className='cell'>Total Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td className='cell'>{product.productName}</td>
              <td className='cell'>{product.stack}</td>
              <td className='cell'>{product.price}</td>
              <td className='cell'>{product.totalSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
 
          



        


           
       
    </main>
  )
}

export default Home
