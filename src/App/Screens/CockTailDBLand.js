/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addFavouriteItemAction,
  getCocktailsAction,
  searchCocktailsAction,
} from "../Actions/cocktailAction";
import { refresh, search } from "../Assert/Images";
import {
  Button,
  LoadingSpinner,
  NavBar,
  ProductCard,
  SlideBar,
  Search,
} from "../Components";
import { SLIDE_MENU } from "../Config";

const CockTailDBLand = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const { list, loading, favourite } = useSelector(
    (state) => state.cocktailData
  );

  useEffect(() => {
    getCocktailItems();
  }, []);

  const getCocktailItems = () => {
    setFilter("");
    dispatch(getCocktailsAction());
  };

  const searchCocktailItems = () => {
    if(filter !== ""){
      dispatch(
        searchCocktailsAction({
          value: filter,
        })
      );
    }else {
      toast.error("Please type your search key")
    }
    
  };

  const addFavouriteItem = (data) => {
    const isExist = favourite.filter((x) => x.idDrink === data.idDrink).length;
    if (isExist === 0) {
      dispatch(addFavouriteItemAction(data));
    } else {
      toast.error(
        data.strDrink +
          " cocktail already in your favourite list, please try antother one"
      );
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <NavBar title="AMUSED GROUP ASSIGNMENT" />
      <SlideBar data={SLIDE_MENU} count={favourite.length} />
      <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
        <div className="pb-4 flex justify-between gap-5">
          <Search
            title="Search"
            icon={search}
            placeholder="Search more cocktails"
            value={filter}
            onChangeText={(e) => setFilter(e.target.value)}
            onSearchAction={() => searchCocktailItems()}
          />
          <Button
            title="Refresh"
            icon={refresh}
            onPress={() => getCocktailItems()}
          />
        </div>
        <div className="grid grid-cols-5 gap-5">
          {list.map((item, index) => (
            <ProductCard
              data={item}
              key={index}
              handleFavourite={() => addFavouriteItem(item)}
              add={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CockTailDBLand;
