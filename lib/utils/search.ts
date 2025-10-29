
import { Library, SearchFilters, SearchResult, PopularityCategory } from '@/lib/types/library';

export function filterLibraries(libraries: Library[], filters: SearchFilters): Library[] {
  let filtered = [...libraries];

  // Filter by name (case-insensitive partial match)
  if (filters.name && filters.name.trim()) {
    const nameQuery = filters.name.trim().toLowerCase();
    filtered = filtered.filter(lib =>
      lib.name.toLowerCase().includes(nameQuery)
    );
  }

  // Filter by framework
  if (filters.framework && filters.framework !== 'All') {
    filtered = filtered.filter(lib =>
      lib.framework.toLowerCase() === filters.framework?.toLowerCase()
    );
  }

  // Filter by tags (library must have at least one of the selected tags)
  if (filters.tags && filters.tags.length > 0) {
    const selectedTagsLower = filters.tags.map(tag => tag.toLowerCase().trim()).filter(Boolean);
    filtered = filtered.filter(lib => {
      const libTagsLower = lib.tags.map(tag => tag.toLowerCase().trim());
      // Check if any of the selected tags match any library tag
      return selectedTagsLower.some(selectedTag =>
        libTagsLower.includes(selectedTag)
      );
    });
  }

  // Filter by popularity (based on GitHub stars)
  if (filters.popularity) {
    filtered = filtered.filter(lib => {
      const stars = lib.githubStars;
      switch (filters.popularity as PopularityCategory) {
        case 'high':
          return stars >= 20000;
        case 'medium':
          return stars >= 5000 && stars < 20000;
        case 'low':
          return stars < 5000;
        default:
          return true;
      }
    });
  }

  return filtered;
}

export function paginateLibraries(
  libraries: Library[],
  page: number = 1,
  pageSize: number = 30
): SearchResult {
  const total = libraries.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedLibraries = libraries.slice(startIndex, endIndex);

  return {
    libraries: paginatedLibraries,
    total,
    page,
    pageSize,
    totalPages,
  };
}

