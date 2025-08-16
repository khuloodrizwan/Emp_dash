<h1> Employee Dashboard </h1>

A clean, responsive Employee Dashboard built with React and Tailwind CSS. It showcases a modern UI with a top navigation bar, a collapsible sidebar, and a main dashboard page featuring employee listing, quick stats, search, filtering, and in-place record management through a modal.

<h1> 🧰 Technologies </h1>

1. React (Vite)

2. Tailwind CSS v4 (single import via @import "tailwindcss")

3. JavaScript with React Hooks (useState, useMemo, useCallback)

4. Utility-first, componentized architecture

<h1>✨ Highlights </h1>

1. Unified employee management flow via a modal (create/update/remove in one place)

2. Two views: Card grid and data table

3. Fast search & filtering: Text search + department filter

4. Quick stats: Totals, departments, new this month, and average salary

5. Responsive layout: Sticky Navbar & Sidebar for desktop/tablet/mobile

<h1>📦 Project Structure </h1>

- employee-dashboard/
  - 📂src/
    - 📂components/     
      - Button.jsx
      - EmployeeCard.jsx
      - EmployeeTable.jsx
      - Modal.jsx
      - SearchBar.jsx
    - 📂layouts/
      - Navbar.jsx
      - Sidebar.jsx
    - 📂pages/
      - Dashboard.jsx
    - App.jsx
    - data.js
    - index.css
    - App.css
  - package.json
  - vite.config.js
  - README.md


<h1>⚙️ Setup & Installation </h1>

<b>1. Clone</b>

git clone https://github.com/khuloodrizwan/Emp_dash.git
cd Emp_dash

<b>2. Install</b>

npm install

<b>3. Run (dev)</b>

npm run dev

<b>4. Open the printed local URL (typically http://localhost:5173/). </b>

<h1>🧠 Code Overview (What Lives Where) </h1>

<b>Layouts</b>

1. Navbar.jsx
Top bar with title, search (desktop), notifications popover, and profile menu. Sticky, with tasteful borders/shadows.

2. Sidebar.jsx
Collapsible left navigation with active states, badges, and a small “Quick Stats” card. Sticky for persistent navigation.

<b>Pages</b>

Dashboard.jsx

a. Holds employees, searchTerm, selectedDepartment, viewMode, and modal state.

b. Computes filteredEmployees with useMemo (search across name/position/department/email + department filter).

c. Derives departments from data for the filter dropdown.

d. Calculates stats (totals, departments, new-this-month, average salary w/ currency parsing).

e. Renders cards or table based on viewMode.

f. Uses the Modal to handle the unified employee form flow.

<b>Components</b>

1. EmployeeCard.jsx / EmployeeTable.jsx
Two presentation modes sharing the same data model. Each surfaces actions that trigger the modal or removal as part of the unified flow.

2. SearchBar.jsx
Controlled input that feeds searchTerm up to the Dashboard.

3. Button.jsx
Consistent, accessible buttons with icon support and Tailwind variants.

4. Modal.jsx
Reusable, accessible dialog that hosts the employee form; accepts existing data for updating or empty state for creating.

<b>Styles</b>

1. index.css
Tailwind v4 @layer base/components/utilities setup, global resets, focus styles, utility classes, and animations.

2. App.css
Additional polish: scrollbar styling, subtle transitions/animations, hover effects, and helpers (e.g., skeletons).

<b>Data</b>

data.js
Seed employees (20 sample records) with id, name, email, position, department, salary, joinDate, avatar.
Helpers: getDepartments(), getPositions() for dynamic lists.

<h1>Screenshots</h1>

🔹 Dashboard View

<img src=".\src\assets\desktopcard.png" alt="Dashboard Screenshot" width="700" />

<img src=".\src\assets\desktoptable.png" alt="Dashboard Screenshot" width="700" />


🔹 Mobile View

<img src=".\src\assets\mobileview.png" alt="Mobile Screenshot" width="700" />

