import React from "react";
import woman from "../img/woman-shoppingbag-card 1.png";
import line from "../img/Vector 3.png";

const StoryPage2 = () => {
  return (
    <div className="story2">
      <div className="shape2">
        <img src={woman} alt="" className="woman" />
      </div>
      <div className="story2-left">
        <h2 className="title">Josiah’s Experience</h2>
        <p className="rounded-block2">vendor</p>
        <p className="body2">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <a href="./share-your-story" className="share-2">
          Share your own story!
        </a>
        <img src={line} alt="line" className="vector" />
      </div>
    </div>
  );
};

export default StoryPage2;
