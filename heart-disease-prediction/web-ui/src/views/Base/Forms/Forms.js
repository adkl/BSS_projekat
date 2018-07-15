import React, { Component } from 'react';
import axios from 'axios';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

const SweetAlert = require('react-swal')


class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      show: false,
      result: '',
      age: '',
      sex: 1,
      chestPain: 0,
      bloodPressure: '',
      chol: '',
      bloodSugar: 0,
      ekgType: 0,
      maxHeartRate: '',
      exAngina: 1,
      stSegmentDepr: '',
      stSegmentDir: 1,
      cal: 1,
      hemoglobine: 1
    };
    this.onChange=this.onChange.bind(this);
    this.predict=this.predict.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  predict(e) {
    let query_array = []

    for (let key in this.state) {
      if (key === "show" || key === "result") {
      }
      else if (typeof this.state[key] === 'string') {
        query_array.push(parseFloat(this.state[key]))
      }
      else {
        query_array.push(this.state[key])
      }
    }
    console.log(query_array)
    axios.get(`http://localhost:8000/api/predict-disease?patient=${query_array}`)
        .then(response => {
          console.log("response", response);
          if (response.data.predictionResult === 0) {
            this.setState({result:"nije", show:true})
          }
          else {
            this.setState({result:"jeste", show:true})
          }
        })
        .catch(err => alert(err))
  }

  render() {
    return (
      <div className="animated fadeIn">
        <SweetAlert
        isOpen={this.state.show}
        title={`Prema rezultatima, pacijent ${this.state.result} srcani bolesnik.`}
        confirmButtonText="Uredu"
        text={""}
        type="info"
        showCancelButton={false}
        callback={() => this.setState({ show: false })}
      />
        <Row>
          <Col xs="12" md="10">
            <Card>
              <CardHeader>
                <strong>Informacije o pacijentu</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="age">Starost pacijenta</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="age" name="age" placeholder="" value={this.state.age} onChange={this.onChange} />
                      <FormText color="muted">Unesite broj godina</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="sex">Spol</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="sex" id="sex" value={this.state.sex} onChange={this.onChange}>
                        <option value="1">Muski</option>
                        <option value="0">Zenski</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="chestPain">Tip bola u grudima</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="chestPain" id="chestPain" value={this.state.chestPain} onChange={this.onChange}>
                        <option value="1">Tipicna angina</option>
                        <option value="2">Atipicna angina</option>
                        <option value="3">Ne-anginalni bol</option>
                        <option value="4">Asimptomatski bol</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="bloodPressure">Krvni pritisak</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="bloodPressure" name="bloodPressure" placeholder="" value={this.state.bloodPressure} onChange={this.onChange} />
                      <FormText color="muted">mm Hg</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="chol">Holesterol</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="chol" name="chol" placeholder="" value={this.state.chol} onChange={this.onChange} />
                      <FormText color="muted">mg/dl</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="bloodSugar">Izmjereni secer u krvi</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="bloodSugar" id="bloodSugar" value={this.state.bloodSugar} onChange={this.onChange}>
                        <option value="0">Manji ili jednak 120 mg/dl</option>
                        <option value="1">Veci od 120 mg/dl</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ekgType">Snimljeni EKG</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="ekgType" id="ekgType" value={this.state.ekgType} onChange={this.onChange}>
                        <option value="0">Normalan</option>
                        <option value="1">ST-T abnormalnost (inverzije T talasa ili devijacija ST veca od 0.05mV </option>
                        <option value="2">Pokazuje znake hipertrofije lijeve komore</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="maxHeartRate">Najveci srcani ritam</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="maxHeartRate" name="maxHeartRate" placeholder="" value={this.state.maxHeartRate} onChange={this.onChange} />
                      <FormText color="muted">otk/min</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="exAngina">Vjezbama uzrokovana angina</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="exAngina" id="exAngina" value={this.state.exAngina} onChange={this.onChange}>
                        <option value="1">Da</option>
                        <option value="0">Ne</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="stSegmentDepr">Pomak ST segmenta uzrokovana fizickom vjezbom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="stSegmentDepr" name="stSegmentDepr" placeholder="" onChange={this.onChange} value={this.state.stSegmentDepr} />
                      <FormText color="muted">mV</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="stSegmentDir">Smjer pomaka ST segmenta</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="stSegmentDir" id="stSegmentDir" value={this.state.stSegmentDir} onChange={this.onChange}>
                        <option value="1">Porast</option>
                        <option value="2">Bez promjene</option>
                        <option value="3">Pad</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="cal">Uvecanost krvnih sudova</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="cal" id="cal" value={this.state.cal} onChange={this.onChange}>
                        <option value="0">Normalan</option>
                        <option value="1">Malo uvecanje </option>
                        <option value="2">Prilicno uvecanje</option>
                        <option value="3">Veliko uvecanje</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hemoglobine">Proizvodnja hemoglobina</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="hemoglobine" id="hemoglobine" value={this.state.hemoglobine} onChange={this.onChange}>
                        <option value="3">Normalna</option>
                        <option value="6">Stalni defekt </option>
                        <option value="7">Povremeni defekt</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={event => this.predict(event)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Pokreni algoritam</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
