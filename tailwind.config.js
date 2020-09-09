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
					light: '#eceef6'
				}
			},
			backgroundImage: theme => ({
				'banner': 'url(/images/banner-bg.png)',
				'choose': 'url(/images/choose-bg.png)'
			}),
			width: {
				'130': '130px'
			},
			height: {
				'130': '130px'
			},
			boxShadow: {
				'xl-center': '0 0 80px rgba(0, 0, 0, 0.2)'
			}
		},
		fontFamily: {
			poppins: ['Poppins, Arial, Helvetica, sans-serif']
		}
	},
	variants: {},
	plugins: [],
}