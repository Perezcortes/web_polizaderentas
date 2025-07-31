'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import './BlogSearchBar.css';

interface BlogSearchBarProps {
  onSearch: (searchTerm: string) => void;
  isLoading?: boolean;
  apiUrl?: string;
  apiKey?: string;
  searchMode?: 'auto' | 'manual'; // Nuevo prop para controlar modo de búsqueda
  debounceTime?: number; // Tiempo de debounce personalizable
}

export default function BlogSearchBar({ 
  onSearch, 
  isLoading = false, 
  apiUrl, 
  apiKey,
  searchMode = 'manual', // Por defecto manual (solo con botón)
  debounceTime = 1500 // Tiempo más largo por defecto (1.5 segundos)
}: BlogSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Para saber si ya se ejecutó una búsqueda
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounce effect - solo activo en modo automático
  useEffect(() => {
    if (searchMode === 'auto') {
      const timer = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, debounceTime);

      return () => clearTimeout(timer);
    }
  }, [searchTerm, searchMode, debounceTime]);

  // Efecto para obtener sugerencias (opcional)
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length >= 2 && apiUrl && apiKey) {
        try {
          const response = await fetch(
            `${apiUrl.replace('/posts', '/search-suggestions')}?q=${encodeURIComponent(searchTerm)}`,
            { headers: { 'Authorization': `Bearer ${apiKey}` } }
          );
          if (response.ok) {
            const data = await response.json();
            setSuggestions(data.suggestions || []);
            setShowSuggestions(true);
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    const timer = setTimeout(fetchSuggestions, 600); // Sugerencias más lentas
    return () => clearTimeout(timer);
  }, [searchTerm, apiUrl, apiKey]);

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Efecto para ejecutar búsqueda - solo en modo automático
  useEffect(() => {
    if (searchMode === 'auto') {
      onSearch(debouncedSearchTerm);
      if (debouncedSearchTerm) {
        setHasSearched(true);
      }
    }
  }, [debouncedSearchTerm, onSearch, searchMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
    // Si está en modo manual y había una búsqueda previa, resetear
    if (searchMode === 'manual' && hasSearched && e.target.value !== debouncedSearchTerm) {
      setHasSearched(false);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    setHasSearched(false);
    onSearch(''); // Limpiar resultados inmediatamente
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    
    // Ejecutar búsqueda inmediatamente con la sugerencia
    setDebouncedSearchTerm(suggestion);
    onSearch(suggestion);
    setHasSearched(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDebouncedSearchTerm(searchTerm);
    setShowSuggestions(false);
    onSearch(searchTerm);
    setHasSearched(true);
  };

  // Detectar Enter en el input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="blog-search-container mb-4" ref={searchRef}>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <div className="search-icon">
            <Search size={20} />
          </div>
          
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Buscar por título, contenido, palabras clave o fecha (ej: 21 de julio, julio 2024)..."
            className="search-input"
            disabled={isLoading}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          />
          
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="clear-button"
              disabled={isLoading}
              aria-label="Limpiar búsqueda"
            >
              <X size={18} />
            </button>
          )}
          
          {isLoading && (
            <div className="search-loading">
              <div className="search-spinner"></div>
            </div>
          )}

          {/* Sugerencias de búsqueda */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={isLoading}
                >
                  <Search size={16} />
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <button 
          type="submit" 
          className="search-submit-btn"
          disabled={isLoading}
        >
          Buscar
        </button>
      </form>
      
      {/* Información de búsqueda actual */}
      {debouncedSearchTerm && hasSearched && (
        <div className="search-info">
          <p className="search-term-display">
            Buscando: <strong>"{debouncedSearchTerm}"</strong>
            <button 
              onClick={handleClear} 
              className="clear-search-link"
              disabled={isLoading}
            >
              Limpiar filtros
            </button>
          </p>
        </div>
      )}

      {/* Indicador de cambios pendientes en modo manual */}
      {searchMode === 'manual' && searchTerm && searchTerm !== debouncedSearchTerm && !isLoading && (
        <div className="search-info">
          <p className="text-muted">
            💡 Presiona <kbd>Enter</kbd> o haz clic en "Buscar" para buscar: <strong>"{searchTerm}"</strong>
          </p>
        </div>
      )}
    </div>
  );
}