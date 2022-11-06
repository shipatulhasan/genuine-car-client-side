import React, { useState } from "react";
import { useEffect } from "react";

const OrderItem = ({ order, handleDelete, handleStatus }) => {
  const { service_id, _id, status, name, phone_number } = order;
  const [serviceInfo, setServiceInfo] = useState({});
  // const [update,setUpdate] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service_id}`)
      .then((res) => res.json())
      .then((data) => setServiceInfo(data));
  }, [service_id]);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline text-orange hover:bg-orange border hover:border-orange transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="avatar">
              <div className="w-24 rounded">
                <img
                  src={serviceInfo?.img}
                  alt={serviceInfo.title}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">{serviceInfo.title}</h2>
          </div>
        </div>
      </td>

      <td>
        {name}
        <br />
        <small className="text-slate-500">Phone No: {phone_number}</small>
      </td>
      <td>
        ${serviceInfo?.price}
        <br />
      </td>

      <th>
        <button
          onClick={() => handleStatus(_id)}
          className={`${
            status ? "bg-green-600 " : "bg-red-600"
          } text-slate-100 btn btn-xs`}
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderItem;
