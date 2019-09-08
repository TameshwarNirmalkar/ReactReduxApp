const node_server_config = {
	node_env: process.env.NODE_ENV || 'develpoment',
	port: process.env.PORT || 8080,
	host: process.env.HOST || 'localhost' //'127.0.0.1'
};
module.exports = node_server_config;