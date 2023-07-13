# FriyayMovies - A Movie Recommendation App

Welcome to FriyayMovie, a movie browsing and rating application built with React! This project allows users to search for movies, view their details, rate them, and even experience a day-night cycle for a visually appealing interface. The application stores movie ratings locally and retrieves movie data from a JSON file.

## Features

- Movie search: Users can search for movies by title, and the application will display a list of matching results.
- Movie details: Clicking on a movie from the search results will show detailed information about the selected movie, including its title, release year, and plot.
- Movie rating: Users can rate movies on a scale of 1 to 5 stars. The rating is stored locally, allowing users to revisit the application and see their previous ratings.
- Light-Dark Mode: The application features a visually dynamic light-dark mode, creating an immersive experience as the interface adapts to the user's preferred color scheme.

## Technologies Used

- React: The project is built using React, a popular JavaScript library for building user interfaces.
- useState: The `useState` hook is used to manage the state of the application, such as movie search queries and user ratings.
- useEffect: The `useEffect` hook is used to handle side effects in the application, such as fetching movie data and updating the day-night cycle.
- JSON data: Movie data is stored in a JSON file, which is fetched and used to populate the search results and movie details.

## Deployment

FriyayMovie is deployed on Netlify and can be accessed at the following link: [FriyayMovie on Netlify](https://meek-stroopwafel-1b1800.netlify.app/)

## Local Development

To run FriyayMovie locally and explore the codebase, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/sid1552/Movie_App.git
```

2. Navigate to the project directory:

```bash
cd Movie_App
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your web browser and visit `http://localhost:3000` to see the application in action.

## Contributing

Contributions to FriyayMovie are always welcome! If you find any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/sid1552/Movie_App/issues). Feel free to fork the repository and submit pull requests as well.

When contributing, please ensure that your code follows the existing code style and conventions. Additionally, include clear commit messages and documentation for any changes you make.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute the code as per the terms of this license.

---

Thank you for your interest in FriyayMovie! If you have any further questions or need assistance, please don't hesitate to reach out.
