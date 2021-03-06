import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import { CartContext } from "../../context/cartContext";
import Styles from "./style.module.scss";

function TotalPricePurchased({ totalPriceFetched }) {
  // context
  const { totalPrice, products } = useContext(CartContext);
  return (
    <>
      <div className={Styles.titleWrapper}>
        <h2 style={{ color: "#96e43e" }}>
          ${" "}
          {Number(totalPrice).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
          <sup>({products.length})</sup>
        </h2>
        <img src="/assets/up.svg" alt="" className="icon" />
      </div>
      <p className={`${Styles.subtitle} uppercase`}>Total Price Purchase</p>
      <ProgressBar
        value={Number((totalPrice / totalPriceFetched) * 100).toFixed(0)}
        barColor="#96e43e"
      />
    </>
  );
}

// default prop values for totalPircePurchase
TotalPricePurchased.defaultProps = {
  totalPriceFetched: 10000,
};

// proptypes for totalPircePurchase
TotalPricePurchased.propTypes = {
  totalPriceFetched: PropTypes.number,
};

export default TotalPricePurchased;
