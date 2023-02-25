/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteItemAction } from "../Actions/cocktailAction";
import { NavBar, ProductCard, SlideBar } from "../Components";
import { SLIDE_MENU } from "../Config";

const FavoriteList = () => {
  const dispatch = useDispatch();

  const { favorite } = useSelector((state) => state.cocktailData);

  const removeFavoriteItem = (itemId) => {
    dispatch(removeFavoriteItemAction(itemId));
  };

  return (
    <>
      <NavBar title="AMUSED GROUP ASSIGNMENT" />
      <SlideBar data={SLIDE_MENU} count={favorite.length} />
      <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
        <div className="pb-4 flex justify-between gap-5">
          <h1 className="font-bold text-4xl uppercase">My Favorite Cocktail List</h1>
        </div>
        <div class="grid grid-cols-5 gap-5">
          {favorite.map((item, index) => (
            <ProductCard
              data={item}
              key={index}
              handleFavorite={() => removeFavoriteItem(item.idDrink)}
            />
          ))}
        </div>
        {favorite.length === 0 && <div className="font-semibold text-lg text-gray-500 flex justify-center h-40 items-center">Youre favorite cocktail list is empty. Please add new cocktail</div>}
      </div>
    </>
  );
};

export default FavoriteList;
