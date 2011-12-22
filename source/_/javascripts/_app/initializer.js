
// DEFINE A GLOBAL
var global = (function(){return this;}());

// CREATING NAMESPACES
;(function( global, undefined ) {
  if( typeof global.PROJECT_NAMESPACE === 'undefined' ) {
    global.PROJECT_NAMESPACE = {
        Models      : {}
      , Views       : {}
      , Collections : {}
      , Routers     : {}
      , Helpers     : {}
    };
  }
})( global );

// ENTRY POINT OF APPLICATION
$(function() {
  PROJECT_NAMESPACE.application = new PROJECT_NAMESPACE.Views.Application;
});





