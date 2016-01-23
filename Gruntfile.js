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
					'public/js/jquery1.10.js',
					'public/js/slick.min.js',
					'public/js/highlight.pack.js',
					'public/js/device.min.js',
					//'js/raphael.js',
					//'js/analytics.js',
					//'js/popup.js',
					//'js/graph_init.js',
					'public/js/script.js',
					'public/js/map_init.js'
				],
				dest: 'public/js/min/all.js'
			},
			index_js   : {
				src : [
					'public/js/jquery.backgroundvideo.min.js',
					//'js/jquery.vide.js',
					'public/js/raphael.js',
					'public/js/g.raphael-min.js',
					'public/js/popup.js',
					'public/js/analytics.js',
					'public/js/graph_init.js'
				],
				dest: 'public/js/min/index_page.js'
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['sass', 'concat']);
	grunt.registerTask('default', ['watch']);
};
