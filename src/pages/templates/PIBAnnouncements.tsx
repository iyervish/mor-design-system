import { Newspaper, Filter, Search as SearchIcon, ChevronRight, ExternalLink, Calendar } from 'lucide-react';
import { GovBanner } from '../../components/ui/GovBanner';
import { Badge } from '../../components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Select } from '../../components/ui/Select';
import { Pagination } from '../../components/ui/Pagination';
import { Search } from '../../components/ui/Search';

const releases = [
  {
    ministry: 'MeitY',
    title: "India's AI Mission Crosses ₹10,000 Crore Investment — Cabinet Approves IndiaAI Phase II",
    description: 'The Union Cabinet has approved Phase II of the IndiaAI Mission with additional funding to accelerate AI research, compute access, and skilling across 500 universities.',
    date: 'Feb 15, 2026',
    featured: true,
    tag: 'Technology',
  },
  {
    ministry: 'MoH&FW',
    title: 'Ayushman Bharat PM-JAY Extended to All Citizens Above 70 Years',
    description: 'Government expands health coverage under PM-JAY to include all senior citizens regardless of income, providing ₹5 lakh annual hospitalization cover.',
    date: 'Feb 14, 2026',
    featured: false,
    tag: 'Health',
  },
  {
    ministry: 'MoRD',
    title: 'PM Gram Sadak Yojana Phase IV: 25,000 Km of Rural Roads to Be Built by 2027',
    description: 'Ministry of Rural Development announces Phase IV with enhanced connectivity for 40,000 unconnected habitations, focusing on northeast and hilly states.',
    date: 'Feb 13, 2026',
    featured: false,
    tag: 'Infrastructure',
  },
  {
    ministry: 'Finance',
    title: 'GST Council Reduces Rates on 15 Essential Items Including Medicines and Education',
    description: 'The 53rd GST Council meeting approves rate rationalization, providing relief to middle-income households. Life-saving medicines now at 5% GST.',
    date: 'Feb 12, 2026',
    featured: false,
    tag: 'Economy',
  },
  {
    ministry: 'MEA',
    title: 'India and UAE Sign 14 MoUs on Digital Economy, Clean Energy, and Defence',
    description: 'PM\'s visit to UAE results in landmark agreements covering digital payments interoperability, solar energy collaboration, and defence manufacturing.',
    date: 'Feb 11, 2026',
    featured: false,
    tag: 'Foreign Affairs',
  },
  {
    ministry: 'Education',
    title: 'National Education Policy 2020: 5-Year Progress Report Released by MoE',
    description: '80% of schools have adopted the new curriculum framework, with 2.5 crore students benefiting from mother-tongue medium instruction in early classes.',
    date: 'Feb 10, 2026',
    featured: false,
    tag: 'Education',
  },
];

const ministryColors: Record<string, string> = {
  'MeitY': 'info',
  'MoH&FW': 'success',
  'MoRD': 'warning',
  'Finance': 'warning',
  'MEA': 'default',
  'Education': 'info',
};

export default function PIBAnnouncements() {
  const featuredRelease = releases[0];
  const gridReleases = releases.slice(1);

  return (
    <div className="morni min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <GovBanner />

      {/* Header */}
      <header style={{ backgroundColor: 'var(--firoza-950)', borderBottom: '3px solid var(--sona-400)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--firoza-800)' }}>
              <Newspaper size={24} style={{ color: 'var(--sona-400)' }} />
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: 'var(--firoza-300)' }}>
                Government of India
              </div>
              <h1 className="text-xl font-bold" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                Press Information Bureau
              </h1>
              <div className="text-xs" style={{ color: 'var(--firoza-300)' }}>
                pib.gov.in — Official Press Releases
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 p-4 rounded-xl border"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
          <div className="flex items-center gap-2 text-sm font-semibold flex-shrink-0"
            style={{ color: 'var(--color-text-secondary)' }}>
            <Filter size={15} />
            Filter by:
          </div>
          <div className="flex flex-1 flex-wrap gap-3">
            <div className="flex-1 min-w-[160px]">
              <Select
                label=""
                options={[
                  { value: '', label: 'All Ministries' },
                  { value: 'meity', label: 'MeitY' },
                  { value: 'moh', label: 'Health & FW' },
                  { value: 'mord', label: 'Rural Development' },
                  { value: 'finance', label: 'Finance Ministry' },
                  { value: 'mea', label: 'External Affairs' },
                  { value: 'edu', label: 'Education Ministry' },
                ]}
              />
            </div>
            <div className="flex-1 min-w-[160px]">
              <Select
                label=""
                options={[
                  { value: '', label: 'All Dates' },
                  { value: 'today', label: 'Today' },
                  { value: 'week', label: 'This Week' },
                  { value: 'month', label: 'This Month' },
                  { value: '2026', label: 'Year 2026' },
                ]}
              />
            </div>
            <div className="flex-[2] min-w-[200px]">
              <Search placeholder="Search press releases..." />
            </div>
          </div>
        </div>

        {/* Featured Press Release */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SearchIcon size={15} style={{ color: 'var(--sona-600)' }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--sona-600)' }}>
              Featured Release
            </span>
          </div>
          <Card variant="outline" className="cursor-pointer transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant={ministryColors[featuredRelease.ministry] as 'info' | 'success' | 'warning' | 'default'}>
                      {featuredRelease.ministry}
                    </Badge>
                    <Badge variant="warning">{featuredRelease.tag}</Badge>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <Calendar size={11} /> {featuredRelease.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>
                    {featuredRelease.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {featuredRelease.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold"
                    style={{ color: 'var(--color-primary)' }}>
                    Read full press release <ExternalLink size={13} className="ml-1" />
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-40 h-28 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: 'var(--firoza-50)' }}>
                  <Newspaper size={40} style={{ color: 'var(--firoza-300)' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Press Release Grid */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Recent Releases
          </h2>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Showing 1–6 of 248</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {gridReleases.map((release, i) => (
            <Card key={i} variant="outline" className="cursor-pointer transition-all hover:shadow-sm">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant={ministryColors[release.ministry] as 'info' | 'success' | 'warning' | 'default'}>
                    {release.ministry}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    <Calendar size={10} /> {release.date}
                  </span>
                </div>
                <CardTitle className="text-sm leading-snug">{release.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{release.description}</CardDescription>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold"
                  style={{ color: 'var(--color-primary)' }}>
                  Read more <ChevronRight size={12} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Pagination totalPages={42} currentPage={1} onPageChange={() => {}} />
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t text-center text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
        <p>© 2026 Press Information Bureau, Government of India · pib.gov.in</p>
        <p className="mt-1">
          <a href="#" style={{ color: 'var(--color-primary)' }}>Subscribe to PIB releases</a> ·{' '}
          <a href="#" style={{ color: 'var(--color-primary)' }}>RSS Feed</a> ·{' '}
          <a href="#" style={{ color: 'var(--color-primary)' }}>Contact PIB</a>
        </p>
      </footer>
    </div>
  );
}
