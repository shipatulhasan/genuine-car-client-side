import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
         return logOut()
            .then(() => {
              toast.success("Logout successfully");
            })
            .catch((err) => console.error(err));
        }

        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });

    setLoading(false);
  }, [user?.email, update]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update);
        toast.success("You removed an order from cart");
      });
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: "Approved",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!update);
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <h2>loading............</h2>;
  }

  return (
    <div className="overflow-x-auto w-full">
      {user && (
        <div className="text-center py-10 text-orange text-3xl font-bold">
          {orders?.length > 0 ? (
            <h2>You have {orders.length} orders</h2>
          ) : (
            <h2>Sorry you didn't order anything yet</h2>
          )}
        </div>
      )}

      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderItem
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
