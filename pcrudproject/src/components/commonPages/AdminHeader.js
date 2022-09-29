import * as React from "react";


export default function AdminHeader() {

    React.useEffect(() => {
        const style = document.getElementById("pagestyle");
        style.href = "/assets/css/modern.css";
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand navbar-theme" >
                <h1 className="m-2" style={{fontWeight: 'bold',color:'black'}}>
                    fiverr
                </h1>
                <div className="navbar-collapse collapse">
                <ul class="navbar-nav bd-navbar-nav flex-row text-secondary">
                    <li class="nav-item">
                        <a class="nav-link text-muted" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-muted" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">Messages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-success" href="/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');"><u>Orders</u></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-muted" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');" target="_blank" rel="noopener">Themes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-muted" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');" target="_blank" rel="noopener">Gigs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-muted" href="#" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank" rel="noopener">Analytics</a>
                    </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav ms-auto">
                        <li>
                            <img src="assets/img/avatars/avatar.jpg" class="img-fluid rounded-circle m-2" alt="Linda Miller"  width={40} height={40}/>
                            <span class="fas fa-circle chat-online myon"></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}