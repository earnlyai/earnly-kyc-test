/**

 * @file

 * Global utilities.

 *

 */

(function ($, Drupal) {
    'use strict';
    Drupal.behaviors.tls = {

    attach: function (context, settings) {
      jQuery(".tp-search").click(function(e){
        jQuery("#block-searchform").toggle();		
        jQuery("#block-quicktabsfamiliesofcompanies").hide();
      }); 
      jQuery("#block-quicktabsfamiliesofcompanies").appendTo(".t-family-of-companies");

    
      var n = 0;
      jQuery( "div.t-family-of-companies" )
        .mouseenter(function() {
          n += 1;
          jQuery( this ).find( "div#block-quicktabsfamiliesofcompanies" ).show();
        })
        .mouseleave(function() {
          jQuery( this ).find( "div#block-quicktabsfamiliesofcompanies" ).hide();
        });
     

    }

  };


  // Get the current URL
let currentUrl = window.location.href;

// Check if the URL contains "%2F"
if (currentUrl.includes("%2F")) {

  // Replace '%3F' with '&'
  let decodedUrl = currentUrl.replace(/%3F/g, "&");

    // Decode the URL
    decodedUrl = decodeURIComponent(decodedUrl);


    // Refresh the page with the cleaned-up URL
    window.location.replace(decodedUrl);
}



})(jQuery, Drupal);

jQuery(function($)
{
   // client page quick tab
   var arr = [];
   var arr2 =[];
   var arr3 =[];
  
   i = 0;
  
  var arr = jQuery('.all_clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
  var arr2 = jQuery('.lawfirm-clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
  var arr3 = jQuery('.corporatelaw-clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
  
   jQuery('.view-clients.view-display-id-block_1 .view-content .case-study-snippet, .view-clients.view-display-id-block_2 .view-content .case-study-snippet, .view-clients.view-display-id-block_3 .view-content .case-study-snippet, .view-clients.view-display-id-block_4 .view-content .case-study-snippet, .view-clients.view-display-id-block_5 .view-content .case-study-snippet, .view-clients.view-display-id-block_6 .view-content .case-study-snippet, .view-clients.view-display-id-block_7 .view-content .case-study-snippet').map(function(){
    this.outerHTML='';
   });
 
    jQuery(".all_clients .view-content").prepend(arr[0]);
    jQuery(".lawfirm-clients .view-content").prepend(arr2[0]);
    jQuery(".corporatelaw-clients .view-content").prepend(arr3[0]);
    
    for(i=1; i < arr.length; i++){
        jQuery(".all_clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr[i++]); 
      });
    }
    for(i=1; i < arr2.length; i++){
        jQuery(".lawfirm-clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr2[i++]); 
      });
    }
    for(i=1; i < arr3.length; i++){
        jQuery(".corporatelaw-clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr3[i++]); 
      });
    }
    
});     
   jQuery('.all_clients .case-study-snippet:odd').addClass('left');
   jQuery('.all_clients .case-study-snippet:even').addClass('right');
   
   jQuery('.lawfirm-clients .case-study-snippet:odd').addClass('left');
   jQuery('.lawfirm-clients .case-study-snippet:even').addClass('right');

   jQuery('.corporatelaw-clients .case-study-snippet:odd').addClass('left');
   jQuery('.corporatelaw-clients .case-study-snippet:even').addClass('right');

   
  //  on load more client start
  // client page quick tab
jQuery( document ).ajaxComplete(function() {
 
   var arr = [];
   var arr2 =[];
   var arr3 =[];
  
   i = 0;
  
  var arr = jQuery('.all_clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
  var arr2 = jQuery('.lawfirm-clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
  var arr3 = jQuery('.corporatelaw-clients .view-content .case-study-snippet').map(function(){
    return this.outerHTML;
  });
    jQuery('.all-clients .view-content .case-study-snippet, .lawfirm-clients .view-content .case-study-snippet, .corporatelaw-clients .view-content .case-study-snippet').map(function(){
    this.outerHTML='';
  });
 
    jQuery(".all_clients .view-content").prepend(arr[0]);
    jQuery(".lawfirm-clients .view-content").prepend(arr2[0]);
    jQuery(".corporatelaw-clients .view-content").prepend(arr3[0]);
    for(i=1; i < arr.length; i++){
        jQuery(".all-clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr[i++]); 
      });
    }
    for(i=1; i < arr2.length; i++){
        jQuery(".lawfirm-clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr2[i++]); 
      });
    }
    for(i=1; i < arr3.length; i++){
        jQuery(".corporatelaw-clients .view-content  div:nth-child(9n)").each(function () {
        jQuery(this).after(arr3[i++]); 
      });
    }
 
   jQuery('.all_clients .case-study-snippet:odd').addClass('left');
   jQuery('.all_clients .case-study-snippet:even').addClass('right');

   jQuery('.lawfirm-clients .case-study-snippet:odd').addClass('left');
   jQuery('.lawfirm-clients .case-study-snippet:even').addClass('right');

   jQuery('.corporatelaw-clients .case-study-snippet:odd').addClass('left');
   jQuery('.corporatelaw-clients .case-study-snippet:even').addClass('right');


});

;
