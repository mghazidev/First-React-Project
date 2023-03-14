import './staff.css';

function Staff() {
    return (
        <div className='Staff-component'>
            <div class="staff-sec">
                <div class="staff">
                    <div class="content">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h1>Total Students</h1>
                        <span>1430</span>
                    </div>
                </div>
                <div class="staff">
                    <div class="content-1">
                        <i class="fa-solid fa-chalkboard-user"></i>
                        <h1>Total Teacher</h1>
                        <span>200</span>
                    </div>
                </div>
                <div class="staff">
                    <div class="content-2">
                        <i class="fa-solid fa-book-open"></i>
                        <h1>Total Courses</h1>
                        <span>20</span>
                    </div>
                </div>
                <div class="staff">
                    <div class="content-3">
                        <i class="fa-solid fa-box-open"></i>
                        <h1>Faculty Room</h1>
                        <span>150</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff