import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import type { PropDef } from '../../docs/PropsTable';

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

function DefaultCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>A standard card with subtle shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cards group related content and actions into a contained unit.</p>
      </CardContent>
    </Card>
  );
}

function OutlineCard() {
  return (
    <Card variant="outline">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>Border emphasis without shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use outline cards for lower visual hierarchy.</p>
      </CardContent>
    </Card>
  );
}

function ElevatedCard() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>Higher shadow for emphasis.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Use elevated cards to draw attention to key content.</p>
      </CardContent>
    </Card>
  );
}

function ClickableCard() {
  return (
    <Card clickable onClick={() => alert('Card clicked')}>
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
        <CardDescription>Hover to see the shadow change.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Interactive cards respond to hover and click events.</p>
      </CardContent>
    </Card>
  );
}

function WithFooterCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>Includes a separated footer area.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>The footer provides space for actions or metadata.</p>
      </CardContent>
      <CardFooter>
        <button
          className="text-sm font-medium px-3 py-1.5 rounded-md"
          style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-foreground)' }}
        >
          Save
        </button>
        <button
          className="text-sm font-medium px-3 py-1.5 rounded-md border"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
        >
          Cancel
        </button>
      </CardFooter>
    </Card>
  );
}

function PaddingSizes() {
  return (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Card key={size} padding={size} variant="outline">
          <CardContent>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              padding=&quot;{size}&quot;
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export const variants = [
  { title: 'Default', component: <DefaultCard /> },
  { title: 'Outline', component: <OutlineCard /> },
  { title: 'Elevated', component: <ElevatedCard /> },
  { title: 'Clickable', component: <ClickableCard /> },
  { title: 'With Footer', component: <WithFooterCard /> },
  { title: 'Padding Sizes', component: <PaddingSizes /> },
];

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

export const propDefinitions: PropDef[] = [
  {
    name: 'variant',
    type: "'default' | 'outline' | 'elevated'",
    default: "'default'",
    description: 'Visual style of the card.',
  },
  {
    name: 'padding',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: 'Inner padding size.',
  },
  {
    name: 'clickable',
    type: 'boolean',
    default: 'false',
    description: 'Adds hover shadow transition and cursor pointer.',
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
  basic: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here.</p>
  </CardContent>
</Card>`,
  withFooter: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content area.</p>
  </CardContent>
  <CardFooter>
    <Button>Save</Button>
    <Button variant="outline">Cancel</Button>
  </CardFooter>
</Card>`,
  clickable: `<Card clickable onClick={handleClick}>
  <CardContent>Clickable card content</CardContent>
</Card>`,
};
