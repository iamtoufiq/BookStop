import React from "react";
import { useData } from "../../../context";
import { useNavigate } from "react-router-dom";

const HomepageFeatures = () => {
  const { dataState, dispatch } = useData();
  let navigate = useNavigate();
  const categoryClickHandler = (category) => {
    dispatch({
      type: "CLEAR_FILTER",
    });
    if (category === "stock") {
      dispatch({
        type: "CATEGORY_STOCKS",
        value: true,
      });
    }
    if (category === "forex") {
      dispatch({
        type: "CATEGORY_FOREX",
        value: true,
      });
    }
    if (category === "crypto") {
      dispatch({
        type: "CATEGORY_CRYPTO",
        value: true,
      });
    }
    if (category === "charting") {
      dispatch({
        type: "CATEGORY_CHARTING",
        value: true,
      });
    }
    if (category === "investment") {
      dispatch({
        type: "CATEGORY_INVESTMENT",
        value: true,
      });
    }
    navigate(`/productListing`);
  };

  return (
    <>
      <section className="product-showcase-homepage p-x-2">
        <div className="grid-2 m-y-6 product-grid-homepage">
          <div className="card-one m-dw-4 m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head">
                <div className="card-image has-transparent">
                  <img
                    src="images/muscle.png"
                    alt=""
                    className="img-responsive card-image-img width-80"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Enhance the Fundamentals</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Learn the fundamentals to better your grasp of fundamental
                    analysis. There are several books available for purchase
                    that may teach you about the many phases and levels of
                    fundamental analysis.
                  </p>
                </div>
                <button
                  onClick={() => categoryClickHandler("stock")}
                  className="btn-primary m-dw-1 btn-small shadow btn-w-icon"
                >
                  <i className="fas fa-shopping-cart" />
                  View Books
                </button>
              </div>
            </div>
          </div>
          <div className="card-two m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/imagesbitcoins.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Cryptocurrencies</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Read our latest and modern books on the subject to learn
                    more about trading cryptocurrencies. These books cover
                    buying and selling cryptocurrencies to holding them for long
                    or short periods of time.
                  </p>
                </div>

                <button
                  onClick={() => categoryClickHandler("crypto")}
                  className="btn-primary m-dw-1 btn-small shadow btn-w-icon"
                >
                  <i className="fas fa-shopping-cart" />
                  View Books
                </button>
              </div>
            </div>
          </div>
          <div className="card-two m-dw-4 m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/traders.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Learn how to read charts</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Technical analysis is what drives trading. To learn how to
                    read charts and recognise chart patterns so you can trade
                    them for a profit, use the books we've selected.
                  </p>
                </div>
                <button
                  onClick={() => categoryClickHandler("charting")}
                  className="btn-primary m-dw-1 btn-small shadow btn-w-icon"
                >
                  <i className="fas fa-shopping-cart" />
                  View Books
                </button>
              </div>
            </div>
          </div>
          <div className="card-two m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/calm.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Investment Strategies</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Learn a couple of the trading strategies utilised by some of
                    the most successful traders in the globe then apply them to
                    your advantage when trading.
                  </p>
                </div>
                <button
                  onClick={() => categoryClickHandler("investment")}
                  className="btn-primary m-dw-1 btn-small shadow btn-w-icon"
                >
                  <i className="fas fa-shopping-cart" />
                  View Books
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid-4 p-up-2 has-accent">
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/100-percent.png" />
          </div>
          <div className="subtitle m-l-3 regular is-dark is-3">Original</div>
        </div>
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/delivery-truck.png" />
          </div>
          <div className="subtitle is-dark regular is-3">Quick delivery</div>
        </div>
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/delivery.png" />
          </div>
          <div className="subtitle is-dark regular is-3">Available on COD</div>
        </div>
        <div className="features center-x">
          <div className="card-image has-transparent">
            <img src="images/coupon.png" />
          </div>
          <div className="subtitle is-dark regular m-l-3 is-3">Discount</div>
        </div>
      </div>
    </>
  );
};

export { HomepageFeatures };
