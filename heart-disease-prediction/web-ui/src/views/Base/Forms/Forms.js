import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">

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
                      <Label htmlFor="text-input">Starost pacijenta</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" />
                      <FormText color="muted">Unesite broj godina</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Spol</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Musko</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="0" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Zensko</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Tip bola u grudima</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="1">Tipicna angina</option> tipicna kad se prenaporan
                        <option value="2">Atipicna angina</option> i u miru i ponekad
                        <option value="3">Ne-anginalni bol</option>
                        <option value="4">Asimptomatski bol</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Krvni pritisak</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" />
                      <FormText color="muted">mm Hg</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Holesterol</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" />
                      <FormText color="muted">mg/dl</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Izmjereni secer u krvi</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Manji ili jednak 120 mg/dl</option>
                        <option value="1">Veci od 120 mg/dl</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Snimljeni EKG</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Normalan</option>
                        <option value="1">ST-T abnormalnost (inverzije T talasa ili nagli pad ili porast ST u okviru 0.05mV </option>
                        <option value="2">Veci od 120 mg/dl</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Najveci srcani ritam</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" />
                      <FormText color="muted">otk/min</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Vjezbama uzrokovana angina</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Da</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="0" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Ne</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Pomak ST segmenta uzrokovana fizickom vjezbom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" />
                      <FormText color="muted">mV</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Nagib pomaka ST segmenta</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Rastuci</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Ravno</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="3" />
                        <Label className="form-check-label" check htmlFor="inline-radio3">Opadajuci</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Thal</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Normalan</option>
                        <option value="1">ST-T abnormalnost (inverzije T talasa ili nagli pad ili porast ST u okviru 0.05mV </option>
                        <option value="2">Veci od 120 mg/dl</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Pokreni algoritam</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Validation feedback</strong> Form
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="inputIsValid">Input is valid</Label>
                  <Input type="text" valid id="inputIsValid" />
                  <FormFeedback valid>Cool! Input is valid</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="inputIsInvalid">Input is invalid</Label>
                  <Input type="text" invalid id="inputIsInvalid" />
                  <FormFeedback>Houston, we have a problem...</FormFeedback>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Validation feedback</strong> Form
              </CardHeader>
              <CardBody>
                <Form className="was-validated">
                  <FormGroup>
                    <Label htmlFor="inputSuccess2i">Non-required input</Label>
                    <Input type="text" className="form-control-success" id="inputSuccess2i" />
                    <FormFeedback valid>Non-required</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="inputWarning2i">Required input</Label>
                    <Input type="text" className="form-control-warning" id="inputWarning2i" required />
                    <FormFeedback className="help-block">Please provide a valid information</FormFeedback>
                    <FormFeedback valid className="help-block">Input provided</FormFeedback>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Use the grid for big devices!
                <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="8">
                      <Input type="text" placeholder=".col-md-8" />
                    </Col>
                    <Col md="4">
                      <Input type="text" placeholder=".col-md-4" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="7">
                      <Input type="text" placeholder=".col-md-7" />
                    </Col>
                    <Col md="5">
                      <Input type="text" placeholder=".col-md-5" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="6">
                      <Input type="text" placeholder=".col-md-6" />
                    </Col>
                    <Col md="6">
                      <Input type="text" placeholder=".col-md-6" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="5">
                      <Input type="text" placeholder=".col-md-5" />
                    </Col>
                    <Col md="7">
                      <Input type="text" placeholder=".col-md-7" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Input type="text" placeholder=".col-md-4" />
                    </Col>
                    <Col md="8">
                      <Input type="text" placeholder=".col-md-8" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">Action</Button>
                <Button size="sm" color="danger">Action</Button>
                <Button size="sm" color="warning">Action</Button>
                <Button size="sm" color="info">Action</Button>
                <Button size="sm" color="success">Action</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Input Grid for small devices!
                <small><code>.col-*</code></small>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col xs="4">
                      <Input type="text" placeholder=".col-4" />
                    </Col>
                    <Col xs="8">
                      <Input type="text" placeholder=".col-8" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="5">
                      <Input type="text" placeholder=".col-5" />
                    </Col>
                    <Col xs="7">
                      <Input type="text" placeholder=".col-7" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="6">
                      <Input type="text" placeholder=".col-6" />
                    </Col>
                    <Col xs="6">
                      <Input type="text" placeholder=".col-6" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="7">
                      <Input type="text" placeholder=".col-5" />
                    </Col>
                    <Col xs="5">
                      <Input type="text" placeholder=".col-5" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="8">
                      <Input type="text" placeholder=".col-8" />
                    </Col>
                    <Col xs="4">
                      <Input type="text" placeholder=".col-4" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">Action</Button>
                <Button size="sm" color="danger">Action</Button>
                <Button size="sm" color="warning">Action</Button>
                <Button size="sm" color="info">Action</Button>
                <Button size="sm" color="success">Action</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Forms;
