export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface ColorFamily {
  name: string;
  description: string;
  inspiration: string;
  scale: ColorScale;
}

export const firoza: ColorFamily = {
  name: 'Firoza',
  description: 'Iridescent blue-green — primary brand',
  inspiration: 'Urdu/Persian for turquoise; the colour of Mughal tilework and Indian lakes',
  scale: {
    50: '#f0fbf9',
    100: '#c8f0ea',
    200: '#91e0d5',
    300: '#4ecaba',
    400: '#1fb3a2',
    500: '#0d9488',
    600: '#0a7a70',
    700: '#08615a',
    800: '#064b46',
    900: '#043a36',
    950: '#022926',
  },
};

export const mayura: ColorFamily = {
  name: 'Mayura',
  description: 'Deep cobalt — info & interactive',
  inspiration: 'Sanskrit for peacock; the deep blue of its body plumage',
  scale: {
    50: '#eef2ff',
    100: '#d5dcfc',
    200: '#b3bff9',
    300: '#879bf4',
    400: '#6074ed',
    500: '#4655e3',
    600: '#3440c9',
    700: '#2a33a3',
    800: '#232b84',
    900: '#1d2468',
    950: '#111540',
  },
};

export const vana: ColorFamily = {
  name: 'Vana',
  description: 'Forest green — success states',
  inspiration: 'Sanskrit for forest; Indian sal forests where peacocks live',
  scale: {
    50: '#f0faf3',
    100: '#d3eddb',
    200: '#a6dcb8',
    300: '#72c591',
    400: '#4aad6e',
    500: '#33924f',
    600: '#277a3f',
    700: '#1e6030',
    800: '#174d25',
    900: '#113b1c',
    950: '#0b2912',
  },
};

export const sona: ColorFamily = {
  name: 'Sona',
  description: 'Gold-brass — accent & attention',
  inspiration: 'Hindi/Urdu for gold; the warm brass of Indian jewellery and harvest fields',
  scale: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcc94a',
    400: '#f6a800',
    500: '#e09200',
    600: '#c27a00',
    700: '#a36200',
    800: '#84500a',
    900: '#6b400c',
    950: '#3d2405',
  },
};

export const laal: ColorFamily = {
  name: 'Laal',
  description: 'Vermilion red — error and emphasis',
  inspiration: 'Hindi/Urdu for red; the vivid red of chilli peppers and Indian textiles',
  scale: {
    50: '#fff1f0',
    100: '#ffe0de',
    200: '#ffc2bf',
    300: '#ff958f',
    400: '#ff5c53',
    500: '#e83428',
    600: '#cc2217',
    700: '#a91c12',
    800: '#8b1a13',
    900: '#741a15',
    950: '#400907',
  },
};

export const mitti: ColorFamily = {
  name: 'Mitti',
  description: 'Terracotta — warm earthy neutral',
  inspiration: 'Hindi for earth/clay; the terracotta soil and earthenware of India',
  scale: {
    50: '#fdf6f0',
    100: '#fbe9d8',
    200: '#f6d0ae',
    300: '#f0b07c',
    400: '#e88b49',
    500: '#c96c28',
    600: '#ab5520',
    700: '#8c4119',
    800: '#723416',
    900: '#5e2c15',
    950: '#321608',
  },
};

export const dhumra: ColorFamily = {
  name: 'Dhumra',
  description: 'Warm gray — neutral UI',
  inspiration: 'Sanskrit for smoke/ash; the hazy monsoon sky over Indian plains',
  scale: {
    50: '#f9f8f7',
    100: '#f2f0ee',
    200: '#e5e1dd',
    300: '#d0cac4',
    400: '#a89e96',
    500: '#7a7069',
    600: '#5e554e',
    700: '#443d38',
    800: '#2e2824',
    900: '#1c1815',
    950: '#0e0c0a',
  },
};

export const colorFamilies: ColorFamily[] = [
  firoza,
  mayura,
  sona,
  mitti,
  vana,
  laal,
  dhumra,
];
