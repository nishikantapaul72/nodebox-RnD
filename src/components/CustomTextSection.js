import React from "react";
import { SectionTab } from "polotno/side-panel";
import { MdTextFields } from "react-icons/md";

// Define the text options with their properties
const textOptions = [
  {
    name: "Create body text",
    type: "text",
    fontSize: 20,
    fontWeight: "normal",
    text: "Body Text",
    key: "bodytext",
  },
];

// Custom Text Section component
export const CustomTextSection = {
  name: "text",
  Tab: (props) => (
    <SectionTab name="Text" {...props}>
      <MdTextFields />
    </SectionTab>
  ),
  Panel: ({ store }) => {
    return (
      <div style={{ height: "100%", padding: "10px" }}>
        {textOptions.map((option) => (
          <div
            key={option.key}
            style={{
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={async () => {
              await store.activePage.addElement({
                type: option.type,
                text: option.text,
                fontSize: option.fontSize,
                fontWeight: option.fontWeight,
                x: 50, // Position on canvas
                y: 50,
              });
            }}
          >
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    );
  },
};
