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


  constructor(props){
    super(props);
    this.state = {
       polar : {
        datasets: [
          {
            data: [ 0,0,0,0
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
         let tipicna = 0;
         let atipicna = 0;
         let neanginalni = 0;
         let asimptomatski = 0
         while (i<len){
        //     prope = keys[i];
             value = polarData[i][2];
              if(value == 1)
                tipicna = tipicna +1;
              else if( value == 2)
                atipicna = atipicna +1;
              else if ( value == 3)
                neanginalni = neanginalni +1;
              else
                asimptomatski = asimptomatski + 1;
               i = i+ 1;
          }
        
        newPolar.datasets[0].data.pop();    
        newPolar.datasets[0].data.pop(); 
        newPolar.datasets[0].data.pop(); 
        newPolar.datasets[0].data.pop();   
        newPolar.datasets[0].data.push(tipicna);
        console.log(tipicna);
        newPolar.datasets[0].data.push(atipicna);
        newPolar.datasets[0].data.push(neanginalni);
        newPolar.datasets[0].data.push(asimptomatski);
        
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
            Tip bola u grudima
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

export default TBG;
