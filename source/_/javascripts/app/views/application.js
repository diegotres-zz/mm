PROJECT_NAMESPACE.Views.Application = Backbone.View.extend({
  
  el: $('html'),
  
  initialize: function() {
    console.log( 'Application: initialize' );
    this.instantiates_current_page();
  },
  
  instantiates_current_page: function() {
    var page_reference = this.return_page_reference()
      , page_view      = this.return_page_view( page_reference );
    page_view && (PROJECT_NAMESPACE.current_page = new page_view);
  },
  
  return_page_reference: function() {
    return this.$('body').attr('class').split(' ')[1];
  },
  
  return_page_view: function(page_reference) {
    return PROJECT_NAMESPACE.Views[_.titleize(_.camelize(page_reference))];
  }
  
});