import uuid from "react-uuid";
export const getListSessions = () => {
    if (!localStorage["sessions"]) {
      localStorage["sessions"] = "[]";
    }
  
    let sessions = localStorage["sessions"];
    sessions = JSON.parse(sessions);
    return sessions;
  };

  export const addSession = (ss) => {
    const sessions1 = getListSessions();
    sessions1.push({id: uuid,...ss});
    localStorage["sessions"] = JSON.stringify(sessions1);
  };
  