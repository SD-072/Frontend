# Personal Diary - React Project

This project is a simple, interactive personal diary application built with React and Vite. It allows users to add, view, and delete daily entries, which are stored in the browser's localStorage. The project is styled with TailwindCSS and DaisyUI.

## Project Requirements

This project fulfills the following functional requirements:

- **FR003: React + Vite Setup:** The application is scaffolded using Vite and built with React.
- **FR004: TailwindCSS:** Styled with TailwindCSS and the DaisyUI component library.
- **FR005: State & Effects Management:** Utilizes `useState` and `useEffect` hooks for managing state and side effects.
- **FR006: Add Entry Button:** Features an "Add Entry" button that toggles a modal.
- **FR007: Add Entry Form Fields:** The form collects a title, date, content, and an optional image URL.
- **FR008: LocalStorage Persistence:** All diary entries are saved to and loaded from the browser's `localStorage`.
- **FR009: One-Entry-Per-Day Check:** The application prevents users from creating more than one entry for the same date.
- **FR010: Form Validation:** The entry form has basic validation to ensure required fields are filled.
- **FR011: Homepage List:** Entries are displayed on the homepage, sorted with the newest entry first.
- **FR012: Load Entries on Startup:** Automatically loads all saved entries when the application first starts.
- **FR013: Card Layout:** Each entry is displayed as a card with a preview image, title, and date.
- **FR014: Entry Detail Modal:** Clicking on an entry card opens a modal with the full entry details.
- **FR015: Static-Site Deployment:** This guide includes instructions for deploying the application to Render.

---

## Application Architecture

The Personal Diary application follows a component-based architecture with clear data flow patterns. Below is a detailed diagram showing the component structure, state management, and data flow:

```txt
┌────────────────────────────────────────────────────────────────────────────┐
│                                App.jsx                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ State: entries[], isAddModalOpen, isViewModalOpen, selectedEntry    │   │
│  │                                                                     │   │
│  │ ┌─────────────┐    ┌─────────────┐    ┌─────────────┐               │   │
│  │ │   Header    │    │ EntryList   │    │AddEntryModal│               │   │
│  │ │             │    │             │    │             │               │   │
│  │ │ onAddEntry  │    │ entries[]   │    │ isOpen      │               │   │
│  │ │ Click       │    │ onViewEntry │    │ onClose     │               │   │
│  │ │             │    │ Click       │    │ onAddEntry  │               │   │
│  │ └─────────────┘    └─────────────┘    │ entries[]   │               │   │
│  │                      │                 └─────────────┘              │   │
│  │                      │                           │                  │   │
│  │                      ▼                           ▼                  │   │
│  │                 ┌─────────────┐         ┌─────────────┐             │   │
│  │                 │ EntryCard   │         │ EntryForm   │             │   │
│  │                 │             │         │             │             │   │
│  │                 │ entry       │         │ onAddEntry  │             │   │
│  │                 │ onViewEntry │         │ onClose     │             │   │
│  │                 │ Click       │         │ entries[]   │             │   │
│  │                 └─────────────┘         └─────────────┘             │   │
│  │                                                                     │   │
│  │ ┌─────────────┐                                                     │   │
│  │ │ViewEntryModal│                                                    │   │
│  │ │             │                                                     │   │
│  │ │ isOpen      │                                                     │   │
│  │ │ onClose     │                                                     │   │
│  │ │ entry       │                                                     │   │
│  │ │ onDelete    │                                                     │   │
│  │ └─────────────┘                                                     │   │
│  │         │                                                           │   │
│  │         ▼                                                           │   │
│  │ ┌─────────────┐                                                     │   │
│  │ │EntryDetails │                                                     │   │
│  │ │             │                                                     │   │
│  │ │ entry       │                                                     │   │
│  │ │ onDelete    │                                                     │   │
│  │ └─────────────┘                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                            ┌─────────────────┐
                            │   localStorage  │
                            │                 │
                            │ diary-entries   │
                            │ (JSON string)   │
                            └─────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATA FLOW                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ 1. ADDING ENTRY:                                                            │
│    Header → App → AddEntryModal → EntryForm → App → localStorage            │
│                                                                             │
│ 2. DISPLAYING ENTRIES:                                                      │
│    App → EntryList → EntryCard (for each entry)                             │
│    localStorage → App (on load) → EntryList → EntryCard                     │
│                                                                             │
│ 3. VIEWING ENTRY:                                                           │
│    EntryCard → EntryList → App → ViewEntryModal → EntryDetails              │
│                                                                             │
│ 4. DELETING ENTRY:                                                          │
│    EntryDetails → ViewEntryModal → App → localStorage                       │
│                                                                             │
│ 5. LOADING ON START:                                                        │
│    App → localStorage → App (useEffect)                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PROPS FLOW                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ App → Header: onAddEntryClick                                               │
│ App → EntryList: entries[], onViewEntryClick                                │
│ App → AddEntryModal: isOpen, onClose, onAddEntry, entries[]                 │
│ App → ViewEntryModal: isOpen, onClose, entry, onDeleteEntry                 │
│                                                                             │
│ EntryList → EntryCard: entry, onViewEntryClick                              │
│ AddEntryModal → EntryForm: onAddEntry, onClose, entries[]                   │
│ ViewEntryModal → EntryDetails: entry, onDeleteEntry                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

```

---

## How to Run This Project Locally

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and a package manager (like npm or pnpm) installed.

    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm run dev
    # or
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## FR015: Deployment to Render

Render is a cloud platform that makes it easy to deploy web applications. We will deploy our Personal Diary as a **Static Site**.

### Step-by-Step Deployment Guide:

1.  **Create a Public or Private GitHub Repository (FR001):**
    Make sure your project is pushed to a public GitHub repository. Render will connect to this repository to deploy your site.

2.  **Sign up for Render:**
    Create a free account on [Render.com](https://render.com/) using your GitHub account.

3.  **Create a New Static Site:**
    - On the Render dashboard, click **"New +"** and select **"Static Site"**.
    - Connect your GitHub account and select the repository for this project.
    - Give your site a unique name (e.g., `my-personal-diary`).

4.  **Configure the Build Settings:**
    Render needs to know how to build your Vite application. Use the following settings:
    - **Branch:** `main` (or whichever branch you want to deploy).
    - **Build Command:** `npm run build` (or `pnpm install && pnpm run build` if you use pnpm).
    - **Publish Directory:** `dist`

    _Explanation:_ The `build` command (from your `package.json`) tells Vite to create an optimized, production-ready version of your app. Vite places the output in the `dist` directory by default. Render will then serve the files from this `dist` directory.

5.  **Deploy:**
    - Click **"Create Static Site"**.
    - Render will automatically pull your code from GitHub, run the build command, and deploy your site. You can watch the progress in the deploy logs.

6.  **Done!**
    Once the deployment is complete, your Personal Diary will be live at the URL Render provides (e.g., `https://my-personal-diary.onrender.com`). Render also automatically redeploys your site every time you push a new commit to your connected branch!
