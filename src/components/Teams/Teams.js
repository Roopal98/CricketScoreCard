import { Row,Col } from "react-bootstrap"
import ScoreTable from "./ScoreTable";
import TeamCard from "./TeamCard";
const Teams =(props) => {
    // console.log(props.data.innings)
    const list = ['batsmen','bowlers']
    return(
        <>
        <Row className="no-wrap">
            <Col md={6} className="d-flex justify-content-center"><TeamCard /></Col>
            <Col md={6} className="d-flex justify-content-center"><TeamCard /></Col>
        </Row>
        {
            list.map((item) => (
                <Row>
                    <Col className="d-flex justify-content-center" ><ScoreTable type={item} innings={props.data.innings[0]}/></Col>
                    <Col className="d-flex justify-content-center" ><ScoreTable type={item} innings={props.data.innings[1]}/></Col>
                </Row>

            ))
        }
         
        </>
        
    )
}

export default Teams