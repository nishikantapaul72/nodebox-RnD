import React from "react";
import { SectionTab } from "polotno/side-panel";
import { MdImage } from "react-icons/md";

// Import all local images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import polotnoImage from "../images/polotno.png";

// Create array of local images with metadata
const localImages = [
  {
    url: image1,
    preview: image1,
    name: "Image 1",
    key: "image1",
  },
  {
    url: image2,
    preview: image2,
    name: "Image 2",
    key: "image2",
  },
  {
    url: image3,
    preview: image3,
    name: "Image 3",
    key: "image3",
  },
  {
    url: image4,
    preview: image4,
    name: "Image 4",
    key: "image4",
  },
  {
    url: polotnoImage,
    preview: polotnoImage,
    name: "Polotno",
    key: "polotno",
  },
];

// Custom Photos Section component
export const CustomPhotosSection = {
  name: "photos",
  Tab: (props) => (
    <SectionTab name="Photos" {...props}>
      <MdImage />
    </SectionTab>
  ),
  Panel: ({ store }) => {
    return (
      <div style={{ height: "100%", padding: "10px" }}>
        {localImages.map((image) => (
          <div
            key={image.key}
            style={{
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              cursor: "pointer",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
            onClick={async () => {
              await store.activePage.addElement({
                type: "image",
                src: image.url,
              });
            }}
          >
            <span>{image.name}</span>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image.preview})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0,
                transition: "opacity 0.3s",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
            />
          </div>
        ))}
      </div>
    );
  },
};
