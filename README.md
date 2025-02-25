# CryptoChecker

## 🚀 Overview
CryptoChecker is a powerful and user-friendly cryptocurrency tracking application. It provides real-time market data, trending coins, and historical price analysis, helping users make informed decisions about their crypto investments.

## 🛠 Features
- 🔹 **Real-Time Cryptocurrency Prices**: Fetches live market data from CoinGecko API.
- 📈 **Graphical Analysis**: View historical price trends with interactive charts.
- 🚀 **Trending Cryptos**: Displays the top 10 trending cryptocurrencies.
- 🔍 **Search by Coin ID**: Get detailed information about any cryptocurrency.
- 🌐 **Multi-Currency Support**: Allows users to select different fiat currencies.
- 🔑 **Secure OAuth Login**: Google and MetaMask authentication for enhanced security.
- 🔐 **Secure API Keys**: API keys are managed using environment variables for better security.

## 🔥 Problem Statement
With the rapidly growing cryptocurrency market, investors and enthusiasts need a reliable, real-time tracking tool. Many existing platforms provide delayed or incomplete data, lack intuitive UI/UX, and fail to integrate essential security features like OAuth login. **CryptoChecker** solves these challenges by offering a seamless, real-time cryptocurrency tracking experience with robust security and a user-friendly interface.

##Tech Stack
Frontend: Angular, TypeScript, Bootstrap, SCSS
Backend API: CoinGecko API
Authentication: Firebase OAuth (Google, MetaMask)

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


