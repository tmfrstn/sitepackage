tt_content.textmedia.settings.responsive_image_rendering {
	layoutKey = srcset
	sourceCollection {
		small {
			width = 360
			srcset = 640w
			sizes = (max-width: 360px)
			dataKey = small
		}
		smallRetina {
			width = 720
			srcset = 640w 2x
			pixelDensity = 2
			sizes = (max-width: 360px)
			dataKey = smallRetina
		}
		medium {
			width = 720
			srcset = 800w
			sizes = (max-width: 768px)
			dataKey = medium
		}
		mediumRetina {
			width = 1440
			srcset = 800w 2x
			pixelDensity = 2
			sizes = (max-width: 768px)
			dataKey = mediumRetina
		}
		large {
			width = 1020
			srcset = 1024w
			sizes = (min-width: 769px)
			dataKey = large
		}
		largeRetina {
			width = 2040
			srcset = 1024w
			pixelDensity = 2
			sizes = (min-width: 769px)
			dataKey = largeRetina
		}
	}
}