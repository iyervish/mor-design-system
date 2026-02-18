import { useState } from 'react';
import Alert from './Alert';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

function InfoAlert() {
  return (
    <Alert variant="info" title="Information">
      Your application has been received and is under review.
    </Alert>
  );
}

function SuccessAlert() {
  return (
    <Alert variant="success" title="Success">
      Your changes have been saved successfully.
    </Alert>
  );
}

function WarningAlert() {
  return (
    <Alert variant="warning" title="Warning">
      Your session will expire in 5 minutes. Please save your work.
    </Alert>
  );
}

function ErrorAlert() {
  return (
    <Alert variant="error" title="Error">
      Unable to process your request. Please try again later.
    </Alert>
  );
}

function DismissibleAlert() {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="text-sm underline"
        style={{ color: 'var(--color-primary)' }}
      >
        Show alert again
      </button>
    );
  }
  return (
    <Alert variant="info" title="Dismissible" dismissible onDismiss={() => setVisible(false)}>
      Click the close button to dismiss this alert.
    </Alert>
  );
}

function NoIconAlert() {
  return (
    <Alert variant="info" title="No icon" icon={null}>
      This alert has been rendered without an icon.
    </Alert>
  );
}

function DescriptionOnlyAlert() {
  return (
    <Alert variant="warning">
      This alert has only a description with no title text.
    </Alert>
  );
}

export const variants = [
  { title: 'Info', component: <InfoAlert /> },
  { title: 'Success', component: <SuccessAlert /> },
  { title: 'Warning', component: <WarningAlert /> },
  { title: 'Error', component: <ErrorAlert /> },
  { title: 'Dismissible', component: <DismissibleAlert /> },
  { title: 'No Icon', component: <NoIconAlert /> },
  { title: 'Description Only', component: <DescriptionOnlyAlert /> },
];

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'error'",
    default: "'info'",
    description: 'The severity/visual style of the alert.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional bold heading rendered above the description.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Description content displayed below the title.',
  },
  {
    name: 'dismissible',
    type: 'boolean',
    default: 'false',
    description: 'When true, renders a close button.',
  },
  {
    name: 'onDismiss',
    type: '() => void',
    description: 'Callback invoked when the dismiss button is clicked.',
  },
  {
    name: 'icon',
    type: 'ReactNode | null',
    description: 'Custom icon element. Pass null to hide the icon entirely.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes merged via cn().',
  },
];

/* ------------------------------------------------------------------ */
/*  Code Snippets                                                     */
/* ------------------------------------------------------------------ */

export const codeSnippets = {
  info: `<Alert variant="info" title="Information">
  Your application has been received and is under review.
</Alert>`,
  success: `<Alert variant="success" title="Success">
  Your changes have been saved successfully.
</Alert>`,
  warning: `<Alert variant="warning" title="Warning">
  Your session will expire in 5 minutes. Please save your work.
</Alert>`,
  error: `<Alert variant="error" title="Error">
  Unable to process your request. Please try again later.
</Alert>`,
  dismissible: `const [visible, setVisible] = useState(true);

{visible && (
  <Alert
    variant="info"
    title="Dismissible"
    dismissible
    onDismiss={() => setVisible(false)}
  >
    Click the close button to dismiss this alert.
  </Alert>
)}`,
  noIcon: `<Alert variant="info" title="No icon" icon={null}>
  This alert has been rendered without an icon.
</Alert>`,
};
