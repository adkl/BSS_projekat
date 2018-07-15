import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const line = {
  labels: ['0-20', '21-30', '31-45', '46-60', '61-70', '71-80', '80-'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 72, 100, 50, 73, 119, 30],
    },
  ],
};

// const bar = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };

const doughnut = {
  labels: [
    'Zenski',
    'Muski',
  ],
  datasets: [
    {
      data: [300, 50,],
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

// const radar = {
//   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [65, 59, 90, 81, 56, 55, 40],
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [28, 48, 40, 19, 96, 27, 100],
//     },
//   ],
// };

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

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">

        <Card>
            <CardHeader>
              Spol
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </CardBody>
          </Card>
          <Card>
          <CardHeader>
            Podjela po godinama
            <div className="card-header-actions">
              <a href="http://www.chartjs.org" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Line data={line} options={options} />
            </div>
          </CardBody>
          </Card>
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

export default Charts;


 
     //     <Card>
      //       <CardHeader>
      //         Bar Chart
      //         <div className="card-header-actions">
      //           <a href="http://www.chartjs.org" className="card-header-action">
      //             <small className="text-muted">docs</small>
      //           </a>
      //         </div>
      //       </CardHeader>
      //       <CardBody>
      //         <div className="chart-wrapper">
      //           <Bar data={bar} options={options} />
      //         </div>
      //       </CardBody>
      //     </Card>

      //     <Card>
      //       <CardHeader>
      //         Radar Chart
      //         <div className="card-header-actions">
      //           <a href="http://www.chartjs.org" className="card-header-action">
      //             <small className="text-muted">docs</small>
      //           </a>
      //         </div>
      //       </CardHeader>
      //       <CardBody>
      //         <div className="chart-wrapper">
      //           <Radar data={radar} />
      //         </div>
      //       </CardBody>
      //     </Card>

