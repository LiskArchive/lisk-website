module.exports = function(grunt){

	grunt.initConfig({
		concat : {
			options: {
				separator: ';'
			},
			all_css : {
				src : [
					'public/styles/global.css'
				],
				dest: 'public/styles/global.css'
			},
			all_js   : {
				src : [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/slick.js/slick/slick.min.js',
					'bower_components/highlightjs/highlight.pack.js',
					'bower_components/devicejs/lib/device.min.js',
					'public/js/global.js'
				],
				dest: 'public/js/all.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'public/js/min/all.min.js': ['public/js/all.js'],
					'public/js/min/contact_us.min.js': ['public/js/contact_us.js'],
					'public/js/min/home.min.js': ['public/js/home.js'],
					'public/js/min/documentation.min.js': ['public/js/documentation.js'],
					'public/js/min/downloads.min.js': ['public/js/downloads.js'],
					'public/js/min/features.min.js': ['public/js/features.js'],
					'public/js/min/ico.min.js': ['public/js/ico.js'],
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'public/styles',
					src: ['*.css', '!*.min.css'],
					dest: 'public/styles',
					ext: '.min.css'
				}]
			}
		},
		jshint : {
			options: {
				jshintrc: '.jshintrc'
			}
		},
		sass : {
			dist: {
				options: {
					style: 'expanded'
				},
				files  : {
					'public/styles/global.css': 'sass/global.scss'
				}
			}
		},
		watch  : {
			scripts: {
				files  : ['public/js/*.js'],
				tasks  : ['concat'],
				options: {
					spawn: false
				}
			},
			templates: {
				files  : ['jade/*.jade'],
				tasks  : ['jade'],
				options: {
					spawn: false
				}
			},
			styles   : {
				files: ['sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass', 'cssmin', 'concat', 'uglify']);
	grunt.registerTask('default', ['watch']);
};
