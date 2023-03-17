import React, { Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {};

const Chart = (props: Props) => {
  const data: number[] = [3000, 1500, 1000];

  const column: any = {
    colors: ['#076F32'],
    title: {
      text: "",
    },
    series: [
      {
        type: "column",
        data: data,
        name: 'Month',
      },
    ],
    xAxis: {
      categories: ["Jan", "Feb", "Mar"],
    }
  };

  return (
    <Fragment>
      <HighchartsReact highcharts={Highcharts} options={column}/>
    </Fragment>
  );
};

export default Chart;
