# Part 1 – Application Design

### Architecture Diagram
(./architecture-diagram.png)

**Assignment:** Advanced Mobile Application Development  
**Task:** Design a cross-platform mobile app for managing personal finances  

## 1. Overview
cross-platform personal finance manager built with **React Native** and **native modules** (Swift for iOS, Kotlin for Android).  

### Core Features
- **Transaction Management**
  - Add, edit, and delete income/expense entries
  - Categorize transactions (Food, Transport, Entertainment, etc.)
- **Data Visualization**
  - View spending trends with charts (bar/pie)
- **Sync & Storage**
  - Sync with backend API (mock or real)
  - Offline-first support with local database

## 2. High-Level Architecture

- **Presentation Layer**
  - React Native screens (JS/TS)
  - UI components & navigation

- **State Management**
  - Redux Toolkit / React Context
  - Middleware for async API calls

- **Data Layer**
  - SQLite or Realm → offline-first storage
  - AsyncStorage → small flags/tokens

- **Sync & Network Layer**
  - Axios for REST API communication
  - Sync Engine for reconciliation (local ↔ server)

- **Native Modules**
  - **iOS (Swift):** Calendar & Reminders sync
  - **Android (Kotlin):** Battery optimization state/events

- **Backend (Mock/Real)**
  - REST API for transactions, categories, authentication

- **Logging & Monitoring**
  - Sentry → crash reporting
  - Flipper / Reactotron → debugging


## 3. Technical Architecture Diagram

The following diagram illustrates the overall system architecture of the application:  

(./architecture-diagram.png)


## 4. Data Flow

- **User Actions**
  - Add, edit, or delete transaction → stored in local database

- **State Management**
  - Redux / Context updates state
  - UI reflects immediately (optimistic update)

- **Sync Engine**
  - Pushes local changes to API
  - Pulls new/updated data from backend

- **Data Visualization**
  - Charts read aggregated data from DB (category totals, monthly spends)

- **Native Modules**
  - Calendar (iOS) integration
  - Battery state/events (Android)

## 5. Offline Storage & Sync

- **Storage**
  - SQLite / Realm → transactions, categories
  - AsyncStorage → tokens, flags

- **Strategy**
  - **Optimistic UI** → immediate local write for smooth user experience
  - **Sync Queue** → retries failed network requests automatically
  - **Conflict Resolution** → last-write-wins using `updatedAt` timestamps
  - **Background Sync** → triggers on app resume or when network reconnects


## 6. Error Handling & Debugging Strategy

- **Error Handling**
  - Axios interceptors for retries & token refresh
  - User-friendly error messages for better UX
  - Sync status flags in DB (`pending` / `synced` / `failed`)

- **Debugging**
  - Flipper / Reactotron → inspect network calls, logs, and local DB
  - Sentry → crash & error reporting
  - Structured logs with levels (`info`, `warn`, `error`)


