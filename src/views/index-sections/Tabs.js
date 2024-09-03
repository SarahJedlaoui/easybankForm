import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Nav,
  TabContent,
  TabPane,
  Container,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export class FormDataModel {
  constructor() {
    this.nomPrenom = '';
    this.genre = '';
    this.age = '';
    this.telephone = '';
    this.residantExterieur = '';
    this.residency = '';
    this.addressPostalCode = '';
    this.paysResidance = '';
    this.contratTravail = '';
    this.projectIdea = '';
    this.projectStudy = '';
    this.trainingInterest = '';
    this.profession = '';
    this.salaireMensuel = '';
    this.cessionsSurSalaire = '';
    this.moyenObtentionSalaire = '';
    this.anciennetePatente = '';
    this.contractType = '';
    this.loanType = '';
    this.monthlySalary = '';
    this.requestedLoanAmount = '';
    this.currentCreditStatus = '';
    this.currentCreditType ='';
    this.currentCreditAmount='';
    this.halfPeriodExceeded = '';
    this.age65 = '';
  };
 
}
function Tabs() {
 
  const [pills, setPills] = useState("1");
  const [checkedOption, setCheckedOption] = useState(null);
  const [formData, setFormData] = useState(new FormDataModel());


  const onInputChange = (event, field) => {
    setFormData({
      ...formData, // Spread the existing formData
      [field]: event.target.value, // Update the specific field
    });
  };


  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setCheckedOption(value);
  };
  const [activeTab, setActiveTab] = useState("1");

  const handleNextTab = () => {
    if (checkedOption === "yes") {
      setActiveTab("3");
    } else if (checkedOption === "no") {
      setActiveTab("2");
    }
  };
  const handlePreTab = () => {
    setActiveTab("1");
  };
  const handlePreTab26 = () => {
    setActiveTab("13");
  };

  const handleNext3 = () => {
    setPills('1');
    const { nomPrenom, genre, age, telephone, residantExterieur } = formData;

    // Check if any required fields are empty
    if (!nomPrenom || !genre || !age || !telephone || !residantExterieur) {
      alert("Tous les champs sont obligatoires"); // Show message if any field is empty
      return; // Prevent navigation to the next tab
    }

    // Conditional navigation based on 'residantExterieur'
    if (residantExterieur === 'yes') {
      setActiveTab("5");
    } else {
      setActiveTab("4");
    }
  };

  const handlePrevious3 = () => {
    setActiveTab("1");
  };

  const handleNext4 = () => {
    const { addressPostalCode } = formData;
    if (!addressPostalCode) {
      alert("Tous les champs sont obligatoires"); // Show message if any field is empty
      return; // Prevent navigation to the next tab
    }
   
    setActiveTab("12");
  };


  const handlePrevious4 = () => {
    setActiveTab("3");
  };


  const handleNext5 = () => {
    if (formData.contratTravail === "yes") {
      setActiveTab("18"); // Navigate to tab 18
    } else if (formData.contratTravail === "no") {
      setActiveTab("6"); // Navigate to tab 6
    }
  };


  const handlePrevious5 = () => {
    setActiveTab("3");
  };

  const handleNext7 = () => {
    if (formData.projectIdea === "yes") {
      setActiveTab("8"); // Navigate to tab 8
    } else if (formData.projectIdea === "no") {
      setActiveTab("9"); // Navigate to tab 9
    }
  };

  const handlePrevious7 = () => {
    setActiveTab("12");
  };

  const handleNext8 = () => {
    if (formData.projectStudy === "yes") {
      setActiveTab("9"); // Navigate to tab 9
    } else if (formData.projectStudy === "no") {
      setActiveTab("9"); // Navigate to tab 9
    }
  };


  const handlePrevious8 = () => {
    setActiveTab("7");
  };


  const handleNext9 = () => {
    if (formData.trainingInterest === "yes") {
      setActiveTab("11"); // Navigate to tab 11
    } else if (formData.trainingInterest === "no") {
      setActiveTab("10"); // Navigate to tab 10
    }
  };


  const handlePrevious9 = () => {
    setActiveTab("7");
  };

  const handleNext12 = () => {
    if (!formData.profession) {
      alert("Champ obligatoire"); // Show message if any field is empty
      return; // Prevent navigation to the next tab
    }

    switch (formData.profession) {
      case "Employé titulaire":
        setActiveTab("13"); // Navigate to tab 13
        break;
      case "Employé non titulaire":
        setActiveTab("14"); // Navigate to tab 14
        break;
      case "Profession libérale disposant d`identification fiscale":
        setActiveTab("16"); // Navigate to tab 16
        break;
      case "Profession libérale non disposant d`identification fiscale":
        setActiveTab("15"); // Navigate to tab 15
        break;
      case "Retraité":
        setActiveTab("27"); // Navigate to tab 27
        break;
      case "Chomeur":
        setActiveTab("7"); // Navigate to tab 7
        break;
      default:
        // Handle case where no profession is selected
        console.error("Unknown profession selected");
    }
  };



  const handlePrevious12 = () => {
    setActiveTab("4");
  };

  const handleNext13 = () => {
    const { salaireMensuel,cessionsSurSalaire, moyenObtentionSalaire } = formData;

    // Check if any required fields are empty
    if (!salaireMensuel || !cessionsSurSalaire || !moyenObtentionSalaire) {
      alert("Tous les champs sont obligatoires"); // Show message if any field is empty
      return; // Prevent navigation to the next tab
    }

   

    // Check the values of the fields and navigate accordingly
    if (formData.moyenObtentionSalaire === "Virement") {
      setActiveTab("23");
    } else if (formData.moyenObtentionSalaire === "Directement") {
      setActiveTab("26");
    }
  };

  const handlePrevious13 = () => {
    setActiveTab("12");
  };


  const handleNext16 = () => {
    // Navigate based on the duration of tax identification
    if (formData.anciennetePatente === "Plus que 6 mois") {
      setActiveTab("23"); // Navigate to tab 17 if more than 6 months
    } else {
      setActiveTab("17"); // Navigate to tab 18 if less than 6 months
    }
  };


  const handlePrevious16 = () => {
    setActiveTab("12");
  };

  const handleNext18 = () => {
    if (formData.contractType === "CDI") {
      setActiveTab("20"); // Navigate to tab 20 if CDI is selected
    } else if (formData.contractType === "CDD") {
      setActiveTab("19"); // Navigate to tab 19 if CDD is selected
    }
  };


  const handlePrevious18 = () => {
    setActiveTab("5");
  };

  const handleNext20 = () => {
    if (formData.loanType === "immobilier") {
      setActiveTab("22"); // Navigate to tab 22 if 'Crédit immobilier' is selected
    } else {
      setActiveTab("21");
    }
  };


  const handlePrevious20 = () => {
    setActiveTab("18");
  };

  const handleNext22 = () => {
    setActiveTab("11");
  };


  const handlePrevious22 = () => {
    setActiveTab("20");
  };

  const handleNext23 = () => {
    const { currentCreditStatus, loanType, requestedLoanAmount} = formData;
    if (!currentCreditStatus || !loanType || !requestedLoanAmount) {
      alert("Tous les champs sont obligatoires"); // Show message if any field is empty
      return; // Prevent navigation to the next tab
    }


    if (
      currentCreditStatus === 'première fois' ||
      currentCreditStatus === 'ancien crédit est remboursé'
    ) {
      setActiveTab("11");
    } else if (
      currentCreditStatus === 'déjà un crédit bancaire' ||
      currentCreditStatus === 'déjà un micro-crédit et je veux un crédit bancaire'
    ) {
      setActiveTab("24");
    }
  };


  const handlePrevious23 = () => {
    setActiveTab("12");
  };

  const handleNext24 = () => {
    const { halfPeriodExceeded } = formData;

    if (halfPeriodExceeded === 'no') {
      setActiveTab("25");
    } else if (halfPeriodExceeded === 'yes') {
      setActiveTab("25");
    }
  };


  const handlePrevious24 = () => {
    setActiveTab("23");
  };
  const handlePrevious25 = () => {
    setActiveTab("24");
  };

  const handleNext27 = () => {
    if (formData.age65 === 'Plus que 65 ans') {
      setActiveTab('28');
    } else {
      setActiveTab('23');
    }
  };


  const handlePrevious27 = () => {
    setActiveTab("12");
  };
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Col className="ml-auto mr-auto" md="10" xl="10">
            {activeTab === "1" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <p>
                        حريفنا الكريم، نقوم بمعالجة معطياتك الشخصية بناء على موافقتك
                        وذلك بعد إنتهائك من تعمير الاستمارة اذ انها تعتبر عنصر اساسي من
                        عملياتنا كمؤسسة ناشئة متخصصة في التكنلوجيا المالية نعمل على
                        توفير الإحاطة و النصح المناسبين لتمكينك من الحصول على أفضل
                        الخدمات من البنوك و المؤسسات المالية و التي تتماشى مع وضعيتك
                        الشخصية, سنحافظ في كافة الأوقات على خصوصية وسرية كافة معطياتك
                        الشخصية التي نتحصل عليها ولن يتم إفشاء هذه المعلومات.
                      </p>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>
                      {/* Add the checkboxes here */}
                      <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                        <Col className="mb-4" lg="3" sm="6">
                          <p>   هل انت موافق  ؟</p>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="agreement"
                                value="yes"
                                checked={checkedOption === "yes"}
                                onChange={handleCheckboxChange}
                              />
                              <span className="form-check-sign"></span>
                              نعم
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="agreement"
                                value="no"
                                checked={checkedOption === "no"}
                                onChange={handleCheckboxChange}
                              />
                              <span className="form-check-sign"></span>
                              لا
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button color="info" type="button" onClick={handleNextTab}>
                        Suivant
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "2" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        Easybank  شكرا على ثقتكم في </h3>
                      <p>

                        حريفنا الكريم، لا يمكنك استكمال الاجراءات في حالة امتناعك عن مشاركة المعطيات اللازمة
                      </p>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "3" && (
              <>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p> الإسم و اللقب - Nom et Prénom
                            *</p>
                          <FormGroup>
                            <Input
                              defaultValue=""
                              placeholder="Nom et Prénom"
                              type="text"
                              onChange={(event) => onInputChange(event, 'nomPrenom')}
                            ></Input>
                          </FormGroup>
                        </div>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>الجنس_Genre
                            *</p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    name="genre"
                                    type="radio"
                                    onChange={(event) => onInputChange(event, 'genre')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  Homme-رجل
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    name="genre"
                                    type="radio"
                                    onChange={(event) => onInputChange(event, 'genre')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  Femme-امراة
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>


                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p> العمر-âge
                            *</p>
                          <FormGroup>
                            <Input
                              defaultValue=""
                              placeholder="âge"
                              type="text"
                              onChange={(event) => onInputChange(event, 'age')}
                            ></Input>
                          </FormGroup>
                        </div>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>


                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p> رقم الهاتف - Numéro de téléphone
                            *</p>
                          <FormGroup>
                            <Input
                              defaultValue=""
                              placeholder="Numéro de téléphone"
                              type="text"
                              onChange={(event) => onInputChange(event, 'telephone')}
                            ></Input>
                          </FormGroup>
                        </div>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>هل أنت مقيم بالخارج؟ - Es-tu résidant à l'étranger?</p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    name="résidant à l'étranger"
                                    type="radio"
                                    value="yes"
                                    onChange={(event) => onInputChange(event, 'residantExterieur')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  نعم - Oui
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    name="résidant à l'étranger"
                                    type="radio"
                                    value="no"
                                    onChange={(event) => onInputChange(event, 'residantExterieur')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  لا - Non
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>

                        <Button color="info" type="button" onClick={handlePrevious3} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext3}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>

              </>
            )}

            {activeTab === "4" && (
              <>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>الولاية - gouvernorat</p>
                          <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              {["أريانة", "باجة", "بنزرت", "بن عروس", "تطاوين", "توزر", "تونس", "جندوبة", "زغوان", "سليانة", "سوسة", "سيدي بوزيد", "صفاقس", "قابس", "قبلي", "القصرين", "قفصة", "القيروان", "الكاف", "مدنين", "المنستير", "منوبة", "المهدية", "نابل"].map(gouvernorat => (
                                <FormGroup check className="form-check-radio" key={gouvernorat}>
                                  <Label check>
                                    <Input
                                      type="radio"
                                      value={gouvernorat}
                                      name="residency"
                                      onChange={(event) => onInputChange(event, 'residency')}
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    {gouvernorat}
                                  </Label>
                                </FormGroup>
                              ))}
                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>  العنوان و الرقم البريدي - Adresse et code postal
                            *</p>
                          <FormGroup>
                            <Input
                              placeholder="Adresse et code postal"
                              type="text"
                              onChange={(event) => onInputChange(event, 'addressPostalCode')}
                            ></Input>
                          </FormGroup>
                        </div>

                        <Button color="info" type="button" onClick={handlePrevious4} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext4}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>
              </>
            )}

            {activeTab === "5" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3> بالنسبة للمقيمين بالخارج - Pour ceux qui résident à l'étranger </h3>
                          <p>بلد الاقامة - Pays de résidence</p>

                          <FormGroup>
                            <Input
                              placeholder="Pays de résidence"
                              type="text"
                              onChange={(event) => onInputChange(event, 'paysResidance')}
                            ></Input>
                          </FormGroup>

                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>

                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>هل لديك عقد عمل؟ - Disposez-vous un contrat de travail?</p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="yes"
                                    name="contratTravail"
                                    onChange={(event) => onInputChange(event, 'contratTravail')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="no"
                                    name="contratTravail"
                                    onChange={(event) => onInputChange(event, 'contratTravail')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>

                        <Button color="info" type="button" onClick={handlePrevious5} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext5}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "6" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        مع الاسف لا يمكن للمواطنين بالخارج التمتع بقرض في حالة عدم وجود عقد عمل
                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "7" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3> بالنسبة للعاطلين عن العمل - Concernant les chomeurs </h3>
                          <p>هل لديك فكرة مشروع؟ - Avez-vous une idée de projet ?</p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="yes"
                                    name="projectIdea"
                                    onChange={(event) => onInputChange(event, 'projectIdea')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="no"
                                    name="residency"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious7} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext7}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "8" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3> بالنسبة للعاطلين عن العمل - Concernant les chomeurs </h3>
                          <p>هل لديك دراسة مشروع جاهزة؟</p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="yes"
                                    name="projectStudy"
                                    onChange={(event) => onInputChange(event, 'projectStudy')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="no"
                                    name="projectStudy"
                                    onChange={(event) => onInputChange(event, 'projectStudy')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious8} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext8}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "9" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3> بالنسبة للعاطلين عن العمل - Concernant les chomeurs </h3>
                          <p>هل انت مهتم بالمشاركة بدورة تكوينية للتاطير والمساعدة في الحصول على قرض بعث مشروع؟ </p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="yes"
                                    name="trainingInterest"
                                    onChange={(event) => onInputChange(event, 'trainingInterest')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="no"
                                    name="trainingInterest"
                                    onChange={(event) => onInputChange(event, 'trainingInterest')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious9} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext9}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "10" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <p>

                        بإمكانك التواصل معنا مع ضرورة وجود دراسة مشروع دقيقة لتحضير ملف القرض
                      </p>

                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "11" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <p>

                        EasyBank سوف يتم الاتصال بك في اقرب الاجال من قبل فريق
                      </p>

                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "12" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills2"}>
                    <TabPane tabId="pills2">
                      <div>
                        <p>المهنة - Profession *</p>
                        <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                          <Col lg="6" sm="12">
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Employé titulaire"
                                  name="profession"
                                  onChange={(event) => onInputChange(event, 'profession')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                Employé titulaire - موظف مرسم
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Employé non titulaire"
                                  name="profession"
                                  onChange={(event) => onInputChange(event, 'profession')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                Employé non titulaire - موظف غير مرسم
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Profession libérale disposant d`identification fiscale"
                                  name="profession"
                                  onChange={(event) => onInputChange(event, 'profession')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                Profession libérale disposant d`identification fiscale - تشتغل لحسابك الخاص و لديك معرف جبائي (باتيندة)
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  defaultValue="Profession libérale non disposant d`identification fiscale"
                                  name="profession"
                                  type="radio"
                                ></Input>
                                <span className="form-check-sign"></span>
                                Profession libérale non disposant d`identification fiscale - تشتغل لحسابك الخاص و ليس لديك  معرف جبائي (باتيندة)
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Retraité"
                                  name="profession"
                                  onChange={(event) => onInputChange(event, 'profession')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                Retraité - متقاعد
                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Chomeur"
                                  name="profession"
                                  onChange={(event) => onInputChange(event, 'profession')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                Chomeur - عاطل عن العمل
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <Button color="info" type="button" onClick={handlePrevious12} style={{ marginRight: '5rem' }} >
                        Précédent
                      </Button>
                      <Button color="info" type="button" onClick={handleNext12}>
                        Suivant
                      </Button>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            )}

            {activeTab === "13" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3> بالنسبة للموظف المرسم - Concernant l'employé titulaire </h3>
                          <p> الأجرالصافي أو المدخول الشهري - Salaire net ou revenue mensuel</p>

                          <FormGroup>
                            <Input
                              type="text"
                              placeholder="Salaire mensuel"
                              onChange={(e) => onInputChange(e, 'salaireMensuel')}
                            ></Input>
                          </FormGroup>

                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>





                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>هل عندك اقتطاع على الأجر حاليا؟ - Avez-vous des cessions sur salaire?</p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="yes"
                                    name="cessionsSurSalaire"
                                    onChange={(e) => onInputChange(e, 'cessionsSurSalaire')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="no"
                                    name="cessionsSurSalaire"
                                    onChange={(e) => onInputChange(e, 'cessionsSurSalaire')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>


                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>طريقة الحصول على الأجر - Moyen d'obtention de salaire</p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="Virement"
                                    name="moyenObtentionSalaire"
                                    onChange={(e) => onInputChange(e, 'moyenObtentionSalaire')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  Virement bancaire - تحويل بنكي (عن طريق البانكة)
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="Directement"
                                    name="moyenObtentionSalaire"
                                    onChange={(e) => onInputChange(e, 'moyenObtentionSalaire')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  Directement auprès de l'opérateur- مباشرة من عند المشغل (تاخذها في يدك)
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>

                        <Button color="info" type="button" onClick={handlePrevious13} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext13}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "14" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكنك الحصول على قرض بنكي، هناك إمكانية في الحصول على قرض إستهلاكي صغير موجه لتحسين ظروف العيش من مؤسسة للتمويل الأصغر، ننصحك بالتوجه مباشرة لإحدى هذه المؤسسات و التواصل بصفة مباشرة مع الفرع الأقرب لك، نحن بصدد إتمام إتفاقيات مع هذه الشركات في القريب العاجل إن شاء الله لنتمكن من تسهيل هذه القروض في المستقبل
                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "15" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        في حالة عدم وجود معرف جبائي (باتيندة) يمكنك التوجه الى مؤسسة تمويل صغرى التي من شانها تقديم استثناءات في حالة مشروع قائم الذات

                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "16" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3>   في حالة انك تشتغل لحسابك الخاص و لديك معرف جبائي (باتيندة)  </h3>
                          <p>  مدة الحصول على المعرف جبائي (باتيندة) بالشهر - Ancienneté de la patente en mois</p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="Plus que 6 mois"
                                    name="anciennetePatente"
                                    onChange={(e) => onInputChange(e, 'anciennetePatente')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  اكثر من 6 اشهر_Plus que 6 mois                  </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="moins que 6 mois"
                                    name="anciennetePatente"
                                    onChange={(e) => onInputChange(e, 'anciennetePatente')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  اقل من 6 اشهر_moins que 6 mois                  </Label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious16} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext16}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "17" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكنك التمتع بقرض في حالة ان عمر المعرف الجبائي
                        (باتيندة)
                        اقل من 6 اشهر

                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "18" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3>  بالنسبة للمقيمين بالخارج -Pour ceux qui résident à l'étranger  </h3>
                          <p>  نوع عقد العمل - Type de contrat *</p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="CDI"
                                    name="contractType"
                                    onChange={(e) => onInputChange(e, 'contractType')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  CDI (Contrat à durée indéterminée)_عقد غير محدد المدة
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    value="CDD"
                                    name="contractType"
                                    onChange={(e) => onInputChange(e, 'contractType')}
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  CDD (Contrat à durée déterminée)_عقد  محدد المدة
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious18} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext18}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


              </>
            )}

            {activeTab === "19" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكن للتونسيين المقيمين بالخارج اصحاب عقود عمل محددة المدة الحصول على قرض بتونس نظرا لشروط البنوك التونسية


                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "20" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills2"}>
                    <TabPane tabId="pills2">
                      <div>
                        <h3> القرض  المطلوب - Crédit demandé</h3>
                        <p> للتحصل على قرض عقاري  ضرورة توفر % 20 على الاقل تمويل ذاتي لملائمة الشروط اللازمة للتحصل على القرض العقاري       </p>

                        <p> نوع القرض  المطلوب - Type du crédit demandé</p>
                        <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                          <Col lg="6" sm="12">
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="immobilier"
                                  name="loanType"
                                  onChange={(e) => onInputChange(e, 'loanType')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                قرض عقاري_Crédit immobilier                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="Micro"
                                  name="loanType"
                                  onChange={(e) => onInputChange(e, 'loanType')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                قرض صغير_Micro-crédit                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="auto"
                                  name="loanType"
                                  onChange={(e) => onInputChange(e, 'loanType')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                قرض سيارة_Crédit- auto                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="démarrage"
                                  name="loanType"
                                  onChange={(e) => onInputChange(e, 'loanType')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                قرض بعث مشروع  ( اجبارية وجود دراسة مشروع )_Crédit au démarrage du projet                              </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-radio">
                              <Label check>
                                <Input
                                  type="radio"
                                  value="consommation"
                                  name="loanType"
                                  onChange={(e) => onInputChange(e, 'loanType')}
                                ></Input>
                                <span className="form-check-sign"></span>
                                قرض استهلاكي_crédit de consommation                              </Label>
                            </FormGroup>

                          </Col>
                        </Row>
                      </div>
                      <Button color="info" type="button" onClick={handlePrevious20} style={{ marginRight: '5rem' }} >
                        Précédent
                      </Button>
                      <Button color="info" type="button" onClick={handleNext20}>
                        Suivant
                      </Button>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            )}

            {activeTab === "21" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكن للتونسيين المقيمين بالخارج الحصول الا على قرض عقاري


                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "22" && (

              <>

                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>


                          <h3>   القرض المطلوب بالنسبة للمقيمين بالخارج- Crédit demandé pour ceux qui résident à l'étranger  </h3>
                          <p>   الأجرالصافي أو المدخول الشهري بالدينار التونسي- Salaire net ou revenue mensuel en Dinars Tunisien</p>

                          <FormGroup>
                            <Input
                              type="text"
                              placeholder="Salaire mensuel"
                              value={formData.monthlySalary}
                              onChange={(e) => onInputChange(e, 'monthlySalary')}
                            />
                          </FormGroup>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>





                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>    مبلغ القرض المطلوب بالدينار التونسي- Montant du crédit demandé en Dinars Tunisien </p>

                          <FormGroup>
                            <Input
                              type="text"
                              placeholder="crédit demandé"
                              value={formData.requestedLoanAmount}
                              onChange={(e) => onInputChange(e, 'requestedLoanAmount')}
                            />
                          </FormGroup>

                        </div>

                        <Button color="info" type="button" onClick={handlePrevious22} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext22}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>

              </>
            )}

            {activeTab === "23" && (

              <>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <h3> القرض  المطلوب - Crédit demandé</h3>
                          <p>  :للتحصل على قرض عقاري -
                            ضرورة توفر %20 تمويل ذاتي لملائمة الشروط اللازمة للتحصل على القرض *
                            :للتحصل على قرض سيارة -
                            ضرورة توفر %20 تمويل ذاتي لملائمة الشروط اللازمة للتحصل على قرض سيارة مستعملة*
                            ضرورة توفر %40 تمويل ذاتي لملائمة الشروط اللازمة للتحصل على قرض سيارة جديدة*
                          </p>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


                <Card>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p> نوع القرض  المطلوب - Type du crédit demandé</p>
                          <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="loanType"
                                    value="immobilier"
                                    checked={formData.loanType === 'immobilier'}
                                    onChange={(e) => onInputChange(e, 'loanType')}
                                  />
                                  <span className="form-check-sign"></span>
                                  قرض عقاري_Crédit immobilier                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="loanType"
                                    value="Micro"
                                    checked={formData.loanType === 'Micro'}
                                    onChange={(e) => onInputChange(e, 'loanType')}
                                  />
                                  <span className="form-check-sign"></span>
                                  قرض صغير_Micro-crédit                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="loanType"
                                    value="auto"
                                    checked={formData.loanType === 'auto'}
                                    onChange={(e) => onInputChange(e, 'loanType')}
                                  />
                                  <span className="form-check-sign"></span>
                                  قرض سيارة_Crédit- auto                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="loanType"
                                    value="démarrage"
                                    checked={formData.loanType === 'démarrage'}
                                    onChange={(e) => onInputChange(e, 'loanType')}
                                  />
                                  <span className="form-check-sign"></span>
                                  قرض بعث مشروع  ( اجبارية وجود دراسة مشروع )_Crédit au démarrage du projet                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="loanType"
                                    value="consommation"
                                    checked={formData.loanType === 'consommation'}
                                    onChange={(e) => onInputChange(e, 'loanType')}
                                  />
                                  <span className="form-check-sign"></span>
                                  قرض استهلاكي_crédit de consommation                              </Label>
                              </FormGroup>

                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>    مبلغ القرض المطلوب بالدينار التونسي- Montant du crédit demandé en Dinars Tunisien </p>

                          <FormGroup>
                            <Input
                              type="text"
                              placeholder="crédit demandé"
                              value={formData.requestedLoanAmount}
                              onChange={(e) => onInputChange(e, 'requestedLoanAmount')}
                            />
                          </FormGroup>

                        </div>


                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>


                <Card>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p> هل عندك قرض حاليا؟ - Avez vous un crédit en cours?</p>
                          <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="currentCreditStatus"
                                    value="première fois"
                                    checked={formData.currentCreditStatus === 'première fois'}
                                    onChange={(e) => onInputChange(e, 'currentCreditStatus')}
                                  />
                                  <span className="form-check-sign"></span>
                                  Crédit pour la première fois - ليس عندي قرض حاليا, أريد قرض لأول مرة
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="currentCreditStatus"
                                    value="ancien crédit est remboursé"
                                    checked={formData.currentCreditStatus === 'ancien crédit est remboursé'}
                                    onChange={(e) => onInputChange(e, 'currentCreditStatus')}
                                  />
                                  <span className="form-check-sign"></span>
                                  القرض القديم خالص واريد قرض اخر_L'ancien crédit est remboursé et je veux un autre                            </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="currentCreditStatus"
                                    value="déjà un crédit bancaire"
                                    checked={formData.currentCreditStatus === 'déjà un crédit bancaire'}
                                    onChange={(e) => onInputChange(e, 'currentCreditStatus')}
                                  />
                                  <span className="form-check-sign"></span>
                                  J'ai déjà un crédit bancaire et je veux un autre - عندي قرض حاليا من بنك واريد قرض اخر                           </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="currentCreditStatus"
                                    value="déjà un micro-crédit et je veux un crédit bancaire"
                                    checked={formData.currentCreditStatus === 'déjà un micro-crédit et je veux un crédit bancaire'}
                                    onChange={(e) => onInputChange(e, 'currentCreditStatus')}
                                  />
                                  <span className="form-check-sign"></span>
                                  J'ai déjà un micro-crédit et je veux un crédit bancaire - عندي قرض حاليا من مؤسسة تمويل أصغر واريد قرض بنكي
                                </Label>
                              </FormGroup>

                            </Col>
                          </Row>
                        </div>
                        <Button color="info" type="button" onClick={handlePrevious23} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext23}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </>
            )}

            {activeTab === "24" && (

              <>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <h3>   في حالة وجود قرض جاري - En cas de crédit en cours </h3>
                          <p> نوع القرض المتحصل عليه - Type du crédit obtenu </p>
                          <Row id="checkRadios" style={{ justifyContent: "end", textAlign: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="immobilier"
                                    name="immobilier"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  قرض عقاري_Crédit immobilier                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="Micro"
                                    name="Micro"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  قرض صغير_Micro-crédit                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="auto"
                                    name="auto"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  قرض سيارة_Crédit- auto                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="démarrage"
                                    name="démarrage"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  قرض بعث مشروع  ( اجبارية وجود دراسة مشروع )_Crédit au démarrage du projet                              </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    defaultValue="consommation"
                                    name="consommation"
                                    type="radio"
                                  ></Input>
                                  <span className="form-check-sign"></span>
                                  قرض استهلاكي_crédit de consommation                              </Label>
                              </FormGroup>

                            </Col>
                          </Row>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>    قيمة القرض المتحصل عليه - Montant du crédit obtenu </p>

                          <FormGroup>
                            <Input
                              defaultValue=""
                              placeholder="Montant du crédit obtenu"
                              type="text"
                            ></Input>
                          </FormGroup>

                        </div>


                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>



                <Card>

                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>  هل تجاوزت نصف مدة خلاص القرض  المتحصل عليه - Avez-vous dépassé la moitié de la période totale de remboursement </p>
                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="halfPeriodExceeded"
                                    value="yes"
                                    
                                    checked={formData.halfPeriodExceeded === 'yes'}
                                    onChange={(event) => onInputChange(event, 'halfPeriodExceeded')}
                                  />
                                  <span className="form-check-sign"></span>
                                  oui-نعم
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="halfPeriodExceeded"
                                    value="no"
                                    checked={formData.halfPeriodExceeded === 'no'}
                                    onChange={(event) => onInputChange(event, 'halfPeriodExceeded')}
                                  />
                                  <span className="form-check-sign"></span>
                                  non-لا
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>


                      </TabPane>
                    </TabContent>

                  </CardBody>
                </Card>



                <Card>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <p>     شرح الوضعية أكثر - Expliquez mieux la situation </p>

                          <FormGroup>
                            <Input
                              defaultValue=""
                              placeholder="situation"
                              type="text"
                            ></Input>
                          </FormGroup>

                        </div>
                        <Button color="info" type="button" onClick={handlePrevious24} style={{ marginRight: '5rem' }} >
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext24}>
                          Suivant
                        </Button>

                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </>
            )}

            {activeTab === "25" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكنك التحصل على قرض اذا لم تتجاوز اكثر من نصف مدة القرض القديم

                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePrevious25}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "26" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكنك التحصل على قرض في حالة الحصول على اجر مباشرة من المشغل

                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab26}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

            {activeTab === "27" && (
              <>
                <Card>
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <h3 className="title">الاستمارة - Le formulaire</h3>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"pills2"}>
                      <TabPane tabId="pills2">
                        <div>
                          <h3>معلومات حول العمر - Informations sur l'âge</h3>
                          <p>كم عمرك ؟ - Quel est votre âge ?</p>

                          <Row id="checkRadios" style={{ justifyContent: "right", marginTop: "20px" }}>
                            <Col lg="6" sm="12">
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="age65"
                                    value="Plus que 65 ans"
                                    checked={formData.age65 === 'Plus que 65 ans'}
                                    onChange={(e) => onInputChange(e, 'age65')}
                                  />
                                  <span className="form-check-sign"></span>
                                  Plus que 65 ans _اكثر من 65 سنة
                                </Label>
                              </FormGroup>
                              <FormGroup check className="form-check-radio">
                                <Label check>
                                  <Input
                                    type="radio"
                                    name="age65"
                                    value="moins que 65 ans"
                                    checked={formData.age65 === 'moins que 65 ans'}
                                    onChange={(e) => onInputChange(e, 'age65')}
                                  />
                                  <span className="form-check-sign"></span>
                                  moins que 65 ans _اقل من 65 سنة
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>

                        <Button color="info" type="button" onClick={handlePrevious27} style={{ marginRight: '5rem' }}>
                          Précédent
                        </Button>
                        <Button color="info" type="button" onClick={handleNext27}>
                          Suivant
                        </Button>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </>
            )}

            {activeTab === "28" && (
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <h3 className="title">الاستمارة - Le formulaire</h3>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <h3>
                        !! عذرا </h3>
                      <p>

                        لا يمكنك الحصول على قرض اذا كان عمرك اكثر من 65 سنة

                      </p>
                      <h3>
                        Easybank شكرا على ثقتكم في</h3>
                      <div style={{ textAlign: 'right', marginTop: '20px' }}>


                      </div>

                      <Button color="info" type="button" onClick={handlePreTab}>
                        retour
                      </Button>
                    </TabPane>
                  </TabContent>



                </CardBody>
              </Card>
            )}

          </Col>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
