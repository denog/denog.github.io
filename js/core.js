/* Denog JavaScript Application Library
 * Copyright 2017, Adnan Oezsarigoel
 *
 * project     : denog.de
 * file        : core.js
 * date        : 2017-11-18
 * created by  : Support@ITplusplus.de
 * modified at : 
 * modified by : 
 * description : JavaScript Library for web application
 * namespace   : aoLib
 * requires    : jQuery (tested with jQuery v1.10.2)
 *               jQuery UI (tested with jQuery UI v1.10.3)
 *               Bootstrap 3 (testet with Bootstrap v3.0.3)
 */

if (aoLib === undefined || typeof aoLib !== 'object') var aoLib = {};
if (aoLib.args === undefined || typeof aoLib.args !== 'object') aoLib.args = {};


/**
 * Get representing boolean Value
 *
 * @copyright       
 * @author          
 *
 * @access          public
 * @param           value       value to check
 * @return          representing boolean
 */
aoLib.boolval = function (mixedVar) {
    // original by: Will Rowe
    //   example 1: boolval(true)
    //   returns 1: true
    //   example 2: boolval(false)
    //   returns 2: false
    //   example 3: boolval(0)
    //   returns 3: false
    //   example 4: boolval(0.0)
    //   returns 4: false
    //   example 5: boolval('')
    //   returns 5: false
    //   example 6: boolval('0')
    //   returns 6: false
    //   example 7: boolval([])
    //   returns 7: false
    //   example 8: boolval('')
    //   returns 8: false
    //   example 9: boolval(null)
    //   returns 9: false
    //   example 10: boolval(undefined)
    //   returns 10: false
    //   example 11: boolval('true')
    //   returns 11: true
    if (mixedVar === false) {
        return false;
    }
    if (mixedVar === 0 || mixedVar === 0.0) {
        return false;
    }
    if (mixedVar === '' || mixedVar === '0') {
        return false;
    }
    if (Array.isArray(mixedVar) && mixedVar.length === 0) {
        return false;
    }
    if (mixedVar === null || mixedVar === undefined) {
        return false;
    }
    return true;
};


/**
 * Merge Objects
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param           destination     Destination Object
 * @param           source          Source Object
 * @return          Merged Object
 */
aoLib.mergeObjects = function(destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
};

aoLib.swap = function(a, b){
    var tmp = jQuery('<span/>').hide();    
    jQuery(tmp).insertAfter(a);
    jQuery(a).insertAfter(b);
    jQuery(b).insertAfter(tmp);
    jQuery(tmp).remove();
};

aoLib.nl2br = function(str) {     
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2');
};

aoLib.replaceAll = function(find, replace, str) {
    return str.replace(new RegExp(aoLib.escapeRegExp(find), "ig"), replace);
};

aoLib.escapeRegExp = function(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};


aoLib.getAllCssStyles = function(elem) {
    function css2json(css) {
        var s = {};
        if (!css) return s;
        if (css instanceof CSSStyleDeclaration) {
            for (var i in css) {
                if ((css[i]).toLowerCase) {
                    s[(css[i]).toLowerCase()] = (css[css[i]]);
                }
            }
        } else if (typeof css === "string") {
            css = css.split(";");
            for (var i in css) {
                var l = css[i].split(":");
                s[jQuery.trim(l[0].toLowerCase())] = jQuery.trim(l[1]);
            }
        }
        return s;
    }

    var sheets = document.styleSheets, fileCss = {}, inlineCss = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            var selector = rules[r].selectorText;
            if (selector && selector.indexOf(":")=== -1 && elem.is(selector)) {
                fileCss = jQuery.extend(fileCss, css2json(rules[r].style));
                inlineCss = jQuery.extend(inlineCss, css2json(elem.attr('style')));
            }
        }
    }
    var css = jQuery.extend(fileCss, inlineCss);
    return css;
};

