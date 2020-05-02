import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';

export const Chart = (props) =>{
    return (
        <ResponsiveContainer width='100%' height="90%">
            <AreaChart  data={props.data}>
                <CartesianGrid vertical = {false} stroke= "#4c4b52"/>
                <XAxis dataKey="time" tick={{ fill: 'white', transform: 'translate(0,10)'}}/>
                <YAxis   mirror= {true} tick={{ fill: 'white', transform: 'translate(-3, 10)'}} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#916be5" fill="#37334bad" />
            </AreaChart>
        </ResponsiveContainer>
    )
  }