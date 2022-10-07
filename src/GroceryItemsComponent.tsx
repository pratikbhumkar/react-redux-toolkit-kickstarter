import { useDispatch } from "react-redux";
import { removeItem } from "./store/groceryItemSlice";

type props = {
  groceryItems: string[];
};
export const GroceryItemsComponent = ({ groceryItems }: props) => {
  const dispatch = useDispatch();

  return (
    <>
      {groceryItems.map((item) => (
        <div className="g-item">
          <li>{item}</li>
          <button
            className="remove"
            onClick={() => {
              dispatch(removeItem(item));
            }}
          >
            x
          </button>
        </div>
      ))}
    </>
  );
};
