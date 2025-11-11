/**
 * Motor de Búsqueda para DAG Classical
 * Sistema de búsqueda dinámico sin listas hardcode
 */

export interface SearchableItem {
  id: string;
  title: string;
  content: string;
  type: 'blog' | 'music' | 'artist' | 'page' | 'nft';
  category: string;
  tags: string[];
  url: string;
  date?: string;
  excerpt?: string;
  image?: string;
  metadata?: Record<string, any>;
}

export interface SearchResult extends SearchableItem {
  score: number;
  matches: string[];
}

export interface SearchFilters {
  type?: string;
  category?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SearchOptions {
  limit?: number;
  offset?: number;
  filters?: SearchFilters;
  fuzzy?: boolean;
}

export class SearchEngine {
  private index: SearchableItem[] = [];
  private weights = {
    title: 10,
    content: 1,
    tags: 5,
    category: 3,
    excerpt: 2
  };

  /**
   * Carga el índice de búsqueda desde JSON generado en build time
   */
  loadIndex(indexData: SearchableItem[]): void {
    this.index = indexData;
    console.log(`🔍 Índice de búsqueda cargado: ${this.index.length} elementos`);
  }

  /**
   * Búsqueda principal con filtros y scoring
   */
  search(query: string, options: SearchOptions = {}): SearchResult[] {
    if (!query.trim()) return [];

    const { limit = 20, offset = 0, filters, fuzzy = true } = options;
    const results = this.index
      .filter(item => this.matchesFilters(item, filters))
      .map(item => ({
        ...item,
        score: this.calculateScore(item, query, fuzzy),
        matches: this.findMatches(item, query)
      }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(offset, offset + limit);

    return results;
  }

  /**
   * Calcula score de relevancia
   */
  private calculateScore(item: SearchableItem, query: string, fuzzy: boolean): number {
    const queryLower = query.toLowerCase();
    const queryTerms = queryLower.split(/\s+/);
    let score = 0;

    // Búsqueda en título (peso más alto)
    for (const term of queryTerms) {
      const titleMatch = this.fuzzyMatch(item.title, term, fuzzy);
      if (titleMatch.exact) score += this.weights.title;
      else if (titleMatch.partial) score += this.weights.title * 0.7;
    }

    // Búsqueda en contenido
    const contentWords = item.content.toLowerCase().split(/\s+/);
    for (const term of queryTerms) {
      const contentMatches = contentWords.filter(word => 
        this.fuzzyMatch(word, term, fuzzy).match
      ).length;
      score += (contentMatches / contentWords.length) * this.weights.content * 100;
    }

    // Búsqueda en tags
    for (const tag of item.tags) {
      for (const term of queryTerms) {
        const tagMatch = this.fuzzyMatch(tag, term, fuzzy);
        if (tagMatch.exact) score += this.weights.tags;
        else if (tagMatch.partial) score += this.weights.tags * 0.8;
      }
    }

    // Búsqueda en categoría
    for (const term of queryTerms) {
      const categoryMatch = this.fuzzyMatch(item.category, term, fuzzy);
      if (categoryMatch.exact) score += this.weights.category;
      else if (categoryMatch.partial) score += this.weights.category * 0.6;
    }

    return score;
  }

  /**
   * Búsqueda fuzzy con múltiples estrategias
   */
  private fuzzyMatch(text: string, query: string, fuzzy: boolean): { 
    exact: boolean; 
    partial: boolean; 
    match: boolean;
    distance?: number;
  } {
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();

    // Coincidencia exacta
    if (textLower.includes(queryLower)) {
      return { exact: true, partial: true, match: true };
    }

    // Coincidencia por palabras completas
    const textWords = textLower.split(/\s+/);
    const queryWords = queryLower.split(/\s+/);
    
    for (const word of textWords) {
      if (word.startsWith(queryLower)) {
        return { exact: false, partial: true, match: true };
      }
    }

    // Búsqueda difusa (si está habilitada)
    if (fuzzy) {
      const distance = this.levenshteinDistance(textLower, queryLower);
      const maxLength = Math.max(textLower.length, queryLower.length);
      const similarity = 1 - (distance / maxLength);
      
      if (similarity > 0.6) {
        return { exact: false, partial: false, match: true, distance };
      }
    }

    return { exact: false, partial: false, match: false };
  }

  /**
   * Distancia de Levenshtein para búsqueda fuzzy
   */
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,     // deletion
          matrix[j - 1][i] + 1,     // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        );
      }
    }

    return matrix[str2.length][str1.length];
  }

  /**
   * Encuentra coincidencias específicas para highlight
   */
  private findMatches(item: SearchableItem, query: string): string[] {
    const matches: string[] = [];
    const queryLower = query.toLowerCase();
    
    // Buscar en título
    if (item.title.toLowerCase().includes(queryLower)) {
      matches.push('title');
    }
    
    // Buscar en contenido (primeras 100 palabras)
    const contentPreview = item.content.substring(0, 500).toLowerCase();
    if (contentPreview.includes(queryLower)) {
      matches.push('content');
    }
    
    // Buscar en tags
    if (item.tags.some(tag => tag.toLowerCase().includes(queryLower))) {
      matches.push('tags');
    }
    
    return matches;
  }

  /**
   * Aplica filtros a los resultados
   */
  private matchesFilters(item: SearchableItem, filters?: SearchFilters): boolean {
    if (!filters) return true;

    if (filters.type && item.type !== filters.type) return false;
    if (filters.category && item.category !== filters.category) return false;
    
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(filterTag => 
        item.tags.some(itemTag => 
          itemTag.toLowerCase().includes(filterTag.toLowerCase())
        )
      );
      if (!hasMatchingTag) return false;
    }

    if (filters.dateRange) {
      const itemDate = item.date ? new Date(item.date) : null;
      if (itemDate) {
        if (itemDate < filters.dateRange.start || itemDate > filters.dateRange.end) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Obtiene estadísticas del índice
   */
  getIndexStats(): { total: number; types: Record<string, number>; categories: Record<string, number> } {
    const types: Record<string, number> = {};
    const categories: Record<string, number> = {};

    this.index.forEach(item => {
      types[item.type] = (types[item.type] || 0) + 1;
      categories[item.category] = (categories[item.category] || 0) + 1;
    });

    return {
      total: this.index.length,
      types,
      categories
    };
  }

  /**
   * Sugerencias de búsqueda inteligente
   */
  getSuggestions(query: string, limit: number = 5): string[] {
    const suggestions = new Set<string>();
    const queryLower = query.toLowerCase();

    // Sugerir títulos similares
    this.index.forEach(item => {
      if (item.title.toLowerCase().includes(queryLower)) {
        suggestions.add(item.title);
      }
    });

    // Sugerir tags relevantes
    this.index.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }
}

// Instancia global del motor de búsqueda
export const searchEngine = new SearchEngine();