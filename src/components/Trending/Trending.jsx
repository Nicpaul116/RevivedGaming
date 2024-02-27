import React from "react";
import { users } from "../../containers/headercontent/content";

const Trending = () => {
  return (
    <div>
      <div className="content3_info1">
        <h2>
          <em>Trending</em>
        </h2>
        <div className="content3_users">
          {users.map((User, index) => {
            return (
              <div className="user_wrap" key={index}>
                <div className="user_img">
                  <img src={User.image} alt="#" />
                </div>
                <div className="user_content">
                  <h6>{User.heading}</h6>
                  <h4>{User.topic}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
