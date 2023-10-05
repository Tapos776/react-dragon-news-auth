import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex gap-4">
            <button className="btn btn-secondary"> Breaking News</button>
            <Marquee speed={100}>
                <Link className="mx-10 text-xl" to="/">I can be a React component, multiple React components, or just some text.....</Link>
                <Link className="mx-10 text-xl" to="/">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;