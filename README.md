# Sorting Visualizer

This Sorting Visualizer project is designed to provide a hands-on demonstration of various sorting algorithms in action. Users can visualize the sorting process step by step, allowing for a better understanding of how different algorithms work and their efficiency.

## Overview

This project walks through the process of creating and deploying a Sorting Visualizer from scratch using Next.js, TypeScript, Tailwind CSS, and deploying it on Netlify. It covers setting up the project, implementing the main layout, incorporating algorithm controls, running animations, describing each algorithm, and finally deploying the application.

## Project Structure

-   `src/app/page.tsx`: Main page component for the visualizer.
-   `arc/app/globals.css`: Global CSS styles for the visualizer.
-   `context/Visualizer.tsx`: Component containing the logic for the visualizer.
-   `src/algorithms`: Folder containing the implementations of sorting algorithms.

## Setting Up the Project

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Visualizer Context

The visualizer provides a graphical representation of sorting algorithms, helping users comprehend their behavior and efficiency.

## Implementation Details

-   **Main Layout**: Create the main layout of the visualizer using Tailwind CSS.
-   **Reset Function**: Implement a function to reset the visualizer.
-   **Algorithm Speed Control**: Allow users to control the speed of the sorting animation.
-   **Selected Algorithm Control**: Implement controls for selecting different sorting algorithms.
-   **Run Animation Function**: Develop a function to run the sorting animation.
-   **Bubble Sort**: Implement the bubble sort algorithm.
-   **Fix Reset Bug**: Address any bugs related to the reset function.
-   **Add Ending Animation**: Enhance the visualizer with an ending animation.
-   **Algorithm Description Component**: Provide descriptions for each implemented algorithm.
-   **Selection Sort**: Implement the selection sort algorithm.
-   **Remaining Algorithms**: Implemented remaining sorting algorithms like merge sort, insertion sort and quick sort.

## Usage

-   Select a sorting algorithm from the dropdown menu.
-   Adjust the animation speed using the control slider.
-   Click the "Run" button to start the sorting animation.
-   Click the "Reset" button to reset the visualizer.

## Technologies Used

-   [Next.js](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Netlify](https://www.netlify.com/)

## Contributors

-   [Shivendra Jat](https://www.linkedin.com/in/shivendrajat/)

## License

This project is licensed under the [MIT License](LICENSE).
