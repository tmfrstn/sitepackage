styles.content {
	imgtext {
		responsive = 1
		layoutKey = srcset
	}
	textmedia {
		maxW = 2040
		maxWInText = 2040
		linkWrap {
			lightboxEnabled = 1
			lightboxCssClass = lightbox
			lightboxRelAttribute = lightbox[{field:uid}]
		}
	}
	imgtext < .textmedia
}