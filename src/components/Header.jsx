import { Button } from "@/components/ui/button";
import { Search, Plus, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ onShowLostForm, onShowFoundForm }) => {
  return (
    <header className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">FindIt</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/search" className="text-muted-foreground hover:text-foreground">Search</Link>
            <Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
            <Link to="/statistics" className="text-muted-foreground hover:text-foreground">Statistics</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link>
          </nav>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onShowLostForm}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Report Lost Item
            </Button>
            <Button 
              variant="success" 
              onClick={onShowFoundForm}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Report Found Item
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;