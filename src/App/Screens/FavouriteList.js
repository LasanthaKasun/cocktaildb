/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteItemAction } from "../Actions/cocktailAction";
import { NavBar, ProductCard, SlideBar } from "../Components";
import { SLIDE_MENU } from "../Config";

const FavouriteList = () => {
  const dispatch = useDispatch();

  const { favourite } = useSelector((state) => state.cocktailData);

  const removeFavouriteItem = (itemId) => {
    dispatch(removeFavouriteItemAction(itemId));
  };

  return (
    <>
      <NavBar title="AMUSED GROUP ASSIGNMENT" />
      <SlideBar data={SLIDE_MENU} count={favourite.length} />
      <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
        <div className="pb-4 flex justify-between gap-5">
          <h1 className="font-bold text-4xl uppercase">My Favourite Cocktail List</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5">
          {favourite.map((item, index) => (
            <ProductCard
              data={item}
              key={index}
              handleFavourite={() => removeFavouriteItem(item.idDrink)}
              add={false}
            />
          ))}
        </div>
        {favourite.length === 0 && <div className="font-semibold text-lg text-gray-500 flex justify-center h-40 items-center">Youre favourite cocktail list is empty. Please add new cocktail</div>}
      </div>
    </>
  );
};

export default FavouriteList;
