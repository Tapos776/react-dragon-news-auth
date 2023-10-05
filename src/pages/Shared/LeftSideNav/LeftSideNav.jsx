import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import moment from 'moment';
import { BsCalendar2DateFill } from 'react-icons/bs';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="space-y-6">
                <h2 className="text-2xl ">All Categories</h2>
                {
                    categories.map(category => <NavLink className="block ml-4 text-xl font-semibold " key={category.id} to={`/category/${category.id}`} >{category.name}</NavLink>)
                }
            </div>
            <div>
                <div className="p-3">
                    <img src={image1} alt="" />
                    <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex items-center justify-between p-3">
                        <div>
                            <p>Sports</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <span><BsCalendar2DateFill></BsCalendar2DateFill></span>
                            <p>
                            {
                                moment().format(" MMM D, YYYY")
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <img src={image2} alt="" />
                    <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex items-center justify-between p-3">
                        <div>
                            <p>Sports</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <span><BsCalendar2DateFill></BsCalendar2DateFill></span>
                            <p>
                            {
                                moment().format(" MMM D, YYYY")
                            }</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <img src={image3} alt="" />
                    <p className="mt-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex items-center justify-between p-3">
                        <div>
                            <p>Sports</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <span><BsCalendar2DateFill></BsCalendar2DateFill></span>
                            <p>
                            {
                                moment().format(" MMM D, YYYY")
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;