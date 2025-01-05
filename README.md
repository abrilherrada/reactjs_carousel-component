# React Carousel Component

This project is a React-based carousel component, bootstrapped with Vite, designed to display a series of images in a responsive and interactive manner.

## Features

- **Responsive design:** It adjusts seamlessly to various screen sizes, ensuring optimal display on both desktop and mobile devices.
- **Image display:** It showcases a collection of images that users can navigate through.
- **Customizable data source:** It supports local images and the option to fetch images from an external service.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```[bash]
git clone https://github.com/abrilherrada/reactjs_carousel-component.git
```

2. Navigate to the project directory:

```[bash]
cd reactjs_carousel-component
```

3. Install dependencies:

```[bash]
npm install
```

## Usage

After completing the installation steps, you can run the project locally:

1. Start the development server:

```[bash]
npm run dev
```

2. Access the application:
   Open your browser and navigate to `http://localhost:5173` to view the carousel component in action.

## Customization

The carousel is designed to be flexible and customizable. Here are some options:

### Images

- **Local images:** By default, the project includes a set of local images located in the `public/assets/` folder. You can replace these with your own images.
- **External images:** If you prefer not to save images locally, you can fetch them from an external service. The carousel includes functionality to dynamically fetch images, making it easy to integrate with APIs or other external sources. Simply modify the `fetchImages` service to suit your requirements.

### Fetching images

The `fetchImages` service in this project is an example implementation. To customize it:

1. Locate the `fetchImages` function in the source code.
2. Update the URL or logic to fetch images from your preferred API or external resource.
3. Ensure the fetched data matches the format expected by the carousel component.

## Project Structure

The project comprises the following key files and directories:

- `src/`: Contains the main source code for the React application.
- `public/assets/`: Houses the images displayed in the carousel.

## Dependencies

The project relies on the following major dependencies:

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
