import React from "react";
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from "react-router-dom";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://healthyfamilyproject.com/wp-content/uploads/2020/05/Strawberries-background.jpg" />
                <div className="user">
                    <img src="https://admin.acceleratingscience.com/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg" alt="" />
                    <div className="info">
                        <span> John </span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}  >
                            <img src={Edit} alt="" />
                        </Link>

                        <img src={Delete} alt=""> </img>
                    </div>
                </div>
<h1>  Lorem ipsum   </h1>
                <p>
                Lorem ipsum    Lorem ipsum    Lorem ipsum    Lorem ipsum    Lorem ipsum  
                </p>
            </div>
            <div className="menu"> m </div>

        </div>

    )
}

export default Single;