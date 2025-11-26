import { SidebarProvider } from "@/components/ui/sidebar";
import NavBar from "./NavBar";
import AppSidebar from "./AppSideBar";
import type { ReactNode } from "react"; // Added 'type' keyword

interface DashboardProps {
children?: ReactNode;
}

function Dashboard({ children }: DashboardProps) {
return (
<SidebarProvider>

<div className="flex min-h-screen">
<AppSidebar />
<main className="flex-1 w-full">
<NavBar />
<div className="px-4 py-4">{children}</div>
</main>
</div>
</SidebarProvider>
);
}

export default Dashboard;

// import { ThemeProvider } from "@/components/providers/ThemeProvider";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Home from "./pages/Home";
// import Analytics from "./pages/Analytics";

// // Layout route component
// const DashboardLayout = () => {
// return (
// <Dashboard>
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/analytics" element={<Analytics />} />
// </Routes>
// </Dashboard>
// );
// };

// function App() {
// return (
// <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
// <Router>
// <Routes>
// <Route path="/_" element={<DashboardLayout />} />
// {/_ Add other layout routes here if needed \*/}
// </Routes>
// </Router>
// </ThemeProvider>
// );
// }

// export default App;
