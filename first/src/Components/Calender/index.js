import './calender.css';

function Calender() {
    return (
        <div className='calender-section'>
            <div class="calender">
                <div class="date">
                    <i class="fa-solid fa-chevron-left"></i>
                    <h2>May 2022</h2>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="days">
                    <div class="week">
                        <h6>Mon</h6>
                        <p>06</p>
                    </div>
                    <div class="week">
                        <h6>Tues</h6>
                        <p>06</p>
                    </div>
                    <div class="week active-1">

                        <h6>Wed</h6>
                        <p>18</p>

                    </div>
                    <div class="week">
                        <h6>Thu</h6>
                        <p>06</p>
                    </div>
                    <div class="week">
                        <h6>Fri</h6>
                        <p>06</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender