import React, { useState, useEffect } from "react";
import "./DiscountForm.css";

function DiscountForm({
  children,
  obj,
  url,
  price,
  disconts,
  priceDiscount,
  modeSelect,
  setDiscount,
  setDiscountPercentage,
  setPric,
  priceBezScidki,
}) {
  useEffect(() => {
    setDiscounts("");
    setDiscountPercentage("");
    setPrice("");
  }, [modeSelect]);

  const [total, setTotal] = useState("");
  const [discount, setDiscounts] = useState("");
  const [prices, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      setTotal(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (total?.data?.discount) {
      setDiscounts(total.data.discount);
      setPrice(total.data.price);
    }
    if (total?.data?.price) {
      setDiscountedPrice(total.data.price);
    }
  }, [total]);

  useEffect(() => {}, []);
  return (
    <form className="inlinecalculator" onSubmit={handleSubmit}>
      <div className="centre-top testcentre">{children}</div>

      <div id="result">
        <p className="vsize">{}</p>

        <p className="resultstring">
          <span id="resultimt">
            {disconts}
            {discount}
          </span>
          <span id="resultimt">
            {priceDiscount}
            {prices}
          </span>

          <span id="resultimt">
            {priceBezScidki}
            {discountedPrice}
          </span>
        </p>
      </div>

      <div className="btn-top">
        <button className="btns bst" onClick={handleSubmit}>
          Расчитать
        </button>
      </div>
    </form>
  );
}

export default DiscountForm;
