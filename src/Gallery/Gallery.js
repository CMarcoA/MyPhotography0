import "./Gallery.css"; // Import the new CSS for gallery styling

import portf1 from "./portf1.jpeg"; // Import the image from the Gallery folder

function Gallery() {
  return (
    /* Wrap everything in a single parent */
    <div className="gallery-container">
      <div className="spacer" style={{ height: "100px" }}></div>
      <div className="gallery-title">
        <h1 className="title-main">Visual Archive</h1>
        <p className="title-sub">A Collection of Cinematic Memories</p>
      </div>
      <div className="gallery">
        <div className="gallery-item">
          <img src={portf1} alt="Image" className="gallery-image" />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src="image-placeholder.png"
            alt="Image"
            className="gallery-image"
          />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src="image-placeholder.png"
            alt="Image"
            className="gallery-image"
          />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>

        {/* Repeat the gallery items as needed */}
        <div className="gallery-item">
          <img
            src="image-placeholder.png"
            alt="Image"
            className="gallery-image"
          />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src="image-placeholder.png"
            alt="Image"
            className="gallery-image"
          />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="gallery-item">
          <img
            src="image-placeholder.png"
            alt="Image"
            className="gallery-image"
          />
          <div className="gallery-info">
            <h4>2/28/25</h4>
            <h3>Eye Museum</h3>
            <p>
              Eye Filmmuseum is a film archive, museum, and cinema in Amsterdam
              that presents and screens both Dutch and foreign films screened in
              the Netherlands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
