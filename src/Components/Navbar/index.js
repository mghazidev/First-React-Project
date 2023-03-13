import './navbar.css';

function Navbar() {
    return (
        <div className='Navbar-component'>
            <div class="main">
                <div class="search-bar">
                    <form action="">
                        <input type="text" class="no-outline" placeholder="Search" /><span><i class="fa-solid fa-magnifying-glass" ></i></span>
                    </form>
                </div>
                <div class="nav-icons">
                    <button class="btn-1"><i class="fa-solid fa-calendar-days"></i>Routine</button>
                    <i class="fa-regular fa-comment-dots"></i>
                    <div class="profile">
                        <img src="./brush.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;