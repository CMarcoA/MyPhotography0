import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the dynamic route parameter

function GalleryDetail() {
  const { id } = useParams(); // Get the gallery item id from the URL

  return (
    <div className="gallery-detail">
      <h2>Gallery Item {id}</h2>
      {/* Render more details about the gallery item based on the id */}
      <p>
        This is the detail page for gallery item {id}. You can fetch specific
        data based on this id.
      </p>
    </div>
  );
}

export default GalleryDetail;
