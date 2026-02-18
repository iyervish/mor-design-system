import type { PropDef } from '../../docs/PropsTable';

export const propDefinitions: PropDef[] = [
  {
    name: 'defaultValue',
    type: 'string',
    description: 'Default active tab value (uncontrolled mode).',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Active tab value (controlled mode).',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Called when the active tab changes.',
  },
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: 'Direction of the tab list.',
  },
  {
    name: 'value (Tab)',
    type: 'string',
    required: true,
    description: 'Unique identifier for the tab.',
  },
  {
    name: 'disabled (Tab)',
    type: 'boolean',
    default: 'false',
    description: 'Disables the tab.',
  },
  {
    name: 'value (TabPanel)',
    type: 'string',
    required: true,
    description: 'Matches the corresponding Tab value.',
  },
];

export const codeSnippets = {
  default: `<Tabs defaultValue="overview">
  <TabList>
    <Tab value="overview">Overview</Tab>
    <Tab value="details">Details</Tab>
    <Tab value="history">History</Tab>
  </TabList>
  <TabPanel value="overview">Overview content...</TabPanel>
  <TabPanel value="details">Details content...</TabPanel>
  <TabPanel value="history">History content...</TabPanel>
</Tabs>`,
  vertical: `<Tabs defaultValue="profile" orientation="vertical">
  <TabList>
    <Tab value="profile">Profile</Tab>
    <Tab value="settings">Settings</Tab>
    <Tab value="notifications">Notifications</Tab>
  </TabList>
  <TabPanel value="profile">Profile content...</TabPanel>
  <TabPanel value="settings">Settings content...</TabPanel>
  <TabPanel value="notifications">Notifications content...</TabPanel>
</Tabs>`,
};
