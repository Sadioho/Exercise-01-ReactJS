import React, { useEffect, useState } from "react";
import CartContainer from "../features/CartContainer";
import LeftContainer from "../features/LeftContainer";
import Order from "../features/Order";
import ProductContainer from "../features/ProductContainer";
import NoneData from "../placehoders/NoneData";
import PlacehoderLoading from "../placehoders/PlacehoderLoading";

const Body = ({ ...props }) => {
  const [loading, setloading] = useState(true);
  const [listCategory, setlistCategory] = useState([]);
  const [active, setactive] = useState(null);
  const [dataItem, setdataItem] = useState(null);
  const [layoutOrder, setlayoutOrder] = useState(false);
  const [listOrder, setlistOrder] = useState([]);
  const [sizeActive, setsizeActive] = useState(null);
  const [price_new, setprice_new] = useState(null);
  const [toppingActive, settoppingActive] = useState([]);
  const [amount, setamount] = useState(null);
  const [txtNote, settxtNote] = useState(null);
  const [indexEdit, setindexEdit] = useState(-1);
  const [totalAmount, settotalAmount] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);

  const onClickOutSide = () => {
    setlayoutOrder(false);
    setindexEdit(-1);
    document.body.classList.remove("body");
  };
  const addToCartV2 = () => {
    let txtNote = document.getElementById("form-order").value;
    settxtNote(txtNote);
    const objCart = {
      ...dataItem,
      price_new: price_new * amount,
      amount: amount,
      toppingActive: toppingActive,
      txtNote: txtNote,
      sizeActive: sizeActive,
    };
    addToCart(objCart);
  };
  const editDataProduct = (item, index) => {
    setdataItem(item);
    setsizeActive(item.sizeActive);
    setprice_new(item.price_new / item.amount);
    settoppingActive(item.toppingActive);
    setamount(item.amount);
    settxtNote(item.txtNote);
    setindexEdit(index);
    setlayoutOrder(true);
  };
  const getTotalAmount = (data) => {
    let totalAmounts = 0;
    let totalPrice = 0;
    data.map(
      (item) => (totalAmounts += item.amount) && (totalPrice += item.price_new)
    );
    props.setTotalAmount(totalAmounts);
    settotalAmount(totalAmounts);
    settotalPrice(totalPrice);
  };

  const addToCart = (data) => {
    let flag = 1;
    let arrEdit = [...listOrder];
    if (indexEdit !== -1) {
      arrEdit = arrEdit.filter((item, index) => index !== indexEdit);
    }
    arrEdit.map((item) =>
      item._id === data._id &&
      item.sizeActive === data.sizeActive &&
      JSON.stringify(item.toppingActive) ===
        JSON.stringify(data.toppingActive) &&
      item.txtNote === data.txtNote
        ? ((item.amount += data.amount),
          (item.price_new += data.price_new),
          (flag *= -1))
        : (flag *= 1)
    );

    if (flag === 1) {
      setlistOrder([...arrEdit, data].filter((item) => item.amount > 0));
      getTotalAmount([...arrEdit, data].filter((item) => item.amount > 0));
      localStorage.setItem(
        "listOrder",
        JSON.stringify([...arrEdit, data].filter((item) => item.amount > 0))
      );
    } else {
      setlistOrder([...arrEdit]);
      getTotalAmount([...arrEdit]);
      localStorage.setItem("listOrder", JSON.stringify([...arrEdit]));
    }

    setindexEdit(-1);
    setlayoutOrder(false);
    document.body.classList.remove("body");
  };

  const getSize = (size, price) => {
    setsizeActive(size);
    setprice_new(price);
  };

  const getCheck = (data) => {
    let coppyTopping = [...toppingActive];
    toppingActive.includes(data.code)
      ? (coppyTopping = toppingActive.filter((item) => item !== data.code)) &&
        toppingActive(coppyTopping) &&
        price_new(price_new - data.price)
      : coppyTopping.push(data.code) &&
        toppingActive(coppyTopping) &&
        price_new(price_new + data.price);
  };

  const plusAmount = () => {
    setamount(amount + 1);
  };

  const minusAmount = () => {
    if (amount > 0) {
      setamount(amount - 1);
    }
  };

  const setTxtNote = (data) => {
    settxtNote(data);
  };
  const getDataItem = (data) => {
    setdataItem(data);
    setlayoutOrder(true);
    setprice_new(data.price);
    setamount(1);
    setsizeActive(null);
    settoppingActive([]);
    settxtNote(null);
    document.body.classList.add("body");
  };
  const merge = (data1, data2) => {
    data1.map((category) => {
      let arr = [];
      data2.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.listProduct = arr;
      return category;
    });
    return data1;
  };
  const changeActive = (id) => {
    setactive(id);
  };

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((res) => res.json())
      .then((data1) => {
        if (data1.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/menu")
            .then((res) => res.json())
            .then((data2) => {
              if (data2.status_code !== 500) {
                let newData = merge(data1, data2.data);
                setlistCategory(newData);
                setloading(false);
                setactive(newData[0].id);
              }
            });
        }
      });

    if (
      JSON.parse(localStorage.getItem("listOrder")) &&
      JSON.parse(localStorage.getItem("listOrder")).length > 0
    ) {
      setlistOrder(JSON.parse(localStorage.getItem("listOrder")));
      getTotalAmount(JSON.parse(localStorage.getItem("listOrder")));
    }
  }, []);
  return (
    <div className="body" id="body">
      {loading ? (
        <PlacehoderLoading></PlacehoderLoading>
      ) : listCategory.length <= 0 ? (
        <NoneData></NoneData>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-left">
              <LeftContainer
                dataLeft={listCategory}
                changeActive={changeActive}
                active={active}
              />
            </div>
            <div className="col-product ">
              <ProductContainer
                data={listCategory}
                changeActive={changeActive}
                active={active}
                getDataItem={getDataItem}
              />
            </div>
            <div className="col-right">
              <CartContainer
                listOrder={listOrder}
                editDataProduct={editDataProduct}
                totalAmount={totalAmount}
                totalPrice={totalPrice}
              />
            </div>
          </div>
        </div>
      )}
      {layoutOrder && (
        <Order
          src={dataItem.image}
          product_name={dataItem.product_name}
          onClick={onClickOutSide}
          dataItem={dataItem}
          addToCartV2={addToCartV2}
          getSize={getSize}
          getCheck={getCheck}
          plusAmount={plusAmount}
          minusAmount={minusAmount}
          setTxtNote={setTxtNote}
          txtNote={txtNote}
          sizeActive={sizeActive}
          price_new={price_new}
          toppingActive={toppingActive}
          amount={amount}
        />
      )}
    </div>
  );
};

export default Body;
