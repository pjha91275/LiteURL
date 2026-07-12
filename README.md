# 🔗 LiteURL

LiteURL is a modern, lightweight, and straightforward URL shortener designed with privacy and ease of use in mind. Unlike other URL shorteners, LiteURL does not track you, show intrusive ads, or require any registration/login. Just paste your URL, select a custom alias, and generate your short link instantly.

---

## ✨ Features

- **Custom Short Paths**: Create readable, branded, or personalized aliases for your long links.
- **Privacy-focused**: No user profiles, tracking cookies, or analytics tracking.
- **Fast Redirection**: Implemented using Next.js App Router dynamic route parameters for rapid lookup and redirect.
- **Modern Tech Stack**: Bootstrapped using Next.js 16, React 19, Tailwind CSS v4, and MongoDB.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Frontend Library**: [React 19](https://react.dev)
- **Database**: [MongoDB](https://www.mongodb.com/) (using official NodeJS driver)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Fonts**: Poppins & Geist (via Next Font Optimization)

---

## 📂 Project Architecture

```text
LiteURL/
├── app/
│   ├── [shorturl]/       # Dynamic router capturing redirect parameters
│   │   └── page.js       # Redirect handler querying DB
│   ├── api/
│   │   └── generate/     # POST endpoint to create shortened links
│   │       └── route.js
│   ├── shorten/          # Form UI to input and generate short links
│   │   └── page.js
│   ├── globals.css       # Tailwind configuration & global styles
│   ├── layout.js         # Root layout with Navbar component
│   └── page.js           # LiteURL Landing Page
├── components/
│   └── Navbar.js         # Shared navigation bar
├── lib/
│   └── mongodb.js        # MongoDB client connection caching
├── public/               # Logos, banners, and vector assets
├── package.json          # Main dependency manager
└── postcss.config.mjs    # Tailwind PostCSS configuration
```

---

## 🔑 Environment Variables

To run this application, you must define the following variables in a `.env.local` file at the root of the project:

```env
# MongoDB Connection string
MONGODB_URI=your_mongodb_connection_uri

# The domain/host URL used for generating shortened links
NEXT_PUBLIC_HOST=http://localhost:3000
```

---

## 🚀 Getting Started

### 1. Install Dependencies
Run the following command to install the required packages:
```bash
npm install
```

### 2. Configure Local Environment
Create a `.env.local` file in the root directory and populate it:
```bash
# Example content for .env.local
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
NEXT_PUBLIC_HOST=http://localhost:3000
```

### 3. Run Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
To build the application for production deployment:
```bash
npm run build
npm run start
```

---

## 🔌 API Documentation

### Generate Short URL
- **Endpoint**: `/api/generate`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "url": "https://example.com/very-long-original-url",
    "shorturl": "my-alias"
  }
  ```
- **Response (Success)**:
  ```json
  {
    "success": true,
    "error": false,
    "message": "URL Generated successfully"
  }
  ```
- **Response (Error - Duplicate alias)**:
  ```json
  {
    "success": false,
    "error": true,
    "message": "URL already exists!"
  }
  ```

---

## 👥 Author

- **Prince Jha** - [@pjha91275](https://github.com/pjha91275)



