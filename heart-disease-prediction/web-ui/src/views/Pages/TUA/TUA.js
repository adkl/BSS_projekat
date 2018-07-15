import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from 'axios';

const API_ROUTE = 'http://localhost:8000/stats';


const polar = {
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


  constructor(props){
    super(props);
    this.state = {
       polar : {
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
      }
  };
}

  fetchStats() {
    axios.get(API_ROUTE, {}
      ).then((response) => {
        let polarData = response.data.stats;
        let newPolar = this.state.polar;
        // let keys = Object.keys(pieData);
         let i = 1;
         let len = polarData.length;
        // let len = keys.length;
        // let prope;
         let value;
         let da = 0;
         let ne = 0;
         while (i<len){
        //     prope = keys[i];
             value = polarData[i][8];
              if(value == 1)
                da = da +1;
              else if( value == 0)
                ne = ne +1;
               i = i+ 1;
          }
        
        newPolar.datasets[0].data.pop();    
        newPolar.datasets[0].data.pop();    
        newPolar.datasets[0].data.push(da);
        newPolar.datasets[0].data.push(ne);
        
        this.setState({
            polar:newPolar
        })

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
            Tjelovjezbom uzrokovana angina
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Polar data={this.state.polar} options={options}/>
              </div>
            </CardBody>
          </Card>
          
         </CardColumns>
       </div>
    );
  }
}

export default TUA;
