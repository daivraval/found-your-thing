import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

interface HeaderProps {
  onShowLostForm: () => void;
  onShowFoundForm: () => void;
}

const Header = ({ onShowLostForm, onShowFoundForm }: HeaderProps) => {
  return (
    <header className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">FindIt</h1>
          </div>
          
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