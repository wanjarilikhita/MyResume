import './Navbar.css'
function navbar() {
    return (
        <div className="NavBar">
            <div className="NavBar_div">LW</div>
            <div className="NavBar_div">Home</div>
            <div className="NavBar_div">About</div>
            <div className="NavBar_div">Gallery</div>
            <div className="NavBar_div"><input type="text" /></div>
            <div className="NavBar_div">Contact</div>
            <div className="NavBar_div">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                 <i class="fa-brands fa-twitter"></i></div>
        </div>
    )
}
export default  navbar