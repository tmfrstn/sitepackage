### Dependencies SysExt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/setup.txt">
### Dependencies Ext. Static Templates
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fsc_slider_slick/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fsc_typoscript/Configuration/TypoScript/setup.txt">
###<INCLUDE_TYPOSCRIPT: source="FILE:EXT:formhandler/Configuration/TypoScript/DefaultConfiguration/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rhp_trend_gallery/Configuration/TypoScript/setup.txt">
### Gridelements
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TypoScript/GridElements" extensions="ts">
### Ext own Modifications
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TypoScript/Extensions" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/ContentElements/setup.ts">

### Site Configuration Typoscript
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TypoScript/Site" extensions="ts">

## Application Context
# Einstellungen für Entwicklunssystem
[applicationContext = Development]
	<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TypoScript/Static/Development" extensions="ts">
[end]
# Einstellungen Produktion
[applicationContext = Production]
	<INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/TypoScript/Static/Production" extensions="ts">
[end]

// INSERT TEMPLATE VIA FOLLOWING TAG INTO THE ROOT TEMPLATE DONT USE INCLUDE STATIC TEMPLATE
// <INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/TypoScript/Static/setup.ts">