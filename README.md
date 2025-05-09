# Polotno Editor with Custom Toolbar

This project extends the Polotno editor with a custom toolbar implementation that provides enhanced download capabilities.

## CustomToolbar Component

The `CustomToolbar` component (`src/CustomToolbar.js`) works alongside the default Polotno toolbar by:

1. Including the original Toolbar component with `downloadButtonEnabled={false}`
2. Adding a new custom download button with enhanced functionality
3. Composing both elements in a flex container

### Technical Implementation

The CustomToolbar is composed of two main parts:

1. **Original Polotno Toolbar**

```jsx
<Toolbar store={store} downloadButtonEnabled={false} />
```

- Keeps all original toolbar functionality
- Disables the default download button
- Maintains the original toolbar's styling and features

2. **Custom Download Button**

```jsx
<Popover content={DownloadMenu} position={Position.BOTTOM}>
  <Button icon="download" rightIcon="caret-down">
    Download
  </Button>
</Popover>
```

- Adds a new dropdown button using Blueprint.js components
- Implements custom download handlers for PNG and PDF formats
- Provides a more flexible download interface

The two parts are combined in a flex container for proper layout alignment:

```jsx
<div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
  {/* Both components live here */}
</div>
```

### Features

- Custom download button with dropdown menu
- Multiple export format options:
  - PNG export with custom filename ("nishi.png")
  - PDF export with custom filename ("nishi.pdf")
- Maintains all default Polotno toolbar functionality
- Integrated with Blueprint.js UI components

### Usage

```jsx
import { CustomToolbar } from "./CustomToolbar";

// In your component:
<CustomToolbar store={store} />;
```

### Props

- `store` (required): Polotno store instance that manages the editor state

### Download Options

1. **PNG Download**

   - Exports the current canvas as a PNG file
   - Default filename: "nishi.png"
   - Uses `store.saveAsImage()` method

2. **PDF Download**
   - Exports the current canvas as a PDF file
   - Default filename: "nishi.pdf"
   - Uses `store.saveAsPDF()` method

### Component Structure

- Uses Blueprint.js components:
  - `Button`: Main download button
  - `Popover`: Dropdown container
  - `Menu` and `MenuItem`: Download options
- Integrates with default Polotno `Toolbar`
- Maintains consistent UI styling with the rest of the application

### Customization

To modify the default filenames, update the following functions in `CustomToolbar.js`:

```javascript
const handleImageDownload = async () => {
  await store.saveAsImage({ fileName: "your-custom-name.png" });
};

const handlePDFDownload = async () => {
  await store.saveAsPDF({ fileName: "your-custom-name.pdf" });
};
```

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

Created with CodeSandbox
