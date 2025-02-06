/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        accent: '#C0C0C0',
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvwNPyhdCDbVayJGads/WiUWcjCvCnruTBNHS9gmX2VzVbk7ZvB1gb1hkWFGl+A/n+/FowcO34U/XvKqZ/fHY+6vgRfU92XrOBUbGeeDfQmjWjdrK+frc6FdGReQhfSF5JvR29O2QrfNw1huTwlgsyXLo0u+5So82sgv7tsFZR2nxB6lXiquHrfD8nfYZ9SeT0LiuvSoVrxGY16pCNRZKqvwWsn5OHypPBELzohMCaRaa0ceTHYqe7X/gfJEEtKFbJpWoNqO+aS1cuTykGPpK5Ga48m6L3NefTr013KqYBQu929iP1oQ/7UwSR+i3zqruUmT84qmhzLpxyj7pr9kg7LKvqaXxZmdpn+6o8bvnmlocX+q0wt/jxgZR4MJmENwnPOnluvHOMyBD0for0h0gV9yLrKc6fR5hkYgCHryld2XPiWXOJG/VqXoqPZhe0dPqT9mVyldLOkb5rBz7U3n5BhCdPA+zii/bhILSdYhT5EuCEHK1l6GR7UDp5udGWzj5EZicBfQxPXQjEQXRRhujPYH6d0BBlp9xQOccwJW9TQRNrA4PIXzmHvXAdEDRPqQqJD7H0ecp+kIqwHQk1sxHXRQxPvGY7eK+sRWVV+G3BBwsbalY7/F2yJ6TZDhRFXqEZkSjEz98JrjP7qn/5EDR/XHDd2mpEw1pQNyJ8RAJXiB4AGkR5gQxp6TBP3gKODRkNKYNnmKDl9370EmhK2Kdv0R8BFQQlYxZrQkbR+WC8ABKGR5lUY2oNEe45TYCrRP2gy1rAFJoVBTjqR7UGRmyVACuZKHf9B3t0GRk2cxKj6TYjRdz+HJXRqB3qNS1lHxXw8RiXEOMQJHgAMWYVYmwOMRZ5QB5SxP0Zj2jKwGisnQAAAABJRU5ErkJggg==')",
      },
    },
  },
  plugins: [],
}