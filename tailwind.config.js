/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{html,js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			type: 'inline-size',
		},
		extend: {
			colors: {
				fundo: '#DDE6F2',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				text: '#1E1E1E',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				primaryHover: '#3B5470',
				border: 'hsl(var(--border))',
				colorlabel: 'var(--colorlabel)',
				'cor-fundo-nav': 'var(--cor-fundo-nav)',
				'cor-fundo-content': 'var(--cor-fundo-content)',
				'cor-seottulo': 'var(--cor-seottulo)',
				'cor-textogeral': 'var(--cor-textogeral)',
				'secondary-primary-white': 'var(--secondary-primary-white)',
				typographyttulocartoindicador: 'var(--typographyttulocartoindicador)',
				'variable-collection-cor-fundo-bot-oprim-rio': 'var(--variable-collection-cor-fundo-bot-oprim-rio)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'var(--font-geist-sans)',
					'sans-serif'
				],
				mono: [
					'var(--font-geist-mono)',
					'monospace'
				],
				poppins: [
					'var(--font-poppins)',
					'sans-serif'
				],
				inter: [
					'var(--font-inter)',
					'sans-serif'
				],
				'tipography-label': 'var(--tipography-label-font-family)',
				'typography-body-base': 'var(--typography-body-base-font-family)',
				'typography-body-negrito': 'var(--typography-body-negrito-font-family)',
				'typography-body-sm': 'var(--typography-body-sm-font-family)',
				'typography-bot-o': 'var(--typography-bot-o-font-family)',
				'typography-destaque': 'var(--typography-destaque-font-family)',
				'typography-heading-bold': 'var(--typography-heading-bold-font-family)',
				'typography-heading-l-regular': 'var(--typography-heading-l-regular-font-family)',
				'typography-heading-se-o': 'var(--typography-heading-se-o-font-family)',
				'typography-heading-xl-bold': 'var(--typography-heading-xl-bold-font-family)',
				'typography-heading-xl-bold-font-size': 'var(--typography-heading-xl-bold-font-size)',
				'typography-heading-xl-bold-font-weight': 'var(--typography-heading-xl-bold-font-weight)',
				'typography-heading-xl-regular': 'var(--typography-heading-xl-regular-font-family)',
				'typography-nome': 'var(--typography-nome-font-family)',
				'typography-r-tulo-indicador': 'var(--typography-r-tulo-indicador-font-family)',
				'typography-r-tulo-indicadorpequeno': 'var(--typography-r-tulo-indicadorpequeno-font-family)',
				'typography-subt-tulo-dashboard': 'var(--typography-subt-tulo-dashboard-font-family)'
			},
			boxShadow: {
				'efeito-logovre': 'var(--efeito-logovre)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/container-queries")
	],
};
