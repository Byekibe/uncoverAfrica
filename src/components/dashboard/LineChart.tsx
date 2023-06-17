import styled from "styled-components";
import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

interface Props {
    data?: any,
}

const LineChart= (props: Props) => {

    return(
        <ChartWrapper>
            <Line data={props.data}/>
        </ChartWrapper>
    )
}

const ChartWrapper = styled.div`
   padding:20px;
    `
export default LineChart;
