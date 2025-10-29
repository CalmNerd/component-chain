'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Library } from '@/lib/types/library';

interface LibraryCardProps {
  library: Library;
  className?: string;
  isFirstRowMobile?: boolean;
  isFirstRowTablet?: boolean;
  isFirstRowDesktop?: boolean;
}

export function LibraryCard({
  library,
  className,
  isFirstRowMobile = false,
  isFirstRowTablet = false,
  isFirstRowDesktop = false,
}: LibraryCardProps) {
  // Determine which link to use (webLink takes precedence, then githubLink)
  const primaryLink = library.webLink || library.githubLink;
  const hasBothLinks = library.webLink && library.githubLink;

  return (
    <div
      className={cn(
        'group relative border-r border-b border-border bg-background hover:bg-muted/50 transition-colors duration-200 p-4 sm:p-6',
        isFirstRowMobile && 'border-t',
        isFirstRowTablet && !isFirstRowMobile && 'md:border-t',
        isFirstRowDesktop && !isFirstRowTablet && 'lg:border-t',
        className
      )}
    >
      {/* Header with logo and name */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Logo */}
        {library.logo && (
          <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-border bg-muted p-2">
            <Image
              src={library.logo}
              alt={`${library.name} logo`}
              width={40}
              height={40}
              className="object-contain"
              onError={(e) => {
                // Hide image on error
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Name and links */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {primaryLink ? (
                <Link
                  href={primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {library.name}
                </Link>
              ) : (
                library.name
              )}
            </h3>

            {/* External links */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {library.webLink && (
                <Link
                  href={library.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visit ${library.name} website`}
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
              {library.githubLink && (
                <Link
                  href={library.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${library.name} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {library.description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
          {library.description}
        </p>
      )}

      {/* Framework badge */}
      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
        <Badge variant="outline" className="text-xs">
          {library.framework}
        </Badge>
        {/* Tags */}
        {library.tags.slice(0, 3).map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs"
          >
            {tag}
          </Badge>
        ))}
        {library.tags.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{library.tags.length - 3} more
          </Badge>
        )}
      </div>

      {/* GitHub stats */}
      {(library.githubStars > 0 || library.githubForks > 0) && (
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {library.githubStars > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{formatNumber(library.githubStars)}</span>
            </div>
          )}
          {library.githubForks > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{formatNumber(library.githubForks)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Formats large numbers (e.g., 12000 -> 12k)
 */
function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

