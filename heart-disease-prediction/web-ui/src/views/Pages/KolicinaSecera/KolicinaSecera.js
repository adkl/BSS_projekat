import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const pie = {
  labels: [
    'Da',
    'Ne',
  ],
  datasets: [
    {
      data: [300, 150],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],
};



const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class KolicinaSecera extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

          <Card>
            <CardHeader>
              Kolicina secera u krvi nakon duzeg gladovanja > 120 mg/dl
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Pie data={pie} />
              </div>
            </CardBody>
          </Card>
 
         </CardColumns>
       </div>
    );
  }
}

export default KolicinaSecera;

