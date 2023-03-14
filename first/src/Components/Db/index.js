import './db.css';

function Db() {
    return (
        <div className='Db-component'>
            <div class="footer-sec">
                <div class="table-sec">
                    <div class="db">
                        <h1>Database</h1>
                        <ul>
                            <li><a href="#">Teacher</a></li>
                            <li><a href="#">Student</a></li>
                            <li><a href="#">Staff</a></li>
                        </ul>
                    </div>
                     <div class="table">
                            
                        <table>
                        <tr>
                            <th>Student name </th>
                            <th>Score </th>
                            <th>Submitted </th>
                            <th>Grade</th>
                            <th>Pass/Fail</th>
                        </tr>
                    
                        <tr>
                            <td class="pro"><img src="images/round.jfif" /> Glenn Maxwell</td>
                            <td>90/100</td>
                            <td>10/8/10-20 PM</td>
                            <td>Excellent</td>
                            <td class="highlight">Pass</td>
                        </tr>
                        
                        <tr>
                            <td class="pro"><img src="images/round.jfif" />Cathe Heavan</td>
                            <td>90/100</td>
                            <td>10/8/10-20 PM</td>
                            <td>Excellent</td>
                            <td class="highlight">Pass</td>
                        </tr>
                        
                        <tr>

                            <td class="pro"><img src="images/round.jfif" />Yeadar Gil</td>
                            <td>90/100</td>
                            <td>10/8/10-20 PM</td>
                            <td>Excellent</td>
                            <td class="highlight">Pass</td>
                        
                        </tr>
                        </table>
                        
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Db;