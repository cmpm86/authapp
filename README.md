# AuthApp - React Native Authentication App

A React Native authentication app with Login, Signup, and Home screens using React Context API for state management.

## Features

- Authentication Context: React Context API for managing auth state
- Login Screen: Email/password authentication with validation
- Signup Screen: User registration with name, email, password
- Home Screen: Display user info with logout functionality
- Persistent Authentication: AsyncStorage to keep users logged in
- Navigation: React Navigation for screen transitions
- Password Visibility Toggle: Eye icon to show/hide password
- Form Validation: Email format, password length, required fields
- Error Handling: User-friendly error messages
- Custom Styling: Brand color (#be1e2d) and logo integration

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- React Native development environment
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone and navigate to project
   ```bash
   cd AuthApp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Install iOS dependencies (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. Run the app
   
   For Android:
   ```bash
   npx react-native run-android
   ```
   
   For iOS:
   ```bash
   npx react-native run-ios
   ```

## Project Structure

```
src/
├── context/
│   └── AuthContext.tsx          # Authentication context and provider
├── screens/
│   ├── LoginScreen.tsx          # Login screen component
│   ├── SignupScreen.tsx         # Signup screen component
│   └── HomeScreen.tsx           # Home screen component
└── navigation/
    └── AppNavigator.tsx         # Navigation setup
```

## Implementation Details

### Authentication Context
- login(): Authenticates user with email/password
- signup(): Creates new user account
- logout(): Logs out user and clears storage
- user: Current user state
- loading: Loading state for auth operations

### Validation Rules
- Email: Must be valid email format
- Password: Minimum 6 characters
- Name: Required for signup
- All fields: Required validation

### Persistent Storage
- Uses AsyncStorage to save user data
- Automatically restores auth state on app restart
- Clears storage on logout

### Navigation Flow
- Unauthenticated: Login ↔ Signup screens
- Authenticated: Home screen only
- Loading: Shows spinner during auth check

### Styling
- Primary Color: #be1e2d (brand red)
- Logo: Kloudius
- Clean UI: Modern input fields and buttons
- Responsive: Works on different screen sizes

## Usage

1. First Time: App opens to Login screen
2. New User: Tap "Sign Up" → Fill form → Auto login
3. Existing User: Enter credentials → Login
4. Home Screen: View profile info → Logout when done
5. Persistence: Close/reopen app stays logged in

## Dependencies

- `@react-navigation/native`: Navigation framework
- `@react-navigation/native-stack`: Stack navigator
- `@react-native-async-storage/async-storage`: Persistent storage
- `react-native-screens`: Native screen components
- `react-native-safe-area-context`: Safe area handling

## Testing Credentials

Since this is a demo app, any valid email and password (6+ chars) will work for login/signup.

Example:
- Email: test@example.com
- Password: 123456