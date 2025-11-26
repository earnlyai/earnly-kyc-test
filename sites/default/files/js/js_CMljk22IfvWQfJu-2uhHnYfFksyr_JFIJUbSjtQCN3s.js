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
/**
 * @file
 * JavaScript behaviors for details element.
 */

(function ($, Drupal) {

  'use strict';

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem('webform', 'webform');
      localStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  /**
   * Attach handler to save details open/close state.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDetailsSave = {
    attach: function (context) {
      if (!hasLocalStorage) {
        return;
      }

      // Summary click event handler.
      $('details > summary', context).once('webform-details-summary-save').on('click', function () {
        var $details = $(this).parent();

        // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
        if ($details[0].hasAttribute('data-webform-details-nosave')) {
          return;
        }

        var name = Drupal.webformDetailsSaveGetName($details);
        if (!name) {
          return;
        }

        var open = ($details.attr('open') !== 'open') ? '1' : '0';
        localStorage.setItem(name, open);
      });

      // Initialize details open state via local storage.
      $('details', context).once('webform-details-save').each(function () {
        var $details = $(this);

        var name = Drupal.webformDetailsSaveGetName($details);
        if (!name) {
          return;
        }

        var open = localStorage.getItem(name);
        if (open === null) {
          return;
        }

        if (open === '1') {
          $details.attr('open', 'open');
        }
        else {
          $details.removeAttr('open');
        }
      });
    }

  };

  /**
   * Get the name used to store the state of details element.
   *
   * @param {jQuery} $details
   *   A details element.
   *
   * @return {string}
   *   The name used to store the state of details element.
   */
  Drupal.webformDetailsSaveGetName = function ($details) {
    if (!hasLocalStorage) {
      return '';
    }

    // Ignore details that are vertical tabs pane.
    if ($details.hasClass('vertical-tabs__pane')) {
      return '';
    }

    // Any details element not included a webform must have define its own id.
    var webformId = $details.attr('data-webform-element-id');
    if (webformId) {
      return 'Drupal.webform.' + webformId.replace('--', '.');
    }

    var detailsId = $details.attr('id');
    if (!detailsId) {
      return '';
    }

    var $form = $details.parents('form');
    if (!$form.length || !$form.attr('id')) {
      return '';
    }

    var formId = $form.attr('id');
    if (!formId) {
      return '';
    }

    // ISSUE: When Drupal renders a webform in a modal dialog it appends a unique
    // identifier to webform ids and details ids. (i.e. my-form--FeSFISegTUI)
    // WORKAROUND: Remove the unique id that delimited using double dashes.
    formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
    detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
    return 'Drupal.webform.' + formId + '.' + detailsId;
  };

})(jQuery, Drupal);
;
/**
 * @file
 * JavaScript behaviors for message element integration.
 */

(function ($, Drupal) {

  'use strict';

  // Determine if local storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasLocalStorage = (function () {
    try {
      localStorage.setItem('webform', 'webform');
      localStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  // Determine if session storage exists and is enabled.
  // This approach is copied from Modernizr.
  // @see https://github.com/Modernizr/Modernizr/blob/c56fb8b09515f629806ca44742932902ac145302/modernizr.js#L696-731
  var hasSessionStorage = (function () {
    try {
      sessionStorage.setItem('webform', 'webform');
      sessionStorage.removeItem('webform');
      return true;
    }
    catch (e) {
      return false;
    }
  }());

  /**
   * Behavior for handler message close.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformMessageClose = {
    attach: function (context) {
      $(context).find('.js-webform-message--close').once('webform-message--close').each(function () {
        var $element = $(this);

        var id = $element.attr('data-message-id');
        var storage = $element.attr('data-message-storage');
        var effect = $element.attr('data-message-close-effect') || 'hide';
        switch (effect) {
          case 'slide': effect = 'slideUp'; break;

          case 'fade': effect = 'fadeOut'; break;
        }

        // Check storage status.
        if (isClosed($element, storage, id)) {
          return;
        }

        // Only show element if it's style is not set to 'display: none'.
        if ($element.attr('style') !== 'display: none;') {
          $element.show();
        }

        $element.find('.js-webform-message__link').on('click', function (event) {
          $element[effect]();
          setClosed($element, storage, id);
          $element.trigger('close');
          event.preventDefault();
        });
      });
    }
  };

  function isClosed($element, storage, id) {
    if (!id || !storage) {
      return false;
    }

    switch (storage) {
      case 'local':
        if (hasLocalStorage) {
          return localStorage.getItem('Drupal.webform.message.' + id) || false;
        }
        return false;

      case 'session':
        if (hasSessionStorage) {
          return sessionStorage.getItem('Drupal.webform.message.' + id) || false;
        }
        return false;

      default:
        return false;
    }
  }

  function setClosed($element, storage, id) {
    if (!id || !storage) {
      return;
    }

    switch (storage) {
      case 'local':
        if (hasLocalStorage) {
          localStorage.setItem('Drupal.webform.message.' + id, true);
        }
        break;

      case 'session':
        if (hasSessionStorage) {
          sessionStorage.setItem('Drupal.webform.message.' + id, true);
        }
        break;

      case 'user':
      case 'state':
      case 'custom':
        $.get($element.find('.js-webform-message__link').attr('href'));
        return true;
    }
  }

})(jQuery, Drupal);
;