export function getAllTags(libraries: Library[]): string[] {
  const tagSet = new Set<string>();
  libraries.forEach(lib => {
    lib.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getAllFrameworks(libraries: Library[]): string[] {
  const frameworkSet = new Set<string>();
  libraries.forEach(lib => {
    frameworkSet.add(lib.framework);
  });
  return Array.from(frameworkSet).sort();
}

export function getNameSuggestions(
  libraries: Library[],
  query: string,
  limit: number = 10
): string[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const queryLower = query.trim().toLowerCase();
  const matches = libraries
    .filter(lib => lib.name.toLowerCase().includes(queryLower))
    .slice(0, limit)
    .map(lib => lib.name);

  return matches;
}

export function getTagSuggestions(
  libraries: Library[],
  query: string,
  limit: number = 10
): string[] {
  if (!query || query.trim().length === 0) {
    return getAllTags(libraries).slice(0, limit);
  }

  const queryLower = query.trim().toLowerCase();
  const allTags = getAllTags(libraries);
  const matches = allTags
    .filter(tag => tag.toLowerCase().includes(queryLower))
    .slice(0, limit);

  return matches;
}

export function getFirstFilterType(filters: SearchFilters): string | null {
  if (filters.name) return 'library'; // Use 'library' for name searches
  if (filters.framework && filters.framework !== 'All') return 'framework';
  if (filters.tags && filters.tags.length > 0) return 'tags';
  if (filters.popularity) return 'popularity';
  return null;
}

export function buildSearchParams(filters: SearchFilters): URLSearchParams {
  const params = new URLSearchParams();

  // Always include all active filters in query params (for complete state)
  if (filters.name) {
    params.set('name', filters.name);
  }
  if (filters.framework && filters.framework !== 'All') {
    params.set('framework', filters.framework);
  }
  if (filters.tags && filters.tags.length > 0) {
    filters.tags.forEach(tag => {
      params.append('tag', tag);
    });
  }
  if (filters.popularity) {
    params.set('popularity', filters.popularity);
  }

  return params;
}

export function buildFilterUrl(filters: SearchFilters): { path: string; query: string } {
  const firstFilter = getFirstFilterType(filters);

  if (!firstFilter) {
    return { path: '/', query: '' };
  }

  // Get the value for the first filter
  let mainValue = '';
  if (firstFilter === 'library' && filters.name) {
    mainValue = filters.name;
  } else if (firstFilter === 'framework' && filters.framework) {
    mainValue = filters.framework;
  } else if (firstFilter === 'tags' && filters.tags && filters.tags.length > 0) {
    mainValue = filters.tags[0]; // First tag in path
  } else if (firstFilter === 'popularity' && filters.popularity) {
    mainValue = filters.popularity;
  }

  if (!mainValue) {
    return { path: '/', query: '' };
  }

  // Build query params with additional filters (excluding the main filter)
  const params = new URLSearchParams();

  // Add additional filters to query params
  if (firstFilter === 'library') {
    // Name is in path, add other filters
    if (filters.framework) params.set('framework', filters.framework);
    if (filters.tags && filters.tags.length > 0) {
      filters.tags.forEach(tag => params.append('tag', tag));
    }
    if (filters.popularity) params.set('popularity', filters.popularity);
  } else if (firstFilter === 'framework') {
    // Framework is in path
    if (filters.name) params.set('name', filters.name);
    if (filters.tags && filters.tags.length > 0) {
      filters.tags.forEach(tag => params.append('tag', tag));
    }
    if (filters.popularity) params.set('popularity', filters.popularity);
  } else if (firstFilter === 'tags') {
    // First tag is in path, rest in params
    if (filters.name) params.set('name', filters.name);
    if (filters.framework) params.set('framework', filters.framework);
    if (filters.tags && filters.tags.length > 1) {
      filters.tags.slice(1).forEach(tag => params.append('tag', tag));
    }
    if (filters.popularity) params.set('popularity', filters.popularity);
  } else if (firstFilter === 'popularity') {
    // Popularity is in path
    if (filters.name) params.set('name', filters.name);
    if (filters.framework) params.set('framework', filters.framework);
    if (filters.tags && filters.tags.length > 0) {
      filters.tags.forEach(tag => params.append('tag', tag));
    }
  }

  const query = params.toString();
  const path = `/libraries-list/${firstFilter}/${encodeURIComponent(mainValue)}`;

  return { path, query };
}

export function parseSearchParams(
  searchParams: URLSearchParams | string,
  pathname?: string
): SearchFilters {
  const params = typeof searchParams === 'string'
    ? new URLSearchParams(searchParams)
    : searchParams;

  const filters: SearchFilters = {};

  // Parse main filter from pathname
  if (pathname) {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === 'libraries-list') {
      const filterType = pathParts[1];
      const filterValue = decodeURIComponent(pathParts[2]);

      if (filterType === 'library') {
        filters.name = filterValue;
      } else if (filterType === 'framework') {
        filters.framework = filterValue;
      } else if (filterType === 'tags') {
        filters.tags = [filterValue];
      } else if (filterType === 'popularity') {
        filters.popularity = filterValue as any;
      }
    }
  }

  // Parse additional filters from query params
  const name = params.get('name');
  if (name && !filters.name) {
    filters.name = name;
  }

  const framework = params.get('framework');
  if (framework && !filters.framework) {
    filters.framework = framework;
  }

  const tags = params.getAll('tag');
  if (tags.length > 0) {
    // Merge with path tag if exists
    if (filters.tags) {
      filters.tags = [...new Set([...filters.tags, ...tags])];
    } else {
      filters.tags = tags;
    }
  }

  const popularity = params.get('popularity');
  if (popularity && !filters.popularity) {
    filters.popularity = popularity as any;
  }

  return filters;
}

export function hasActiveFilters(filters: SearchFilters): boolean {
  return !!(
    (filters.name && filters.name.trim()) ||
    (filters.framework && filters.framework !== 'All') ||
    (filters.tags && filters.tags.length > 0) ||
    filters.popularity
  );
}