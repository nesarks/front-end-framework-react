# User Profiles React Application

This React application displays a list of user profiles and allows you to add new profiles via a form. It demonstrates key React concepts, such as state management, rendering with JSX, and conditional rendering also displays and updates product information. It covers key concepts such as managing state, passing props, and method delegation between parent and child components.

## Features

- **Dynamic User List**: The list of user profiles updates dynamically whenever a new user is added.
- **Form Input**: Users can be added to the list by filling in their name, age, and occupation in a form.
- **Conditional Rendering**: Displays a message when no user profiles are available.
- **Unique Keys**: Each user profile is assigned a unique `key` to ensure proper list rendering in React.

## Components

### 1. **App.js**
The main component that handles user input and displays the list of profiles.

- **State**: 
  - `users`: An array of user objects, each with a name, age, and occupation.
  - `name`, `age`, `occupation`: Controlled state variables for the form inputs.
- **Methods**: 
  - `handleAddUser`: This method adds a new user to the `users` array when the form is submitted, assigning a unique `id` to each user.
  The root component, responsible for rendering the `Product` component.

### 2. **Product.js**
Manages the state of the product details (name, price, and description). It passes this data and the method for updating the product details to its child component `ProductDetails.js`.

- **State**: The component uses the `useState` hook to manage the product's information.
- **Method**: It contains a method `updateProductDetails`, which updates the product's state when called.

### 3. **ProductDetails.js**
A presentational component that displays the product information. It includes a button to trigger an update, using a method passed down via props from the parent `Product` component.

### JSX Structure:

- Renders the user profiles in an unordered list (`<ul>`).
- Displays a message "No users available" when the list is empty, using conditional rendering.
- Includes a form with fields for entering the user's name, age, and occupation.

## Installation

To run this project locally:

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Usage

- On loading the app, you will see the message "No users available" if there are no user profiles yet.
- Fill in the form with a name, age, and occupation, and click the "Add User" button to add a new user to the list.
- The list dynamically updates to display the added user profile, including their name, age, and occupation.
- When the app starts, a sample product (with a name, price, and description) is displayed.
- Clicking the "Update Product" button will update the product details with predefined new values.

# Product Information React Component

- **Props**: 
  - `product`: An object containing the product's name, price, and description.
  - `onUpdate`: A method for updating the product details, passed as a prop from `Product.js`.

## Adding PropTypes Validation

To ensure that the props passed to `ProductDetails.js` are of the correct type, you can add `PropTypes` validation:

In `ProductDetails.js`, import `PropTypes`:

```javascript
import PropTypes from 'prop-types';
```

Then define the expected prop types:

```javascript
ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
```

## Folder Structure

```plaintext
.
├── public
│   ├── index.html
├── src
│   ├── App.js
│   ├── Product.js
│   ├── ProductDetails.js
│   ├── Product.css
│   ├── index.js
├── package.json
├── README.md
```