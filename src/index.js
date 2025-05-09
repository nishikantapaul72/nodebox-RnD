import React from "react";
import ReactDOM from "react-dom/client";

// Import from polotno packages
import { createStore } from "@polotno/core/model/store";
import { Toolbar } from "@polotno/core/toolbar/toolbar";
import { ZoomButtons } from "@polotno/core/toolbar/zoom-buttons";
import { PagesTimeline } from "@polotno/core/timeline";
import { SidePanel } from "@polotno/core/side-panel";
import { Workspace } from "@polotno/core/canvas/workspace";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "@polotno/workspace/src";

// Import sections
import {
  TemplatesSection,
  TextSection,
  ElementsSection,
  UploadSection,
  BackgroundSection,
  LayersSection,
} from "@polotno/core/side-panel/sections";

// Local imports
import { CustomPhotosSection } from "./components/CustomPhotosSection";
import { CustomToolbar } from "./CustomToolbar";

// Styles
import "@blueprintjs/core/lib/css/blueprint.css";

// Initialize store
const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
  showCredit: true,
});
const page = store.addPage();

// App component
export const App = ({ store }) => {
  const sections = [
    TemplatesSection,
    TextSection,
    CustomPhotosSection,
    ElementsSection,
    UploadSection,
    BackgroundSection,
    LayersSection,
  ];

  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} />
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

// Root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);