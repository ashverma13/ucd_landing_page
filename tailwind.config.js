module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				black: '#000',
				primary: '#c12dd1',
				secondary: '#6e8cf8',
				dark: {
					'8': '#888'
				},
				shade: {
					light: '#eceef6',
					'eee': '#eeeeee'
				}
			},
			backgroundImage: theme => ({
				'banner': 'url(/images/banner-bg.png)',
				'choose': 'url(/images/choose-bg.png)',
				'tick': 'url(/images/tick.png)',
				'pattern': 'url(/images/pattern.png)',
				'stats': 'url(/images/stats.png)',
				'pricing': 'url(/images/pricing.jpg)'
			}),
			width: {
				'130': '130px'
			},
			height: {
				'130': '130px'
			},
			boxShadow: {
				'xl-center': '0 0 80px rgba(0, 0, 0, 0.2)'
			},
			fontSize: {
				'90': '90px'
			},
			inset: {
				'1/2': '50%'
			},
			borderRadius: {
				'2lg': '1rem'
			},
			screens: {
				'xl': {'min': '1280px'},
				'lg': {'max': '1024px'},
				'md': {'max': '768px'},
				'sm': {'max': '600px'},
				'xsm': {'max': '480px'},
			}
		},
		fontFamily: {
			poppins: ['Poppins, Arial, Helvetica, sans-serif']
		}
	},
	variants: {},
	plugins: [],
}