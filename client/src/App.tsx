import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppSidebar from "./components/AppSideBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <NavBar />
            <div className="px-5">
              <Dashboard />
            </div>
          </main>
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
