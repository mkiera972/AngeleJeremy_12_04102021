import {Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";
import React from "react";
import PropTypes from 'prop-types';
import TooltipLineChart from "../Tooltips/TooltipLineChart/TooltipLineChart";

class ChartLine extends React.Component {
    // Build Line Chart 
    render() {
        return (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={200}
                        data={this.props.userAverageData}
                        syncId="anyId"
                        outerRadius="75%"
                        margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                    >
                        <XAxis 
                            dataKey="day" 
                            stroke="rgba(255, 255, 255, 0.6)"
                            axisLine={false}
                            dy={10}
                            tickLine={false}
                            tick={{
                                fill : 'white',
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />
                        <YAxis 
                            dataKey="sessionLength"
                            domain={[0, "dataMax + 60"]}
                            hide={true}
                        />
                        <Tooltip 
                            content={<TooltipLineChart />}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                strokeWidth: 32,
                            }}
                        />
                        <Line 
                            dataKey="sessionLength" 
                            type="monotone"
                            stroke="rgba(255, 255, 255, 0.6)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                            stroke: "rgba(255,255,255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
        )
    }
}

ChartLine.propTypes = {
    userAverageData : PropTypes.array.isRequired,
}

export default ChartLine;