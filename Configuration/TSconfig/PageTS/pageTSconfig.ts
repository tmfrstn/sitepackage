setup.default.edit_RTE = 1
# Setzen der Seitenbaumrechte per TypoScript
TCEMAIN {
	# Besitzergruppe festlegen (ID: "PG: Redaktion"):
	permissions.groupid = 8
	# Rechte Besitzer:
	permissions.user = show, editcontent, edit, delete, new
	# Rechte Besitzergruppe:
	permissions.group = show, editcontent, edit, delete, new
	# Rechte "everybody" (kann ungesetzt bleiben):
	permissions.everybody =
}

options {
	clearCache {
	  pages = 1
      all = 1
      clearLangCache = 1
	}
	pageTree.altElementBrowserMountPoints = 1
#	saveDocNew = 0
#	saveDocView = 0
#	disableDelete = 1
#	showHistory = 0
#	pageTree.hideFilter = 1
	contextMenu.pageTree.pageList = info,copy,cut,paste,delete,move_wizard,history,perms,new_wizard,hide,edit_access,edit_pageheader,db_list,versioning,moreoptions,mountAsTreeroot,expandBranch,collapseBranch
	contextMenu.pageTree.disableItems =move_wizard,history,perms,new_wizardedit_access,edit_pageheader,db_list,versioning,moreoptions,mountAsTreeroot,expandBranch,collapseBranch
}

mod {
  SHARED {
    defaultLanguageLabel = Deutsch
    defaultLanguageFlag = de
  }
  web_layout {
    noCreateRecordsLink = 0
    disableSearchBox = 0
    disableBigButtons = 0
    disableAdvanced = 0
    disableIconToolbar = 0
  }
  web_list {
    alternateBgColors = 1
    // Anzeige im List-Modul mit zugeklappten Tabellen
    listOnlyInSingleTableView = 0
  }
  xMOD_alt_doc {
    // both the document and cache action selector is hidden in the form page
    disableDocSelector = 1
    disableCacheSelector = 1
  }
}

TCEFORM {
  pages {
      alias.disabled = 0
      layout.disabled = 0
      lastUpdated.disabled = 0
      newUntil.disabled = 0
      target.disabled = 0
      no_cache.disabled = 0
      cache_timeout.disabled = 0
      subtitle.disabled = 0
      abstract.disabled = 0
      author.disabled = 0
      email.disabled = 0
      keywords.disabled = 0
      description.disabled = 0
      media.disabled = 0
      starttime.disabled = 0
      endtime.disabled = 0
      extendToSubpages.disabled = 0
      fe_group.disabled = 0
      fe_login_mode.disabled = 0
      module.disabled = 0
      TSconfig.disabled = 0
      storage_pid.disabled = 0
      shortcut_mode.disabled = 0
      no_search.disabled = 0
      tx_realurl_pathsegment.disabled = 0
  }
  tt_content {
#    header_layout.removeItems = 0,1,6
    header_layout.altLabels.4 = LLL:EXT:sitepackage/Resources/Private/Language/locallang_tca.xlf:tt_contentHeaderLayoutAltLabels4
    CType.removeItems = bullets, splash, search, script
    sys_language_uid.disabled = 0
    colPos.disabled = 0
    // Steuerung über BE-Layout
    #colPos.removeItems = 1,3
    linkToTop.disabled = 0
    header.disabled = 0
    header_position.disabled = 0
    header_link.disabled = 0
    date.disabled = 0
    imageheight.disabled = 0
    imageborder.disabled = 0
    image_compression.disabled = 0
    image_effects.disabled = 0
    imagecaption_position.disabled = 0
    imagecols.disabled = 0
    rowDescription.disabled = 1
    longdescURL.disabled = 0
    subheader.types.header.disabled = 0
    layout.types.table.disabled = 0
    cols.types.table.disabled = 0
    layout.types.uploads.disabled = 0
    filelink_size.types.uploads.disabled = 0
    layout.types.shortcut.disabled = 0
    layout {
        altLabels {
            1 = LLL:EXT:sitepackage/Resources/Private/Language/locallang_tca.xlf:pagesLayoutAltLabels1
            2 = LLL:EXT:sitepackage/Resources/Private/Language/locallang_tca.xlf:pagesLayoutAltLabels2
            3 = LLL:EXT:sitepackage/Resources/Private/Language/locallang_tca.xlf:pagesLayoutAltLabels3
        }
        removeItems = 3,2,1
        addItems {
                100 = LLL:EXT:sitepackage/Resources/Private/Language/locallang_tca.xlf:pagesLayoutAltLabels100
            }
        }
    }
}
// Vorbelegung von Feldern
TCAdefaults{
    pages {
        url_scheme = 1
    }
    tx_news_domain_model_news {
        hidden = 1
    }
    tt_content {
        imagecols = 1
    }
}


// FAL User Permission (READ ONLY change in Meta-Groups)
permissions.file.default {
    addFile = 0
    readFile = 1
    editFile = 0
    writeFile = 0
    uploadFile = 0
    copyFile = 0
    moveFile = 0
    renameFile = 0
    unzipFile = 0
    removeFile = 0

    addFolder = 0
    readFolder = 1
    copyFolder = 0
    moveFolder = 0
    writeFolder = 0
    renameFolder = 0
    removeFolder = 0
    removeSubfolders = 0
    deleteFolder = 0
    recursivedeleteFolder = 0
}