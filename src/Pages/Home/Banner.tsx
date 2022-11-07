import "./banner.css"

const Banner = () => {
    return ( 
        <div className="banner">
            <h1> The easiest way to fun and bring your <span>project</span> to life</h1>
            <p>A collaborative system that enables organizations and changemakers to work together on initiatives that improve society</p>
             <div className="bimageContainer">
             <img src="/banner.png" alt="turn ideas into reality"/>
             </div>
             <h2>Find it first on<span className="brand">  Be<span>Funded</span></span></h2>
             <p>BeFunded is where investors and innovation seekers find innovative, imaginative tech, ideas and products before it hits the mainstream.</p>
             <div className="btnContainer">
                <button  className="btn primary-btn">
                    Register
                </button>
                <button className="btn">
                    Login
                </button>
            </div>
        </div>
     );
}
 
export default Banner;