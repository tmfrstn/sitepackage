### Enable the PageTS Setup by adding the following line to your config in the TYPO3 backend
### or by uncommenting the include directive in ext_tables.php.
### <INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TSconfig/PageTS/setup.ts">

### Gridelements
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TSconfig/PageTS/GridElements" extensions="ts">
### News
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TSconfig/PageTS/News" extensions="ts">
### PageTS
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TSconfig/PageTS/pageTSconfig.ts">
### RTE
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TSconfig/PageTS/RTE.ts">
