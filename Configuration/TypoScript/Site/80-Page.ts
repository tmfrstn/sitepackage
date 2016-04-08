# ----------------------------------------------------
# Page
# ----------------------------------------------------

page = PAGE
page {
	typeNum = 0
	// Layout abhängig vom BE-Layout
	10 = FLUIDTEMPLATE
	10 {
		templateName = TEXT
		templateName.stdWrap {
			cObject = TEXT
			cObject {
				data = levelfield:-2,backend_layout_next_level,slide
				override.field = backend_layout
				split {
					token = sitepackage__
					1.current = 1
					1.wrap = |
				}
			}
			ifEmpty = Col1
		}

		layoutRootPaths {
			100 = {$page.fluidtemplate.layoutRootPath}
			110 = EXT:sitepackage/Resources/Private/Layouts/Page/
		}
		partialRootPaths {
			100 = {$page.fluidtemplate.partialRootPath}
			110 = EXT:sitepackage/Resources/Private/Partials/Page/
		}
		templateRootPaths {
			100 = {$page.fluidtemplate.templateRootPath}
			110 = EXT:sitepackage/Resources/Private/Templates/Page/
		}
	}
	includeCSSLibs {
		googleFont = //fonts.googleapis.com/css?family=Lato:400,700|Lobster|Overlock|PT+Sans|Kreon:700|Philosopher
		googleFont {
			excludeFromConcatenation = 1
			external = 1
		}
#		compatibility = EXT:sitepackage/Resources/Public/Css/style-ie.css
#		compatibility {
#			media = screen,projection
#			allWrap = <!--[if lt IE 9]>|<![endif]-->
#		}
	}

	includeCSS {
		gulp-generated-css = EXT:sitepackage/Resources/Public/Css/styles.min.css
	}

	includeJSLibs {
		html5 = //html5shiv.googlecode.com/svn/trunk/html5.js
		html5.external = 1
		html5.allWrap = <!--[if lt IE 9]>|<![endif]-->
		ivw = https://script.ioam.de/iam.js
		ivw.external = 1
		gulp-generated-header-js = EXT:sitepackage/Resources/Public/JavaScript/jsHeaderLibs.min.js
	}

	meta {
		viewport = {$page.meta.viewport}
		robots = {$page.meta.robots}
		google = {$page.meta.google}
		google-site-verification = {$page.meta.google-site-verification}
		apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}
		description = {$page.meta.description}
		description.override.field = description
		author = {$page.meta.author}
		author.override.field = author
		keywords = {$page.meta.keywords}
		keywords.override.field = keywords
		verify-v1 = {$page.meta.verify-v1}
		// OpenGraph
		og:site_name = {$page.meta.og:site_name}
		og:site_name.attribute = property
		og:description = {$page.meta.og:description}
		og:description.attribute = property
		og:locale = {$page.meta.og:locale}
		og:locale.attribute = property
	}

	bodyTagCObject = COA
	bodyTagCObject {
		10 = TEXT
		10 {
			dataWrap = <body id="pid-{TSFE:id}" class="layout-{page:layout}">
		}
		20 < lib.google-tagmanager
	}

	includeJSFooter {
		gulp-generated-footer-js = EXT:sitepackage/Resources/Public/JavaScript/jsFooterLibs.min.js
	}

}
// EXCLUDE PAGE FROM EXTERNAL SEARCH RESULTS IF SET TO NO SEARCH
[globalVar = TSFE:page|no_search = 1]
	page.meta.robots = noindex,follow
[end]

lib.content < styles.content.get
lib.content.wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->

lib.contentLeft < styles.content.get
lib.contentLeft {
	select.where = colPos=1
	wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
}

lib.contentBorder < styles.content.get
lib.contentBorder {
	select.where = colPos=3
	wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
}

styles.content.getRight < styles.content.get
styles.content.getRight.select.where = colPos=2

lib.contentRight = COA
lib.contentRight {
	wrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->
	10 < styles.content.getRight
	10 {
		slide = -1
		#   stdWrap.ifEmpty.cObject < styles.content.getRight
		#   stdWrap.ifEmpty.cObject {
		#        select.pidInList = 1
		#   }
	}
}