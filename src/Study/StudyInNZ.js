import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import SideNav from '../components/Nav';

function StudyInNZ (){

    function ControlledTabs() {
        const [key, setKey] = useState('studyVisa');
      
        return (
          <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="studyVisa" title="Study Visa">
                <ul>
                  <li>
                  What I Need
                  </li>
                  <li>
                  How I Apply
                  </li>
                  <li>
                  Need help Applying
                  </li>
                  <li>
                  other information
                  </li>
                </ul>
            </Tab>
            <Tab eventKey="schools" title="Schools">
                content here...
            </Tab>
            <Tab eventKey="coursesToStudy" title="Courses To Study">
                content here...
            </Tab>
            <Tab eventKey="englishTranslators" title="English Translators">
                content here...
            </Tab>
            <Tab eventKey="otherInfo" title="Other Info">
                content here...
            </Tab>
          </Tabs>
        );
      }

      function ControlledSideTab(){
          const [key, setKey] = useState("")
      }

    return (
        <>
        <Container>
            <ControlledTabs />
            <Row>
                <Col sm={2}><SideNav/></Col>
                <Col sm={8}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Study Visa</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Schools</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{'Schools'}
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Courses To Study</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </CardDeck>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>English Translators</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Other Info</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Other Info</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default StudyInNZ;