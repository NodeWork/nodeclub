/**
 * config
 */

exports.config = {
	name: 'HaskellCN Org',
	description: 'HaskellCN Org',
	version: '0.2.2',

	// site settings
	site_headers: [
		'<meta name="author" content="freizl@gmail.com" />',
	],
	host: 'http://a.haskellcn.org', // host 结尾不要添加'/'
	site_logo: '', // default is `name`
	site_navs: [
		// [ path, title, [target=''] ]
		[ '/about', '关于' ],
	],
	site_static_host: '', // 静态文件存储域名

	db: 'mongodb://127.0.0.1/node_club',
	session_secret: 'node_club',
	auth_cookie_name: 'node_club',
	port: 8080,

	// 话题列表显示的话题数量
	list_topic_count: 20,

	// RSS
	rss: {
		title: 'Haskell中文社区',
		link: 'http://www.haskellcn.org',
		language: 'zh-cn',
		description: 'Haskell中文社区',

		//最多获取的RSS Item数量
		max_rss_items: 50
	},

	// mail SMTP
	mail_port: 25,
	mail_user: 'club',
	mail_pass: 'club',
	mail_host: 'smtp.gmail.com',
	mail_sender: 'haskellcn.org@gmail.com',
	mail_use_authentication: true,
	
	//weibo app key
	weibo_key: 10000000,

	// admin 可删除话题，编辑标签，设某人为达人
	admins: { admin: true },

	// [ [ plugin_name, options ], ... ]
	plugins: []
};

var host = exports.config.host;
if (host[host.length - 1] === '/') {
	exports.config.host = host.substring(0, host.length - 1);
}
