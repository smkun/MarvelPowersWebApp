Here’s a README file for the **MMRPG Powers And Traits** app:

---

# MMRPG Powers And Traits

A web-based Marvel-inspired RPG tool for browsing, selecting, and exporting character powers and traits. The app helps RPG players manage and organize their characters' abilities with a streamlined interface.

## Features

- **Power and Trait Browsing**: Search and filter through a variety of power sets and traits to build your character.
- **Details Panel**: View specific details, prerequisites, and effects of selected powers and traits.
- **PDF Export**: Export your character's powers and traits to PDF format for easy reference.
- **Local Save/Load**: Save and load character data directly from your browser.

## Files

- `index.html`: Main HTML structure, defining the layout of controls, panels, and buttons for navigation.
- `styles.css`: Custom styling for panels, lists, buttons, and layout for improved user experience.
- `scripts.js`: JavaScript logic for handling power/trait selection, search functionality, and PDF export.

## Installation

1. Clone or download the repository.
2. Open `index.html` in any modern browser to use the app.

## Usage

1. **Character Creation**:
   - Input the character’s name in the **Hero Name** field.
   - Use **Power Sets** dropdown to filter specific types of powers or leave it at “All Power Sets.”
   - Use the **Search Powers** field to find specific powers or traits by name.
2. **Selecting Powers and Traits**:
   - Click items in the **Powers** and **Traits** sections to view details in the **Details Panel**.
   - Selected powers and traits appear in the **Selected Powers** and **Selected Traits** panels.
3. **Saving and Loading**:
   - **Save** your character’s current data for later use.
   - **Open** previously saved data to reload it in the app.
4. **Exporting**:
   - Click **Export to PDF** to save your character's selected powers and traits in PDF format.

## Development

- **Power Data Structure**: Power sets and traits are stored in `powersTraitsData` within `scripts.js`.
- **Event Listeners**: JavaScript events handle interactions for list selection, PDF generation, and data save/load.
- **UI Elements**: Styles use CSS grids and flexbox for responsive layout across panels and sections.

## Known Issues

- Some features may be limited on older browsers.
- Certain developer tools and right-click functions are disabled to prevent tampering.
