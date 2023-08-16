import React, { useState, useEffect } from "react";
import axios from "axios"; // fetch api from server 
import "./ImageGallery.scss"; // internal file 
import { Link } from "react-router-dom"; // npm install react-router-dom , dom inside react

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
  useEffect(() => {
    const fetchImage = async () => {
        try {
            const getimage = await axios.get(url);
      setImages(getimage.data.photos);
        } catch (error) {
            console.log("you have got an error while fetching ", error);
        }
     
    };
    fetchImage();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset(prevOffset => prevOffset + 20); 
  };

  return (
    <>

    <h1>Gallery View</h1>
    <div className="image-gallery">
      {images.map((image, index) =>(
        <Link key={index} to={`/gallary/${image.id}`}>
          <div className="image-container">
            <img src={image.url} alt={`Image ${index}`} />
          </div>
        </Link>
      ))}
    </div>
    <button className="next-btn" onClick={handleLoadMore}>Load More</button>
  </>
  );
};

export default ImageGallery;