import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  // const [images, setImages] = useState([]);
  const images = data;
  const [showLightbox, setShowLightbox] = useState(false);
  const [clickedImage, setClickedImage] = useState({});

  const handleClick = (image) => {
    setShowLightbox(true);
    setClickedImage(image);
  };

  useEffect(() => {
    // const getImages = async () => {
    //   const res = await fetch("https://picsum.photos/v2/list");
    //   const data = await res.json();
    //   setImages(data);
    console.log(data);
    // };
    // getImages();
  }, []);

  if (!images) {
    return <h1 style={{ color: "white" }}>Images Loading...</h1>;
  } else
    return (
      <div className="App">
        <header>
          <h1>Image Gallery</h1>
        </header>
        <main>
          <div className="row">
            {images.map((image) => (
              <img
                src={image.download_url}
                alt={`random-image ${image.id}`}
                width={"100%"}
                height={"250px"}
                className="image"
                style={{ opacity: showLightbox && "0.2" }}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
          {showLightbox && (
            <div className="lightbox-wrapper">
              <div className="lightbox">
                <span onClick={() => setShowLightbox(false)} className="close">
                  &times;
                </span>
                <img
                  src={clickedImage.download_url}
                  alt={`random-image ${clickedImage.id}`}
                  className="lightbox-image"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    );
}

export default App;
