module.exports = function(grunt) {
  
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    mkdir: {
	      'build': {
	        options: {
	          create: ['build', 'build/siteextension']
	        }
	      }
	    },
	    clean: {
	        build: {
	            src: [
	                'build/**',
	            ]
	        }
	    },
	    nugetpack: {
	        siteextension: {
	            options: {
	                id: 'HelloHtml',
	                title: 'HelloHtml',
	                version: '<%= pkg.version %>', 
	                authors: '<%= pkg.author %>',
	                description: 'Hello HTML Site Extension',
	                language: 'en-us',
	                projectUrl: 'http://example.com',
	                licenseUrl: 'http://example.com',
	                requireLicenseAcceptance: true,
	                tags: 'siteextension test demo',
	                outputDir: 'build/siteextension'
	            },

	            files: [
	                {src: ['app.js', 'package.json', 'public/**/*.*']},
	                {src: 'siteextension/install.cmd', dest: 'content/install.cmd'},
	                {src: 'siteextension/applicationHost.xdt', dest: 'content/applicationHost.xdt'},
	                {src: 'siteextension/web.config', dest: 'content/web.config'},
					{src: 'siteextension/iisnode.yml', dest: 'content/iisnode.yml'}
	            ]
	        }
	    } 	    
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-nuget-pack');	

	grunt.registerTask('default', ['clean:build','mkdir:build', 'nugetpack:siteextension']);
}