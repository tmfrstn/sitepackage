#
# Table structure for table 'pages'
#
CREATE TABLE pages (

	logout_label varchar(255) DEFAULT '' NOT NULL,
	css_menu_class varchar(255) DEFAULT '' NOT NULL,

);

#
# Table structure for table 'tx_news_domain_model_news '
#
CREATE TABLE tx_news_domain_model_news (
	kicker tinytext
);