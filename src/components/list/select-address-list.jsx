import { useData } from "../../context";
import { reducerAction } from "../../utility/constants";

const SelectAddressList = ({ address }) => {
  const { dispatch } = useData();
  const { name, street, city, state, country } = address?.address;
  const clickAddress = () =>
    dispatch({
      type: reducerAction.CHANGE_DEFAULT_ADDRESS,
      value: address._id,
    });
  return (
    <>
      <div
        onClick={() => clickAddress()}
        className="select-address-content p-y-1 p-x-1 br-1 m-l-"
      >
        <div className="select-address-name semibold is-3">
          {address.name || name}
        </div>
        <div className="is-3 select-address-modal-para p-dw-1 p-1-r">
          {address.street || street}, {address.city || city},{" "}
          {address.state || state}, {address.country || country}
        </div>
      </div>
    </>
  );
};

export { SelectAddressList };
