import React from "react";
import "./Session.css";
import { useEffect, useState } from "react";
import { getListSessions } from '../../../services/localstorage';
const Session = (props) => {
  const { sessions, handleDelete } = props;

  return (
    <div>
      {sessions.map((item, i) => {
        return (
          <div className="title-add-course2">
            <p>
              {item.sessionName}
              <div
                onClick={() => handleDelete(i)}
                href="#"
                className="fa fa-trash"
              ></div>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Session;
