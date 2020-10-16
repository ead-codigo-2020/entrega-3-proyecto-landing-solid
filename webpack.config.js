let Encore = require( '@symfony/webpack-encore' );

Encore
	.enableSourceMaps( ! Encore.isProduction() )
	.enableVersioning( false )
	.enableSingleRuntimeChunk()
	.enableSassLoader()
	.enablePostCssLoader()
	.setManifestKeyPrefix( '' )
	.setPublicPath( './public/assets/dist' )
	.setOutputPath( 'public/assets/dist' )
	.autoProvidejQuery()
	.addStyleEntry( 'style', './src/scss/style.scss' )
;

let config = Encore.getWebpackConfig();

module.exports = config;
