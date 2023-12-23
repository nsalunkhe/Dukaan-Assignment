import React from "react";
import "./Payout.css";
import Navbar from "./Navbar";
import Help from "../Icons/Help.svg";
import Speaker from "../Icons/Speaker.svg";
import down from "../Icons/down.svg";
import rightArrow from "../Icons/rightArrow.svg";
import Help2 from "../Icons/Help2.svg";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import updown from "../Icons/updown.svg";
import download from "../Icons/download.svg";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
const Payouts = () => {
  const orders = [
    {
      orderId: "#281209",
      status: "Successful",
      transactionId: "131634495747",
      refundDate: "Today,08:45PM",
      orderAmount: "₹1,125.00",
    },
    {
      orderId: "#281208",
      status: "Processing",
      transactionId: "131634495747",
      refundDate: "Yesterday, 3:00 PM",
      orderAmount: "₹1,125.00",
    },
    {
      orderId: "#281207",
      status: "Successful",
      transactionId: "131634495747",
      refundDate: "12 Jul 2023, 03:00 PM",
      orderAmount: "₹1,125.00",
    },
    {
      orderId: "#281206",
      status: "Successful",
      transactionId: "131634495747",
      refundDate: "12 Jul 2023, 03:00 PM",
      orderAmount: "₹1,125.00",
    },

    {
      orderId: "#281205",
      status: "Successful",
      transactionId: "131634495747",
      refundDate: "12 Jul 2023, 03:00 PM",
      orderAmount: "₹1,125.00",
    },
    {
      orderId: "#281204",
      status: "Successful",
      transactionId: "131634495747",
      refundDate: "12 Jul 2023, 03:00 PM",
      orderAmount: "₹1,125.00",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Successful":
        return "#17B31B";
      case "Processing":
        return "#999999";
      default:
        return "black";
    }
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="s1">
          <div className="one">
            <div className="two">
              <img src={Help} alt="help" />
              <p>How it works</p>
            </div>
            <div className="three">
              <div className="sub">
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Search2Icon color="#808080" border="none" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Search features, tutorials, etc."
                  />
                </InputGroup>
              </div>
            </div>
            <div className="four">
              <img src={Speaker} alt="Speaker-Icon" />
              <img src={down} alt="Down arrow-Icon" />
            </div>
          </div>
          <div className="box">
            <div className="box-2">
              <p>Overview</p>
              <div style={{ width: "137px", height: "36px" }}>
                <Select placeholder="This Month">
                  <option
                    value="option1"
                    style={{ width: "137px", height: "36px" }}
                  >
                    Option 1
                  </option>
                  <option
                    value="option2"
                    style={{ width: "137px", height: "36px" }}
                  >
                    Option 2
                  </option>
                  <option
                    value="option3"
                    style={{ width: "137px", height: "36px" }}
                  >
                    Option 3
                  </option>
                </Select>
              </div>
            </div>
            <div className="box-3">
              <div className="b-3-1">
                <div className="b-3-1-1">
                  <div className="b-3-1-1-1">
                    <div className="next">
                      <p>Next Payout</p>
                    </div>
                    <img src={Help2} alt="Question mark" />
                  </div>

                  <div className="b-3-1-1-2">
                    <div className="b-3-1-1-2-1">
                      <p>₹2,312.23</p>
                      <div className="b-3-1-1-2-2">
                        <Link to="/" style={{ textDecoration: "underline" }}>
                          23 orders
                        </Link>
                        <div className="rightarrow">
                          <img src={rightArrow} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nextpaymentdate">
                  <p>Next payout date:</p>
                  <p>Today, 04:00PM</p>
                </div>
              </div>
              <div className="b-3-2">
                <div className="b-3-2-1">
                  <div className="b-3-2-1-1">
                    <div className="next2">
                      <p>Amount Pending</p>
                    </div>
                    <img src={Help} alt="Question mark" />
                  </div>

                  <div className="b-3-2-1-2">
                    <div className="b-3-2-1-2-1">
                      <p>₹92,312.20</p>
                      <div className="b-3-2-1-2-2">
                        <Link to="/" style={{ textDecoration: "underline" }}>
                          13 orders
                        </Link>
                        <div className="rightarrow">
                          <img src={rightArrow} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="b-3-3">
                <div className="b-3-2-1">
                  <div className="b-3-2-1-1">
                    <div className="next2">
                      <p>Amount Processed</p>
                    </div>
                    <img src={Help} alt="Question mark" />
                  </div>

                  <div className="b-3-2-1-2">
                    <div className="b-3-2-1-2-1">
                      <p>₹23.92,312.19</p>
                      <div className="b-3-2-1-2-2">
                        <div className="rightarrow">
                          <img src={rightArrow} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-4">
              <div className="b-4-1">
                <div className="b-4-1-1">
                  <p>Transactions | This Month</p>
                </div>
                <div className="b-4-1-2">
                  <Button variant="ghost">Payouts(22)</Button>
                  <Button>Refunds(2)</Button>
                </div>
              </div>
              <div className="b-4-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div className="b-4-2-1">
                    <div className="sub2">
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <Search2Icon color="#808080" border="none" />
                        </InputLeftElement>
                        <Input type="tel" placeholder="" />
                      </InputGroup>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" className="sort">
                      Sort
                      <img src={updown} alt="" style={{ marginLeft: "6px" }} />
                    </Button>

                    <Button variant="outline" className="down">
                      <img src={download} alt="" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Box>
                    <Table variant="simple">
                      <Thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
                        <Tr bg="#F2F2F2">
                          <Th>Order ID</Th>
                          <Th>Status</Th>
                          <Th>Transaction ID</Th>
                          <Th>Refund date</Th>
                          <Th>Order amount</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {orders.map((order) => (
                          <Tr key={order.orderId}>
                            <Td
                              color="#146EB4"
                              fontSize="14px"
                              fontWeight="500"
                            >
                              {order.orderId}
                            </Td>
                            <Td>
                              <div
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  backgroundColor: getStatusColor(order.status),
                                  display: "inline-block",
                                  marginRight: "8px",
                                }}
                              />

                              {order.status}
                            </Td>
                            <Td>{order.transactionId}</Td>
                            <Td>{order.refundDate}</Td>
                            <Td>{order.orderAmount}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payouts;
