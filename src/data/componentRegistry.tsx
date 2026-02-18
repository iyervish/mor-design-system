import React from 'react';
import type { PropDef } from '../components/docs/PropsTable';

// Component imports will be added as components are built
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio, RadioGroup } from '../components/ui/Radio';
import { TextArea } from '../components/ui/TextArea';
import { Alert } from '../components/ui/Alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { Banner } from '../components/ui/Banner';
import { Footer } from '../components/ui/Footer';
import { GovBanner } from '../components/ui/GovBanner';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Pagination } from '../components/ui/Pagination';
import { Search } from '../components/ui/Search';
import { SideNavigation } from '../components/ui/SideNavigation';
import { StepIndicator } from '../components/ui/StepIndicator';
import { Tabs, TabList, Tab, TabPanel } from '../components/ui/Tabs';
import { Tooltip } from '../components/ui/Tooltip';

// ─── Interactive preview helpers (need useState) ──────
function ModalPreviewWrapper() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader><ModalTitle>Confirm Action</ModalTitle></ModalHeader>
        <ModalBody>Are you sure you want to submit this application? This action cannot be undone.</ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function ModalSizePreview({ size, label }: { size: 'sm' | 'md' | 'lg'; label: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>{label}</Button>
      <Modal open={open} onClose={() => setOpen(false)} size={size}>
        <ModalHeader><ModalTitle>{label} Modal</ModalTitle></ModalHeader>
        <ModalBody>This is a {label.toLowerCase()} modal dialog.</ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

function PaginationPreviewWrapper({ showFirstLast, size }: { showFirstLast?: boolean; size?: 'sm' | 'md' }) {
  const [page, setPage] = React.useState(5);
  return (
    <Pagination
      totalPages={10}
      currentPage={page}
      onPageChange={setPage}
      showFirstLast={showFirstLast}
      size={size}
    />
  );
}

interface VariantPreview {
  title: string;
  preview: React.ReactNode;
  code: string;
}

interface ComponentRegistryEntry {
  defaultPreview: React.ReactNode;
  defaultCode: string;
  variants?: VariantPreview[];
  propDefinitions: PropDef[];
  accessibility: string[];
  dos?: string[];
  donts?: string[];
  usageCode?: string;
}

export const componentRegistry: Record<string, ComponentRegistryEntry> = {
  // ─── Button ───────────────────────────────────────────
  button: {
    defaultPreview: (
      <div className="flex flex-wrap gap-3">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    ),
    defaultCode: `<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,
    variants: [
      {
        title: 'Sizes',
        preview: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
      {
        title: 'States',
        preview: (
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        ),
        code: `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'", default: "'primary'", description: 'Visual style variant' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading spinner and disables interaction' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Button content' },
    ],
    accessibility: [
      'Uses native <button> element for built-in keyboard and screen reader support',
      'Disabled state uses aria-disabled for screen reader announcement',
      'Loading state announces "Loading" to screen readers via aria-label',
      'Focus ring visible on keyboard navigation (focus-visible)',
      'Meets WCAG 2.1 AA contrast requirements in all variants',
    ],
    dos: [
      'Use clear, action-oriented labels ("Submit application", "Save changes")',
      'Use primary variant for the main action on a page',
      'Use destructive variant only for irreversible actions',
      'Provide loading state feedback for async actions',
    ],
    donts: [
      'Don\'t use multiple primary buttons in the same section',
      'Don\'t use vague labels like "Click here" or "Submit"',
      'Don\'t disable buttons without explaining why',
      'Don\'t use ghost variant for primary actions',
    ],
    usageCode: `// Basic usage
<Button onClick={handleSubmit}>Submit Application</Button>

// With loading state
<Button loading={isSubmitting}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>

// Destructive action
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>`,
  },

  // ─── Input ────────────────────────────────────────────
  input: {
    defaultPreview: (
      <div className="w-full max-w-sm space-y-4">
        <Input label="Full Name" placeholder="Enter your name" />
        <Input label="Email" type="email" placeholder="name@example.com" helperText="We'll never share your email." />
      </div>
    ),
    defaultCode: `<Input label="Full Name" placeholder="Enter your name" />
<Input label="Email" type="email" placeholder="name@example.com"
  helperText="We'll never share your email." />`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <Input label="Email" type="email" error="Please enter a valid email address" defaultValue="invalid-email" />
          </div>
        ),
        code: `<Input label="Email" type="email"
  error="Please enter a valid email address"
  defaultValue="invalid-email" />`,
      },
      {
        title: 'Sizes',
        preview: (
          <div className="w-full max-w-sm space-y-3">
            <Input label="Small" size="sm" placeholder="Small input" />
            <Input label="Medium" size="md" placeholder="Medium input" />
            <Input label="Large" size="lg" placeholder="Large input" />
          </div>
        ),
        code: `<Input label="Small" size="sm" placeholder="Small input" />
<Input label="Medium" size="md" placeholder="Medium input" />
<Input label="Large" size="lg" placeholder="Large input" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'Input label text' },
      { name: 'helperText', type: 'string', description: 'Helper text below the input' },
      { name: 'error', type: 'string', description: 'Error message (also sets error styling)' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
    ],
    accessibility: [
      'Label is properly associated with input via htmlFor/id',
      'Error messages linked via aria-describedby',
      'aria-invalid set when error prop is provided',
      'Helper text linked via aria-describedby',
      'Focus ring visible on keyboard navigation',
    ],
    dos: [
      'Always provide a visible label',
      'Use helper text for format requirements',
      'Show inline error messages near the field',
    ],
    donts: [
      'Don\'t use placeholder text as a label replacement',
      'Don\'t show errors before the user interacts with the field',
      'Don\'t use red for non-error states',
    ],
    usageCode: `<Input
  label="Social Security Number"
  type="text"
  placeholder="XXX-XX-XXXX"
  helperText="Required for benefit applications"
  error={errors.ssn}
/>`,
  },

  // ─── Select ───────────────────────────────────────────
  select: {
    defaultPreview: (
      <div className="w-full max-w-sm">
        <Select
          label="State"
          placeholder="Select a state"
          options={[
            { value: 'va', label: 'Virginia' },
            { value: 'md', label: 'Maryland' },
            { value: 'dc', label: 'District of Columbia' },
          ]}
        />
      </div>
    ),
    defaultCode: `<Select
  label="State"
  placeholder="Select a state"
  options={[
    { value: 'va', label: 'Virginia' },
    { value: 'md', label: 'Maryland' },
    { value: 'dc', label: 'District of Columbia' },
  ]}
/>`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <Select label="County" placeholder="Select a county" options={[]} error="County is required" />
          </div>
        ),
        code: `<Select label="County" placeholder="Select a county"
  options={[]} error="County is required" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'Select label text' },
      { name: 'options', type: '{ value: string, label: string }[]', required: true, description: 'Array of options' },
      { name: 'placeholder', type: 'string', description: 'Placeholder option text' },
      { name: 'helperText', type: 'string', description: 'Helper text below the select' },
      { name: 'error', type: 'string', description: 'Error message' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Select size' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select' },
    ],
    accessibility: [
      'Uses native <select> element for full keyboard and screen reader support',
      'Label properly associated via htmlFor/id',
      'Error messages linked via aria-describedby',
    ],
    dos: [
      'Provide a clear placeholder option',
      'Keep option lists reasonable (under 15 items)',
      'Sort options logically (alphabetical or by frequency)',
    ],
    donts: [
      'Don\'t use a select for fewer than 3 options (use radio instead)',
      'Don\'t use for very long lists (use a combobox/autocomplete)',
    ],
  },

  // ─── Checkbox ─────────────────────────────────────────
  checkbox: {
    defaultPreview: (
      <div className="space-y-3">
        <Checkbox label="I agree to the terms and conditions" />
        <Checkbox label="Subscribe to newsletter" description="Get monthly updates about Virginia services" />
        <Checkbox label="Disabled option" disabled />
      </div>
    ),
    defaultCode: `<Checkbox label="I agree to the terms and conditions" />
<Checkbox label="Subscribe to newsletter"
  description="Get monthly updates about Virginia services" />
<Checkbox label="Disabled option" disabled />`,
    propDefinitions: [
      { name: 'label', type: 'string', required: true, description: 'Checkbox label' },
      { name: 'description', type: 'string', description: 'Additional description below the label' },
      { name: 'checked', type: 'boolean', description: 'Controlled checked state' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
      { name: 'error', type: 'string', description: 'Error message' },
    ],
    accessibility: [
      'Uses native <input type="checkbox"> for built-in support',
      'Label properly associated for click-to-toggle',
      'Focus ring visible on keyboard navigation',
      'Checked state announced by screen readers',
    ],
    dos: [
      'Use for multiple selections from a list',
      'Write labels as positive statements',
      'Group related checkboxes with a fieldset and legend',
    ],
    donts: [
      'Don\'t use for mutually exclusive options (use radio)',
      'Don\'t use negative phrasing ("Don\'t send emails")',
    ],
  },

  // ─── Radio ────────────────────────────────────────────
  radio: {
    defaultPreview: (
      <RadioGroup
        name="contact-method"
        label="Preferred contact method"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone', description: 'We\'ll call during business hours' },
          { value: 'mail', label: 'Mail' },
        ]}
      />
    ),
    defaultCode: `<RadioGroup
  name="contact-method"
  label="Preferred contact method"
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone',
      description: "We'll call during business hours" },
    { value: 'mail', label: 'Mail' },
  ]}
/>`,
    propDefinitions: [
      { name: 'name', type: 'string', required: true, description: 'Form field name' },
      { name: 'label', type: 'string', description: 'Group label' },
      { name: 'options', type: '{ value: string, label: string, description?: string }[]', required: true, description: 'Radio options' },
      { name: 'value', type: 'string', description: 'Controlled selected value' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all options' },
      { name: 'error', type: 'string', description: 'Error message' },
    ],
    accessibility: [
      'Uses native <input type="radio"> within a <fieldset>',
      'Group label provided via <legend>',
      'Arrow keys navigate between options',
      'Error messages linked via aria-describedby',
    ],
    dos: [
      'Use for mutually exclusive choices',
      'Always provide a group label',
      'Pre-select a default when possible',
    ],
    donts: [
      'Don\'t use for multiple selections (use checkbox)',
      'Don\'t use for more than 7 options (use select)',
    ],
  },

  // ─── TextArea ─────────────────────────────────────────
  textarea: {
    defaultPreview: (
      <div className="w-full max-w-sm space-y-4">
        <TextArea label="Description" placeholder="Tell us about your situation..." rows={4} />
        <TextArea label="Notes" placeholder="Additional notes..." maxLength={500} showCount />
      </div>
    ),
    defaultCode: `<TextArea label="Description"
  placeholder="Tell us about your situation..."
  rows={4} />
<TextArea label="Notes" placeholder="Additional notes..."
  maxLength={500} showCount />`,
    variants: [
      {
        title: 'Error State',
        preview: (
          <div className="w-full max-w-sm">
            <TextArea label="Reason" error="Please provide a reason for your request" />
          </div>
        ),
        code: `<TextArea label="Reason"
  error="Please provide a reason for your request" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', description: 'TextArea label' },
      { name: 'helperText', type: 'string', description: 'Helper text below the textarea' },
      { name: 'error', type: 'string', description: 'Error message' },
      { name: 'rows', type: 'number', default: '4', description: 'Number of visible rows' },
      { name: 'maxLength', type: 'number', description: 'Maximum character count' },
      { name: 'showCount', type: 'boolean', default: 'false', description: 'Show character counter' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
    ],
    accessibility: [
      'Label properly associated via htmlFor/id',
      'Error messages linked via aria-describedby',
      'Character count announced to screen readers',
      'aria-invalid set when error is present',
    ],
    dos: [
      'Set appropriate rows for expected content length',
      'Use maxLength with showCount for constrained fields',
    ],
    donts: [
      'Don\'t use for single-line input (use Input)',
      'Don\'t set very small row counts (minimum 3)',
    ],
  },

  // ─── Alert ────────────────────────────────────────────
  alert: {
    defaultPreview: (
      <div className="w-full space-y-3">
        <Alert variant="info" title="Information">Your application has been received and is being reviewed.</Alert>
        <Alert variant="success" title="Success">Your password has been updated successfully.</Alert>
        <Alert variant="warning" title="Warning">Your session will expire in 5 minutes.</Alert>
        <Alert variant="error" title="Error">There was a problem processing your payment.</Alert>
      </div>
    ),
    defaultCode: `<Alert variant="info" title="Information">
  Your application has been received.
</Alert>
<Alert variant="success" title="Success">
  Your password has been updated.
</Alert>
<Alert variant="warning" title="Warning">
  Your session will expire in 5 minutes.
</Alert>
<Alert variant="error" title="Error">
  There was a problem processing your payment.
</Alert>`,
    variants: [
      {
        title: 'Dismissible',
        preview: (
          <Alert variant="info" title="Heads up" dismissible>
            This alert can be dismissed by clicking the close button.
          </Alert>
        ),
        code: `<Alert variant="info" title="Heads up" dismissible>
  This alert can be dismissed.
</Alert>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Alert severity' },
      { name: 'title', type: 'string', description: 'Alert heading' },
      { name: 'children', type: 'ReactNode', description: 'Alert description content' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Show close button' },
      { name: 'onDismiss', type: '() => void', description: 'Called when alert is dismissed' },
    ],
    accessibility: [
      'Uses role="alert" for error and warning variants',
      'Uses role="status" for info and success variants',
      'Dismiss button has aria-label="Dismiss alert"',
      'Default icons per variant provide visual redundancy',
    ],
    dos: [
      'Use concise, actionable messages',
      'Match variant to severity (error for failures, warning for caution)',
      'Provide a title for scannability',
    ],
    donts: [
      'Don\'t use alerts for non-important information',
      'Don\'t stack more than 3 alerts at once',
      'Don\'t use error variant for warnings',
    ],
  },

  // ─── Card ─────────────────────────────────────────────
  card: {
    defaultPreview: (
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Virginia DMV</CardTitle>
            <CardDescription>Renew your driver's license online</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
              Complete your renewal in minutes. You'll need your current license number and a valid payment method.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Start Renewal</Button>
          </CardFooter>
        </Card>
      </div>
    ),
    defaultCode: `<Card>
  <CardHeader>
    <CardTitle>Virginia DMV</CardTitle>
    <CardDescription>Renew your driver's license</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Complete your renewal in minutes.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Start Renewal</Button>
  </CardFooter>
</Card>`,
    variants: [
      {
        title: 'Variants',
        preview: (
          <div className="flex flex-wrap gap-4">
            <Card variant="outline" className="w-48">
              <CardContent><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Outline card</p></CardContent>
            </Card>
            <Card variant="elevated" className="w-48">
              <CardContent><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Elevated card</p></CardContent>
            </Card>
          </div>
        ),
        code: `<Card variant="outline">...</Card>
<Card variant="elevated">...</Card>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'default' | 'outline' | 'elevated'", default: "'default'", description: 'Card style variant' },
      { name: 'padding', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding' },
      { name: 'clickable', type: 'boolean', default: 'false', description: 'Add hover effect for clickable cards' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
    ],
    accessibility: [
      'Semantic HTML structure with proper heading hierarchy',
      'Clickable cards use appropriate cursor and hover feedback',
      'Card content is accessible to screen readers in reading order',
    ],
    dos: [
      'Use cards to group related content',
      'Maintain consistent card layouts within a page',
      'Use CardHeader for scannable titles',
    ],
    donts: [
      'Don\'t nest cards within cards',
      'Don\'t overload cards with too much content',
      'Don\'t use cards for single pieces of information (use a list)',
    ],
  },

  // ─── Badge ────────────────────────────────────────────
  badge: {
    defaultPreview: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Approved</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Rejected</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    defaultCode: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="outline">Outline</Badge>`,
    variants: [
      {
        title: 'Sizes',
        preview: (
          <div className="flex items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </div>
        ),
        code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'default' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'", default: "'default'", description: 'Badge color variant' },
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Badge size' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Badge content' },
    ],
    accessibility: [
      'Text content is readable by screen readers',
      'Color is not the sole indicator — text provides context',
      'Meets contrast requirements in all variants',
    ],
    dos: [
      'Use for status indicators and categories',
      'Keep text short (1-2 words)',
      'Use consistent variant meanings across the application',
    ],
    donts: [
      'Don\'t use badges for long text',
      'Don\'t rely solely on color to convey meaning',
    ],
  },

  // ─── Table ────────────────────────────────────────────
  table: {
    defaultPreview: (
      <Table striped hoverable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>County</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Smith</TableCell>
            <TableCell>Fairfax</TableCell>
            <TableCell><Badge variant="success" size="sm">Active</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>Arlington</TableCell>
            <TableCell><Badge variant="warning" size="sm">Pending</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>Loudoun</TableCell>
            <TableCell><Badge variant="error" size="sm">Expired</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    defaultCode: `<Table striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>County</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Smith</TableCell>
      <TableCell>Fairfax</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    propDefinitions: [
      { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row backgrounds' },
      { name: 'hoverable', type: 'boolean', default: 'false', description: 'Highlight rows on hover' },
      { name: 'compact', type: 'boolean', default: 'false', description: 'Reduced padding for dense data' },
    ],
    accessibility: [
      'Uses semantic <table>, <thead>, <tbody>, <th>, <td>',
      'Column headers use scope="col"',
      'Responsive wrapper allows horizontal scrolling',
      'Screen readers can navigate table structure',
    ],
    dos: [
      'Use for structured, comparable data',
      'Keep column headers short and descriptive',
      'Use striped rows for tables with many rows',
    ],
    donts: [
      'Don\'t use tables for layout purposes',
      'Don\'t make tables wider than necessary',
    ],
  },

  // ─── Breadcrumb ───────────────────────────────────────
  breadcrumb: {
    defaultPreview: (
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/components' },
          { label: 'Driver\'s License Renewal' },
        ]}
      />
    ),
    defaultCode: `<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: "Driver's License Renewal" },
  ]}
/>`,
    propDefinitions: [
      { name: 'items', type: '{ label: string, href?: string }[]', required: true, description: 'Breadcrumb items (last one is current page)' },
      { name: 'separator', type: 'string', default: "'/'", description: 'Separator character between items' },
    ],
    accessibility: [
      'Uses <nav> with aria-label="Breadcrumb"',
      'Current page marked with aria-current="page"',
      'Separator is hidden from screen readers via aria-hidden',
    ],
    dos: [
      'Show the full path from home to current page',
      'Make all items except the last clickable links',
      'Keep labels short and matching page titles',
    ],
    donts: [
      'Don\'t use breadcrumbs for fewer than 2 levels',
      'Don\'t use as the primary navigation',
    ],
  },

  // ─── Accordion ────────────────────────────────────────
  accordion: {
    defaultPreview: (
      <Accordion type="single" className="w-full">
        <AccordionItem title="How do I renew my driver's license?">
          You can renew your Virginia driver's license online, by mail, or in person at any DMV customer service center. Online renewals are available if your license hasn't been expired for more than 2 years.
        </AccordionItem>
        <AccordionItem title="What documents do I need?">
          You'll need your current license number, Social Security number, and a valid payment method. If renewing in person, bring two proofs of Virginia residency.
        </AccordionItem>
        <AccordionItem title="How long does it take?">
          Online renewals are processed within 7-10 business days. In-person renewals include a temporary license issued the same day.
        </AccordionItem>
      </Accordion>
    ),
    defaultCode: `<Accordion type="single">
  <AccordionItem title="How do I renew my driver's license?">
    You can renew online, by mail, or in person...
  </AccordionItem>
  <AccordionItem title="What documents do I need?">
    You'll need your current license number...
  </AccordionItem>
</Accordion>`,
    variants: [
      {
        title: 'Multiple Open',
        preview: (
          <Accordion type="multiple" defaultOpen={['0', '1']} className="w-full">
            <AccordionItem title="Section 1" defaultOpen>
              This section is open by default.
            </AccordionItem>
            <AccordionItem title="Section 2" defaultOpen>
              Multiple sections can be open simultaneously.
            </AccordionItem>
            <AccordionItem title="Section 3">
              This section is closed by default.
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="multiple" defaultOpen={['0', '1']}>
  <AccordionItem title="Section 1" defaultOpen>...</AccordionItem>
  <AccordionItem title="Section 2" defaultOpen>...</AccordionItem>
</Accordion>`,
      },
    ],
    propDefinitions: [
      { name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Allow one or multiple sections open' },
      { name: 'defaultOpen', type: 'string[]', description: 'IDs of initially open sections' },
      { name: 'title', type: 'string', required: true, description: 'AccordionItem header text' },
      { name: 'children', type: 'ReactNode', required: true, description: 'AccordionItem content' },
    ],
    accessibility: [
      'Header buttons use aria-expanded and aria-controls',
      'Content panels use role="region" with aria-labelledby',
      'Enter and Space toggle sections',
      'Focus management follows WAI-ARIA Accordion pattern',
    ],
    dos: [
      'Use for FAQ sections and progressive disclosure',
      'Keep headers concise and descriptive',
      'Use "single" type when content sections are long',
    ],
    donts: [
      'Don\'t nest accordions within accordions',
      'Don\'t use for critical content that users must see',
      'Don\'t hide primary actions inside accordions',
    ],
  },

  // ─── Banner ────────────────────────────────────────────
  banner: {
    defaultPreview: (
      <div className="w-full space-y-3">
        <Banner variant="info" title="System Update">
          Scheduled maintenance will occur this Saturday from 2–4 AM EST.
        </Banner>
        <Banner variant="success" title="Application Submitted">
          Your application has been submitted successfully.
        </Banner>
        <Banner variant="warning" title="Browser Not Supported">
          Please upgrade to a modern browser for the best experience.
        </Banner>
        <Banner variant="error" title="Service Unavailable">
          Online services are temporarily unavailable. Please try again later.
        </Banner>
      </div>
    ),
    defaultCode: `<Banner variant="info" title="System Update">
  Scheduled maintenance will occur this Saturday.
</Banner>
<Banner variant="success" title="Application Submitted">
  Your application has been submitted successfully.
</Banner>
<Banner variant="warning" title="Browser Not Supported">
  Please upgrade to a modern browser.
</Banner>
<Banner variant="error" title="Service Unavailable">
  Online services are temporarily unavailable.
</Banner>`,
    variants: [
      {
        title: 'Dismissible',
        preview: (
          <Banner variant="info" title="New Feature Available" dismissible>
            You can now renew your license online. Try it today!
          </Banner>
        ),
        code: `<Banner variant="info" title="New Feature" dismissible>
  You can now renew your license online.
</Banner>`,
      },
    ],
    propDefinitions: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'The severity/visual style of the banner' },
      { name: 'title', type: 'string', description: 'Optional bold heading text' },
      { name: 'children', type: 'ReactNode', description: 'Banner description content' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Show dismiss button' },
      { name: 'onDismiss', type: '() => void', description: 'Called when dismiss button is clicked' },
      { name: 'icon', type: 'ReactNode | null', description: 'Custom icon. Pass null to hide' },
    ],
    accessibility: [
      'Uses role="alert" for error/warning variants for immediate screen reader announcement',
      'Uses role="status" for info/success variants',
      'Dismiss button has aria-label="Dismiss banner"',
      'Left border accent provides visual distinction beyond color',
      'Default icons provide visual redundancy with text',
    ],
    dos: [
      'Use for site-wide announcements and system messages',
      'Place at the top of the page content area',
      'Use concise, actionable messaging',
      'Match variant to severity level',
    ],
    donts: [
      'Don\'t use banners for inline form validation (use Alert instead)',
      'Don\'t stack more than 2 banners at once',
      'Don\'t use error variant for non-critical information',
    ],
    usageCode: `// System maintenance notice
<Banner variant="warning" title="Scheduled Maintenance">
  The DMV online portal will be unavailable on Saturday,
  March 15 from 2:00 AM to 4:00 AM EST.
</Banner>

// Dismissible new feature announcement
<Banner variant="info" title="New Feature" dismissible
  onDismiss={() => setDismissed(true)}>
  Online license renewal is now available!
</Banner>`,
  },

  // ─── Footer ────────────────────────────────────────────
  footer: {
    defaultPreview: (
      <Footer
        siteName="Virginia DMV"
        linkGroups={[
          {
            title: 'Services',
            links: [
              { label: 'License Renewal', href: '#' },
              { label: 'Vehicle Registration', href: '#' },
              { label: 'ID Cards', href: '#' },
            ],
          },
          {
            title: 'About',
            links: [
              { label: 'About Us', href: '#' },
              { label: 'Contact', href: '#' },
              { label: 'Careers', href: '#' },
            ],
          },
        ]}
      />
    ),
    defaultCode: `<Footer
  siteName="Virginia DMV"
  linkGroups={[
    {
      title: 'Services',
      links: [
        { label: 'License Renewal', href: '/services/license' },
        { label: 'Vehicle Registration', href: '/services/vehicle' },
        { label: 'ID Cards', href: '/services/id' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
/>`,
    variants: [
      {
        title: 'Slim Variant',
        preview: (
          <Footer
            variant="slim"
            siteName="Virginia.gov"
            linkGroups={[{
              title: 'Links',
              links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Accessibility', href: '#' },
                { label: 'Contact', href: '#' },
              ],
            }]}
          />
        ),
        code: `<Footer
  variant="slim"
  siteName="Virginia.gov"
  linkGroups={[{
    title: 'Links',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Contact', href: '/contact' },
    ],
  }]}
/>`,
      },
    ],
    propDefinitions: [
      { name: 'siteName', type: 'string', description: 'Organization or site name' },
      { name: 'linkGroups', type: 'FooterLinkGroup[]', description: 'Groups of links with titles' },
      { name: 'socialLinks', type: '{ label, href, icon }[]', description: 'Social media icon links' },
      { name: 'copyright', type: 'string', description: 'Custom copyright text' },
      { name: 'logo', type: 'ReactNode', description: 'Logo element' },
      { name: 'variant', type: "'default' | 'slim'", default: "'default'", description: 'Footer layout variant' },
    ],
    accessibility: [
      'Uses semantic <footer> element with implicit contentinfo role',
      'Navigation sections wrapped in <nav> with aria-label',
      'Social links have aria-label for screen readers',
      'Link groups use heading hierarchy for structure',
    ],
    dos: [
      'Include links to privacy policy and accessibility statement',
      'Use the slim variant for simple applications',
      'Keep link groups organized by topic',
    ],
    donts: [
      'Don\'t include critical navigation only in the footer',
      'Don\'t use more than 4 link groups in the default variant',
      'Don\'t omit copyright information',
    ],
  },

  // ─── GovBanner ─────────────────────────────────────────
  'gov-banner': {
    defaultPreview: (
      <div className="w-full border rounded-lg overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
        <GovBanner />
      </div>
    ),
    defaultCode: `<GovBanner />`,
    variants: [
      {
        title: 'Spanish',
        preview: (
          <div className="w-full border rounded-lg overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
            <GovBanner language="es" />
          </div>
        ),
        code: `<GovBanner language="es" />`,
      },
    ],
    propDefinitions: [
      { name: 'language', type: "'en' | 'es'", default: "'en'", description: 'Language for banner content' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
    ],
    accessibility: [
      'Toggle button uses aria-expanded to indicate state',
      'Expandable content uses role="region" with aria-label',
      'aria-controls links toggle button to content panel',
      'Content is keyboard accessible via Tab and Enter/Space',
    ],
    dos: [
      'Place at the very top of every government website page',
      'Use the default English variant for primary pages',
      'Provide Spanish variant for bilingual sites',
    ],
    donts: [
      'Don\'t modify the banner text or structure',
      'Don\'t hide or remove on any page',
      'Don\'t place other content above the gov banner',
    ],
    usageCode: `// At the top of your App layout
<GovBanner />
<Header />
<main>{children}</main>
<Footer />`,
  },

  // ─── Modal ─────────────────────────────────────────────
  modal: {
    defaultPreview: (
      <ModalPreviewWrapper />
    ),
    defaultCode: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>
    <ModalTitle>Confirm Action</ModalTitle>
  </ModalHeader>
  <ModalBody>
    Are you sure you want to submit this application?
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button>Confirm</Button>
  </ModalFooter>
</Modal>`,
    variants: [
      {
        title: 'Sizes',
        preview: (
          <div className="flex flex-wrap gap-3">
            <ModalSizePreview size="sm" label="Small" />
            <ModalSizePreview size="md" label="Medium" />
            <ModalSizePreview size="lg" label="Large" />
          </div>
        ),
        code: `<Modal open={open} onClose={onClose} size="sm">...</Modal>
<Modal open={open} onClose={onClose} size="md">...</Modal>
<Modal open={open} onClose={onClose} size="lg">...</Modal>`,
      },
    ],
    propDefinitions: [
      { name: 'open', type: 'boolean', required: true, description: 'Whether the modal is open' },
      { name: 'onClose', type: '() => void', required: true, description: 'Called when modal requests closing' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Width of the modal dialog' },
      { name: 'closeOnBackdropClick', type: 'boolean', default: 'true', description: 'Close on backdrop click' },
      { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close on Escape key' },
      { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Show X close button' },
    ],
    accessibility: [
      'Uses role="dialog" with aria-modal="true"',
      'Focus is trapped within the modal while open',
      'Escape key closes the modal',
      'Focus returns to trigger element on close',
      'Body scroll is locked while modal is open',
      'Close button has aria-label="Close dialog"',
    ],
    dos: [
      'Use for confirmations and important decisions',
      'Provide clear actions in the footer (confirm/cancel)',
      'Keep modal content focused and concise',
      'Always include a way to close the modal',
    ],
    donts: [
      'Don\'t use modals for simple notifications (use Alert)',
      'Don\'t nest modals within modals',
      'Don\'t make modals too large on mobile',
      'Don\'t remove the close button without providing another way to close',
    ],
    usageCode: `// Confirmation dialog
const [open, setOpen] = useState(false);

<Button variant="destructive" onClick={() => setOpen(true)}>
  Delete Account
</Button>

<Modal open={open} onClose={() => setOpen(false)} size="sm">
  <ModalHeader>
    <ModalTitle>Delete Account?</ModalTitle>
  </ModalHeader>
  <ModalBody>
    This action is permanent and cannot be undone.
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  </ModalFooter>
</Modal>`,
  },

  // ─── Pagination ────────────────────────────────────────
  pagination: {
    defaultPreview: (
      <PaginationPreviewWrapper />
    ),
    defaultCode: `const [page, setPage] = useState(1);

<Pagination
  totalPages={10}
  currentPage={page}
  onPageChange={setPage}
/>`,
    variants: [
      {
        title: 'With First/Last',
        preview: (
          <PaginationPreviewWrapper showFirstLast />
        ),
        code: `<Pagination
  totalPages={20}
  currentPage={page}
  onPageChange={setPage}
  showFirstLast
/>`,
      },
      {
        title: 'Small Size',
        preview: (
          <PaginationPreviewWrapper size="sm" />
        ),
        code: `<Pagination
  totalPages={10}
  currentPage={page}
  onPageChange={setPage}
  size="sm"
/>`,
      },
    ],
    propDefinitions: [
      { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages' },
      { name: 'currentPage', type: 'number', required: true, description: 'Current page (1-indexed)' },
      { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Called when a page is selected' },
      { name: 'siblings', type: 'number', default: '1', description: 'Sibling pages shown around current' },
      { name: 'showFirstLast', type: 'boolean', default: 'false', description: 'Show first/last page buttons' },
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Button size' },
    ],
    accessibility: [
      'Uses <nav> with aria-label="Pagination"',
      'Current page marked with aria-current="page"',
      'All buttons have descriptive aria-labels',
      'Disabled buttons use visual opacity indicator',
      'Ellipsis elements hidden from screen readers',
    ],
    dos: [
      'Use for large datasets that need to be split across pages',
      'Show the current page clearly',
      'Include previous/next navigation',
    ],
    donts: [
      'Don\'t use for fewer than 2 pages',
      'Don\'t show too many page numbers (use siblings prop)',
      'Don\'t use as a substitute for infinite scroll on mobile',
    ],
  },

  // ─── Search ────────────────────────────────────────────
  search: {
    defaultPreview: (
      <div className="w-full max-w-sm">
        <Search placeholder="Search Virginia services..." />
      </div>
    ),
    defaultCode: `<Search placeholder="Search Virginia services..." onSearch={handleSearch} />`,
    variants: [
      {
        title: 'With Visible Label',
        preview: (
          <div className="w-full max-w-sm">
            <Search label="Search DMV Services" showLabel placeholder="License, registration..." />
          </div>
        ),
        code: `<Search label="Search DMV Services" showLabel
  placeholder="License, registration..." />`,
      },
      {
        title: 'Sizes',
        preview: (
          <div className="w-full max-w-sm space-y-3">
            <Search size="sm" placeholder="Small search" />
            <Search size="md" placeholder="Medium search" />
            <Search size="lg" placeholder="Large search" />
          </div>
        ),
        code: `<Search size="sm" placeholder="Small search" />
<Search size="md" placeholder="Medium search" />
<Search size="lg" placeholder="Large search" />`,
      },
    ],
    propDefinitions: [
      { name: 'label', type: 'string', default: "'Search'", description: 'Label text (visually hidden by default)' },
      { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show label visually' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
      { name: 'onSearch', type: '(value: string) => void', description: 'Called on Enter key' },
      { name: 'onClear', type: '() => void', description: 'Called when clear button is clicked' },
      { name: 'clearable', type: 'boolean', default: 'true', description: 'Show clear button when input has value' },
      { name: 'placeholder', type: 'string', default: "'Search...'", description: 'Placeholder text' },
    ],
    accessibility: [
      'Wrapper uses role="search" landmark',
      'Label is always present (visually hidden by default)',
      'Clear button has aria-label="Clear search"',
      'Input uses type="search" and role="searchbox"',
      'Focus ring visible on keyboard navigation',
    ],
    dos: [
      'Place in prominent location for key search functionality',
      'Use a descriptive placeholder for context',
      'Provide the clearable option for better UX',
    ],
    donts: [
      'Don\'t use for filtering small lists (use Select instead)',
      'Don\'t hide the search icon',
      'Don\'t omit the label (even if visually hidden)',
    ],
    usageCode: `<Search
  label="Search Services"
  placeholder="License renewal, vehicle registration..."
  onSearch={(query) => router.push(\`/search?q=\${query}\`)}
  onClear={() => setResults([])}
/>`,
  },

  // ─── SideNavigation ────────────────────────────────────
  'side-navigation': {
    defaultPreview: (
      <div className="w-64 border rounded-lg overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
        <SideNavigation
          items={[
            { label: 'Dashboard', href: '#', active: true },
            { label: 'Applications', href: '#' },
            {
              label: 'Services',
              children: [
                { label: 'License Renewal', href: '#' },
                { label: 'Vehicle Registration', href: '#' },
                { label: 'ID Cards', href: '#' },
              ],
            },
            { label: 'Settings', href: '#' },
          ]}
        />
      </div>
    ),
    defaultCode: `<SideNavigation
  items={[
    { label: 'Dashboard', href: '/dashboard', active: true },
    { label: 'Applications', href: '/applications' },
    {
      label: 'Services',
      children: [
        { label: 'License Renewal', href: '/services/license' },
        { label: 'Vehicle Registration', href: '/services/vehicle' },
        { label: 'ID Cards', href: '/services/id' },
      ],
    },
    { label: 'Settings', href: '/settings' },
  ]}
  onItemClick={(href) => navigate(href)}
/>`,
    propDefinitions: [
      { name: 'items', type: 'SideNavItem[]', required: true, description: 'Navigation items, supports nesting' },
      { name: 'onItemClick', type: '(href: string) => void', description: 'Called when a nav item is clicked' },
      { name: 'className', type: 'string', description: 'Additional CSS classes' },
    ],
    accessibility: [
      'Uses <nav> with aria-label="Side navigation"',
      'Active item marked with aria-current="page"',
      'Parent items with children use aria-expanded',
      'Proper nested list structure (<ul>/<li>)',
      'Keyboard accessible via Tab and Enter/Space',
    ],
    dos: [
      'Use for secondary navigation in dashboards and portals',
      'Highlight the current page/section',
      'Keep nesting to 2 levels maximum',
    ],
    donts: [
      'Don\'t use as primary site navigation',
      'Don\'t nest more than 2 levels deep',
      'Don\'t include too many items (use grouping instead)',
    ],
  },

  // ─── StepIndicator ────────────────────────────────────
  'step-indicator': {
    defaultPreview: (
      <StepIndicator
        currentStep={1}
        steps={[
          { label: 'Personal Info' },
          { label: 'Documentation' },
          { label: 'Review' },
          { label: 'Submit' },
        ]}
      />
    ),
    defaultCode: `<StepIndicator
  currentStep={1}
  steps={[
    { label: 'Personal Info' },
    { label: 'Documentation' },
    { label: 'Review' },
    { label: 'Submit' },
  ]}
/>`,
    variants: [
      {
        title: 'Vertical with Descriptions',
        preview: (
          <div className="max-w-xs">
            <StepIndicator
              orientation="vertical"
              currentStep={2}
              steps={[
                { label: 'Application Received', description: 'Jan 15, 2025' },
                { label: 'Under Review', description: 'Jan 18, 2025' },
                { label: 'Processing', description: 'In progress' },
                { label: 'Complete' },
              ]}
            />
          </div>
        ),
        code: `<StepIndicator
  orientation="vertical"
  currentStep={2}
  steps={[
    { label: 'Application Received', description: 'Jan 15, 2025' },
    { label: 'Under Review', description: 'Jan 18, 2025' },
    { label: 'Processing', description: 'In progress' },
    { label: 'Complete' },
  ]}
/>`,
      },
    ],
    propDefinitions: [
      { name: 'steps', type: '{ label: string; description?: string }[]', required: true, description: 'Array of step definitions' },
      { name: 'currentStep', type: 'number', required: true, description: 'Current step index (0-based)' },
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction' },
    ],
    accessibility: [
      'Container has aria-label="Progress"',
      'Current step marked with aria-current="step"',
      'Steps are ordered list items (<ol>/<li>)',
      'Screen reader text announces step status (completed/current/upcoming)',
      'Check icon is hidden from screen readers via aria-hidden',
    ],
    dos: [
      'Use for multi-step forms and application processes',
      'Show clear labels for each step',
      'Use vertical orientation for status tracking',
    ],
    donts: [
      'Don\'t use for more than 7 steps (simplify the process instead)',
      'Don\'t skip steps in the visual progression',
      'Don\'t use for non-linear processes',
    ],
    usageCode: `const [step, setStep] = useState(0);

<StepIndicator
  currentStep={step}
  steps={[
    { label: 'Personal Information' },
    { label: 'Upload Documents' },
    { label: 'Review & Submit' },
  ]}
/>

{step === 0 && <PersonalInfoForm onNext={() => setStep(1)} />}
{step === 1 && <DocumentUpload onNext={() => setStep(2)} />}
{step === 2 && <ReviewSubmit onSubmit={handleSubmit} />}`,
  },

  // ─── Tabs ──────────────────────────────────────────────
  tabs: {
    defaultPreview: (
      <Tabs defaultValue="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="details">Details</Tab>
          <Tab value="history">History</Tab>
        </TabList>
        <TabPanel value="overview">
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            View your account overview, recent activity, and quick actions.
          </p>
        </TabPanel>
        <TabPanel value="details">
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Personal details, contact information, and preferences.
          </p>
        </TabPanel>
        <TabPanel value="history">
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            View your transaction and activity history.
          </p>
        </TabPanel>
      </Tabs>
    ),
    defaultCode: `<Tabs defaultValue="overview">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="details">Details</Tab>
    <Tab value="history">History</Tab>
  </TabList>
  <TabPanel value="overview">Overview content...</TabPanel>
  <TabPanel value="details">Details content...</TabPanel>
  <TabPanel value="history">History content...</TabPanel>
</Tabs>`,
    variants: [
      {
        title: 'With Disabled Tab',
        preview: (
          <Tabs defaultValue="active">
            <TabList>
              <Tab value="active">Active</Tab>
              <Tab value="pending">Pending</Tab>
              <Tab value="archived" disabled>Archived</Tab>
            </TabList>
            <TabPanel value="active">
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Active applications list.</p>
            </TabPanel>
            <TabPanel value="pending">
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Pending applications list.</p>
            </TabPanel>
          </Tabs>
        ),
        code: `<Tabs defaultValue="active">
  <TabList>
    <Tab value="active">Active</Tab>
    <Tab value="pending">Pending</Tab>
    <Tab value="archived" disabled>Archived</Tab>
  </TabList>
  <TabPanel value="active">Active content...</TabPanel>
  <TabPanel value="pending">Pending content...</TabPanel>
</Tabs>`,
      },
    ],
    propDefinitions: [
      { name: 'defaultValue', type: 'string', description: 'Default active tab (uncontrolled)' },
      { name: 'value', type: 'string', description: 'Active tab value (controlled)' },
      { name: 'onChange', type: '(value: string) => void', description: 'Called on tab change' },
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Tab list direction' },
      { name: 'value (Tab)', type: 'string', required: true, description: 'Unique tab identifier' },
      { name: 'disabled (Tab)', type: 'boolean', default: 'false', description: 'Disables the tab' },
      { name: 'value (TabPanel)', type: 'string', required: true, description: 'Matches corresponding Tab' },
    ],
    accessibility: [
      'Full WAI-ARIA Tabs pattern implementation',
      'TabList uses role="tablist" with aria-orientation',
      'Tabs use role="tab" with aria-selected and aria-controls',
      'Panels use role="tabpanel" with aria-labelledby',
      'Arrow key navigation between tabs (left/right or up/down)',
      'Home/End keys jump to first/last tab',
      'Roving tabindex for keyboard focus management',
    ],
    dos: [
      'Use for switching between related content views',
      'Keep tab labels short and descriptive',
      'Set a sensible default tab',
    ],
    donts: [
      'Don\'t use more than 6 tabs (consider side navigation)',
      'Don\'t use tabs for sequential steps (use StepIndicator)',
      'Don\'t hide critical content behind non-obvious tabs',
    ],
    usageCode: `// Controlled tabs
const [activeTab, setActiveTab] = useState('services');

<Tabs value={activeTab} onChange={setActiveTab}>
  <TabList>
    <Tab value="services">Services</Tab>
    <Tab value="locations">Locations</Tab>
    <Tab value="faq">FAQ</Tab>
  </TabList>
  <TabPanel value="services"><ServicesList /></TabPanel>
  <TabPanel value="locations"><LocationFinder /></TabPanel>
  <TabPanel value="faq"><FAQAccordion /></TabPanel>
</Tabs>`,
  },

  // ─── Tooltip ───────────────────────────────────────────
  tooltip: {
    defaultPreview: (
      <div className="flex flex-wrap gap-6 items-center justify-center py-8">
        <Tooltip content="Save your progress" position="top">
          <button
            className="px-3 py-1.5 text-sm rounded-md border"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            Top
          </button>
        </Tooltip>
        <Tooltip content="View more options" position="right">
          <button
            className="px-3 py-1.5 text-sm rounded-md border"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            Right
          </button>
        </Tooltip>
        <Tooltip content="Additional info here" position="bottom">
          <button
            className="px-3 py-1.5 text-sm rounded-md border"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            Bottom
          </button>
        </Tooltip>
        <Tooltip content="Quick help" position="left">
          <button
            className="px-3 py-1.5 text-sm rounded-md border"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            Left
          </button>
        </Tooltip>
      </div>
    ),
    defaultCode: `<Tooltip content="Save your progress" position="top">
  <button>Top</button>
</Tooltip>
<Tooltip content="View more options" position="right">
  <button>Right</button>
</Tooltip>
<Tooltip content="Additional info here" position="bottom">
  <button>Bottom</button>
</Tooltip>
<Tooltip content="Quick help" position="left">
  <button>Left</button>
</Tooltip>`,
    propDefinitions: [
      { name: 'content', type: 'string', required: true, description: 'Tooltip text content' },
      { name: 'position', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Position relative to trigger' },
      { name: 'delayMs', type: 'number', default: '200', description: 'Delay before showing (ms)' },
      { name: 'children', type: 'ReactElement', required: true, description: 'Trigger element' },
      { name: 'className', type: 'string', description: 'Additional classes for tooltip bubble' },
    ],
    accessibility: [
      'Uses role="tooltip" on the tooltip element',
      'Trigger gets aria-describedby linking to tooltip',
      'Shows on focus for keyboard users, not just hover',
      'Escape key dismisses the tooltip',
      'Content is text-only (not interactive) per WCAG',
    ],
    dos: [
      'Use for supplementary, non-essential information',
      'Keep tooltip text concise (1-2 short sentences max)',
      'Use on icon-only buttons to provide text labels',
    ],
    donts: [
      'Don\'t put essential information in tooltips',
      'Don\'t use for interactive content (use a popover instead)',
      'Don\'t use on elements that aren\'t focusable',
    ],
    usageCode: `// Icon button with tooltip
<Tooltip content="Delete this item">
  <Button variant="ghost" size="sm" aria-label="Delete">
    <TrashIcon size={16} />
  </Button>
</Tooltip>

// Help text tooltip
<Tooltip content="Your SSN is required for identity verification">
  <span className="underline cursor-help">Why do we need this?</span>
</Tooltip>`,
  },
};
