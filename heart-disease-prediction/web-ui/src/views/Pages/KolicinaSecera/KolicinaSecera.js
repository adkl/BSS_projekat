import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from 'axios';

const API_ROUTE = 'http://localhost:8000/stats';



const pie = {
  labels: [
    'Da',
    'Ne',
  ],
  datasets: [
    {
      data: [],
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

  constructor(props){
    super(props);
    this.state = {
      pie: {
          labels: [
            'Ne',
            'Da',
          ],
          datasets: [
              {
                  data: [],
                  backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                  ],
                  hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                  ],
              }],
      }
    };
  }

  fetchStats() {
    axios.get(API_ROUTE, {}
      ).then((response) => {
        let pieData = response.data.stats;
        let newPie = this.state.pie;
        // let keys = Object.keys(pieData);
         let i = 1;
         let len = pieData.length;
        // let len = keys.length;
        // let prope;
         let value;
         let nule = 0;
         let jedinice = 0;
         while (i<len){
        //     prope = keys[i];
             value = pieData[i][5];
             if(value == 0)
               nule = nule+1;
             else 
               jedinice = jedinice +1;
             i = i+ 1;
          }
        
        newPie.datasets[0].data.push(nule);
        newPie.datasets[0].data.push(jedinice);
        console.log(newPie.datasets[0].data);
        
        this.setState({
            pie:newPie
        })
        console.log(this.state.pie.labels)
    }).catch(error => {

    });
  }

  componentDidMount() {
    this.fetchStats();
  }


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
                <Pie data={this.state.pie} />
              </div>
            </CardBody>
          </Card>
 
         </CardColumns>
       </div>
    );
  }
}

export default KolicinaSecera;

