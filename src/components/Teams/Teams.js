import { Row,Col } from "react-bootstrap"
import ScoreCard from "./ScoreCard";
import ScoreTable from "./ScoreTable";
import TeamCard from "./TeamCard";
const Teams =(props) => {
    // console.log(props.data.innings)
    const list = ['batsmen','bowlers','fows']
    const countryA = props.data.innings[0].name
    const scoreA = props.data.innings[0].scores_full
    const countryB = props.data.innings[1].name
    const scoreB = props.data.innings[1].scores_full
    return(
        <>
        <Row className="no-wrap">
            <Col md={6} className="d-flex justify-content-center"><ScoreCard country={countryA} score={scoreA} /></Col>
            <Col md={6} className="d-flex justify-content-center"><ScoreCard country={countryB} score={scoreB}/></Col>
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