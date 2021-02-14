import profile from '../images/profile.jpg'
function Header() {

    const headerTextStyle = {
        color: 'white',
        fontSize: '20px',

    }

    const profileImgStyle = {
        "border-radius": '50%',
        width: '20%'
    }
    return (
        <div style={{backgroundColor: "black", height: '100vh'}}>
            <div style={headerTextStyle}>Hi, I am Kapil Gupta</div>
            <img src={profile} alt="profile" style={profileImgStyle}/>
        </div>
    );
}

export default Header;