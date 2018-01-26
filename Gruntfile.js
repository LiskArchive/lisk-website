module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			styles: {
				src: [
					'node_modules/cookieconsent/build/cookieconsent.min.css',
					'public/styles/prism.css',
					'public/styles/global.css'
				],
				dest: 'public/styles/global.css'
			},
			scripts: {
				src: [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/jquery.countdown/dist/jquery.countdown.min.js',
					'bower_components/slick.js/slick/slick.min.js',
					'bower_components/devicejs/lib/device.min.js',
					'node_modules/cookieconsent/build/cookieconsent.min.js',
					'public/js/prism.js',
					'public/js/global.js'
				],
				dest: 'public/js/all.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			scripts: {
				files: {
					'public/js/min/all.min.js': ['public/js/all.js'],
					'public/js/min/contact_us.min.js': ['public/js/contact_us.js'],
					'public/js/min/home.min.js': ['public/js/home.js'],
					'public/js/min/downloads.min.js': ['public/js/downloads.js'],
					'public/js/min/ico.min.js': ['public/js/ico.js'],
				}
			}
		},
		cssmin: {
			styles: {
				files: [{
					expand: true,
					cwd: 'public/styles',
					src: ['*.css', '!*.min.css'],
					dest: 'public/styles',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			}
		},
		sass: {
			styles: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/styles/global.css': 'sass/global.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['public/js/*.js'],
				tasks: ['concat:scripts', 'uglify'],
				options: {
					spawn: false
				}
			},
			styles: {
				files: ['sass/*.scss', 'sass/includes/*.scss'],
				tasks: ['sass', 'concat:styles', 'cssmin'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.registerTask('build', ['sass', 'concat', 'cssmin', 'uglify']);
	grunt.registerTask('default', ['watch']);
};
