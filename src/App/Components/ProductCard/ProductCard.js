import { favoriteRed, remove } from "../../Assert/Images";

const ProductCard = ({ data, handleFavorite, add }) => {
  return (
    <div className="max-w-sm max-  border rounded-lg shadow bg-gray-800 border-gray-700 relative">
      <div className="absolute bg-white rounded-full p-2 right-2 top-2 cursor-pointer hover:bg-yellow-400 duration-500 flex gap-2" title="Add to favorite" onClick={handleFavorite}>
        <img width="25" src={add ? favoriteRed: remove} alt="add/remove"/>
        <span className="font-semibold">{add ? "ADD": "REMOVE"}</span>
      </div>
      <img className="rounded-t-lg" src={data.strDrinkThumb} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {data.strDrink}
        </h5>
        <h3 className="mb-2 text-md font-bold tracking-tight text-gray-200">
          {data.strCategory}
        </h3>
        <p className="mb-3 font-normal text-gray-400">{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default ProductCard;
