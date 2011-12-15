

# Routes
###############################################################################

# Set the root of the site to home
page "/index.html", :proxy => "/home"


# Paths
###############################################################################

set :css_dir, "_/stylesheets"
set :js_dir, "_/javascripts"
set :images_dir, "_/images"





# BUILD CONFIGURATION
###############################################################################
configure :build do
  
  # erase the home directory since it will be the root of the site
  ignore "/home"
  
  # Minify css
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Enable cache buster
  # activate :cache_buster
  
  # Use relative URLs
  activate :relative_assets
    
  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end