import { FileText, Search, UserCheck, Activity, BarChart3, MapPin, Newspaper, type LucideIcon } from 'lucide-react';

export interface PatternMeta {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  status: 'stable' | 'beta' | 'planned';
  componentsUsed: string[];
}

export const patterns: PatternMeta[] = [
  {
    title: 'Form Pattern',
    slug: 'form',
    icon: FileText,
    description: 'Complete form with validation, error summary, and success states.',
    status: 'stable',
    componentsUsed: ['input', 'select', 'checkbox', 'radio', 'textarea', 'button', 'alert'],
  },
  {
    title: 'Search Results',
    slug: 'search-results',
    icon: Search,
    description: 'Search bar, filters, result cards, and pagination.',
    status: 'stable',
    componentsUsed: ['search', 'card', 'badge', 'pagination'],
  },
  {
    title: 'Status Tracker',
    slug: 'status-tracker',
    icon: Activity,
    description: 'Step indicator, status cards, and timeline.',
    status: 'stable',
    componentsUsed: ['step-indicator', 'card', 'badge', 'alert', 'button'],
  },
  {
    title: 'Authentication',
    slug: 'authentication',
    icon: UserCheck,
    description: 'Sign-in, forgot password, and create account flows.',
    status: 'planned',
    componentsUsed: ['input', 'button', 'checkbox', 'alert'],
  },
  {
    title: 'Data Dashboard',
    slug: 'data-dashboard',
    icon: BarChart3,
    description: 'Stat cards, data table, and filter controls.',
    status: 'planned',
    componentsUsed: ['card', 'table', 'badge', 'select'],
  },
  {
    title: 'Contact Information',
    slug: 'contact-info',
    icon: MapPin,
    description: 'Address card, map placeholder, and office hours.',
    status: 'planned',
    componentsUsed: ['card', 'button'],
  },
  {
    title: 'News Feed',
    slug: 'news-feed',
    icon: Newspaper,
    description: 'Card grid with filters and featured article hero.',
    status: 'planned',
    componentsUsed: ['card', 'badge', 'pagination'],
  },
];
