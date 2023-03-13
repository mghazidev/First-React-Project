import './course.css';

function Course() {
    return (
        <div className='course-component'>
            <div class="courses-sec">
                <div class="all-course">
                    <h1>Saved Courses</h1>
                    <p>See all</p>
                </div>
                <div class="top-course">
                    <i class="fa-solid fa-box-open"></i>
                    <h2>Crypto Trading Advance</h2>
                </div>
                <div class="top-course">
                    <i class="fa-solid fa-book-open"></i>
                    <h2>Youtube and Video Editing</h2>
                </div>
                <div class="top-course">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <h2>Gaming & Caper</h2>
                </div>
                <div class="top-course">
                    <i class="fa-solid fa-box-open"></i>
                    <h2>Gaming & Gamers</h2>
                </div>
            </div>
        </div>
    )
}

export default Course