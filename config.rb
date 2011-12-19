# Routes
###############################################################################

# Set the root of the site to home
page "/index.html", :proxy => "/home"


# Paths
###############################################################################

set :css_dir, "_/stylesheets"
set :js_dir, "_/javascripts"
set :images_dir, "_/images"


# Helpers
###############################################################################

helpers do
  def timestamp
    Time.now.to_i
  end
  
  def server_name
    env['SERVER_NAME'] || 'localhost'
  end
  
  def environment
    'development' unless server_name == 'example.org'
  end
end


module Middleman::Features::TimestampReplacement
  class << self
    def registered(app)
      app.after_build do
        Dir.glob('./build/**/*').each do | path |
          if( FileTest.file? ( path ) )
            fileContents = File.read ( path )
            fileContents = fileContents.gsub( '{TIMESTAMP}', Time.now.to_s )
            File.open( path, 'w' ) { | file | file.puts fileContents }
          end
        end
      end
    end
    alias :included :registered
  end
end



# BUILD CONFIGURATION
###############################################################################

configure :build do
  
  # Enable cache buster
  activate :cache_buster
  
  # erase the home directory since it will be the root of the site
  ignore "/home"
  
  # Minify css
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Use relative URLs
  activate :relative_assets
    
  # Compress PNGs after build
  # require "middleman-smusher"
  activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
  
  activate :timestamp_replacement
end