import React from "react";
import TuitStats from "./tuit-stats";
import { MdVerified } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import {RxCross2} from 'react-icons/rx'

const TuitItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla.png",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={40}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
        {/* <i className="bi bi-x float-end" onClick={() => deleteTuitHandler(tuit._id)}></i> */}
        <RxCross2 className="float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
          <div>
            {tuit.userName} <MdVerified color="blue" />
            {" " + tuit.handle} . {tuit.time}{" "}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
