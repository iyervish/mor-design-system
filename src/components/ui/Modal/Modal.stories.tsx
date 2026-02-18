import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'open',
    type: 'boolean',
    required: true,
    description: 'Whether the modal is open.',
  },
  {
    name: 'onClose',
    type: '() => void',
    required: true,
    description: 'Called when the modal requests closing.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: 'Width of the modal dialog.',
  },
  {
    name: 'closeOnBackdropClick',
    type: 'boolean',
    default: 'true',
    description: 'Close the modal when the backdrop is clicked.',
  },
  {
    name: 'closeOnEscape',
    type: 'boolean',
    default: 'true',
    description: 'Close the modal when Escape is pressed.',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    default: 'true',
    description: 'Show an X close button in the top-right corner.',
  },
];

export const codeSnippets = {
  default: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>
    <ModalTitle>Confirm Action</ModalTitle>
  </ModalHeader>
  <ModalBody>
    Are you sure you want to submit this application?
    This action cannot be undone.
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button onClick={handleSubmit}>Confirm</Button>
  </ModalFooter>
</Modal>`,
};
