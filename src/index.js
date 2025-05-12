import React from "react";
import ReactDOM from "react-dom/client";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { PagesTimeline } from "polotno/pages-timeline";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel, DEFAULT_SECTIONS } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";
import { CustomToolbar } from "./CustomToolbar";
import { CustomPhotosSection } from "./components/CustomPhotosSection";
import { CustomTextSection } from "./components/CustomTextSection"; // Add this import

import "@blueprintjs/core/lib/css/blueprint.css";

import { createStore } from "polotno/model/store";
import Toolbar from "polotno/toolbar/toolbar";

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});
const page = store.addPage();

// Define sections to use in SidePanel
const sections = [
  CustomPhotosSection,
  CustomTextSection, 
  ...DEFAULT_SECTIONS.filter(
    (section) => section.name !== "photos" && section.name !== "text"
  ),
];

export const App = ({ store }) => {
  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} defaultSection="photos" />
      </SidePanelWrap>
      <WorkspaceWrap>
        <CustomToolbar store={store} />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);