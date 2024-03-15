/* eslint-disable react/prop-types */
import { AiOutlineDollar} from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
const Course = ({course, handleCourseSelect}) => {
    const {name, photo, description, credit, price} = course ;
    return (

        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="flex justify-start" src={photo} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="flex">
      <p className="flex items-center "><AiOutlineDollar />Price:{price}</p>
      <p className="flex items-center"><CiBookmark /> Credit : {credit}</p>
    </div>
    <div className="card-actions mt-5">
      <button onClick={() => handleCourseSelect(course)} className="btn btn-info w-full ">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;