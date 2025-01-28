import React, { useEffect } from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="orders">
        <table>
          <thead>
            <tr className="headcol">
              <th width="20%">Order No.</th>
              <th width="30%">Order Date </th>
              <th width="30%">Price </th>
              <th width="30%">Customer </th>
              <th width="10%">Status </th>
              <th width="15%">Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
            <tr>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
              <td>Dummy</td>
            </tr>
          </tbody>
          {/* <tbody>
            {userOrder.map((order) => (
              <tr key={order.order_id}>
                <td width="20%">{order.order_id}</td>
                <td width="30%">
                  {new Date(order.date).toLocaleDateString("en-In", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td width="30%">Rs {order.price} </td>
                <td width="10%">{order.status} </td>
                <td className="action-btns">
                  {" "}
                  <Button
                    title="View"
                    className="btn-sm"
                    style={{ backgroundColor: "green" }}
                  >
                    <RemoveRedEyeIcon fontSize="large" />{" "}
                  </Button>
                  {order.status !== "CANCELLED" ? (
                    <Button
                      title="Cancel"
                      className="btn-sm"
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        cancelOrder(order.order_id);
                      }}
                    >
                      <CancelIcon fontSize="large" />
                    </Button>
                  ) : null}
                  <Button
                    title="Download Reciept"
                    className="btn-sm"
                    // style={{ backgroundColor: "red" }}
                    onClick={() => {
                      // cancelOrder(order.order_id);
                      window.open(order.receipt_link, "_blank");
                    }}
                  >
                    <DownloadIcon fontSize="large" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 5rem;
  font-size: 1.7rem;
  display: flex;

  .orders {
    margin-top: 10rem;
    height: auto;
    width: 60%;
  }
  table {
    border: none;
    letter-spacing: 0.13rem;
    border-width: 0;
  }
  .headcol {
    background: #dbdbdb61;
  }
  .thead tr {
    background: #dbdbdb61;
  }
  table tr:nth-child(even) {
    background: #dbdbdb61;
  }
  table tr:nth-child(odd) {
    background: white;
  }
  table tr:hover {
    cursor: pointer;
  }

  th,
  td {
    padding: 8px 10px;
    text-align: center;
  }
`;
export default Dashboard;
