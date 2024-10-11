# Responsive Menu Project

This project features a responsive navigation menu built using HTML, CSS, and JavaScript. The menu dynamically adapts to different screen sizes, providing a mobile-friendly experience with a "burger menu" for smaller screens.

## Features

- **Responsive Design**: Adjusts to different screen sizes (desktop and mobile).
- **Dynamic Menu Toggle**: The burger menu icon toggles between open (X) and close (≡) states, displaying the navigation items in mobile view.
- **Smooth Animations**: Includes animations and transitions for a smooth user experience.
- **Customizable**: Uses CSS variables for easy customization of colors and layout.

## Technologies Used

- **HTML**: Markup for the structure of the page.
- **CSS**: For styling the layout, including flexbox for responsive design and media queries for mobile screens.
- **JavaScript**: Handles the burger menu toggle functionality.

## Getting Started

### Prerequisites

To run this project locally, you'll need a basic web server or simply open the `index.html` file in a browser.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/responsive-menu.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd responsive-menu
    ```

3. **Open the project**:

    Open the `index.html` file in your browser, or use a local web server to serve the files.

## File Structure

- **index.html**: The main HTML file containing the structure of the responsive menu.
- **style.css**: The CSS file that styles the menu, background, and overall layout.
- **script.js**: The JavaScript file that controls the burger menu toggle.
- **assets/**: Contains images like the burger menu icon and logo used in the project.

## How It Works

1. The **burger menu icon** appears in mobile view (screen width less than 600px). When clicked, it triggers the `toggleMenu` function in JavaScript, which toggles the display of the navigation menu.
   
2. The **CSS media queries** handle the layout for larger screens, displaying the menu inline instead of hiding it behind the burger icon.

3. The design uses **CSS Flexbox** for layout and positioning, ensuring that the menu and its items are aligned properly in both desktop and mobile views.

## Customization

You can easily modify the menu colors and other style properties using the CSS variables defined in the `:root` section of the `style.css` file:

```css
:root {
    --primary: #ffbd59;
    --primary-hover: #CD7D7C;
    --secondary: #EFD0F8;
    --background: #261E5A;
}
