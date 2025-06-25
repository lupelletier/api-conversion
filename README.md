# API Conversion and Financial Calculations

This project is a Node.js application that provides a REST API for currency conversion and financial calculations. It is built using Express and includes unit, functional, integration, and end-to-end tests using Jest.

## Features

- Currency conversion between EUR, USD, and GBP.
- Calculation of total amount including tax (TTC) from a net amount (HT) and tax rate.
- Application of discounts on given prices.

## API Endpoints

### Currency Conversion

- **GET** `/convert?from=EUR&to=USD&amount=100`
  - Returns the converted amount.
  - Example response:
    ```json
    {
      "from": "EUR",
      "to": "USD",
      "originalAmount": 100,
      "convertedAmount": 110
    }
    ```

### Total Amount Calculation (TTC)

- **GET** `/tva?ht=100&taux=20`
  - Returns the total amount including tax.
  - Example response:
    ```json
    {
      "ht": 100,
      "taux": 20,
      "ttc": 120
    }
    ```

### Discount Application

- **GET** `/remise?prix=100&pourcentage=10`
  - Returns the final price after applying the discount.
  - Example response:
    ```json
    {
      "prixInitial": 100,
      "pourcentage": 10,
      "prixFinal": 90
    }
    ```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd api-conversion
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

4. Run tests:
   ```
   npm test
   ```

## Testing

The project includes various tests to ensure the functionality of the API:

- **Unit Tests**: Validate individual service functions.
- **Functional Tests**: Test the API endpoints for correct responses.
- **Integration Tests**: Verify the interaction between services and routes.
- **End-to-End Tests**: Simulate complete user scenarios.

## CI/CD

The project includes a CI pipeline configuration located in `.github/workflows/ci.yml`, which runs tests and generates coverage reports.

## License

This project is licensed under the ISC License.