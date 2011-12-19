

# Routes
###############################################################################

# Set the root of the site to home
page "/index.html", :proxy => "/home"


# Paths
###############################################################################

set :css_dir, "_/stylesheets"
set :js_dir, "_/javascripts"
set :images_dir, "_/images"

set :env, "development"

# Helpers
helpers do
  def timestamp
    Time.now.to_i
  end
  
  # def environment
  #   (ENV['MM_ENV'] && ENV['MM_ENV'].to_s) || 'development'
  # end
end



# BUILD CONFIGURATION
###############################################################################
configure :build do
  
  set :env, "production"
  
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
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end