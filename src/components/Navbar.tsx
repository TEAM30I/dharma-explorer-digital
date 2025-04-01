
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border py-4">
      <div className="tripitaka-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-tripitaka-800" />
              <span className="font-serif text-xl font-semibold text-tripitaka-800">팔만대장경</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
              홈
            </Link>
            <Link to="/browse" className="font-medium text-foreground hover:text-primary transition-colors">
              열람
            </Link>
            <Link to="/search" className="font-medium text-foreground hover:text-primary transition-colors">
              검색
            </Link>
            <Link to="/about" className="font-medium text-foreground hover:text-primary transition-colors">
              소개
            </Link>
            <Link to="/ai-assistant" className="font-medium text-foreground hover:text-primary transition-colors">
              AI 도움말
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-primary hover:bg-secondary/50"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-secondary/50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="경전 이름, 내용, 키워드로 검색하세요..."
                className="pl-10"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-background border border-border rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hover:bg-secondary/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link
                to="/browse"
                className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hover:bg-secondary/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                열람
              </Link>
              <Link
                to="/search"
                className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hover:bg-secondary/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                검색
              </Link>
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hover:bg-secondary/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                소개
              </Link>
              <Link
                to="/ai-assistant"
                className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hover:bg-secondary/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                AI 도움말
              </Link>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="경전 이름, 내용, 키워드로 검색하세요..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
