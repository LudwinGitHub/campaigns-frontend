import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
    <HomePageHeader/>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.name +
                " , " +
                data.keyWords +
                " ," +
                data.bidAmount +
                ", " +
                data.campaignFund + 
                ", " + 
                data.town + 
                ", " + 
                data.radius + 
                "KM," + 
                data.status
                }
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your Campaign Tracker</h2>
      </header>
    );
  };

const Stock = ({ name, keyWords, bidAmount, campaignFund, town, radius, status }) => {
    if (!name) return <div />;
    return (
      <table className="tableStyle">
        <tbody>
          <tr>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h5>{keyWords}</h5>
            </td>
            <td>
              <h4>{bidAmount}</h4>
            </td>
            <td>
              <p>{campaignFund}</p>
            </td>
            <td>
                <p>{town}</p>
            </td>
            <td>
                <p>{radius}</p>
            </td>
            <td>
                <p>{status}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };