import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOutForm = ({service}) => {
  const { user } = useContext(AuthContext);
  const {_id, title, price} = service
  const navigate = useNavigate()

  const handleSubmit = (e) => {

      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = user?.email
      const address = form.address.value
      const phone_number = form.phone.value
      const payment_method = form.paymentMethod.value

      const order = {
          name,
          email,
          address,
          phone_number,
          payment_method,
          service_id:_id,
          service:title,
          price

      }
      
      fetch('http://localhost:5000/checkout',{
          method:'post',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(order)

      })
      .then(res=>res.json())
      .then(data=>{
        toast.success('Order placed successfully ')
        console.log(data)
        navigate('/orders')

      })
      .catch(err=>console.error(err))

      form.reset()
      
    
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 bg-slate-200 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center mb-5">
        Please fillup the form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            id="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="addres" className="block dark:text-gray-400">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="phone" className="block dark:text-gray-400">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400"
            required
          />
        </div>
        <div className="space-y-3 text-sm">
          <p className="mb-3 text-lg">Payment Method</p>
          <div>
            <label className="inline-flex items-center hover:cursor-pointer">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600"
                name="paymentMethod"

                value="Paypal"
              />
              <span className="ml-2 font-bold">Paypal</span>
            </label>
            <div className="mt-1">
              <label className="inline-flex items-center hover:cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-green-500"
                  name="paymentMethod"
                  value="Bkash"
                />
                <span className="ml-2 font-bold">Bkash</span>
              </label>
            </div>
          </div>
        </div>

        <button className="block bg-orange border border-orange text-white w-full p-3 text-base font-bold text-center rounded hover:bg-white hover:text-orange dark:text-gray-900 dark:bg-sky-400 uppercase">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
