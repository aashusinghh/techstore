import React, { useEffect } from "react";
import { useUserContext } from "../../context/user_context";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CancelIcon from "@mui/icons-material/Cancel";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import DownloadIcon from "@mui/icons-material/Download";

const Orders = () => {
  const { getOrders, userOrder, cancelOrder } = useUserContext();
  console.log(userOrder);

  useEffect(() => {
    getOrders();
  }, []);

  if (userOrder.length === 0) {
    return (
      <div className="noOrder flex flex-col justify-center items-center">
        <Inventory2TwoToneIcon style={{ fontSize: "8rem" }} />
        <h2>No Orders to show</h2>;
      </div>
    );
  }

  return (
    <div className="mt-8 py-8 px-20">
      <table className="w-[54vw] border-[1px] rounded-lg border-solid border-[#8c8c8c] border-separate">
        <thead className="text-[1.7rem]">
          <tr className="bg-white border-b-2 h-[6rem]">
            <th width="15%" className="border-x-0">
              Order No.
            </th>
            <th width="25%" className="border-x-0">
              Order Date
            </th>
            <th width="20%" className="border-x-0">
              Price
            </th>
            <th width="10%" className="border-x-0">
              Status
            </th>
            <th width="30%" className="border-x-0">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-[1.3rem]">
          {userOrder.map((order) => (
            <tr
              key={order.order_id}
              className="h-[6rem] border-b-2 bg-white hover:cursor-pointer"
            >
              <td width="15%" className="text-center border-x-0">
                {order.order_id}
              </td>
              <td width="25%" className="text-center border-x-0">
                {new Date(order.date).toLocaleDateString("en-In", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td width="20%" className="text-center border-x-0">
                Rs {order.price}
              </td>
              <td width="10%" className="text-center border-x-0">
                {order.status}
              </td>
              <td
                className="action-btns h-[6rem] flex flex-row justify-center items-center gap-5 border-x-0"
                style={{ borderBottomLeftRadius: "100px" }}
              >
                <div className="">
                  <RemoveRedEyeIcon
                    className="text-green-700"
                    style={{ fontSize: "3.3rem" }}
                  />
                </div>
                {order.status !== "CANCELLED" ? (
                  <div className="">
                    <CancelIcon
                      className="text-red-700"
                      style={{ fontSize: "3rem" }}
                      onClick={() => {
                        cancelOrder(order.order_id);
                      }}
                    />
                  </div>
                ) : (
                  <div className=""></div>
                )}
                <div className="">
                  <DownloadIcon
                    className="text-yellow-400"
                    style={{ fontSize: "3rem" }}
                    onClick={() => {
                      // cancelOrder(order.order_id);
                      window.open(order.receipt_link, "_blank");
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

