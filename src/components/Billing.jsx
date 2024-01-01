import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);
  const subTotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalBillings = (subTotal) =>{
    if(subTotal > 0) {
      return subTotal + 4.99
    }
    
  };

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${subTotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{subTotal > 0 ? "$4.99" : 0}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${subTotal > 0 ? totalBillings(subTotal) : 0} USD</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};

export default Billing;
