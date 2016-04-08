backend_layout {
	colCount = 3
	rowCount = 2
	rows {
		1 {
			columns {
				1 {
					name = LLL:EXT:sitepackage/Resources/Private/BackendLayouts/locallang.xml:columnName.badge
					colPos = 1
					allowed = header
				}
				2 {
					name = LLL:EXT:sitepackage/Resources/Private/BackendLayouts/locallang.xml:columnName.backgroundImage
					colPos = 3
					allowed = textmedia
				}
				3 {
					name = LLL:EXT:sitepackage/Resources/Private/BackendLayouts/locallang.xml:columnName.headline
					colPos = 2
					allowed = header
				}
			}
		}
		2 {
			columns {
				1 {
					name = LLL:EXT:sitepackage/Resources/Private/BackendLayouts/locallang.xml:columnName.content
					colPos = 0
					colspan = 3
				}
			}
		}
	}
}