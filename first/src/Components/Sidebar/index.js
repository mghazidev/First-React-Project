import './sidebar.css'; 

function Sidebar() {
    return ( 
    <div className='sidebar-component'>
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="logo">
                    <img src="./logo.png" />
                </div>
                <div className="sidebar-items">
                    <div className="active">
                    <a href="" className="sidebar-item"><i className="fa-solid fa-table-columns"></i>Dashboard </a>
                    </div>
                    <a href="" className="sidebar-item"><i className="fa-solid fa-rectangle-list"></i>Courses</a>
                    <a href="" className="sidebar-item"><i className="fa-solid fa-newspaper"></i>Assignment Pro</a>
                    <a href="" className="sidebar-item"><i className="fa-regular fa-circle-check"></i>Tasks</a>
                    <a href="" className="sidebar-item"><i className="fa-regular fa-comment-dots"></i>Messages Pro</a>
                    <a href="" className="sidebar-item"><i className="fa-solid fa-user-group"></i>Friends</a>
                    <div className="subs">
                        <h1>Go Premium</h1>
                        <p>Explore 500+ Courses With Lifetime Membership</p>
                        <button className="btn">Upgrade Now</button>
                    </div>
          
                    <a href="" className="sidebar-item"><i className="fa-solid fa-gear"></i>Settings</a>
                    <a href="" className="sidebar-item"><i className="fa-solid fa-right-from-bracket"></i>Log out</a>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default Sidebar