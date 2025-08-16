<h1> Employee Dashboard </h1>

A clean, responsive Employee Dashboard built with React and Tailwind CSS. It showcases a modern UI with a top navigation bar, a collapsible sidebar, and a main dashboard page featuring employee listing, quick stats, search, filtering, and in-place record management through a modal.

<h1> 🧰 Technologies </h1>

1. React (Vite)

2. Tailwind CSS v4 (single import via @import "tailwindcss")

3. JavaScript (ES202x) with React Hooks (useState, useMemo, useCallback)

4. Utility-first, componentized architecture

<h1>✨ Highlights </h1>

1. Unified employee management flow via a modal (create/update/remove in one place)

2. Two views: Card grid and data table

3. Fast search & filtering: Text search + department filter

4. Quick stats: Totals, departments, new this month, and average salary

5. Responsive layout: Sticky Navbar & Sidebar for desktop/tablet/mobile

<h1>📦 Project Structure </h1>

employee-dashboard/
│
├─ 📂 src/
│  ├─ 📂 components/               # Reusable UI components
│  │  ├─ Button.jsx                # Reusable button with variants
│  │  ├─ EmployeeCard.jsx          # Card view for an employee
│  │  ├─ EmployeeTable.jsx         # Table view for employees
│  │  ├─ Modal.jsx                 # Form modal used by Dashboard
│  │  └─ SearchBar.jsx             # Search input with debounce-friendly API
│  │
│  ├─ 📂 layouts/                  # App chrome (navigation)
│  │  ├─ Navbar.jsx                # Top navigation (profile, notifications)
│  │  └─ Sidebar.jsx               # Collapsible sidebar navigation + stats
│  │
│  ├─ 📂 pages/
│  │  └─ Dashboard.jsx             # Main page: state, filters, stats, views
│  │
│  ├─ App.jsx                      # App shell (composes layouts + pages)
│  ├─ data.js                      # Dummy employee dataset + helpers
│  ├─ index.css                    # Tailwind v4 import + global layers/utilities
│  └─ App.css                      # Extra custom styles (scrollbars, animations)
│
├─ package.json
├─ vite.config.js
└─ README.md

<h1>⚙️ Setup & Installation </h1>

<b>Clone</b>

git clone https://github.com/your-username/employee-dashboard.git
cd employee-dashboard

<b>Install</b>

npm install

<b>Run (dev)</b>

npm run dev

<b> Open the printed local URL (typically http://localhost:5173/). </b>

<h1>▶️ How to Run</h1>

Start dev server with npm run dev.

The app loads initial data from src/data.js.

Use the controls at the top of the dashboard to search, filter by department, toggle view (cards/table), and manage records through the modal.

<h1>🧠 Code Overview (What Lives Where) </h1>

<b>Layouts</b>

Navbar.jsx
Top bar with title, search (desktop), notifications popover, and profile menu. Sticky, with tasteful borders/shadows.

Sidebar.jsx
Collapsible left navigation with active states, badges, and a small “Quick Stats” card. Sticky for persistent navigation.

<b>Pages</b>

Dashboard.jsx

Orchestrates app state. Key responsibilities:

Holds employees, searchTerm, selectedDepartment, viewMode, and modal state.

Computes filteredEmployees with useMemo (search across name/position/department/email + department filter).

Derives departments from data for the filter dropdown.

Calculates stats (totals, departments, new-this-month, average salary w/ currency parsing).

Renders cards or table based on viewMode.

Uses the Modal to handle the unified employee form flow.

<b>Components</b>

EmployeeCard.jsx / EmployeeTable.jsx
Two presentation modes sharing the same data model. Each surfaces actions that trigger the modal or removal as part of the unified flow.

SearchBar.jsx
Controlled input that feeds searchTerm up to the Dashboard.

Button.jsx
Consistent, accessible buttons with icon support and Tailwind variants.

Modal.jsx
Reusable, accessible dialog that hosts the employee form; accepts existing data for updating or empty state for creating.

<b>Styles</b>

index.css
Tailwind v4 @layer base/components/utilities setup, global resets, focus styles, utility classes, and animations.

App.css
Additional polish: scrollbar styling, subtle transitions/animations, hover effects, and helpers (e.g., skeletons).

<b>Data</b>

data.js
Seed employees (20 sample records) with id, name, email, position, department, salary, joinDate, avatar.
Helpers: getDepartments(), getPositions() for dynamic lists.

<h1>Screenshots</h1>

🔹 Dashboard View
<img src="C:\Users\chivi\OneDrive\Desktop\dashboard\Emp_dash\src\assets\Screenshot 2025-08-16 095550.png" alt="Dashboard Screenshot" width="700" />
<img src="C:\Users\chivi\OneDrive\Desktop\dashboard\Emp_dash\src\assets\Screenshot 2025-08-16 095643.png" alt="Dashboard Screenshot" width="700" />
🔹 Mobile View
<img src="C:\Users\chivi\OneDrive\Desktop\dashboard\Emp_dash\src\assets\Screenshot 2025-08-16 095714.png" alt="Mobile Screenshot" width="300" />

