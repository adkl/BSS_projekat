import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from 'axios';

const line = {
  labels: ['0-20', '21-30', '31-45', '46-60', '61-70', '71-80', '80-'],
  datasets: [
    {
      label: 'Godine',
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
      data: [],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class StarosnaStruktura extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      line: line
    }

  }

  componentDidMount(){
    axios.get("http://localhost:8000/stats")
        .then(response => {
          this.setState({data: response.data.stats})
        })
        .catch(err => alert(err))
  }


  render() {
    let age_aggregate = [0, 0, 0, 0, 0, 0, 0]
    console.log(this.state.data)
    this.state.data.forEach(row => {
      let age = row[0]
      console.log(age)
      if (age < 20) {
        age_aggregate[0]++
      }
      else if (age >= 20 && age < 31) {
        age_aggregate[1]++
      }
      else if (age >= 31 && age < 46) {
        age_aggregate[2]++
      }
      else if (age >= 46 && age < 61) {
        age_aggregate[3]++
      }
      else if (age >= 61 && age < 71) {
        age_aggregate[4]++
      }
      else if (age >= 71 && age < 81) {
        age_aggregate[5]++
      }
      else {
        age_aggregate[6]++
      }
    })
    this.state.line.datasets[0].data = age_aggregate


    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
          <Card>
          <CardHeader>
            Starosna struktura
            <div className="card-header-actions">
              <a href="http://www.chartjs.org" className="card-header-action">
                <small className="text-muted"></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Bar data={this.state.line} options={options} />
            </div>
          </CardBody>
          </Card>
         </CardColumns>
       </div>
    );
  }
}

export default StarosnaStruktura;

