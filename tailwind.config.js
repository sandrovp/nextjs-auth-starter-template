/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores definidas manualmente
        fundo: '#DDE6F2',
        sidebar: '#0C1D32',
        card: '#FFFFFF',
        text: '#1E1E1E',
        primary: '#4A6886',
        primaryHover: '#3B5470',
        border: '#F2F2F2',

        // Cores baseadas nas CSS Variables do Anima/Figma
        colorlabel: 'var(--colorlabel)',
        'cor-fundo-nav': 'var(--cor-fundo-nav)',
        'cor-fundo-content': 'var(--cor-fundo-content)',
        'cor-seottulo': 'var(--cor-seottulo)',
        'cor-textogeral': 'var(--cor-textogeral)',
        'secondary-primary-white': 'var(--secondary-primary-white)',
        typographyttulocartoindicador: 'var(--typographyttulocartoindicador)',
        'variable-collection-cor-fundo-bot-oprim-rio':
          'var(--variable-collection-cor-fundo-bot-oprim-rio)',
      },
      fontFamily: {
        // Fontes do seu projeto manual
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],

        // Fontes vindas do Figma/Anima
        'tipography-label': 'var(--tipography-label-font-family)',
        'typography-body-base': 'var(--typography-body-base-font-family)',
        'typography-body-negrito': 'var(--typography-body-negrito-font-family)',
        'typography-body-sm': 'var(--typography-body-sm-font-family)',
        'typography-bot-o': 'var(--typography-bot-o-font-family)',
        'typography-destaque': 'var(--typography-destaque-font-family)',
        'typography-heading-bold': 'var(--typography-heading-bold-font-family)',
        'typography-heading-l-regular':
          'var(--typography-heading-l-regular-font-family)',
        'typography-heading-se-o': 'var(--typography-heading-se-o-font-family)',
        'typography-heading-xl-bold':
          'var(--typography-heading-xl-bold-font-family)',
        'typography-heading-xl-bold-font-size':
          'var(--typography-heading-xl-bold-font-size)',
        'typography-heading-xl-bold-font-weight':
          'var(--typography-heading-xl-bold-font-weight)',
        'typography-heading-xl-regular':
          'var(--typography-heading-xl-regular-font-family)',
        'typography-nome': 'var(--typography-nome-font-family)',
        'typography-r-tulo-indicador':
          'var(--typography-r-tulo-indicador-font-family)',
        'typography-r-tulo-indicadorpequeno':
          'var(--typography-r-tulo-indicadorpequeno-font-family)',
        'typography-subt-tulo-dashboard':
          'var(--typography-subt-tulo-dashboard-font-family)',
      },
      boxShadow: {
        'efeito-logovre': 'var(--efeito-logovre)',
      },
    },
  },
  plugins: [],
};
