let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine([
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/font-awesome/css/font-awesome.min.css',
		'bower_components/Ionicons/css/ionicons.min.css',
		'bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
		'bower_components/jvectormap/jquery-jvectormap.css',
		'resources/assets/theme/cms/dist/css/AdminLTE.min.css',
		'resources/assets/theme/cms/dist/css/skins/_all-skins.min.css',
		'resources/assets/css/custom.css',
		], 'public/css/app.css')
	.combine([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/jquery-validation/dist/jquery.validate.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js',
		'bower_components/datatables.net/js/jquery.dataTables.min.js',
		'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js',
		'bower_components/fastclick/lib/fastclick.js',
		'resources/assets/theme/cms/dist/js/adminlte.min.js',
		'bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
		'resources/assets/theme/cms/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
		'resources/assets/theme/cms/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
		'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
		'bower_components/Chart.js/Chart.js',
		'resources/assets/theme/cms/dist/js/demo.js',
		'resources/assets/theme/cms/plugins/toast/jquery.toaster.js',
		'resources/assets/js/custom.js',
	], 'public/js/app.js')
	.copy('resources/assets/fonts', 'public/fonts');
