import React, { createContext, useContext } from 'react';
import { cn } from '../../../utils/cn';

/* ------------------------------------------------------------------ */
/*  Context                                                           */
/* ------------------------------------------------------------------ */

interface TableContextValue {
  striped: boolean;
  hoverable: boolean;
  compact: boolean;
}

const TableContext = createContext<TableContextValue>({
  striped: false,
  hoverable: false,
  compact: false,
});

function useTableContext() {
  return useContext(TableContext);
}

/* ------------------------------------------------------------------ */
/*  Table                                                              */
/* ------------------------------------------------------------------ */

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Alternate row background colors */
  striped?: boolean;
  /** Highlight rows on hover */
  hoverable?: boolean;
  /** Reduce cell padding */
  compact?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ striped = false, hoverable = false, compact = false, className, children, ...props }, ref) => (
    <TableContext.Provider value={{ striped, hoverable, compact }}>
      <div className="w-full overflow-x-auto" role="region" aria-label="Scrollable table" tabIndex={0}>
        <table
          ref={ref}
          className={cn('w-full text-sm border-collapse', className)}
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
          {...props}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  ),
);

Table.displayName = 'Table';

/* ------------------------------------------------------------------ */
/*  TableHeader                                                        */
/* ------------------------------------------------------------------ */

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn('border-b', className)}
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-background-subtle)',
      }}
      {...props}
    />
  ),
);

TableHeader.displayName = 'TableHeader';

/* ------------------------------------------------------------------ */
/*  TableBody                                                          */
/* ------------------------------------------------------------------ */

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('[&>tr:last-child]:border-0', className)} {...props} />
  ),
);

TableBody.displayName = 'TableBody';

/* ------------------------------------------------------------------ */
/*  TableRow                                                           */
/* ------------------------------------------------------------------ */

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, style, ...props }, ref) => {
    const { striped, hoverable } = useTableContext();
    return (
      <tr
        ref={ref}
        className={cn(
          'border-b transition-colors',
          hoverable && 'hover:brightness-95',
          striped && 'even:bg-[var(--color-background-subtle)]',
          className,
        )}
        style={{
          borderColor: 'var(--color-border)',
          ...style,
        }}
        {...props}
      />
    );
  },
);

TableRow.displayName = 'TableRow';

/* ------------------------------------------------------------------ */
/*  TableHead                                                          */
/* ------------------------------------------------------------------ */

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    const { compact } = useTableContext();
    return (
      <th
        ref={ref}
        scope="col"
        className={cn(
          'text-left font-semibold',
          compact ? 'px-3 py-2' : 'px-4 py-3',
          className,
        )}
        style={{ color: 'var(--color-text)' }}
        {...props}
      />
    );
  },
);

TableHead.displayName = 'TableHead';

/* ------------------------------------------------------------------ */
/*  TableCell                                                          */
/* ------------------------------------------------------------------ */

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => {
    const { compact } = useTableContext();
    return (
      <td
        ref={ref}
        className={cn(
          compact ? 'px-3 py-2' : 'px-4 py-3',
          className,
        )}
        style={{ color: 'var(--color-text-secondary)' }}
        {...props}
      />
    );
  },
);

TableCell.displayName = 'TableCell';

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
export default Table;