aoLib.setIntervalX = function(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {
        callback();
        x++;
        if (x >= repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
};


/**
 * Initialize Dropdown Menus
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param       
 * @return          void
 */
aoLib.animateDropdownMenu = function(elem, duration, onOpen, onClose) {
    duration = duration || 250;
    jQuery(elem).off('show.bs.dropdown').on('show.bs.dropdown', function() {
        jQuery(elem).find('.dropdown-menu').slideDown(duration);
        if (jQuery.isFunction(onOpen)) onOpen();
    });

    jQuery(elem).off('hide.bs.dropdown').on('hide.bs.dropdown', function() {
        jQuery(elem).find('.dropdown-menu').slideUp(duration);
        if (jQuery.isFunction(onClose)) onClose();
    });
};


/**
 * Popup Object
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param           params          object(title, content)
 * @return          Popup Object
 */
aoLib.Popup = function(params) {    
    var self = this; 
    
    // Locale Namespace
    var popup = {};
    
    // Reserved Names
    popup.objects = {};
    popup.configs = {};    
    
    // Params Mapper
    params = params || {};
    popup.configs.title = params.title || '';
    popup.configs.content = params.content || '';
    popup.configs.sensitive = params.sensitive || false;
    popup.configs.onCloseCallback = params.onCloseCallback || false;
    
    var closeCallbackStatus = true;
    
    
    // Default Config Values
    
    
    
    
    this.getElement = function() {
        return popup.objects.container;
    };
    
    
    /**
     * Open Popup
     *
     * @copyright       Adnan Oezsarigoel 
     * @author          Support@ITplusplus.de
     *
     * @access          public
     * @param           obj         onOpen: callback starts after loading
     * @return          
     */
    this.open = function(obj) {
        var obj = obj || {};
        jQuery(popup.objects.container).modal('show');
        jQuery(popup.objects.container).on('hidden.bs.modal', function(event) {
            jQuery(this).remove();
            popup = null;
        });
        
        if (jQuery.isFunction(obj.onOpen)) {
            jQuery(popup.objects.container).on('shown.bs.modal', function(event) {
                obj.onOpen();
            });
        }
    };
    
    
    /**
     * Close Popup
     *
     * @copyright       Adnan Oezsarigoel 
     * @author          Support@ITplusplus.de
     *
     * @access          public
     * @param           
     * @return          
     */
    this.close = function() {
        jQuery(popup.objects.container).modal('hide');
    };
    
    
    /**
     * Prevent Close Callback
     *
     * @copyright       Adnan Oezsarigoel 
     * @author          Support@ITplusplus.de
     *
     * @access          public
     * @param           
     * @return          
     */
    this.preventCloseCallback = function() {
        closeCallbackStatus = false;
    };
    

    /**
     * Constructor
     * 
     * @description     Load Object Model
     *
     * @copyright       Adnan Oezsarigoel 
     * @author          Support@ITplusplus.de
     *
     * @access          anonym
     * @param       
     * @return          void
     */
    (function() {
        popup.objects.sensitiveIcon = jQuery('<span/>').append(
            jQuery('<span/>', {class: 'glyphicon glyphicon-lock text-warning', 'aria-hidden': 'true'}),
            jQuery('<span/>').text(' ')
        ).hide();
        popup.objects.title = jQuery('<span/>').text(popup.configs.title);
        popup.objects.content = jQuery('<div/>', {class: 'modal-body'}).append(popup.configs.content);
        popup.objects.container = jQuery('<div/>', {class: 'modal fade', role: 'dialog'}).append(  
            jQuery('<div/>', {class: 'modal-dialog'}).append(        
                jQuery('<div/>', {class: 'modal-content'}).append(          
                    jQuery('<div/>', {class: 'modal-header'}).append(      
                        jQuery('<button/>', {type: 'button', class: 'close', 'data-dismiss': 'modal', 'aria-hidden': 'true'}).html('&times;'),
                        jQuery('<h4/>', {class: 'modal-title'}).append(
                            popup.objects.sensitiveIcon,
                            popup.objects.title
                        )
                    ),
                    popup.objects.content               
                )
            )
        );
        if (jQuery.isFunction(popup.configs.onCloseCallback)) {
            jQuery(popup.objects.container).on('hide.bs.modal', function() {
                if (closeCallbackStatus) {
                    popup.configs.onCloseCallback();
                }
            });
        }
    
        if (popup.configs.sensitive) {         
            jQuery(popup.objects.sensitiveIcon).show();
            jQuery(popup.objects.container).modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    })();    
};


/**
 * Toggle Visiblity of Object
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param           params        elem, effect, speed, onShow, onHide
 * @return          void
 */
aoLib.toggleVisiblity = function(params) {
    params = params || {};
    
    var elem = params.elem || false;
    var effect = params.effect || 'blind';
    var speed = params.speed || 350;
    var onShow = params.onShow || null;
    var onHide = params.onHide || null;
    
    if (elem === false && jQuery(elem).length === 0) return false;
    
    if (jQuery(elem).is(':hidden')) {
        jQuery(elem).show(effect, {}, speed, onShow);
    }
    else {
        jQuery(elem).hide(effect, {}, speed, onHide);
    }
};


/**
 * Alert Box
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param           params          object(title, message, type, onClose)
 * @return          Popup Object
 */
aoLib.alertBox = function(data) {
    data = data || {};
    var title = data.title || "Hinweis";
    var content = data.message || "Ein unerwarteter Fehler ist aufgetreten!";
    var type = data.type || "warning";
    var onCloseCallback = data.onClose || false;
    
    if (type === "warning") content = jQuery('<p/>', {class: "text-danger"}).html(content);
    else if (type === "success") content = jQuery('<p/>', {class: "text-success"}).html(content);
    else if (type === "info") content = jQuery('<p/>', {class: "text-info"}).html(content);
    else if (type === "permission denied") content = 'Sie haben nicht die Berechtigung dies zu tun.';

    var alert = new aoLib.Popup({
        title: title,
        content: content,
        onCloseCallback: onCloseCallback
    });
    alert.open();
    return alert;
};


/**
 * Confirm Box
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @param           params          object(title, message, type, onAccept, onDecline)
 * @return          Popup Object
 */
aoLib.confirmBox = function(data) {
    data = data || {};
    var title = data.title || "Hinweis";
    var content = data.message || "Möchten Sie wirklich fortfahren?";
    var onAcceptCallback = data.onAccept || false;
    var onCloseCallback = data.onDecline || false;
    
    var acceptBtn = jQuery('<button/>', {type: 'button', class: 'btn btn-success'}).html('Ja');
    var declineBtn = jQuery('<button/>', {type: 'button', class: 'btn btn-danger', 'data-dismiss': 'modal'}).html('Nein');
    
    jQuery(acceptBtn).click(function() {
        confirm.preventCloseCallback();
        confirm.close();
        if (jQuery.isFunction(onAcceptCallback)) {
            onAcceptCallback();
        }
    });
            
    content = jQuery('<div/>').append(
        content,
        jQuery('<div/>', {class: 'modal-footer'}).append(
            declineBtn,
            acceptBtn
        )
    );

    var confirm = new aoLib.Popup({
        title: title,
        content: content,
        onCloseCallback: onCloseCallback
    });
    confirm.open();
    return confirm;
};


/**
 * Get base Url
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 * @params          String          url
 */
aoLib.getBaseUrl = function() {
    return window.location.protocol + "//" + window.location.host + "/";
};


/**
 * Get Time Difference
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 */
aoLib.getTimeDifference = function(timestamp) {
    if (typeof timestamp === 'undefined') return null;
    var now = jQuery.now() / 1000;
    var difference;
    var prefix;
    
    var periods = ['Sekunden', 'Minuten', 'Stunden', 'Tage', 'Wochen', 'Monate', 'Jahre', 'Jahrzehnte'];
    var lengths = ['60', '60', '24', '7', '4.35', '12', '10'];

    if(now > timestamp + 10) {
        difference = now - timestamp;
        prefix = "vor";
    }
    else if (now < timestamp) {
        difference = timestamp - now;
        prefix = "in";
    }
    else {
        return "gerade eben";
    }

    for(var i = 0; difference >= lengths[i] && i < lengths.length - 1; i++) difference /= lengths[i];

    difference = Math.round(difference);
    if (difference === 1) periods[i] = periods[i].substr(0, periods[i].length - 1);

    return prefix + " " + difference + " " + periods[i];
};



 
aoLib.changeNumberFormat = function(value, mode, suffix) {    
    mode = mode || 0;
    suffix = suffix || '';
    
    var decimalPlaces = 0;
    
    if (!jQuery.isNumeric(value)) return 'n/a';

    if (mode === 'currency') {
        decimalPlaces = 0;
        suffix = '&nbsp;' + suffix;
    }
    else if (mode === '%') {
        decimalPlaces = 2;
        suffix = '&nbsp;%';
    }
    else {
        decimalPlaces = mode * 1;
    }
    
    var thousandSeparators = '.';
    var decimalSeparator = ',';

    value *= 1;
    decimalPlaces *= 1;

    if (Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces) === 0) value = 0;

    return aoLib.number_format(value, decimalPlaces, decimalSeparator, thousandSeparators) + suffix;
};

aoLib.number_format = function(number, decimals, dec_point, thousands_sep) {
  //  discuss at: http://phpjs.org/functions/number_format/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: davook
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Michael White (http://getsprink.com)
  // bugfixed by: Benjamin Lupton
  // bugfixed by: Allan Jensen (http://www.winternet.no)
  // bugfixed by: Howard Yeend
  // bugfixed by: Diogo Resende
  // bugfixed by: Rival
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  //  revised by: Luke Smith (http://lucassmith.name)
  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
  //    input by: Jay Klehr
  //    input by: Amir Habibi (http://www.residence-mixte.com/)
  //    input by: Amirouche
  //   example 1: number_format(1234.56);
  //   returns 1: '1,235'
  //   example 2: number_format(1234.56, 2, ',', ' ');
  //   returns 2: '1 234,56'
  //   example 3: number_format(1234.5678, 2, '.', '');
  //   returns 3: '1234.57'
  //   example 4: number_format(67, 2, ',', '.');
  //   returns 4: '67,00'
  //   example 5: number_format(1000);
  //   returns 5: '1,000'
  //   example 6: number_format(67.311, 2);
  //   returns 6: '67.31'
  //   example 7: number_format(1000.55, 1);
  //   returns 7: '1,000.6'
  //   example 8: number_format(67000, 5, ',', '.');
  //   returns 8: '67.000,00000'
  //   example 9: number_format(0.9, 0);
  //   returns 9: '1'
  //  example 10: number_format('1.20', 2);
  //  returns 10: '1.20'
  //  example 11: number_format('1.20', 4);
  //  returns 11: '1.2000'
  //  example 12: number_format('1.2000', 3);
  //  returns 12: '1.200'
  //  example 13: number_format('1 000,50', 2, '.', ' ');
  //  returns 13: '100 050.00'
  //  example 14: number_format(1e-8, 8, '.', '');
  //  returns 14: '0.00000001'

  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
};


/**
 * Identity Map Object
 *
 * @copyright       Adnan Oezsarigoel 
 * @author          Support@ITplusplus.de
 *
 * @access          public
 */
aoLib.IdentityMapObject = function() {
    var map = {};
    
    this.get = function(key, id) {
        if (map[key] === undefined) map[key] = {};
        return (map[key][id] === undefined) ? null : map[key][id];
    };
    
    this.set = function(key, id, obj) {
        if (map[key] === undefined) map[key] = {};
        map[key][id] = obj;
    };
    
    this.clear = function(key) {
        map[key] = {};
    };
    
    this.clearAll = function() {
        map = {};
    };
};

aoLib.IdentityMap = new aoLib.IdentityMapObject();

// Datepicker and Bootstrap Modal Window Bug
jQuery.fn.modal.Constructor.prototype.enforceFocus = function() {};

jQuery.fn.extend({
    insertAtCaret: function(myValue){
      return this.each(function(i) {
        if (document.selection) {
          //For browsers like Internet Explorer
          this.focus();
          var sel = document.selection.createRange();
          sel.text = myValue;
          this.focus();
        }
        else if (this.selectionStart || this.selectionStart === '0') {
          //For browsers like Firefox and Webkit based
          var startPos = this.selectionStart;
          var endPos = this.selectionEnd;
          var scrollTop = this.scrollTop;
          this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
          this.focus();
          this.selectionStart = startPos + myValue.length;
          this.selectionEnd = startPos + myValue.length;
          this.scrollTop = scrollTop;
        } else {
          this.value += myValue;
          this.focus();
        }
      });
    }
});

aoLib.getScrollbarWidth = function() {
    if (typeof aoLib.getScrollbarWidth.result === 'undefined') {
        var elem = jQuery('<div/>', {style: 'width:100px;height:100px;top:-1000px;position:absolute;z-index:-1000;overflow:scroll;'});
        jQuery('body').append(jQuery(elem));
        var scrollbarWidth = jQuery(elem)[0].offsetWidth - jQuery(elem)[0].clientWidth;
        aoLib.getScrollbarWidth.result = scrollbarWidth;
        jQuery(elem).remove();
    }
    return aoLib.getScrollbarWidth.result;
};

aoLib.shortenNames = function() {
    $('.shortenName').each(function() {
        var textEllipsis = $(this).hasClass('textEllipsis');
        if (textEllipsis) $(this).removeClass('textEllipsis');
        
        var name = $(this).attr('title') || $(this).text();
        var wrapper = $('<span/>').text(name);
        $(this).empty().attr('title', name).append($(wrapper));
        var outerWidth = $(this).width();
        var innerWidth = $(wrapper).width();
        
        if (outerWidth + 2 < innerWidth) {        
            var names = name.split(' ');
            var newName = '';
            var wordCount = names.length;
            for (var i = 0; i < wordCount; i++) {
                if (i) newName += ' ';
                if (i + 1 === wordCount || names[i].length <= 3 || $.isNumeric(names[i])) newName += names[i];
                else {
                    var splittedWord = names[i].split('-');
                    var splittedWordCount = splittedWord.length;
                    for (var j = 0; j < splittedWordCount; j++) {
                        if (j) newName += '-';
                        newName += splittedWord[j][0];
                    }
                    newName += '.';
                }
            }
            $(wrapper).text(newName);
        }
        if (textEllipsis) $(this).addClass('textEllipsis');
    });
};

aoLib.copyToClipboard = function(elem) {
    var tmpElem = $('<textarea/>', {style: 'left:-9999px;position:fixed;'});
    
    $('body').append(tmpElem);
    $('textarea').text($(elem).text()).select();
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    tmpElem.remove();
    
    return succeed;
};

aoLib.shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// window.fd.logging = false;
jQuery(function() {    
    jQuery(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    
    if ($('#sponsorslider').length && typeof sliderImageItems !== 'undefined' && jQuery.isArray(sliderImageItems)) {
        var wrapper = $('#sponsorslider');
        aoLib.sliderImages = {
            container: $(wrapper),
            sliderImageItems: aoLib.shuffle(sliderImageItems),
            amount: parseInt($(wrapper).data('images')),
            pos: 0,
            posArr: aoLib.shuffle(['top', 'right', 'bottom', 'left'])
        };
        
        for (var i = 0; i < aoLib.sliderImages.amount; i++) {
            var elem = $('<div/>', {class: 'sponsorsliderlogo'}).css({width: Math.floor(100 / aoLib.sliderImages.amount) + '%'}).append(
                $('<div/>', {class: 'sponsorsliderlogowrapper'}).append(
                    $('<div/>', {class: 'sponsorsliderlogoinnerwrapper'}).append(
                        $('<img/>', {src: aoLib.sliderImages.sliderImageItems[aoLib.sliderImages.pos++]})
                    )
                )
            );
            aoLib.sliderImages.container.append(elem);
        }
        
        window.setInterval(function() {
            var posArrPos = aoLib.sliderImages.pos % aoLib.sliderImages.posArr.length;
            var elemPos = aoLib.sliderImages.pos % aoLib.sliderImages.amount;
            var imagePos = aoLib.sliderImages.pos % aoLib.sliderImages.sliderImageItems.length;
            var wrapper = $('.sponsorsliderlogo:nth-child(' + (elemPos + 1) + ') .sponsorsliderlogowrapper', aoLib.sliderImages.container);
            var tmpElem = $('.sponsorsliderlogoinnerwrapper', wrapper);
            var newElem = $('<div/>', {class: 'sponsorsliderlogoinnerwrapper'}).append(
                $('<img/>', {src: aoLib.sliderImages.sliderImageItems[imagePos]})
            ).css({opacity: 0}).css(aoLib.sliderImages.posArr[posArrPos], '100%');            
            $(wrapper).append(newElem);
            $(newElem).animate({opacity: 1, left: '0%', top: '0%', bottom: '0%', right: '0%'}, 500, function() {
                $(tmpElem).remove();
            });
            aoLib.sliderImages.pos++;
        }, 1750);
    }
});