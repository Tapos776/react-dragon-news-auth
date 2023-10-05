import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const { title ,image_url,details,_id} = aNews
    return (
        <div className="card   mb-16  ">
            <figure><img className="" src={image_url} alt="News" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                {
                        details.length > 200 ? <p> {details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link> </p> :<div>{details}</div>
                 }
            
            </div>
        </div>
    );
};

export default NewsCard;