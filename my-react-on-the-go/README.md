# 🚀 Dev Stack

##  About The Project

**Dev Stack** is a modern and responsive web application for developers to explore different technologies and create their own technology stack. Users can check technology details, ratings, difficulty levels, and add their favorite technologies to their personal stack.

## Technologies Used

* React.js
* TypeScript
* CSS
* React Icons
* React-Toastify
* JSON
* Vite

## ✨ Key Features

* **Explore Technologies:** Browse different technologies with their category, description, rating, difficulty, and icon.
* **Build Your Stack:** Add technologies to your personal stack and remove them whenever needed.
* **Responsive Interface:** The website is designed to work smoothly on desktop, tablet, and mobile devices.

---


### 1. What is JSX, and why is it used in React?

JSX is a syntax used in React to write HTML-like UI code inside JavaScript or TypeScript. It makes the component structure easier to understand and write.

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is used to store data inside a component and update the UI when the data changes.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update changing data in a component. In my project, I used it to manage the selected technologies in the stack and also to manage the technology data and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform an action after the component renders. I used it in the Technologies component to load the technology data from the JSON file and update the loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React understand which item has changed, added, or removed and update the UI properly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In my project, I used it to show the empty stack message when no technology is selected.

```tsx
{stack.length === 0 ? (
  <div className="empty-stack">
    <h3>Your stack is empty</h3>
    <p>Add technologies from above to build your stack.</p>
  </div>
) : (
  <div className="stack-items">
    {/* Selected technologies */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data or functions to a child through props. In my project, the `App` component passes the `stack` data and stack-related functions to the `Technologies` component.

The child component can send information back by calling the function received through props. For example, when the user clicks **Add to Stack**, the child calls `onAddToStack()` and the parent updates the stack.

---

##  Project Information

**Project Name:** Dev Stack
**Frontend:** React + TypeScript
**Build Tool:** Vite
**Data:** JSON
**UI Support:** React-Toastify, React Icons
