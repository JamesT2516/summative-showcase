
# James Taljaard | Front-End Development Portfolio

## Project Overview

This website is my Final Summative Showcase for the Front End Web Development course.

I chose a **Personal Portfolio** theme to present the projects I completed throughout the course and demonstrate my progression in front-end web development.

The portfolio showcases my work with HTML, CSS, JavaScript, Vue.js and Vue Router, from building basic webpage structures to developing responsive layouts and interactive applications.

The final website is built using HTML, CSS and JavaScript. It features a consistent navy-and-blue design, responsive layouts, interactive elements and navigation between four main pages.

## Website Structure

The portfolio consists of four main HTML pages:

| File | Description |
| `index.html` | About Me — personal introduction and development background |
| `learning.html` | Skills & Technologies — technologies and techniques explored throughout the course |
| `projects.html` | My Projects — six coursework projects with screenshots, descriptions and GitHub links |
| `contact.html` | Contact Me — interactive contact form with validation and message preview |

### Supporting Files

| File or Folder | Description |
| `styles.css` | Shared website styling, responsive layouts and accessibility features |
| `script.js` | JavaScript interactions, project filtering and contact form functionality |
| `images/` | Profile photograph, favicon and coursework screenshots |
| `404.html` | Custom page for unavailable website addresses |
| `.nojekyll` | Configuration for static hosting through GitHub Pages |

## Technologies Used

- **HTML5:** Semantic page structure, navigation, forms and content organisation.
- **CSS3:** Responsive design, CSS Grid, Flexbox, media queries and visual styling.
- **JavaScript:** DOM manipulation, event handling, form validation and interactive features.
- **Vue.js:** Component-based development and reactive functionality demonstrated in earlier coursework.
- **Vue Router:** Navigation and dynamic routes implemented in the Module 8 project.
- **Git and GitHub:** Version control and project repositories.
- **Visual Studio Code:** Development environment used throughout the course.

## Website Features

### Responsive Design

The website uses CSS Grid, Flexbox and media queries to adjust its layout across desktop, tablet and mobile screen sizes.

Flexible layouts, responsive images and consistent spacing help maintain readability and usability across different devices.

### Interactive Project Gallery

The My Projects page displays six assignments completed throughout the course.

Each project includes a genuine screenshot, a description, relevant technologies and a link to its GitHub repository.

JavaScript-powered filtering allows visitors to browse projects by technology, including HTML & CSS, JavaScript and Vue.js.

### Let's Connect Popup

The homepage includes an interactive Let's Connect popup developed from my earlier coursework.

The popup provides a link to the Contact Me page and can be dismissed using the close button or Escape key. It can also be reopened from the website footer.

This feature demonstrates JavaScript event handling and interactive user-interface behaviour.

### Contact Form Validation

The Contact Me page includes a JavaScript-powered form that validates a visitor's name, email address and message.

Invalid inputs display clear error messages to help users correct their information.

When all fields are valid, a confirmation dialog displays a preview of the entered details.

The contact form is a front-end demonstration. It does not send emails or store submitted information.

## Coursework Projects

The portfolio includes six projects demonstrating my progression throughout the course.

| Module | Project | Main Focus |
| Module 2 | HTML Foundations | Semantic HTML and webpage structure |
| Module 4 | Responsive Web Design | CSS styling, layouts and media queries |
| Module 5 | JavaScript Interaction | DOM manipulation and interactive popup |
| Module 6 | JavaScript Contact Form | Input validation and user feedback |
| Module 7 | Vue.js Contact Components | Vue components, reactivity and form interaction |
| Module 8 | Vue Router Portfolio | Routing, navigation and dynamic project pages |

Each project is presented with a screenshot of the completed coursework and a link to its source code.

### Coursework Repositories

- [Module 2 — HTML Foundations](https://github.com/JamesT2516/module-2-assignment)
- [Module 4 — Responsive Web Design](https://github.com/JamesT2516/module-4-assignment)
- [Module 5 — JavaScript Interaction](https://github.com/JamesT2516/module-5-assignment)
- [Module 6 — JavaScript Contact Form](https://github.com/JamesT2516/module-6-assignment)
- [Module 7 — Vue.js Contact Components](https://github.com/JamesT2516/module-7-assignment)
- [Module 8 — Vue Router Portfolio](https://github.com/JamesT2516/module-8-assignment)

## Accessibility

Accessibility was considered throughout the development of the website.

The implementation includes:

- Semantic HTML elements for meaningful page structure.
- Descriptive headings and navigation links.
- Alternative text for images and captions for project screenshots.
- A skip link for keyboard navigation.
- Visible focus indicators on interactive elements.
- Properly associated labels for form controls.
- Clear validation messages linked to the relevant fields.
- Keyboard support for interactive buttons and dialogs.
- Responsive typography and layouts.
- Support for reduced-motion preferences.
- Error messages that do not rely on colour alone.

These features aim to improve usability for visitors using different devices, browsers and input methods.

## Development Challenges and Solutions

### Converting a Single-Page Portfolio into Multiple Pages

An earlier version of my portfolio used JavaScript to switch between sections within a single HTML document.

For the final showcase, I reorganised the content into four separate HTML pages using standard navigation links.

This improved the website structure and allowed navigation to function without relying on JavaScript.

### Presenting Projects from Different Modules

The course introduced several technologies, progressing from HTML and CSS to JavaScript, Vue.js and Vue Router.

A challenge was presenting projects built with different technologies in one consistent portfolio.

I addressed this by creating a shared project-card layout containing screenshots, descriptions, technology labels and links to the original repositories.

This provides a consistent presentation while demonstrating my development throughout the course.

### Improving Form Validation and User Feedback

The contact form needed to validate user input and provide clear feedback without relying on a back-end service.

I used JavaScript to check the form fields, display validation messages and preview valid information in a confirmation dialog.

Using a native HTML dialog also helped improve keyboard interaction and focus management.

### Maintaining a Responsive Layout

Another challenge was ensuring that the website remained visually consistent and usable on different screen sizes.

I used flexible layouts, media queries and responsive image styling to adapt the design for smaller screens while maintaining readable content and accessible controls.

## Testing

The website was reviewed locally using Visual Studio Code, Live Server and Google Chrome.

The local review included:

- Checking navigation between the four main pages.
- Reviewing layout and visual consistency.
- Testing the interactive project filters.
- Testing the Let's Connect popup.
- Checking contact form validation and confirmation.
- Testing buttons and navigation links.
- Reviewing the display of all six coursework screenshots.
- Checking the profile photograph and project-card presentation.

The website uses relative navigation links and is structured for static hosting through GitHub Pages.

## Running the Project Locally

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Navigate between the pages using the website menu.

The final portfolio uses standard HTML, CSS and JavaScript. No additional packages, build tools or back-end server are required.