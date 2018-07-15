import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'



class Dashboard extends Component {

  render() {

    return (

        <div className="jumbotron">
        <h1 className="display-4">Seminarski rad - BSS</h1>
        <p className="lead">Predmetni nastavnik doc.dr. Dusanka Boskovic</p>
        <hr className="my-4"/>
        <p>U sklopu ovog seminarskog rada je napravljen program koji uz pomoc masinskog ucenja moze pomoci strucnom osoblju za predvidjanje da li je pacijent srcani bolesnik sa preciznoscu od 90%. Sa strane su prikazane i neke statistike koje opisuju dataset koji smo koristili. Izvor podataka se nalazi na linku ispod.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://archive.ics.uci.edu/ml/datasets/heart+Disease" role="button">Izvor podataka</a>
        </p>
        </div>

    );
  }
}

export default Dashboard;
