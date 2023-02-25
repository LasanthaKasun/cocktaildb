import React from "react";
import { favouriteRed, remove } from "../../Assert/Images";
import PropTypes from "prop-types";

const ProductCard = ({ data, handleFavourite, add }) => {
  return (
    <div
      className="max-w-sm max-  border rounded-lg shadow bg-gray-800 border-gray-700 relative"
      data-testid="productCard"
    >
      <div
        className="absolute bg-white rounded-full p-2 right-2 top-2 cursor-pointer hover:bg-yellow-400 duration-500 flex gap-2"
        title="Add to favourite"
        onClick={handleFavourite}
      >
        <img width="25" src={add ? favouriteRed : remove} alt="add/remove" />
        <span className="font-semibold sm:hidden md:visible lg:visible" data-testid="productCardButton">
          {add ? "ADD" : "REMOVE"}
        </span>
      </div>
      <img className="rounded-t-lg" src={data?.strDrinkThumb} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {data?.strDrink}
        </h5>
        <h3 className="mb-2 text-md font-bold tracking-tight text-gray-200">
          {data?.strCategory}
        </h3>
        <p className="mb-3 font-normal text-gray-400">
          {data?.strInstructions}
        </p>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  data: PropTypes.object.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  add: PropTypes.bool,
};

export default ProductCard;
