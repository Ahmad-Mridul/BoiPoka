import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[700px] flex justify-center items-center">
                <p className="text-5xl text-center">Not Found</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;