import React, { useState } from "react";
import { useData } from "../../../context";
import { reducerAction } from "../../../utility/constants";

const Filters = () => {
  const {
    dataState: {
      filters: { range, category, rating, sort },
    },
    dispatch,
  } = useData();

  const [hideFilter, setHideFilter] = useState(true);

  const showFilterClick = () => {
    setHideFilter((prevState) => !prevState);
  };

  const filterClickHandler = (dispatchArguments) => {
    dispatch(dispatchArguments);
  };

  const clearFilters = () => {
    dispatch({ type: reducerAction.CLEAR_FILTER });
  };

  return (
    <div
      className={`filter-menu ${
        hideFilter ? "hide-filter-menu" : ""
      } p-x-4 p-up-2 dk-shadow`}
    >
      <div className="filter-menu-responsive flex-row align-center pointer space-between">
        <div onClick={showFilterClick} className="title is-dark">
          Filters
        </div>
        <p onClick={clearFilters} className="link-secondary m-up-1 is-2">
          Clear all
        </p>
      </div>
      <div className="quantity-slider">
        <div className="title semibold">Price Range</div>
        <div className="slider-range">
          <span className="slider-range-min">200</span>
          <span className="slider-range-mid">1000</span>
          <span className="slider-range-max">2000</span>
        </div>
        <input
          type="range"
          step={200}
          min={200}
          max={2000}
          className="slider"
          list="tickmarks"
          value={range}
          onChange={(e) =>
            filterClickHandler({
              type: reducerAction.SELECT_RANGE,
              value: Number(e.target.value),
            })
          }
        />
        <datalist id="tickmarks">
          <option value="200" />
          <option value="400" />
          <option value="600" />
          <option value="800" />
          <option value="1000" />
          <option value="1200" />
          <option value="1400" />
          <option value="1600" />
          <option value="1800" />
          <option value="2000" />
        </datalist>
      </div>
      <div className="list-container">
        <div className="title semibold">Category</div>
        <ol className="list list-none">
          {["Stocks", "Forex", "Crypto", "Charting", "Investment"].map(
            (cat) => (
              <li className="list-items" key={cat}>
                <label className="is-light form-checkbox is-2">
                  <input
                    type="checkbox"
                    checked={category.includes(cat)}
                    onChange={(e) =>
                      filterClickHandler({
                        type: reducerAction[`CATEGORY_${cat.toUpperCase()}`],
                        value: e.target.checked,
                      })
                    }
                  />
                  {cat}
                </label>
              </li>
            )
          )}
        </ol>
      </div>
      <div className="list-container">
        <div className="title semibold">Rating</div>
        <ol className="list list-none">
          {[4, 3, 2, 1].map((num) => (
            <li className="list-items" key={num}>
              <label className="form-radio-label">
                <input
                  type="radio"
                  checked={rating === num}
                  onChange={() =>
                    filterClickHandler({
                      type: reducerAction.SELECT_RATING,
                      value: num,
                    })
                  }
                  name="opinion"
                />
                <i />
                <span className="form-radio-button-text is-2 is-medium">
                  {num} Star &amp; above
                </span>
              </label>
            </li>
          ))}
        </ol>
      </div>
      <div className="list-container">
        <div className="title semibold">Sort By</div>
        <ol className="list list-none">
          {[
            {
              label: "Price low to high",
              value: reducerAction.SORT_LOW_TO_HIGH,
            },
            {
              label: "Price high to low",
              value: reducerAction.SORT_HIGH_TO_LOW,
            },
          ].map(({ label, value }) => (
            <li className="list-items" key={value}>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="sort"
                  checked={sort === value}
                  onChange={() => filterClickHandler({ type: value })}
                />
                <i />
                <span className="form-radio-button-text is-light is-2">
                  {label}
                </span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export { Filters };
