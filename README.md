# CryptoChecker

## 🚀 Overview
CryptoChecker is an Angular-based cryptocurrency tracking web application that provides real-time market data, trending coins, and graphical representations of price changes. The project leverages the CoinGecko API to fetch cryptocurrency data and implements OAuth login for a secure user experience.

## 🎯 Problem Statement
With the rising interest in cryptocurrency investments, users need a reliable, real-time tracker that provides market trends, price analysis, and insights in an easy-to-understand format. CryptoCheckerYt aims to bridge this gap by offering an interactive and user-friendly interface for tracking cryptocurrency trends.

## 🔍 Features & Enhancements
### ✅ **Core Features:**
- Real-time cryptocurrency price tracking.
- Trending coins list sorted by market cap.
- Graphical representation of price trends over selected timeframes.
- Currency selector to switch between different fiat currencies.
- OAuth login with Google/MetaMask for secure authentication.
- Mobile-responsive UI with a modern Material Design theme.
- GitHub Actions workflow for automated deployment.

### 🛠 **Recent Enhancements:**
1. **Performance Optimizations:**
   - `CurrencyService` now optimally manages state using `BehaviorSubject`.
   - API calls are optimized to avoid redundant requests.
   - Lazy loading of components for faster load times.
2. **Security Improvements:**
   - API keys moved to `environment.ts` for better security.
   - Firebase OAuth authentication added to secure logins.
3. **Deployment Enhancements:**
   - GitHub Actions workflow added for automated deployment to GitHub Pages.
   - Improved `index.html` and `style.scss` for a better user experience.

## ⚙️ Installation & Setup
### Prerequisites
Ensure you have **Node.js (v18+)** and **Angular CLI (v13.1.4 or later)** installed.

### Clone the Repository
```bash
git clone https://github.com/prajeeta15/CryptoChecker.git
cd CryptoChecker
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/` to use the app.

## 🔐 Authentication (OAuth Login)
To enable Google OAuth authentication:
1. Set up Firebase Authentication.
2. Update `auth.service.ts` with Firebase API credentials.
3. Login with Google or MetaMask.

## 📁 Project Structure
```
CryptoChecker/
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│── dist/
│── .github/workflows/deploy.yml
│── angular.json
│── package.json
│── README.md
```

## 📜 API Integration (CoinGecko)
API requests are handled through `api.service.ts`, fetching data such as:
- `getCurrency(currency: string)`: Fetches cryptocurrency data in the selected currency.
- `getTrendingCurrency(currency: string)`: Gets trending cryptocurrencies.
- `getGraphicalCurrencyData(coinId: string, currency: string, days: number)`: Retrieves historical price trends.
- `getCurrencyById(coinId: string)`: Fetches detailed information for a specific cryptocurrency.


## 📜 License
This project is licensed under the MIT License.


