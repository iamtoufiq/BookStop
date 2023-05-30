import { useAuth, useData } from "../../../context";
import { deleteAddress } from "../../../server-requests/server-requests";

const AddressBlock = ({ addressData, setEditAddressID }) => {
  console.log("value of addresssdata is ");
  console.log(addressData.address);
  const { token } = useAuth();
  const { dispatch } = useData();
  const { name, street, city, state, zipCode, country, mobile } =
    addressData?.address;
  const { _id } = addressData;
  const clickDelete = () => {
    deleteAddress(_id, token, dispatch);
  };
  const clickEdit = () => {
    setEditAddressID(addressData._id);
    console.log(addressData._id);
  };
  const clickDefault = () => {};
  return (
    <div className="address-blocks elevated br-2 li-shadow">
      <div className="textbox p-up-4 p-x-4">
        {name}
        {console.log(name)}
        <br />
        <hr />
        {`${street}, ${city}, ${state}, ${country}, ${zipCode}`}
        <br />
        {`Phone Number - ${mobile}`}
      </div>
      <div className="flex-r-w">
        <i
          //  onClick={clickEdit}
          className="fas fa-edit m-l-4 is-4 m-dw-3"
        ></i>
        <i
          onClick={clickDelete}
          className="m-l-4 is-4 m-dw-3 fa-solid fa-trash-can"
        />
      </div>
    </div>
  );
};

export { AddressBlock };
