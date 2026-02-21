import React from 'react';

import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { RadioGroup } from '../components/ui/Radio';
import { TextArea } from '../components/ui/TextArea';
import { Alert } from '../components/ui/Alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Pagination } from '../components/ui/Pagination';
import { Search } from '../components/ui/Search';
import { StepIndicator } from '../components/ui/StepIndicator';

// ─── Interactive wrappers ──────────────────────────────

function FormPatternPreview() {
  return (
    <div className="max-w-xl mx-auto">
      <h3
        className="text-lg font-semibold mb-1"
        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
      >
        Benefit Application
      </h3>
      <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
        All fields marked with * are required.
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="First name" placeholder="e.g. Rahul" required />
          <Input label="Last name" placeholder="e.g. Sharma" required />
        </div>

        <Input label="Email address" type="email" placeholder="rahul.sharma@example.gov.in" required />

        <Select
          label="District of residence"
          placeholder="Select a district"
          required
          options={[
            { value: 'delhi', label: 'New Delhi' },
            { value: 'mumbai', label: 'Mumbai' },
            { value: 'bengaluru', label: 'Bengaluru' },
            { value: 'hyderabad', label: 'Hyderabad' },
            { value: 'chennai', label: 'Chennai' },
          ]}
        />

        <RadioGroup
          name="application-type"
          label="Application type"
          options={[
            { value: 'new', label: 'New application' },
            { value: 'renewal', label: 'Renewal' },
            { value: 'update', label: 'Update existing' },
          ]}
          defaultValue="new"
        />

        <TextArea
          label="Additional information"
          placeholder="Provide any supporting details for your application..."
          helperText="Maximum 500 characters"
          maxLength={500}
          showCount
        />

        <Checkbox
          label="I certify that the information provided is accurate"
          description="By checking this box, you agree to the terms and conditions of the Government of India."
        />

        <div className="flex gap-3 pt-2">
          <Button>Submit Application</Button>
          <Button variant="outline">Save Draft</Button>
        </div>
      </div>
    </div>
  );
}

function FormErrorPreview() {
  return (
    <div className="max-w-xl mx-auto">
      <Alert variant="error" title="There are 3 errors in this form">
        Please correct the highlighted fields before submitting.
      </Alert>

      <div className="space-y-5 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="First name" required error="First name is required" />
          <Input label="Last name" placeholder="Sharma" required defaultValue="Sharma" />
        </div>

        <Input
          label="Email address"
          type="email"
          required
          defaultValue="invalid-email"
          error="Enter a valid email address"
        />

        <Select
          label="District of residence"
          placeholder="Select a district"
          required
          error="Please select a district"
          options={[
            { value: 'delhi', label: 'New Delhi' },
            { value: 'mumbai', label: 'Mumbai' },
          ]}
        />

        <div className="flex gap-3 pt-2">
          <Button>Submit Application</Button>
          <Button variant="outline">Save Draft</Button>
        </div>
      </div>
    </div>
  );
}

