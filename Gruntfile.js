module.exports = function(grunt){

	grunt.initConfig({
		concat : {
			options: {
				separator: ';'
			},
			all_css : {
				src : [
					'public/styles/main_global.css',
					'bower_components/animate.css/animate.min.css'
				],
				dest: 'public/styles/main_global.css'
			},
			all_js   : {
				src : [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/slick.js/slick/slick.min.js',
					'bower_components/highlightjs/highlight.pack.js',
					'bower_components/devicejs/lib/device.min.js',
					'public/js/script.js',
					'public/js/map_init.js'
				],
				dest: 'public/js/all.js'
			},
			index_js   : {
				src : [
					'public/js/min/jquery.backgroundvideo.min.js',
					'bower_components/raphael/raphael-min.js',
					'public/js/min/g.raphael-min.js',
					'public/js/popup.js',
					'public/js/analytics.js',
					'public/js/graph_init.js'
				],
				dest: 'public/js/index_page.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'public/js/min/all.min.js': ['public/js/all.js'],
					'public/js/min/index_page.min.js': ['public/js/index_page.js']
				}
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
					'public/styles/main_global.css': 'sass/main_global.scss'
				}
			}
		},
		jade   : {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files  : [{
					cwd   : "jade/",
					src   : "*.jade",
					dest  : "",
					expand: true,
					ext   : ".html"
				}]
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
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass', 'concat', 'uglify']);
	grunt.registerTask('default', ['watch']);
};
