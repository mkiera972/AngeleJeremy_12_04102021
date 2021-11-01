import React from 'react';
import {BarChart, Bar, CartesianGrid, Tooltip,Legend, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import TooltipBarChart from '../Tooltips/TooltipBarChart/TooltipBarChart';
import PropTypes from 'prop-types';
/**
 * @ChartBar
 * @classdesc COMPONENT ChartBar 
 * DISPLAY DAYLIACTIVITY FROM RECHART CHARTBAR
 */
class ChartBar extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="charts-bar-header">
                    <div className="charts-bar-title">
                        Activité quotidienne
                    </div>
                    <div className="charts-bar-legend">
                        <div className="charts-bar-legend-weight">
                            <span className="charts-bar-legend-weight-color"></span>Poids (kg)
                        </div>
                        <div className="charts-bar-legend-calories">
                            <span className="charts-bar-legend-calories-color"></span>Calories brûlées (kCal)
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={this.props.dailyActivityData}
                        margin={{
                        top: 50,
                        right: 10,
                        left: 40,
                        bottom: 5,
                        }}
                        barCategoryGap={35}
                        barGap={8}>
                        <CartesianGrid strokeDasharray="3 3"  vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis 
                            stroke="#8884d8"
                            orientation="right" />
                        <Tooltip content={<TooltipBarChart />} cursor={{ fill: "#e0e0e0" }} />
                        <Legend />
                        <Bar 
                            dataKey="kilogram" 
                            fill="#000"
                            radius={[50, 50, 0, 0]} 
                        />
                        <Bar dataKey="calories" fill="#e60000" radius={[50, 50, 0, 0]}  />
                    </BarChart>
                </ResponsiveContainer>
            </React.Fragment>
            
        )
    }
}

ChartBar.propTypes = {
    dailyActivityData : PropTypes.array.isRequired,
}

export default ChartBar;