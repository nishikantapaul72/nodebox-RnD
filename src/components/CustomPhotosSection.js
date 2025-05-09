import React from "react";
import { ImagesGrid } from "polotno/side-panel";
import { IconButton } from "polotno/side-panel";
import { MdImage } from "react-icons/md";

// Import all local images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

// Create array of local images with metadata
const localImages = [
  {
    url: image1,
    preview: image1,
    name: "Office Desk",
    category: "workspace",
  },
  {
    url: image2,
    preview: image2,
    name: "Mountain View",
    category: "nature",
  },
  {
    url: image3,
    preview: image3,
    name: "City Sunset",
    category: "urban",
  },
  {
    url: image4,
    preview: image4,
    name: "Beach Scene",
    category: "nature",
  },
];

// Custom Photos Section
export const CustomPhotosSection = {
  name: "photos",
  Tab: ({ onClick, active }) => (
    <IconButton
      onClick={onClick}
      active={active}
      name="Photos"
      icon={MdImage}
    />
  ),
  Panel: ({ store }) => {
    return (
      <div style={{ height: "100%" }}>
        <ImagesGrid
          images={localImages}
          onSelect={(image) => {
            store.activePage.addElement({
              type: "image",
              src: image.url,
            });
          }}
        />
      </div>
    );
  },
};
