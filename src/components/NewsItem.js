import React from "react";
import DefaultImg from "./NewsApp_placeholder.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-dark"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>

        <img
          src={!imageUrl ? DefaultImg : imageUrl}
          className="card-img-top"
          alt="card"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-dark">
              By {!author ? "Unknow" : author} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
