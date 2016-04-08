RTE.default >
RTE.default.proc {

	## TRANSFORMATION METHOD
	## We assume that CSS Styled Content is used.
	overruleMode = ts_css

	## DO NOT CONVERT BR TAGS INTO LINEBREAKS
	## br tags in the content are assumed to be intentional.
	dontConvBRtoParagraph = 1

	## PRESERVE DIV SECTIONS - DO NOT REMAP TO P
	preserveDIVSections = 1

	## TAGS ALLOWED OUTSIDE P & DIV
	allowTagsOutside = address, article, aside, blockquote, footer, header, hr, nav, section

	## TAGS ALLOWED
	## Added to the default internal list: b,i,u,a,img,br,div,center,pre,font,hr,sub,sup,p,strong,em,li,ul,ol,blockquote,strike,span
	## But, for the sake of clarity, we use a complete list in alphabetic order.
	## center, font, link, meta, o:p, strike, sdfield, style, title and u will be removed on entry (see below).
	## b and i will be remapped on exit (see below).
	## Note that the link accessibility feature of htmlArea RTE does insert img tags.
	allowTags = a, abbr, acronym, address, article, aside, b, bdo, big, blockquote, br, caption, center, cite, code, col, colgroup, dd, del, dfn, dl, div, dt, em, font, footer
	allowTags := addToList(header, h1, h2, h3, h4, h5, h6, hr, i, img, ins, kbd, label, li, link, meta, nav, ol, p, pre, q, samp, sdfield, section, small)
	allowTags := addToList(span, strike, strong, style, sub, sup, table, thead, tbody, tfoot, td, th, tr, title, tt, u, ul, var)

	## TAGS DENIED
	## Make sure we can set rules on any tag listed in allowTags.
	denyTags >

	## ALLOWED P & DIV ATTRIBUTES
	## Attributes class and align are always preserved
	## Align attribute will be unset on entry (see below)
	## This is a list of additional attributes to keep
	keepPDIVattribs = id, title, dir, lang, xml:lang, itemscope, itemtype, itemprop

	## REMAP BOLD AND ITALIC TO STRONG AND EMPHASIS AND VICE VERSA
	transformBoldAndItalicTags = 1

	## ALLOW TO WRITE ABOUT HTML
	dontUndoHSC_db = 1
	dontHSC_rte = 1

	## CONTENT TO DATABASE
	entryHTMLparser_db = 1
	entryHTMLparser_db {

		## TAGS ALLOWED
		## Always use the same list of allowed tags.
		allowTags < RTE.default.proc.allowTags

		## TAGS DENIED
		## Make sure we can set rules on any tag listed in allowTags.
		denyTags >

		## AVOID CONTENT BEING HSC'ed TWICE
		htmlSpecialChars = 0

		tags {

			## REMOVE IMG TAGS
			img.allowedAttribs = 0
			img.rmTagIfNoAttrib = 1

			## CLEAN ATTRIBUTES ON THE FOLLOWING TAGS
			span.fixAttrib.style.unset = 1
			span.allowedAttribs = id, title, dir, lang, xml:lang, class, itemscope, itemtype, itemprop
			span.rmTagIfNoAttrib = 1
			p {
				allowedAttribs = id, title, dir, lang, xml:lang, class, itemscope, itemtype, itemprop
				fixAttrib.align.unset = 1
			}
			div < .p
			hr.allowedAttribs = class
			b.allowedAttribs < .span.allowedAttribs
			bdo.allowedAttribs < .span.allowedAttribs
			big.allowedAttribs < .span.allowedAttribs
			blockquote.allowedAttribs < .span.allowedAttribs
			cite.allowedAttribs < .span.allowedAttribs
			code.allowedAttribs < .span.allowedAttribs
			del.allowedAttribs < .span.allowedAttribs
			dfn.allowedAttribs < .span.allowedAttribs
			em.allowedAttribs < .span.allowedAttribs
			i.allowedAttribs < .span.allowedAttribs
			ins.allowedAttribs < .span.allowedAttribs
			kbd.allowedAttribs < .span.allowedAttribs
			label.allowedAttribs < .span.allowedAttribs
			q.allowedAttribs < .span.allowedAttribs
			samp.allowedAttribs < .span.allowedAttribs
			small.allowedAttribs < .span.allowedAttribs
			strike.allowedAttribs < .span.allowedAttribs
			strong.allowedAttribs < .span.allowedAttribs
			sub.allowedAttribs < .span.allowedAttribs
			sup.allowedAttribs < .span.allowedAttribs
			tt.allowedAttribs < .span.allowedAttribs
			u.allowedAttribs < .span.allowedAttribs
			var.allowedAttribs < .span.allowedAttribs
		}

		## REMOVE OPEN OFFICE META DATA TAGS, WORD 2003 TAGS, LINK, META, STYLE AND TITLE TAGS, AND DEPRECATED HTML TAGS
		## We use this rule instead of the denyTags rule so that we can protect custom tags without protecting these unwanted tags.
		removeTags = center, font, link, meta, o:p, sdfield, strike, style, title, u

		## PROTECT CUSTOM TAGS
		keepNonMatchedTags = protect
	}

	HTMLparser_db {
		## STRIP ALL ATTRIBUTES FROM THESE TAGS
		## If this list of tags is not set, it will default to: b,i,u,br,center,hr,sub,sup,strong,em,li,ul,ol,blockquote,strike.
		## However, we want to keep xml:lang attribute on most tags and tags from the default list where cleaned on entry.
		noAttrib = br

		## XHTML COMPLIANCE
		## Note that applying xhtml_cleaning on exit would break non-standard attributes of typolink tags
		xhtml_cleaning = 1
	}

	exitHTMLparser_db = 1
	exitHTMLparser_db {
		## KEEP ALL TAGS
		## Unwanted tags were removed on entry.
		## Without this rule, the parser will remove all tags! Presumably, this rule will be more efficient than repeating the allowTags rule
		keepNonMatchedTags = 1

		## AVOID CONTENT BEING HSC'ed TWICE
		htmlSpecialChars = 0
	}
}

