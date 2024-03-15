import { totalCredits } from "../../App";

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {
    // eslint-disable-next-line react/prop-types
    const credits =  cart.reduce((p,c)=>p+ c.credit, 0 ) ;
    return (
        <div className="bg-white p-8 w-1/3 rounded-xl">
            <div>
                <h1 className="text-2xl font-semibold">Credit Hour Remaining : {totalCredits - credits} </h1>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className="text-2xl font-semibold">Course Name: {
                    // eslint-disable-next-line react/prop-types
                    cart.map(c=> <li key={c.id}>{c.name}</li>)
                }  </h3>
            </div>
            <div className="divider"></div>
            <div>
               <h3 className="text-2xl font-semibold"> Total Credit Hour: {credits}  </h3>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className="text-2xl font-semibold">Total Price: 
                {
                    // eslint-disable-next-line react/prop-types
                    cart.reduce((p,c)=>p+ c.price, 0 )
                } </h3>
            </div>
        </div>
    );
}

export default Cart;