import React from 'react';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Home extends React.Component {
    render(){
        const data = [
            {
              name: 'Page A',
              uv: 4000,
              pv: 2400,
              amt: 2400,
            },
            {
              name: 'Page B',
              uv: 3000,
              pv: 1398,
              amt: 2210,
            },
            {
              name: 'Page C',
              uv: 2000,
              pv: 9800,
              amt: 2290,
            },
            {
              name: 'Page D',
              uv: 2780,
              pv: 3908,
              amt: 2000,
            },
            {
              name: 'Page E',
              uv: 1890,
              pv: 4800,
              amt: 2181,
            },
            {
              name: 'Page F',
              uv: 2390,
              pv: 3800,
              amt: 2500,
            },
            {
              name: 'Page G',
              uv: 3490,
              pv: 4300,
              amt: 2100,
            },
          ];
        return(
            <section className="content">
                <NavbarLeft/>
                <div className="content-right">
                   <h1 className="content-title">Bonjour <span className="red">Thomas</span></h1>
                   <h2 className="content-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                   <section className="stats">
                       <div className="stats-activity">
                       <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" width="10"/>
                            <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                       </div>
                       <aside className="stats-kcal"></aside>
                   </section>
                </div>
            </section>
        )
    }
}

export default Home;