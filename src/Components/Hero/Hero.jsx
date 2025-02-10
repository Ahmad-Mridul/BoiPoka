import heroImg from "../../assets/pngwing 1.png"
const Hero = () => {
    const heroStyle={
        background:"rgba(19, 19, 19, 0.05)",
        borderRadius:"24px"
    }
    return (
        <div className="p-4 md:p-5 lg:p-0 ">
            <div className="hero mt-[24px] lg:ps-[120px] lg:pe-[120px]" style={heroStyle}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src={heroImg}
                    className="max-w-sm rounded-lg w-50 md:w-full"
                    />
                    <div className="w-3/4">
                        <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        
                        <button className="btn btn-accent mt-[48px]">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