## Use same RTE processing rules in FE
RTE.default.FE.proc < RTE.default.proc

## RTE processing rules for bodytext column of tt_content table
## Erase settings from other extensions
RTE.config.tt_content.bodytext >

## Make sure we use ts_css transformation
RTE.config.tt_content.bodytext.proc.overruleMode = ts_css
RTE.config.tt_content.bodytext.types.text.proc.overruleMode = ts_css
RTE.config.tt_content.bodytext.types.textpic.proc.overruleMode = ts_css

RTE.classes >
RTE.classes {
	align-left {
		name = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_tooltips.xlf:justifyleft
		value = text-align: left;
	}
	align-center {
		name = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_tooltips.xlf:justifycenter
		value = text-align: center;
	}
	align-right {
		name = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_tooltips.xlf:justifyright
		value = text-align: right;
	}
	align-justify {
		name = LLL:EXT:sitepackage/Resources/Private/Language/locallang.xlf:rte.class.align-justify
		value = text-align: justify;
	}

}

	## Anchor classes configuration for use by the anchor accesibility feature
RTE.classesAnchor >
RTE.classesAnchor {
	externalLink {
		class = external-link
		type = url
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:external_link_titleText
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:external_link_new_window_titleText
	}
	internalLink {
		class = internal-link
		type = page
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:internal_link_titleText
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:internal_link_new_window_titleText
	}
	download {
		class = download
		type = file
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:download_titleText
	}
	mail {
		class = mail
		type = mail
		titleText = LLL:EXT:rtehtmlarea/Resources/Private/Language/locallang_accessibilityicons.xlf:mail_titleText
	}
}

	## Default RTE configuration
