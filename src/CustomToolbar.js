import React, { useState } from "react";
import { Toolbar } from "polotno/toolbar/toolbar";
import {
  Button,
  Menu,
  MenuItem,
  Position,
  Popover,
  InputGroup,
  Dialog,
} from "@blueprintjs/core";

export const CustomToolbar = ({ store }) => {
  const [fileName, setFileName] = useState("polotno");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageDownload = async () => {
    await store.saveAsImage({ fileName: `${fileName}.png` });
  };

  const handlePDFDownload = async () => {
    await store.saveAsPDF({ fileName: `${fileName}.pdf` });
  };

  const FileNameDialog = (
    <Dialog
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      title="Set Download Filename"
    >
      <div className="bp4-dialog-body" style={{ padding: "20px" }}>
        <InputGroup
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Enter filename"
        />
      </div>
      <div className="bp4-dialog-footer">
        <Button onClick={() => setIsDialogOpen(false)}>Done</Button>
      </div>
    </Dialog>
  );

  const DownloadMenu = (
    <Menu>
      <MenuItem
        icon="edit"
        text="Set Filename"
        onClick={() => setIsDialogOpen(true)}
      />
      <MenuItem
        icon="media"
        text="Download as PNG"
        onClick={handleImageDownload}
      />
      <MenuItem
        icon="document"
        text="Download as PDF"
        onClick={handlePDFDownload}
      />
    </Menu>
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Toolbar store={store} downloadButtonEnabled={false} />
      <Popover content={DownloadMenu} position={Position.BOTTOM}>
        <Button
          minimal={true}
          large={true}
          icon="download"
          style={{
            marginRight: "5px",
            color: "#5c7080",
          }}
        >
          Download ({fileName})
        </Button>
      </Popover>
      {FileNameDialog}
    </div>
  );
};
