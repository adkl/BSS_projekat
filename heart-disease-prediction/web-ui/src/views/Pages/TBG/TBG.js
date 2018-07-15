import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const polar = {
  datasets: [
    {
      data: [
        58,
        75,
        18,
        92,
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
      ],
      label: 'Tip bola u grudima' // for legend
    }],
  labels: [
    'Tipicna angina',
    'Netipicna angina',
    'Neanginalni bol',
    'Asimptomatski',
  ],
};


const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class TBG extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

          <Card>
            <CardHeader>
            Tip bola u grudima
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Polar data={polar} options={options}/>
              </div>
            </CardBody>
          </Card>

 
         </CardColumns>
       </div>
    );
  }
}

export default TBG;
