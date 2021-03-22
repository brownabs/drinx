# Drinx
## Drinx is a React Native application where users are able to login in with firebase authenticatio to view and/or create restaurant and bar drink menus.

## Installation

1. Create a new project using the firebase starter template.

```bash
$ npx create-react-native-app --template https://github.com/expo-community/expo-firebase-starter
```

2. Rename the file `example.firebaseConfig.js` to `firebaseConfig.js`
3. Update `firebaseConfig.js` with your own configuration, e.g.:

```js
// Rename this file to "firebaseConfig.js" before use
// Replace all Xs with real Firebase API keys

export default {
  apiKey: 'XXXX',
  authDomain: 'XXXX',
  databaseURL: 'XXXX',
  projectId: 'XXXX',
  storageBucket: 'XXXX',
  messagingSenderId: 'XXXX',
  appId: 'XXXX'
};
```

4. Start the project:
  - `yarn ios` -- open on iOS
  - `yarn android` -- open on Android

## File Structure

```shell
Expo Firebase Starter
├── assets ➡️ All static assets
├── components ➡️ All re-suable UI components for form screens
│   └── Firebase ➡️ Firebase related config directory
│       └── firebaseConfig.js ➡️ Firebase API keys
│       └── firebase.js ➡️ Firebase app initialization & authentication helper methods
│   └── Forms ➡️ Reusable form components
│       └── Form.js ➡️ Reusable Form wrapper to apply Formik
│       └── FormButton.js ➡️ Reusable button component that handles form submit using Formik context hook
│       └── FormErrorMessage.js ➡️ Reusable component to display server errors from Firebase
│       └── FormField.js ➡️ Reusable TextInput component
│   └── AppButton.js ➡️ Button component
│   └── AppTextInput.js ➡️ TextInput component
│   └── IconButton.js ➡️ Button with icon only component
│   └── SafeView.js ➡️ SafeAreaView wrapper component
│   └── Spinner.js ➡️ Loading indicator component
├── hooks ➡️ All custom hook components
│   └── useStatusBar.js ➡️ A custom hook based on @react-navigation library to animate the status bar style changes
├── navigation
│   └── AppStack.js ➡️ Protected routes such as Home screen
│   └── AuthStack.js ➡️ Routes such as Login screen, when the user is not authenticated
│   └── AuthUserProvider.js ➡️ An Auth User Context component that shares Firebase user object when logged-in
│   └── navigationTheme.js ➡️ A default theme for navigation components
│   └── Routes.js ➡️ Switch between Auth and App stacks based on Firebase user logged-in state
├── screens
│   └── ForgotPassword.js ➡️ Forgot Password screen component
│   └── HomeScreen.js ➡️ Protected route/screen component
│   └── LoginScreen.js ➡️ Login screen component
│   └── RegisterScreen.js ➡️ Register screen component
│   └── WelcomeScreen.js ➡️ Initial screen component
├── utils
│   └── colors.js ➡️ Default, reusable values across the app
├── App.js ➡️ Entry Point for Mobile apps
├── app.json ➡️ Expo config file
└── babel.config.js ➡️ Babel config (should be using `babel-preset-expo`)
```


