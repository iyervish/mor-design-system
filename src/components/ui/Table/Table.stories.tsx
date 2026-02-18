import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Sample data                                                       */
/* ------------------------------------------------------------------ */

const sampleData = [
  { id: 'APP-001', name: 'Business License Renewal', status: 'Approved', date: '2024-12-01' },
  { id: 'APP-002', name: 'Building Permit', status: 'Pending', date: '2024-12-05' },
  { id: 'APP-003', name: 'Food Service Permit', status: 'Denied', date: '2024-12-08' },
  { id: 'APP-004', name: 'Vehicle Registration', status: 'Approved', date: '2024-12-10' },
  { id: 'APP-005', name: 'Professional License', status: 'Pending', date: '2024-12-12' },
];

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

function BasicTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Application</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function StripedTable() {
  return (
    <Table striped>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Application</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function HoverableTable() {
  return (
    <Table hoverable>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Application</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function CompactTable() {
  return (
    <Table compact striped>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Application</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export const variants = [
  { title: 'Basic', component: <BasicTable /> },
  { title: 'Striped', component: <StripedTable /> },
  { title: 'Hoverable', component: <HoverableTable /> },
  { title: 'Compact + Striped', component: <CompactTable /> },
];

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'striped',
    type: 'boolean',
    default: 'false',
    description: 'Alternate row background colors for readability.',
  },
  {
    name: 'hoverable',
    type: 'boolean',
    default: 'false',
    description: 'Highlight rows on mouse hover.',
  },
  {
    name: 'compact',
    type: 'boolean',
    default: 'false',
    description: 'Reduce cell padding for denser layouts.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes on the <table> element.',
  },
];

/* ------------------------------------------------------------------ */
/*  Code Snippets                                                     */
/* ------------------------------------------------------------------ */

export const codeSnippets = {
  basic: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>001</TableCell>
      <TableCell>Business License</TableCell>
      <TableCell>Approved</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  striped: `<Table striped hoverable>
  {/* ...rows */}
</Table>`,
  compact: `<Table compact>
  {/* ...rows */}
</Table>`,
};
