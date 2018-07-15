import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const polar2 = {
  datasets: [
    {
      data: [
        128,
        77,
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
      ],
      label: 'Tjelovjezbom uzrokovana angina' // for legend
    }],
  labels: [
    'Da',
    'Ne',
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class TUA extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

        <Card>
            <CardHeader>
            Tjelovjezbom uzrokovana angina
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Polar data={polar2} options={options}/>
              </div>
            </CardBody>
          </Card>
          
         </CardColumns>
       </div>
    );
  }
}

export default TUA;
