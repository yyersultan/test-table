import { useState } from "react";
import { Link } from "react-router-dom";
import { sessions, days } from "../../static.json";
import { Loader } from "../UI/Loader/Loader";

export const BookableDetail = ({ bookable }) => {
  const [showInfo, setShowinfo] = useState(false);
  if(!bookable) return <Loader />
  return (
    <div className="row2">
      <div className="content">
        <div className="blockHeader">
          <h2>{bookable.title}</h2>
          <div>
            <input type={"checkbox"} onChange={() => setShowinfo(!showInfo)} />
            <label>Show Details</label>
            <Link to={`/bookables/edit/${bookable.id}`} className="btn edit">
              Edit
            </Link>
          </div>
        </div>
        <div className="BlockInfo">
          <div>{bookable.notes}</div>
          {showInfo && (
            <div style={{ marginTop: "30px" }}>
              <h3>Availability</h3>
              <hr />
              <div className="BlockInfoList">
                <ul>
                  {bookable.sessions.map((s, i) => {
                    return <li key={i}>{sessions[s]}</li>;
                  })}
                </ul>
                <ul>
                  {bookable.days.map((d, i) => {
                    return <li key={i}>{days[d]}</li>;
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
