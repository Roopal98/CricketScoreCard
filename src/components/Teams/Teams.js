import { Row,Col, Card, Container, Accordion, Alert } from "react-bootstrap"
import ScoreCard from "./ScoreCard";
import ScoreTable from "./ScoreTable";
import TeamCard from "./TeamCard";
import './Teams.css'
const Teams =(props) => {
    console.log(props.data.innings)
    const list = ['batsmen','bowlers','fows']
    const countryA = props.data.innings[0].name
    const scoreA = props.data.innings[0].scores_full
    const countryB = props.data.innings[1].name
    const scoreB = props.data.innings[1].scores_full
    const Accheading=  ['BATTING', 'BOWLING','FALL OF WICKETS']
    let count = 0
    return(
        <>
        
        
        <Container>
        <Row className="no-wrap">
            <Col md={6} className="d-flex justify-content-flex-center"><ScoreCard country={countryA} score={scoreA} /></Col>
            <Col md={6} className="d-flex justify-content-flex-end"><ScoreCard country={countryB} score={scoreB}/></Col>
        </Row>
        {/* <Accordion defaultActiveKey={["0","1","2"]} alwaysOpen> */}
            {
            list.map((item,idx) => (
             
                
                
    //   <Accordion.Item eventKey={idx.toString()}>
    
    //     <Accordion.Header>{Accheading[idx]}</Accordion.Header>
    //     <Accordion.Body>
    <div className="card-style">
        <Row><Alert key='secondary' variant='secondary'>
         {Accheading[idx]}
        </Alert></Row>
        <Row>
            <Col className="d-flex justify-content-center" ><ScoreTable type={item} innings={props.data.innings[0]}/></Col>
                    <Col lg={1}></Col>
                    <Col className="d-flex justify-content-center" ><ScoreTable type={item} innings={props.data.innings[1]}/></Col>
            
            </Row>
    </div>
            
         

        // </Accordion.Body>
        
        // </Accordion.Item>
        
                   
                    
                    
                    
              
              

            ))
        }
        {/* </Accordion> */}
        </Container>
         
        </>
        
    )
}

export default Teams