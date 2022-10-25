import Table from 'react-bootstrap/Table';
import './ScoreTable.css'

const ScoreTable = (props) => {
    console.log(props.type)
    let tableHeaders;
    let tableData;
    if(props.type==='batsmen'){
        tableHeaders = ['BATSMAN','R','B','4R','6S','SR']
        tableData = ['name' , 'runs' ,'balls_faced' ,'fours','sixes','strike_rate']
        console.log(tableHeaders)
    }
    else if(props.type==='bowlers') {
        tableHeaders = ['BOWLER','O','M','R','W','Econ']
        tableData = ['name', 'overs','maidens' ,'runs_conceded' , 'wickets' , 'econ']
    }else{
        tableHeaders = ['BATSMAN','Score','Over']
        tableData = ['name', 'score_at_dismissal','over_at_dismissal']
    }
    return (
        <Table>
      <thead>
        <tr>
            {
                tableHeaders.map((header,idx)=>(
                    idx===0 
                        ?<th colSpan={2}>{header}</th>
                        :<th>{header}</th>
                )
                    
                    
                )

            }
        </tr>
      </thead>
      <tbody>
            {
                props.innings[props.type].map((player)=>(
                   <tr>
                    {
                        tableData.map((item,idx)=>(
                            idx===0 
                                ?<td colSpan={2}>{player[item]}</td>
                                :<td>{player[item]}</td>
                        ))
                    }
                   </tr>
                    
                ))
            }
      </tbody>
    </Table>
    )

}

export default ScoreTable