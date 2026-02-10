import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items = [] }) => {

  console.log("items ====", items);

  const dispatch = useDispatch();

  const handleAddItems = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const { id, name, description, imageId, price, defaultPrice, ratings } =
          item?.card?.info || {};

        const rating = ratings?.aggregatedRating?.rating;

        return (
          <div
            key={`${id}-${index}`}
            className="flex gap-10 border-b border-border pb-6 last:border-b-0"
          >
            {/* ================= Left Content ================= */}

            <div className="flex-1 space-y-2">
              <h4 className="text-base font-semibold text-text">{name}</h4>

              <p className="text-sm font-medium text-text">
                ₹ {(defaultPrice || price) / 100}
              </p>

              <>
                <span className="flex items-center gap-1 font-semibold text-success">
                  ★ {rating}
                </span>
              </>

              <p className="text-sm text-muted line-clamp-2">
                {description}{" "}
                <button className="text-sm font-semibold cursor-pointer text-primary hover:underline">
                  Read more
                </button>
              </p>
            </div>

            {/* ================= Right Image ================= */}
            {imageId && (
              <div className="relative h-[150px] w-[150px] flex-shrink-0  bg-bg">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  alt={name}
                  src={
                    imageId.startsWith("http")
                      ? imageId
                      : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`
                  }
                />
                <button
                  onClick={() => handleAddItems(item)}
                  className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-2.5 py-2 min-w-[100px] rounded-sm text-success border border-gray-400 cursor-pointer font-bold text-md"
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
