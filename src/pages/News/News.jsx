
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className=" text-5xl font-bold">News Details</h2>
 
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;