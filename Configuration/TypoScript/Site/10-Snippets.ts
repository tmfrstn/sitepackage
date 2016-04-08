// Standard Menü als "Unsorted List <ul>"
lib.tmenuUl = HMENU
lib.tmenuUl {
	1 = TMENU
	1 {
		wrap = <ul>|</ul>
		NO {
			ATagBeforeWrap = 1
			wrapItemAndSub = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
			linkWrap = <span>|</span>
			ATagTitle.field = title // abstract // description
			stdWrap.field = title // logout_label
			stdWrap.htmlSpecialChars = 1
		}

		IFSUB < .NO
		IFSUB = 1
		IFSUB {
			ATagParams = class="ifsub"
		}

		CUR < .NO
		CUR = 1
		CUR {
			ATagParams = class="cur"
		}

		CURIFSUB < .IFSUB
		CURIFSUB = 1
		CURIFSUB {
			ATagParams = class="curifsub"
		}

		ACT < .NO
		ACT = 1
		ACT {
			ATagParams = class="act"
		}

		ACTIFSUB < .IFSUB
		ACTIFSUB = 1
		ACTIFSUB {
			ATagParams = class="actifsub"
		}
	}
}

// Standard Menü "mit | getrennte <a> Tags"
lib.tmenuA = HMENU
lib.tmenuA {
	1 = TMENU
	1 {
		NO {
			linkWrap = | &#124;&nbsp;|*||*| |
			stdWrap.htmlSpecialChars = 1
		}

		CUR < .NO
		CUR = 1
		CUR {
			ATagParams = class="cur"
		}
	}
}

// Standard Breadcrumb
lib.rootline = HMENU
lib.rootline {
	special = rootline
	special.range = 0|-1
	1 = TMENU
	1 {
		noBlur = 1
		NO {
			linkWrap = | &nbsp;/&nbsp;&nbsp;|*||*||
			stdWrap {
				htmlSpecialChars = 1
			}
		}

		CUR < .NO
		CUR = 1
		CUR {
			doNotLinkIt = 1
		}
	}
}

// H1 Breadcrumb inkl. tt_news Single Ansicht
lib.rootline-h1 = COA
lib.rootline-h1 {
	10 = HMENU
	10 {
		special = rootline
		special.range = 0|-1
		1 = TMENU
		1 {
			noBlur = 1
			NO {
				linkWrap = | <p class="breadcrumb">&nbsp;»&nbsp;&nbsp;</p>|*||*||
				includeNotInMenu = 1
				stdWrap {
					htmlSpecialChars = 1
				}
			}

			CUR < .NO
			CUR = 1
			CUR {
				doNotLinkIt = 1
				stdWrap {
					wrap = <h1 class="breadcrumb"> | </h1>
				}
			}
		}
	}

	20 = COA
	20 {
		10 = RECORDS
		10 {
			## TX_NEWS
			if.isTrue.data = GP:tx_news_pi1|news
			dontCheckPid = 1
			tables = tx_news_domain_model_news
			source.data = GP:tx_news_pi1|news
			source.intval = 1
			conf.tx_news_domain_model_news = COA
			conf.tx_news_domain_model_news.20 = TEXT
			conf.tx_news_domain_model_news.20 {
				field = title
				htmlSpecialChars = 1
				wrap = <p class="breadcrumb">&nbsp;&nbsp;»&nbsp;&nbsp;</p><h1 class="breadcrumb"> | </h1>
			}
		}

		20 = RECORDS
		20 {
			## TX_AUTOMARKT
			if.isTrue.data = GP:tx_rhporhpautomarkt_automarkt|id
			dontCheckPid = 1
			tables = tx_rhporhpautomarkt_domain_model_anzeige
			source.data = GP:tx_rhporhpautomarkt_automarkt|id
			source.intval = 1
			conf.tx_rhporhpautomarkt_domain_model_anzeige = COA
			conf.tx_rhporhpautomarkt_domain_model_anzeige.20 = TEXT
			conf.tx_rhporhpautomarkt_domain_model_anzeige.20 {
				field = online_title // hervorhebung
				htmlSpecialChars = 1
				wrap = <p class="breadcrumb">&nbsp;&nbsp;»&nbsp;&nbsp;</p><h1 class="breadcrumb"> | </h1>
			}
		}
	}
}

// Canonical Tag für Header -> Duplicate Content
lib.canonical = TEXT
lib.canonical {
	typolink {
		parameter = {page:uid}
		parameter.insertData = 1
		useCacheHash = 1
		# add all get parameters from the current URL
		addQueryString = 1
		addQueryString.method = GET
		# remove the page id from the parameters so it is not inserted twice
		addQueryString.exclude = id, cHash, display
		returnLast = url
		forceAbsoluteUrl = 1
	}

	wrap = <link rel="canonical" href="|" />
}

// H1 Überschrift automatisch generieren
// BESSER -> H1 Breadcrumb (siehe oben)
lib.h1 = TEXT
lib.h1 {
	wrap = <h1 class="hideme">|</h1>
}

// if 'Startseite'
[globalVar = TSFE:page|alias = startseite]
	lib.h1.data = DB:sys_template:1:sitetitle
[else]
	lib.h1.value = {page:title}: {DB:sys_template:1:sitetitle}
	lib.h1.insertData = 1
[end]

// Standard Sprach Umschalter
lib.language = HMENU
lib.language {
	special = language
	special.value = 0, 1
	#special.normalWhenNoLanguage = 0
	wrap = <div id="language"><ul>|</ul></div>
	1 = TMENU
	1 {
		noBlur = 1
		NO = 1
		NO {
			//      linkWrap = <li>|</li>
			linkWrap = | &#124;&nbsp;|*||*| |
			stdWrap {
				override = Deutsch || English
				case = upper
			}

			doNotLinkIt = 1
			stdWrap.typolink {
				parameter.data = page:uid
				additionalParams = &L=0 || &L=1
				addQueryString = 1
				addQueryString.exclude = L,id,cHash,no_cache
				addQueryString.method = GET
				useCacheHash = 1
				no_cache = 0
			}
		}

		ACT < .NO
		ACT.stdWrap.typolink.ATagParams = class="cur"
		USERDEF1 < .NO
		USERDEF2 < .ACT
	}
}

// Montag, 15. März 2010
lib.currentDate = COA
lib.currentDate {
	10 = TEXT
	10 {
		data = date:U
		strftime = %A, %d. %B %Y
	}
}

lib.metaNavi = COA
lib.metaNavi {
	10 < lib.tmenuA
	10 {
		special = list
		special.value = {$project.metaNavHeaderPids}
	}

	stdWrap.wrap = <div id="metanavi">|</div>
}

// Suchmaske ke_search
lib.ke_search_field = COA_INT
lib.ke_search_field {
	10 < plugin.tx_kesearch_pi1

	# result page
	10.resultPage = {$page.uid.mapping.ke_search.pid}

	# static or ajax mode
	10.renderMethod = static

	# HTML template and CSS file
	10.templateFile = fileadmin/Configuration/Private/Plugins/Ke_search/template_pi1.html
	10.cssFile = fileadmin/Configuration/Public/Plugins/Ke_search.css

	# Content element (search box plugin) from which additional
	# configuration should be loaded (UID of content element).
	# Important: If you have two search boxes on your result page
	# (eg. in the top and in the left area), you should set this value!
	#  10.loadFlexformsFromOtherCE = 123456
}

#<div class="search">
#    <form action="search.php">
#        <input type="search" class="search">
#        <button type="submit" class="search-icon"></button>
#    </form>
#</div>