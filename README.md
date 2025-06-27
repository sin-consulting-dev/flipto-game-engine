# Flipto Game Engine

A modern React-based game engine interface built with TypeScript, Vite, and Tailwind CSS. This project provides a sleek and responsive UI for managing and displaying various casino-style games.

## Features

- 🎮 **Game Categories**: Organized display of different game types (Crash, Dice, Mines, Plinko, Roulette)
- 🎨 **Modern UI**: Beautiful, responsive design with dark theme
- ⚡ **Fast Performance**: Built with Vite for optimal development and build performance
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices
- 🎯 **TypeScript**: Full type safety and better development experience
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📊 **Transaction History Page**: Comprehensive, filterable, and paginated table for user betting history (accessible via user profile only)

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library
- **Swiper** - Touch slider component

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flipto-game-engine.git
cd flipto-game-engine
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── icons/          # Game-specific icons
│   ├── GameCategories.tsx
│   ├── GameGrid.tsx
│   ├── GameList.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── InfoCards.tsx
│   ├── MainContent.tsx
│   ├── ProvablyFair.tsx
│   ├── Sidebar.tsx
│   └── TransactionHistoryPage.tsx  # User betting history table (profile only)
├── assets/             # Static assets
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Transaction History Page

The `TransactionHistoryPage` provides users with a detailed view of their betting history in a clean, modern, and easy-to-read table. Features include:

- **Comprehensive Data**: Columns for date/time, bet ID, event, bet type, selection, stake, odds, potential payout, status, actual payout, and actions.
- **Column Filters**: Filter data by any column for quick searching.
- **Pagination**: Easily navigate through large histories.
- **Responsive Design**: Works on both desktop and mobile.
- **Mock Data**: Uses mock data for demonstration and development.
- **Access**: This page is only accessible via the user profile dropdown (not in the main header).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

## Commit Log

- **2024-06-09** | `feat: add page size selector (10/20/50) to TransactionHistoryPage pagination` | Users can now select how many transactions to view per page (10, 20, or 50) in TransactionHistoryPage.
- **2024-06-09** | `style: add Flipto hero banner above Transaction History title, matching SlotsPage/LiveCasinoPage` | TransactionHistoryPage now features a Flipto-style hero banner above the title, consistent with SlotsPage and LiveCasinoPage.
- **2024-06-09** | `style: update TransactionHistoryPage to Flipto design, proportional table, and 30 mock data entries` | TransactionHistoryPage now uses Flipto design, fills the available space, and displays 30 mock transactions.
- **2024-06-09** | `feat: enable navigation to TransactionHistoryPage from profile dropdown and add route` | TransactionHistoryPage is now accessible from the profile dropdown menu and routed in the app.
- **2024-06-09** | `feat: add TransactionHistoryPage with mock data, filters, and pagination` | Added a new TransactionHistoryPage component for user betting history, featuring a comprehensive, filterable, and paginated table with mock data. Accessible only via the user profile page.
