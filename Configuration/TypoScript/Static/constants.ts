### Dependencies SysExt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/constants.txt">

### Dependencies Ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Extensions/FluidStyledResponsiveImages/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/constants.txt">

### PAGE
page {
	fluidtemplate {
		# cat=site package: advanced/100/100; type=string; label=Layout Root Path: Path to layouts
		layoutRootPath = EXT:sitepackage/Resources/Private/Layouts/Page/
		# cat=site package: advanced/100/110; type=string; label=Partial Root Path: Path to partials
		partialRootPath = EXT:sitepackage/Resources/Private/Partials/Page/
		# cat=site package: advanced/100/120; type=string; label=Template Root Path: Path to templates
		templateRootPath = EXT:sitepackage/Resources/Private/Templates/Page/
	}

	meta {
		# cat=site package: basic/110/100; type=string; label=Description: Enter a short description of the page. It will be displayed in the result lists of most search engines.
		description =
		# cat=site package: basic/110/110; type=string; label=Author: Enter the page author's name.
		author =
		# cat=site package: basic/110/120; type=string; label=Keywords: Enter keywords for the page separated by commas. You may also use short phrases.
		keywords =
		# cat=site package: advanced/110/100; type=string; label=viewport
		viewport = width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0
		# cat=site package: advanced/110/110; type=string; label=robots
		robots = index,follow
		# cat=site package: advanced/110/120; type=string; label=apple-mobile-web-app-capable
		apple-mobile-web-app-capable = no
		# cat=site package: advanced/110/130; type=string; label=Google: notranslate = Google soll keine Übersetzung dieser Seite anzubieten; nositelinkssearchbox = Keine Sitemap anbieten
		google = notranslate
		# cat=site package: advanced/110/140; type=string; label=Google Search Console Verification
		google-site-verification = 
		# cat=site package: advanced/110/150; type=string; label=Google Webmaster Tools
		verify-v1 =
		# cat=site package: advanced/110/160; type=string; label=OpenGraph Sitename: Site name for OpenGrapgh
		og:site_name =
		# cat=site package: advanced/110/170; type=string; label=OpenGraph description: Description for OpenGrapgh
		og:description =
		# cat=site package: advanced/110/180; type=string; label=OpenGraph Locale: Locale for OpenGrapgh
		og:locale = de_DE
	}
}

### CONFIG
config {
	# cat=site package: advanced/130/110; type=boolean; label=No Cache
	no_cache = 0
	# cat=site package: advanced/130/120; type=options[Do not remove=0,Remove=1,Move to external file=external]; label=Remove default JavaScript
	removeDefaultJS = external
	# cat=site package: advanced/130/130; type=options[Do not remove=0,Move to external file=1]; label=Move styles controlled by TYPO3 Core to external file
	inlineStyle2TempFile = 1
	# cat=site package: advanced/130/140; type=boolean; label=Compress JavaScript
	compressJs = 0
	# cat=site package: advanced/130/150; type=boolean; label=Compress Css
	compressCss = 0
	# cat=site package: advanced/130/160; type=boolean; label=Concatenate JavaScript
	concatenateJs = 0
	# cat=site package: advanced/130/170; type=boolean; label=Concatenate Css
	concatenateCss = 0
	# cat=site package: advanced/130/180; type=boolean; label=Admin Panel
	admPanel = 0
	# cat=site package: advanced/130/190; type=options[None=,All=all,Cached=cached,Output=output]; label=Prefix local Anchors
	prefixLocalAnchors =
	# cat=site package: advanced/130/200; type=string; label=Header Comment
	headerComment = Copyright © RHEINPFALZ Verlag und Druckerei GmbH & Co. KG - IT-New Media, http://blog.rheinpfalz.de/ - All rights reserved.
}

// INSERT TEMPLATE VIA FOLLOWING TAG INTO THE ROOT TEMPLATE DONT USE INCLUDE STATIC TEMPLATE
// <INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Static/constants.ts">