RTE.default {

		## Markup options
	enableWordClean = 1
	removeTrailingBR = 1
	removeComments = 1
	removeTags = center, font, o:p, sdfield, strike, u
	removeTagsAndContents = link, meta, script, style, title

		## Toolbar options
		## The TCA configuration may add buttons to the toolbar
	showButtons = blockstylelabel, blockstyle, textstylelabel, textstyle
	showButtons := addToList(formatblock, bold, italic, subscript, superscript)
	showButtons := addToList(orderedlist, unorderedlist, outdent, indent, textindicator)
	showButtons := addToList(insertcharacter, link, table, findreplace, pastetoggle, removeformat, undo, redo, about)
	showButtons := addToList(toggleborders, tableproperties)
	showButtons := addToList(rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit)
	showButtons := addToList(columninsertbefore, columninsertafter, columndelete, columnsplit)
	showButtons := addToList(cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge)

		## Toolbar Order
	toolbarOrder (
          textstyle, textstylelabel, linebreak,
          blockstyle, blockstylelabel, linebreak,
          formatblock, formatblocklabel, pastetoggle, linebreak,
          bold,italic,subscript,superscript,bar,left,center,right,justifyfull,bar,orderedlist,unorderedlist, bar, insertcharacter, line, link, image, removeformat, findreplace, linebreak,
          table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, linebreak,
	)
		## More toolbar options
	keepButtonGroupTogether = 1

		## Enable status bar
	showStatusBar =  1

		## Hide infrequently used block types in the block formatting selector
	buttons.formatblock.removeItems = h1,h5,h6,pre,address,blockquote,div,section,footer,header,nav, aside,blockquote

		## Rename label
	buttons.formatblock.items {
		p.label = Absatz (p-Tag)
		article.label = Absatz (article-Tag)
		h2.label = Überschrift h2
		h3.label = Überschrift h3
		h4.label = Zwischenüberschrift
	}

		## List all class selectors that are allowed on the way to the database
	proc.allowedClasses = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	proc.allowedClasses := addToList(align-left, align-center, align-right, align-justify)
	proc.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2)
	proc.allowedClasses := removeFromList(component-items, action-items)
	proc.allowedClasses := removeFromList(component-items-ordered, action-items-ordered)
	proc.allowedClasses := removeFromList(important, name-of-person, detail)
	proc.allowedClasses := removeFromList(indent)

		## Restrict the list of class selectors presented by the RTE to the following for the specified tags:
	buttons.blockstyle.tags.div.allowedClasses = align-left, align-center, align-right, align-justify
	buttons.blockstyle.tags.p.allowedClasses = align-left, align-center, align-right, align-justify
	buttons.blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2)
	buttons.blockstyle.tags.table.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2)
	buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
	buttons.textstyle.tags.span.allowedClasses := removeFromList(important, name-of-person, detail)

		## Configuration of links
		## These classes should also be in the list proc.allowedClasses
	buttons.link.properties.class.allowedClasses = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	buttons.link.page.properties.class.default = internal-link
	buttons.link.url.properties.class.default = external-link-new-window
	buttons.link.file.properties.class.default = download
	buttons.link.mail.properties.class.default = mail

		## Configuration specific to the TableOperations feature
		## Remove the following fieldsets from the table operations dialogs
	disableAlignmentFieldsetInTableOperations = 1
	disableSpacingFieldsetInTableOperations = 1
	disableColorFieldsetInTableOperations = 1
	disableLayoutFieldsetInTableOperations = 1
	disableBordersFieldsetInTableOperations = 1
		## Show borders on table creation
	buttons.toggleborders.setOnTableCreation = 1
		## Past as plain text activated
	buttons.pastetoggle.setActiveOnRteOpen = 1

		## Configuration specific to the bold and italic buttons
		## Add hotkeys associated with bold and italic buttons
	buttons.bold.hotKey = b
	buttons.italic.hotKey = i

		## Configuration of microdata schema
	schema {
		sources {
			schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf
		}
	}
}


	## front end RTE configuration for the general public
RTE.default.FE < RTE.default
RTE.default.FE.showStatusBar = 0
RTE.default.FE.hideButtons = chMode, blockstyle, textstyle, underline, strikethrough, subscript, superscript, lefttoright, righttoleft, left, center, right, justifyfull, table, inserttag, findreplace, removeformat, copy, cut, paste
RTE.default.FE.FE >
RTE.default.FE.userElements >

#
# RTE Konfiguration ADMIN
#
[usergroup = 4]
	RTE.default {
		# Buttons die gezeigt werden
		showButtons := addToList(chMode, inserttag)
		# Buttons die ausgeblendet werden
		hideButtons := removeFromList(chMode, inserttag)
		# die Reihenfolge der Buttons im RTE
		toolbarOrder := addToList(chMode,inserttag)
		// table, bar, toggleborders, tableproperties, bar, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, bar, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, bar, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
	} #End RTE.default
[global]
