# 🚀 RouteGo — Find Your Route. Travel with Ease.

**Live Demo:** ამჟამად ხელმისაწვდომია ლოკალურად.  
**GitHub Repository:** https://github.com/Achi879/routego  
**Category:** Travel & Route Management Platform

---

## 📋 About the Project

**RouteGo** არის React-ზე დაფუძნებული მარშრუტების ძიებისა და მართვის ვებპლატფორმა. მისი მიზანია მომხმარებლებს გაუმარტივოს საქართველოს საქალაქთაშორისო მიმართულებების მოძიება და მარშრუტების შესახებ ინფორმაციის მიღება. პლატფორმა აერთიანებს მომხმარებლის მთავარ ინტერფეისსა და ადმინისტრაციულ Dashboard-ს. პროექტი შექმნილია მარტივი გამოყენებისა და სხვადასხვა ეკრანის ზომაზე ადაპტირებული დიზაინის გათვალისწინებით.

---

## ✨ Key Features

- **Route Search & Filtering:** მარშრუტების ძიება გამგზავრებისა და დანიშნულების ქალაქების მიხედვით.
- **Optimized Filtering:** Custom Hook `useFilterRoutes`, 300ms Debounce და `useMemo` ფილტრაციის ოპტიმიზაციისთვის.
- **Route Management:** მარშრუტების ინფორმაციის მართვის Dashboard და დამატებისა და რედაქტირების მოდალური ფორმა.
- **Form Validation:** React Hook Form და Zod მომხმარებლის მიერ შეყვანილი მონაცემების შესამოწმებლად.
- **Portal Modals:** მოდალური ფანჯრების გამოსატანად გამოიყენება `ReactDOM.createPortal`.
- **Error Handling:** `ErrorBoundary` React-ის კომპონენტებში წარმოქმნილი შეცდომების დასამუშავებლად.
- **Responsive Design:** ადაპტირებული ინტერფეისი დესკტოპის, პლანშეტისა და მობილური მოწყობილობებისთვის.
- **Reusable Components:** ხელახლა გამოყენებადი კომპონენტები და მოდულური პროექტის სტრუქტურა.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| Core | React 19 |
| Programming Language | JavaScript (ES Modules) |
| Build Tool | Vite |
| Markup & Styling | HTML5, CSS3 |
| Forms | React Hook Form |
| Validation | Zod, @hookform/resolvers |
| UI & Modals | ReactDOM.createPortal |
| Performance | Custom Hooks, Debounce, useMemo |
| Error Handling | ErrorBoundary |
| Code Quality | ESLint |
| Version Control | Git, GitHub |

---

## 📁 Project Structure

```text
routego/
├── public/                  # საჯარო რესურსები
├── src/
│   ├── assets/              # პროექტის რესურსები
│   ├── components/          # ხელახლა გამოყენებადი კომპონენტები
│   │   ├── Header/          # გვერდის ზედა ნავიგაცია
│   │   ├── Layout/          # გვერდის განლაგება
│   │   ├── ProductCard/     # ინფორმაციის ბარათები
│   │   ├── RouteModal/      # მარშრუტის მოდალური ფორმა
│   │   ├── Sidebar/         # გვერდითი მენიუ
│   │   └── StatCard/        # სტატისტიკური ბარათები
│   ├── data/                # პროექტის მონაცემები
│   │   └── products.js
│   ├── hooks/               # Custom React Hooks
│   │   └── useFilterRoutes.js
│   ├── App.jsx              # მთავარი აპლიკაცია
│   ├── App.css              # მთავარი სტილები
│   ├── DashboardApp.jsx     # ადმინისტრაციული ინტერფეისი
│   ├── DashboardApp.css    # Dashboard-ის სტილები
│   ├── ErrorBoundary.jsx   # შეცდომების დამუშავება
│   ├── globals.css         # გლობალური დიზაინის სტილები
│   ├── index.css            # საწყისი სტილები
│   ├── main.jsx             # აპლიკაციის საწყისი წერტილი
│   └── dashboard-main.jsx  # Dashboard-ის საწყისი წერტილი
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

პროექტის ლოკალურად გასაშვებად საჭიროა:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Achi879/routego.git
```

### 2. Navigate to the project folder

```bash
cd routego
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

გაშვების შემდეგ Vite ტერმინალში გამოიტანს ლოკალურ მისამართს. გახსენით მითითებული URL ბრაუზერში.

---

## 🔐 Test Accounts

პროექტის მიმდინარე ვერსიაში მომხმარებლის ავტორიზაციისა და როლების სისტემა წარმოდგენილი არ არის.

შესაბამისად, სატესტო ანგარიშები საჭირო არ არის.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | დეველოპერული სერვერის გაშვება |
| `npm run build` | Production ვერსიის აწყობა |
| `npm run preview` | Production ვერსიის ლოკალურად ნახვა |
| `npm run lint` | ESLint კოდის შემოწმება |

---

## 🧪 Code Quality & Testing

პროექტის ხარისხის შესამოწმებლად გამოყენებულია ESLint და Vite-ის Production Build.

ჩატარებულია შემდეგი შემოწმებები:

- ESLint კოდის ანალიზი.
- Production Build-ის წარმატებით შექმნის შემოწმება.
- ვიზუალური ტესტირება Google Chrome-სა და Microsoft Edge-ში.
- Responsive დიზაინის შემოწმება მობილურსა და პლანშეტზე.

---

## 👤 Author

**Achi Xarshiladze**  
GitHub: https://github.com/Achi879

---

**RouteGo — Find Your Route. Travel with Ease.**