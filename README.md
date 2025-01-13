# Event Management App

This is a React Native event management app that allows users to view, register, and provide feedback for events. The app includes features such as event registration, event search, and feedback submission.

## Features

- View a list of events
- Search for events by venue
- Register for events
- View registered event details
- Submit feedback for events

## Screenshots
![WhatsApp Image 2025-01-14 at 02 17 16_99d0816a](https://github.com/user-attachments/assets/a8812526-1432-4e9f-9e46-5ede6867b278)

![WhatsApp Image 2025-01-14 at 02 17 16_8000aacb](https://github.com/user-attachments/assets/c4be0e88-e24d-4e26-829f-ec751c0edc42)

![WhatsApp Image 2025-01-14 at 02 17 15_27f09e92](https://github.com/user-attachments/assets/7e6b9580-0e61-48a5-a5d0-4ec5d14b8e12)

![WhatsApp Image 2025-01-14 at 02 17 16_d14f0481](https://github.com/user-attachments/assets/c1342733-8127-45c5-9742-7ba1409f86c5)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/HamzaJZaidi/event-management-app.git
cd event-management-app
```

2. Install dependencies:

```sh
npm install
```

3. Install necessary packages:

```sh
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install axios
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons
npm install react-native-ratings
```

## Usage

1. Start the development server:

```sh
npx expo start
```

2. Open the **Expo Go app** on your mobile device and scan the QR code to run the app.

## Project Structure

- `App.js`: The main entry point of the app, containing the bottom tab navigator and theme toggle.
- `screens/`: Contains the screen components (`Dashboard.js`, `Registration.js`, `Feedback.js`).
- `components/`: Contains reusable components (`EventCard.js`, `SearchBar.js`).
- `eas.json`: Configuration file for Expo Application Services (EAS).

## Materials Used

### APIs

- [MockAPI](https://mockapi.io/): Used for creating and managing mock APIs for testing.

### Libraries

- [React Native](https://reactnative.dev/): A framework for building native apps using React.
- [React Navigation](https://reactnavigation.org/): Routing and navigation for React Native apps.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/): An asynchronous, unencrypted, persistent, key-value storage system for React Native.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): Customizable icons for React Native.
- [React Native Ratings](https://github.com/Monte9/react-native-ratings): A React Native component for star ratings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
