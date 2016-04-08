<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}
if (TYPO3_MODE === 'BE') {
	// BackendLayoutDataProvider
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider'][$_EXTKEY] = 'RHP\\Sitepackage\\Provider\\FileProvider';
#	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutFileProvider']['ext'][$_EXTKEY] = $_EXTKEY;
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutFileProvider']['dir'][$_EXTKEY] = 'EXT:sitepackage/Configuration/BackendLayouts/';
}

$GLOBALS['TYPO3_CONF_VARS']['EXT']['news']['classes']['Domain/Model/News'][] = $_EXTKEY;