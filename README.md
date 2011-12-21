## Put the code below in your .bash_profile

    # @param action
    # @param project_name
    # @param project_url1
    function mm() {
      action=$1;
      project_name=$2;
      project_url="git@github.com:diegotres/mm.git";
      params=$3;

      case $action in
        "new")
      
          if [ $project_name ]; then 
        
            # clone project
            git clone $project_url $project_name;
        
            # enter in a folder
            cd ./$project_name;
        
            # creates a gemset
            rvm gemset create $project_name;
        
            # uses a gemset
            rvm gemset use $project_name;
        
            # creates a .rvmrc file
            echo "rvm gemset use $project_name" > .rvmrc
        
            # install bundler
            gem install bundler
        
            # bundle install
            bundle install;
        
            # try to find parameters
            while [ "$3" != "" ]; do
              case $3 in
                -ns | --namespace )
                  shift
                  namespace=$3;;
                -h | --help )
                  mm_print_readme
                  exit;;
                * )
                  usage;
                  exit 1
              esac
              shift
            done
        
            # replace namespace if exists
            if [ $namespace ]; then
              grep -rl PROJECT_NAMESPACE . | xargs sed -i "" -e "s/PROJECT_NAMESPACE/${namespace}/g"
            fi
        
            mm_print_readme
          else
            mm_print_error;
            mm_print_readme;
          fi
          echo "Project created";;
    
        "build")
          middleman build;;
    
        "server")
          middleman server --livereload;;
      
        *)
          mm_print_readme;
      esac

    }


    function mm_print_error {
      echo "=================================================";
      echo "You need to specify an ACTION and a PROJECT_NAME.";
      echo "=================================================";
    }

    function mm_print_readme {
      echo "=================================================";
      echo "MM!!!!!!!!!!!!!!!!!!! HELP !!!!!!!!!!!!!!!!!!!!MM";
      echo "=================================================";
      echo "";
      echo "Create:";
      echo "  mm new my_project";
      echo "";
      echo "-------------------------------------------------";
      echo "";
      echo "Run:";
      echo "  mm server";
      echo "";
      echo "If you have installed the LiveReload extension";
      echo "\"https://github.com/mockko/livereload#readme\"";
      echo "in your browser, you can have Middleman";
      echo "automatically tell the browser to refresh upon";
      echo "changes to your source code.";
      echo "";
      echo "-------------------------------------------------";
      echo "";
      echo "Build:";
      echo "  mm build";
      echo "";
      echo "=================================================";
    }

---

## In Terminal:

###Create new project:
    mm new my_project

###Run (start webserver):
    mm server

###Build (create static files):
    mm build
    
