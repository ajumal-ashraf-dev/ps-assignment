import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
 
import './Chart.scss';

const Chart = ({list}) => {
    
    const options = {
        title: {
          text: ''
        },
        chart: {
            backgroundColor: '#f6f6ef'
        },
        yAxis: {
            title: {
                text: 'Votes',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        },
        xAxis: {
            title: {
                text: 'ID',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            },
            categories: list.map(obj => obj.objectID)
        },
        series: [{
          data: list.map(obj => obj.points),
          showInLegend: false,
          name: "Votes"
        }]
    }
    return <div className="chart-container">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
}

export default Chart;