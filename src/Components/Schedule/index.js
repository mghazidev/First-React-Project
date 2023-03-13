import './schedule.css';

function Schedule() {
    return (
        <div className='Schedule-component'>
             <div class="schedule">
                        <h1>Schedule</h1>
                    <div class="fields-sec">
                        <div class="field"> 
                        <h2><i class="fa-solid fa-circle-check"></i>Software Architecture</h2>
                        <span>
                        <i class="fa-solid fa-diamond-turn-right"></i>
                        </span>
                        </div>
                        <p>May 2,2022 from 6 AM to 10 PM</p>
                    </div>
                    <div class="fields-sec">
                        <div class="field"> 
                        <h2><i class="fa-regular fa-circle"></i>Software Architecture</h2>
                        <span>
                        <i class="fa-solid fa-diamond-turn-right"></i>
                        </span>
                        </div>
                        <p>May 2,2022 from 6 AM to 10 PM</p>
                    </div>
                </div>
            </div>
    )
}

export default Schedule