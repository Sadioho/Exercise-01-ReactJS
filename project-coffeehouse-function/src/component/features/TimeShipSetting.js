import React, { useContext, useEffect, useRef, useState } from "react";
import Btn from "../common/Btn";
import { currentDate, currentTime, timeDefault } from "../Helpers";
import UserContext from "../Helpers/UserContext";

const TimeShipSetting = ({ ...props }) => {
  const [openTimeOrder, setOpenTimeOrder] = useState(false);
  const [dateSelect, setDateSelect] = useState(null);
  const [active, setActive] = useState(false);
  const contextType = useContext(UserContext);
  const dataDate = currentDate();
  const dataTime = currentTime();
  const dateTimeDefault = timeDefault();
  const container = useRef();
  const { setOpenDrownTime } = props;
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const getShipNow = () => {
    setOpenDrownTime();
    contextType.setTimeSetting(contextType.dateNow, contextType.timeNow);
  };
  const getSelect = () => {
    let elementSelectDate = document.getElementById("date");
    setDateSelect(elementSelectDate.value);
  };

  const clickTimer = () => {
    let elementDate = document.getElementById("date");
    let elementTime = document.getElementById("time");
    contextType.setTimeSetting(elementDate.value, elementTime.value);
    if (
      elementTime.value === contextType.timeNow &&
      elementDate.value === contextType.dateNow
    ) {
      setActive(false);
    } else {
      setOpenTimeOrder(false);
      setActive(true);
    }
  };
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpenDrownTime();
    }
  };

  const handleTimerOrder = () => {
    setOpenTimeOrder(!openTimeOrder);
  };

  return (
    <div className="delivery" ref={container}>
      <div className="delivery__button" onClick={getShipNow}>
        <i className=" delivery__icon far fa-clock"></i>
        <span>GIAO NGAY</span>
        {!active && (
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              stroke="#000"
              strokeWidth="1.1"
              points="4,10 8,15 17,4"
            />
          </svg>
        )}
      </div>
      <div className={`delivery__button`} onClick={handleTimerOrder}>
        <i className=" delivery__icon far fa-calendar"></i>
        <span> Thời gian đặt hàng </span>
        {active === true && (
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              stroke="#000"
              strokeWidth="1.1"
              points="4,10 8,15 17,4"
            />
          </svg>
        )}
      </div>
      {openTimeOrder && (
        <div className="delivery__dropdown">
          <div className="delivery__dropdown-item">
            <label htmlFor="date">Ngày đặt</label>
            <select name="date" id="date" onChange={getSelect}>
              {dataDate.map((item, index) =>
                item === contextType.dateNow ? (
                  dataTime.length !== 0 && (
                    <option key={index} value={item}>
                      HÔM NAY
                    </option>
                  )
                ) : (
                  <option key={index} value={item}>
                    NGÀY {item}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="delivery__dropdown-item">
            <label htmlFor="time">Thời gian đặt</label>
            <select name="time" id="time">
              {dateSelect === null || dateSelect === contextType.dateNow ? (
                <>
                  {dataTime.length !== 0 ? (
                    <>
                      <option value={contextType.timeNow}>
                        GIAO 15-30 PHÚT
                      </option>
                      {dataTime.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </>
                  ) : (
                    <>
                      {dateTimeDefault.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <>
                  {dateTimeDefault.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <Btn
            text="Hẹn giờ ngay"
            className="btn-orange btn-size-lager"
            onClick={clickTimer}
          />
        </div>
      )}
    </div>
  );
};

export default TimeShipSetting;
