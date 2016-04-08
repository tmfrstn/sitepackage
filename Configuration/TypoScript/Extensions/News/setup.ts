plugin.tx_news {
	view {
		templateRootPaths {
			1 = EXT:sitepackage/Resources/Private/Templates/News
		}
		partialRootPaths {
			1 = EXT:sitepackage/Resources/Private/Partials/News
		}
		layoutRootPaths {
			1 = EXT:sitepackage/Resources/Private/Layouts/News
		}
	}
	settings {
		# CSS File via gulp included: EXT:sitepackage/Resources/Private/Assets/Css/news-basic.css
		cssFile >

		analytics {
			social {
				facebookLike = 0
				facebookShare = 0
				twitter = 0
			}
		}
		defaultDetailPid = 52

		facebookLocale = de_DE
		googlePlusLocale = de
		disqusLocale = de

		displayDummyIfNoMedia = 0

		orderBy = datetime
		orderDirection = desc

		list {
			# media configuration
			media {
				image {
					maxWidth = 360
					maxHeight = 360
				}
			}
		}

		detail {
			media {
				image {
					maxWidth = 2040
				}
			}
		}
	}
	# Modify the translation
	_LOCAL_LANG {
		default {
			read_more = weiterlesen
			dateFormat = %d/%m/%Y
		}
		de {
			read_more = weiterlesen
			dateFormat = %d/%m/%Y
		}
	}
}