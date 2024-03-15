import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const totalCredits = 15 ;
function App() {
  const [cart, setCart] = useState([]);

  const handleCourseSelect = (course) => {
    const credits = cart.reduce((p,c)=> p+c.credit, 0) ;
    if(credits + course.credit> totalCredits) {
      return toast.error('credits must be within 15')
    }
    const alreadyExists = cart.find((c) => c.id === course.id);
    if (!alreadyExists) {
      const newCart = [...cart, course];
      setCart(newCart);
      toast("Course Added");
    }else{
      toast.warn("Course Already Added");
    }
  };

  return (
    <div className="bg-base-200">
      <Header></Header>
      <div className="flex mt-8 gap-6 mx-[50px]">
        <Courses handleCourseSelect={handleCourseSelect}></Courses>
        <Cart cart={cart}></Cart>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
