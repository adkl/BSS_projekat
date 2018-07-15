import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from "axios/index";


const doughnut = {
  labels: [
    'Muski',
    'Zenski',
  ],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#36A2EB',
        '#FF6384',
      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#FF6384'
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

class SpolnaStruktura extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      doughnut: doughnut
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

    let sex_aggregate = [0, 0]
    this.state.data.forEach(row => {
      let sex = row[1]
      if (sex === 1) {
        sex_aggregate[0]++
      }
      else {
        sex_aggregate[1]++
      }
    })
    this.state.doughnut.datasets[0].data = sex_aggregate

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
                <Doughnut data={this.state.doughnut} />
              </div>
            </CardBody>
          </Card>

         </CardColumns>
       </div>
    );
  }
}

export default SpolnaStruktura;

