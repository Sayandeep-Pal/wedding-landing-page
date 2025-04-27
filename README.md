# Wedding Landing Page

This is a simple wedding landing page built with React, Tailwind CSS, and Lucide icons. It features a hero section, services section, testimonials section, contact section, and a footer. The page is fully responsive and features a dark mode toggle.

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).
- Install [Git](https://git-scm.com/) for version control.

### Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/wedding-landing-page.git
    cd wedding-landing-page
    ```
## For Frontend
1. **Enter In the Directory**
    ```bash
    cd client
    ```

2. **Install Dependencies**
    Run the following command to install the required dependencies:
    ```bash
    pnpm install
    ```
3. **configure *.env* file**
    Add the .env file in the directory
    ```bash
    VITE_BE_URL = 'your-backend-URL' #Example = http://localhost:3000
    ```

4. **Start the Development Server**
    Launch the development server with:
    ```bash
    pnpm run dev
    ```
    The application will be available at `http://localhost:5173`.

## For Backend
1. **Enter In the Directory**
    ```bash
    cd server
    ```
2. **Install Dependencies**
    Run the following command to install the required dependencies:
    ```bash
    pnpm install
    ```
3. **configure *.env* file**
    Add the .env file in the directory
    ```bash
    PORT = 3000
    MONGO_URL = 'your-mongodb-uri'
    ```

4. **Start the Development Server**
    Launch the development server with:
    ```bash
    pnpm start
    ```
    The application will be available at `http://localhost:3000`.


