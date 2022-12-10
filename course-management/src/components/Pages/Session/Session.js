import React from "react";
import "./Session.css";
import { useEffect, useState } from "react";
import { getListSessions } from '../../../services/localstorage';
const Session = (props) => {
  const sessions = props.sessions;

  const [session,setSession] = useState([]);

  useEffect(() => {
    setSession(getListSessions());
  },[])
  return (
    <div>
       {/* {sessions.length  > 0  ? (
        <div className="title-add-course2">
            <p>
              {sessions}
              <a href="#" className="fa fa-trash"></a>
              <a href="#" className="fa fa-pencil"></a>
            </p>
          </div>
       ) : (
        <div>No employee</div>
       )} */}
      {sessions.map((item) => {
        console.log(item);
        return (
          <div className="title-add-course2">
            <p>
              {item.sessionName}
              <a href="#" className="fa fa-trash"></a>
              <a href="#" className="fa fa-pencil"></a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Session;
