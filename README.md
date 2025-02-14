# Silent Failure of Expo Image Component on 404

This repository demonstrates a bug in the Expo `Image` component where it fails silently when encountering a 404 error from a remote image URI.  The component doesn't throw an error or provide any visual feedback, making debugging challenging.

The `bug.js` file shows the problematic code. The `bugSolution.js` file illustrates a solution using error handling and fallback mechanisms.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`
3. Run the app.
4. Observe the missing image; the console will not show any relevant error messages related to the image load failure.

## Solution

The solution involves adding error handling to the image loading process and providing a fallback image in case of a 404. Refer to `bugSolution.js` for the implementation.