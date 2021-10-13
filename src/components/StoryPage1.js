import React from "react";
import ladies from "../img/black-beautiful-ladies-smiling 1.png";
import line from "../img/Vector 3.png";

const StoryPage1 = () => {
  return (
    <div className="story1">
      <div className="shape">
        <img src={ladies} alt="" />
      </div>
      <div className="story1-right">
        <h2 className="title">Tolu & Joy's Experience</h2>
        <p className="rounded-block">customer</p>
        <p className="body">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <a href="./share-your-story" className="story">
          Share your own story!
        </a>
        <img src={line} alt="line" className="vector" />
      </div>
    </div>
  );
};

export default StoryPage1;
