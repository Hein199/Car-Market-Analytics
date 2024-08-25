# Car-Market-Analytics

**Car-Market-Analytics** is a React web app designed for a car market owner. The app provides visual insights into car data through interactive charts and tables, and allows users to manage and highlight specific cars.

## Features

### 1. Dashboard Page

The Dashboard page is the main overview of the car market data and includes:

- **Pie Chart:** Displays the distribution of car brands based on the number of cars from the dataset.
- **Stacked Bar Chart:** Shows the distribution of car models for each brand, with the number of cars of each model stacked by brand.
- **Car Table:** Presents detailed information about cars including:
  - **Car Brands:** The brand of each car.
  - **Models:** The model of each car.
  - **Number of Cars:** The total count of cars for each brand.
  - **Total Value:** The aggregated value of cars per brand.
  - **Additional Rows:** Summary rows that show the total number of cars and total value by brand.
  - **Toggle Sort Order:** Allows users to sort the table by brand name in ascending ('A-Z') or descending ('Z-A') order.

- **Car Cards:** Displays individual car details including:
  - **Car Brand**
  - **Car Model**
  - **Year**
  - **Price**
  - **Highlight Button:** Users can click to save a car to the Highlighted Car Page.

### 2. Highlighted Car Page

The Highlighted Car Page shows the cars that have been highlighted from the Dashboard page. It includes:

- **Car Cards:** Similar to the Dashboard page, but with an additional feature:
  - **Remove Button:** Users can click to remove a car from the highlighted list.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Hein199/Car-Market-Analytics.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Car-Market-Analytics
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React-Bootstrap:** Bootstrap components for React.
- **Redux:** State management for React applications.
- **React-Router-Dom:** Routing for React applications.
- **Bootstrap:** CSS framework for responsive design.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
