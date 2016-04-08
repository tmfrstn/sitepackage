# ----------------------------------------------------
# Lib
# ----------------------------------------------------
lib.backgroundOld = FILES
lib.backgroundOld {
   references {
      table = tt_content
      uid = 23
      fieldName = assets
   }
   renderObj = IMG_RESOURCE
   renderObj {
      file.import.data = file:current:uid
      file.treatIdAsReference = 1
      stdWrap.wrap = <img src="|" />
   }
}

lib.background = CONTENT
lib.background {
   table = tt_content
   select {
      pidInList = 1
      where = colPos = 3
   }
   renderObj = FILES
   renderObj {
      references {
         table = tt_content
         uid.data = {tt_content:uid}
         fieldName = assets
      }
      renderObj = IMG_RESOURCE
      renderObj {
         file.import.data = file:current:uid
         file.treatIdAsReference = 1
         stdWrap.wrap = <img src="|" />
      }
   }
}

lib.badge = CONTENT
lib.badge {
   table = tt_content
   select {
      max = 1
      pidInList = 1
      where = colPos = 1
   }
}

lib.headline = CONTENT
lib.headline {
   table = tt_content
   select {
      max = 1
      pidInList = 1
      where = colPos = 2
   }
}

lib.naviMain < lib.tmenuUl
lib.naviMain {
   entryLevel = 0
   excludeUidList = 48,49
   1 {
      expAll = 1
      NO{
         ATagParams = class="{field:css_menu_class}"
         allStdWrap.insertData = 1
      }
      IFSUB{
         ATagParams = class="{field:css_menu_class}"
         allStdWrap.insertData = 1
      }
   }
   2 < .1
   3 < .1
   4 < .1
}
lib.naviMeta < lib.tmenuUl
lib.naviMeta {
   special = directory
   special.value = 35
   excludeUidList =
   1 {
      expAll = 1
   }
   2 < .1
   3 < .1
   4 < .1
}

# Switch Login in MetaNavi to Logout if user loged in
[loginUser = *]
   lib.naviMeta.1 {
      #		addParams = &logintype=logout
      NO {
         ATagTitle.field = logout_label // title // abstract // description
         stdWrap.field = logout_label // title
         additionalParams =
         additionalParams.override = &logintype=logout
         additionalParams.override.if {
            value = Logout
            isInList.field = logout_label
         }
      }
      CUR {
         ATagTitle.field = logout_label // title // abstract // description
         stdWrap.field = logout_label // title
         additionalParams =
         additionalParams.override = &logintype=logout
         additionalParams.override.if {
            value = Logout
            isInList.field = logout_label
         }
      }
   }
[GLOBAL]

lib.naviFooter < lib.tmenuUl
lib.naviFooter {
   special = directory
   special.value = 41
   excludeUidList =
   1 {
      expAll = 1
   }
   2 < .1
   3 < .1
   4 < .1
}
lib.copyright = COA
lib.copyright {
   10 = TEXT
   10 {
      data = date:U
      strftime = %Y
      noTrimWrap = |© TOP HAIR International GmbH, Gaggenau | |
   }
}
# get URL of the page
lib.getLink = COA
lib.getLink {
   10 = TEXT
   10.wrap = http://|
   10.data = getIndpEnv: HTTP_HOST
   10.rawUrlEncode = 1
   20 = TEXT
   20.typolink.parameter = {page:uid}
   20.typolink.parameter.insertData = 1
   20.typolink.addQueryString = 1
   20.typolink.returnLast = url
   20.rawUrlEncode = 1
}
# get subtitle/title of the page
lib.getTitle = COA
lib.getTitle {
   10 = TEXT
   10.data = page : subtitle // page : title
   10.insertData = 1
   10.rawUrlEncode = 1
}
# make the share link with icon and text
lib.socialBookmarks = COA
lib.socialBookmarks {
   wrap = <div class="social-buttons">|</div>
   # Facebook
   10 = COA
   10 {
      10 = COA
      10 {
         htmlSpecialChars = 1
         wrap = <div class="social-button-item"><a href="|" target="_blank">
#         10 = TEXT
#         10.value = http://www.facebook.com/share.php
#         20 < lib.getLink
#         20.wrap = ?u=|
#         30 < lib.getTitle
#         30.wrap = &title=|
         40 = TEXT
         40.value = https://www.facebook.com/TOPHAIRInternational
      }
      20 = TEXT
      20.value = <span>Facebook</span><span class="icon-facebook-squared"></span></a></div>
   }
   # Twitter
   20 = COA
   20 {
      wrap = <div class="social-button-item">|</div>
      10 = TEXT
      10.value = https://twitter.com/TOPHAIRIntern
      10.wrap = <a href="|" target="_blank"><span>Twitter</span><span class="icon-twitter"></span></a>
   }
   # Instagram
   30 = COA
   30 {
      wrap = <div class="social-button-item">|</div>
      10 = TEXT
      10.value = https://www.instagram.com/tophair_mag/
      10.wrap = <a href="|" target="_blank"><span>Instagram</span><span class="icon-instagram"></span></a>
   }
   # E-Mail
   40 = COA
   40 {
      wrap = <div class="social-button-item">|</div>
      10 = COA
      10 {
         htmlSpecialChars = 1
         wrap = <a href="|" target="_blank"><span>E-Mail</span><span class="icon-mail-alt"></span></a>
         10 = TEXT
         10.value = mailto:info@tophair.de
         20 = TEXT
         20.value = Website
         20.wrap = ?subject=|
      }
   }
}

lib.cookieBar = COA
lib.cookieBar {
   10 = TEXT
   10 {
      value (
			<!-- StickyFooter -->
			<footer id="acceptcookie">
      			<div class="container">
        			<div class="text-muted">
      )
   }
   20 = RECORDS
   20 {
      tables = tt_content
      source = 201
   }
   30 = TEXT
   30 {
      value (
						<!-- <span class="close">x</span> -->
						<div class="okbuttonwrapper">
							<button title="OK" type="button" id="okbutton" class="btn btn-default okbutton">OK</button>
						</div>
					</div>
				</div>
    		</footer>
      )
   }
}

lib.searchbox = COA
lib.searchbox {
   10 < plugin.tx_kesearch_pi1
   # result page
   10.resultPage = 40
   # static or ajax mode
   10.renderMethod = static
   # HTML template and CSS file
   10.templateFile = EXT:sitepackage/Resources/Private/Templates/Plugins/Ke_search/SearchFormHeader.html
   10.cssFile >
   10.loadFlexformsFromOtherCE = 34
}