function FormSuccessPreview() {
  return (
    <div className="max-w-xl mx-auto">
      <Alert variant="success" title="Application submitted successfully">
        Your application has been received. Your confirmation number is <strong>IN-2025-00847</strong>.
        You will receive a confirmation email within 24 hours.
      </Alert>

      <Card variant="outline" className="mt-5">
        <CardContent>
          <h4
            className="text-sm font-semibold mb-3"
            style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
          >
            What happens next
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vana-500)' }}>1.</span>
              Your application will be reviewed within 5–7 business days.
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vana-500)' }}>2.</span>
              You may be contacted for additional documentation.
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vana-500)' }}>3.</span>
              A decision letter will be mailed to your address on file.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Print Confirmation</Button>
          <Button variant="ghost" size="sm">Return to Dashboard</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function SearchResultsPreview() {
  const [page, setPage] = React.useState(1);

  const results = [
    {
      title: 'Driving Licence Renewal',
      description: 'Renew your driving licence online or schedule an in-person appointment at your nearest RTO office.',
      category: 'Transport Services',
      updated: 'Jan 15, 2025',
    },
    {
      title: 'Vehicle Registration',
      description: 'Register a new vehicle, transfer ownership, or update your vehicle registration information.',
      category: 'Transport Services',
      updated: 'Feb 3, 2025',
    },
    {
      title: 'DigiLocker Registration',
      description: 'Access your government-issued documents digitally using your Aadhaar number and mobile OTP.',
      category: 'Identification',
      updated: 'Mar 1, 2025',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Search
        label="Search government services"
        showLabel
        placeholder="Search for services, forms, or information..."
        defaultValue="driver license"
        size="lg"
      />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Showing <strong>1–3</strong> of <strong>24</strong> results for "driver license"
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary">All Results</Badge>
          <Badge variant="outline">Services</Badge>
          <Badge variant="outline">Forms</Badge>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {results.map((result, index) => (
          <Card key={index} variant="outline" clickable>
            <CardContent>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base mb-1">{result.title}</CardTitle>
                  <CardDescription className="text-sm mb-2">{result.description}</CardDescription>
                  <div className="flex gap-2">
                    <Badge variant="secondary" size="sm">{result.category}</Badge>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      Updated {result.updated}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination totalPages={8} currentPage={page} onPageChange={setPage} />
      </div>
    </div>
  );
}

function SearchEmptyPreview() {
  return (
    <div className="max-w-2xl mx-auto">
      <Search
        label="Search government services"
        showLabel
        placeholder="Search for services, forms, or information..."
        defaultValue="xyznonexistent"
        size="lg"
      />

      <div className="mt-8 text-center py-12">
        <div
          className="text-4xl mb-3"
          style={{ color: 'var(--color-text-muted)' }}
          aria-hidden="true"
        >
          ?
        </div>
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
        >
          No results found
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
          We couldn't find anything matching "xyznonexistent". Try adjusting your search terms.
        </p>
        <div className="space-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <p>Suggestions:</p>
          <ul className="list-disc list-inside">
            <li>Check for spelling errors</li>
            <li>Try using fewer or different keywords</li>
            <li>Browse by category instead</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatusTrackerPreview() {
  return (
    <div className="max-w-2xl mx-auto">
      <h3
        className="text-lg font-semibold mb-1"
        style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}
      >
        Application Status
      </h3>
      <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
        Tracking ID: <strong>IN-2025-00847</strong>
      </p>

      <StepIndicator
        steps={[
          { label: 'Submitted', description: 'Jan 15, 2025' },
          { label: 'Under Review', description: 'Jan 18, 2025' },
          { label: 'Additional Info', description: 'Pending' },
          { label: 'Decision', description: 'Pending' },
        ]}
        currentStep={2}
      />

      <Card variant="outline" className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Current Status</CardTitle>
            <Badge variant="warning">Under Review</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Your application is currently being reviewed by the Department of Social Services.
            A caseworker has been assigned and may contact you for additional documentation.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Submitted
              </span>
              <span style={{ color: 'var(--color-text)' }}>January 15, 2025</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Assigned To
              </span>
              <span style={{ color: 'var(--color-text)' }}>Case Worker #4821</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Expected Decision
              </span>
              <span style={{ color: 'var(--color-text)' }}>February 1, 2025</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Application Type
              </span>
              <span style={{ color: 'var(--color-text)' }}>New Application</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Contact Support</Button>
          <Button variant="ghost" size="sm">View Documents</Button>
        </CardFooter>
      </Card>

      <Alert variant="info" title="Action may be required" className="mt-4">
        You may be asked to provide additional documentation. Check your email and this portal regularly for updates.
      </Alert>
    </div>
  );
}

function StatusTrackerCompletePreview() {
  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator
        steps={[
          { label: 'Submitted', description: 'Jan 15, 2025' },
          { label: 'Under Review', description: 'Jan 18, 2025' },
          { label: 'Additional Info', description: 'Jan 22, 2025' },
          { label: 'Decision', description: 'Jan 28, 2025' },
        ]}
        currentStep={4}
      />

      <Alert variant="success" title="Application Approved" className="mt-6">
        Your benefit application has been approved. You will receive your benefits card within 7–10 business days.
      </Alert>

      <Card variant="outline" className="mt-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Decision Details</CardTitle>
            <Badge variant="success">Approved</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Decision Date
              </span>
              <span style={{ color: 'var(--color-text)' }}>January 28, 2025</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Benefit Amount
              </span>
              <span style={{ color: 'var(--color-text)' }}>₹4,500/month</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Effective Date
              </span>
              <span style={{ color: 'var(--color-text)' }}>February 1, 2025</span>
            </div>
            <div>
              <span className="block text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                Renewal Date
              </span>
              <span style={{ color: 'var(--color-text)' }}>August 1, 2025</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="sm">Download Decision Letter</Button>
          <Button variant="ghost" size="sm">Return to Dashboard</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// ─── Registry ──────────────────────────────────────────

interface VariantPreview {
  title: string;
  preview: React.ReactNode;
  code: string;
}

interface PatternRegistryEntry {
  defaultPreview: React.ReactNode;
  defaultCode: string;
  variants?: VariantPreview[];
  accessibility: string[];
  dos?: string[];
  donts?: string[];
}

export const patternRegistry: Record<string, PatternRegistryEntry> = {
  // ─── Form Pattern ────────────────────────────────────
  form: {
    defaultPreview: <FormPatternPreview />,
    defaultCode: `<form className="max-w-xl space-y-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input label="First name" required />
    <Input label="Last name" required />
  </div>

  <Input label="Email address" type="email" required />

  <Select
    label="District of residence"
    required
    options={[
      { value: 'delhi', label: 'New Delhi' },
      { value: 'mumbai', label: 'Mumbai' },
    ]}
  />

  <RadioGroup
    name="application-type"
    label="Application type"
    options={[
      { value: 'new', label: 'New application' },
      { value: 'renewal', label: 'Renewal' },
    ]}
  />

  <TextArea
    label="Additional information"
    maxLength={500}
    showCount
  />

  <Checkbox
    label="I certify that the information provided is accurate"
  />

  <div className="flex gap-3">
    <Button>Submit Application</Button>
    <Button variant="outline">Save Draft</Button>
  </div>
</form>`,
    variants: [
      {
        title: 'Error State — Validation Summary',
        preview: <FormErrorPreview />,
        code: `{/* Show error summary at top */}
<Alert variant="error" title="There are 3 errors in this form">
  Please correct the highlighted fields before submitting.
</Alert>

{/* Individual field errors */}
<Input label="First name" required error="First name is required" />
<Input label="Email" error="Enter a valid email address" />
<Select label="County" error="Please select a county" options={[...]} />`,
      },
      {
        title: 'Success State — Confirmation',
        preview: <FormSuccessPreview />,
        code: `<Alert variant="success" title="Application submitted successfully">
  Your confirmation number is <strong>IN-2025-00847</strong>.
</Alert>

<Card variant="outline">
  <CardContent>
    <h4>What happens next</h4>
    <ol>
      <li>Your application will be reviewed within 5–7 business days.</li>
      <li>You may be contacted for additional documentation.</li>
      <li>A decision letter will be mailed to your address on file.</li>
    </ol>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Print Confirmation</Button>
  </CardFooter>
</Card>`,
      },
    ],
    accessibility: [
      'All form fields have associated labels via the label prop',
      'Error messages are linked to inputs with aria-describedby',
      'Error summary uses role="alert" for screen reader announcement',
      'Required fields are indicated with both visual (*) and aria-required',
      'Tab order follows visual reading order',
      'Form can be submitted via Enter key',
      'Checkbox uses native input for keyboard support (Space to toggle)',
      'Radio group uses fieldset/legend for screen reader context',
    ],
    dos: [
      'Always display an error summary at the top of the form when validation fails',
      'Mark required fields clearly and explain the notation',
      'Provide inline error messages directly below the invalid field',
      'Offer a clear confirmation state with next steps after submission',
      'Group related fields (e.g., name fields in a row)',
    ],
    donts: [
      'Don\'t rely solely on color to indicate errors — use icons and text',
      'Don\'t clear the form on validation failure — preserve user input',
      'Don\'t use placeholder text as a substitute for labels',
      'Don\'t require fields that aren\'t essential to the process',
      'Don\'t hide the submit button behind other interactions',
    ],
  },

  // ─── Search Results ──────────────────────────────────
  'search-results': {
    defaultPreview: <SearchResultsPreview />,
    defaultCode: `<Search
  label="Search government services"
  showLabel
  placeholder="Search for services, forms, or information..."
  size="lg"
/>

<div className="mt-4 flex items-center justify-between">
  <p>Showing <strong>1–3</strong> of <strong>24</strong> results</p>
  <div className="flex gap-2">
    <Badge variant="secondary">All Results</Badge>
    <Badge variant="outline">Services</Badge>
    <Badge variant="outline">Forms</Badge>
  </div>
</div>

<div className="mt-4 space-y-3">
  {results.map(result => (
    <Card variant="outline" clickable>
      <CardContent>
        <CardTitle>{result.title}</CardTitle>
        <CardDescription>{result.description}</CardDescription>
        <Badge variant="secondary" size="sm">
          {result.category}
        </Badge>
      </CardContent>
    </Card>
  ))}
</div>

<Pagination
  totalPages={8}
  currentPage={page}
  onPageChange={setPage}
/>`,
    variants: [
      {
        title: 'Empty State — No Results',
        preview: <SearchEmptyPreview />,
        code: `<Search
  label="Search"
  showLabel
  defaultValue="xyznonexistent"
  size="lg"
/>

<div className="text-center py-12">
  <h3>No results found</h3>
  <p>We couldn't find anything matching your query.</p>
  <ul>
    <li>Check for spelling errors</li>
    <li>Try using fewer or different keywords</li>
    <li>Browse by category instead</li>
  </ul>
</div>`,
      },
    ],
    accessibility: [
      'Search input has a visible label (showLabel prop)',
      'Results count is announced to screen readers on update',
      'Each result card is keyboard focusable via clickable prop',
      'Pagination uses nav element with aria-label="Pagination"',
      'Current page is indicated with aria-current="page"',
      'Filter badges act as toggles with appropriate state',
      'Empty state provides actionable suggestions',
    ],
    dos: [
      'Show the number of results and the current search query',
      'Provide filter options to narrow results',
      'Show relevant metadata (category, date) on each result',
      'Include pagination for large result sets',
      'Provide helpful suggestions when no results are found',
    ],
    donts: [
      'Don\'t auto-submit on every keystroke without debouncing',
      'Don\'t show a blank page when there are no results',
      'Don\'t hide the search bar after submitting a query',
      'Don\'t paginate with fewer than 10 results',
      'Don\'t remove the user\'s query when showing results',
    ],
  },

  // ─── Status Tracker ──────────────────────────────────
  'status-tracker': {
    defaultPreview: <StatusTrackerPreview />,
    defaultCode: `<StepIndicator
  steps={[
    { label: 'Submitted', description: 'Jan 15, 2025' },
    { label: 'Under Review', description: 'Jan 18, 2025' },
    { label: 'Additional Info', description: 'Pending' },
    { label: 'Decision', description: 'Pending' },
  ]}
  currentStep={2}
/>

<Card variant="outline">
  <CardHeader>
    <CardTitle>Current Status</CardTitle>
    <Badge variant="warning">Under Review</Badge>
  </CardHeader>
  <CardContent>
    <p>Your application is currently being reviewed...</p>
    <div className="grid grid-cols-2 gap-4">
      <div><strong>Submitted:</strong> January 15, 2025</div>
      <div><strong>Assigned To:</strong> Case Worker #4821</div>
      <div><strong>Expected Decision:</strong> February 1, 2025</div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Contact Support</Button>
  </CardFooter>
</Card>

<Alert variant="info" title="Action may be required">
  Check your email for updates.
</Alert>`,
    variants: [
      {
        title: 'Completed — Approved',
        preview: <StatusTrackerCompletePreview />,
        code: `<StepIndicator
  steps={[
    { label: 'Submitted', description: 'Jan 15' },
    { label: 'Under Review', description: 'Jan 18' },
    { label: 'Additional Info', description: 'Jan 22' },
    { label: 'Decision', description: 'Jan 28' },
  ]}
  currentStep={4}
/>

<Alert variant="success" title="Application Approved">
  You will receive your benefits card within 7–10 business days.
</Alert>

<Card variant="outline">
  <CardHeader>
    <CardTitle>Decision Details</CardTitle>
    <Badge variant="success">Approved</Badge>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <div>Decision Date: January 28, 2025</div>
      <div>Benefit Amount: ₹4,500/month</div>
    </div>
  </CardContent>
  <CardFooter>
    <Button>Download Decision Letter</Button>
  </CardFooter>
</Card>`,
      },
    ],
    accessibility: [
      'StepIndicator uses aria-label to announce progress (e.g., "Step 2 of 4")',
      'Completed steps are visually distinct with checkmarks',
      'Status badge provides text alternative to color coding',
      'Alert uses role="alert" for important status changes',
      'Card content uses semantic headings for structure',
      'Action buttons are clearly labeled with their purpose',
    ],
    dos: [
      'Show a clear timeline of all steps in the process',
      'Indicate the current step and what comes next',
      'Provide a tracking/reference number prominently',
      'Show estimated timelines when available',
      'Include contact information for support',
    ],
    donts: [
      'Don\'t hide completed steps from the timeline',
      'Don\'t use only color to indicate step status',
      'Don\'t omit the current step description',
      'Don\'t require users to navigate away to see their status',
      'Don\'t leave users without a clear next action',
    ],
  },
};
