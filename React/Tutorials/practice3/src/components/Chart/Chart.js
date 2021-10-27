import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    //Transform Datapoints to an array to pass to max 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return (<div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} />)}
    </div>
    )

}


export default Chart