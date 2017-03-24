jQuery(function ($) {

$( window ).resize(function() {
    $(".kull-slider a.soliloquy-prev").attr( "tabindex","2" );
    $(".kull-slider a.soliloquy-next").attr( "tabindex","1" );
    $(".kull-slider a.soliloquy-pager-link").attr( "tabindex","-1" );
});
	
$(document).ready(function() {
	
    if ($('body').css('direction') == "rtl") {       
       if ($('html' ).attr('lang') == 'ar')
       		$('body').attr('lang', 'ar');
       else
       	  $('body').attr('lang', 'he');     
    } else {
        $('body').attr('lang', 'en');
    }
    if ($('body').css('direction') == 'rtl') {
        if ($('html' ).attr('lang') == 'ar')
        	$("div.site-inner").prepend('<div id="colorAndFontsButtons" class="site" dir="rtl"><h5 class="accessibleMenu">امكانية الوصول / الاتاحة:</h5><fieldset><h6 class="legend">تغيير حجم النص</h6><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/bigText.png" id="biggerFont" class="bigger"  alt="انقر لتكبير النص" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/normalText.png" id="resetFont" class="reset"  alt="انقر لإعادة تعيين حجم النص" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/smallText.png" id="smallerFont" class="smaller" alt="انقر لتصغير النص" /></fieldset><fieldset><h6 class="legend">تغيير الألوان</h6><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/BrightColor.png" id="white"  alt="تغيير لون الخلفية إلى فاتح" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/defualtColor.png" id="nornal" alt="החזר את צבעי האתר לבררת המחדל" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/darkColor.png" id="black"  alt="تغيير لون الخلفية إلى غامق" /></fieldset></div>');
        else	
        	$("div.site-inner").prepend('<div id="colorAndFontsButtons" class="site" dir="rtl"><h5 class="accessibleMenu">נגישות:</h5><fieldset><h6 class="legend">שינוי גודל טקסט</h6><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/bigText.png" id="biggerFont" class="bigger"  alt="לחץ להגדלת הטקסט" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/normalText.png" id="resetFont" class="reset"  alt="לחץ לאיפוס גודל הטקסט" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/smallText.png" id="smallerFont" class="smaller" alt="לחץ כדי להקטין את הטקסט" /></fieldset><fieldset><h6 class="legend">שינוי צבעים</h6><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/BrightColor.png" id="white"  alt="שנה צבע רקע לבהיר" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/defualtColor.png" id="nornal" alt="החזר את צבעי האתר לבררת המחדל" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/darkColor.png" id="black"  alt="שנה צבע רקע לכהה" /></fieldset></div>');
    
    } else {
        $("div.site-inner").prepend('<div id="colorAndFontsButtons" class="site"><input type="image" id="biggerFont" class="bigger" src="http://umelfahem.org.il/wp-content/themes/x-child/images/bigText.png" alt="Click here to enlarge text" title=""/><input type="image" id="resetFont" class="reset" src="http://umelfahem.org.il/wp-content/themes/x-child/images/normalText.png" alt="Click to Reset text size" title=""/><input type="image" id="smallerFont" class="smaller" src="http://umelfahem.org.il/wp-content/themes/x-child/images/smallText.png"  alt="Click to decrease the text" title=""/><input type="image" id="white" src="http://umelfahem.org.il/wp-content/themes/x-child/images/BrightColor.png"  alt="Change background color to bright colors" title=""/><input type="image" id="nornal" src="http://umelfahem.org.il/wp-content/themes/x-child/images/defualtColor.png"  alt="Replace to the original colors" title="" /><input type="image" src="http://umelfahem.org.il/wp-content/themes/x-child/images/darkColor.png" id="black" alt="Change background color to dark colors" title="" /></div>');
    }
   
   
   
    if ($('body').css('direction') == 'rtl') {
        $('#colorAndFontsButtons').css({
            //'left': '572px'
            'text-align':'left'
        });
    } else {
        $('#colorAndFontsButtons').css('right', '50%');
    }
    
    //unique for umelphahem site:   
    
    $(".kull-slider a.soliloquy-prev").attr( "tabindex","2" );
    $(".kull-slider a.soliloquy-next").attr( "tabindex","1" );
    $(".kull-slider a.soliloquy-pager-link").attr( "tabindex","-1" );

    
    console.log($(".kull-slider a.soliloquy-next").attr( "tabindex" ));
    
    allElmWithBGImages = [];
    allbackgroundImages = [];
    var l = getCookies("changeBackgroundColor");
    if (l == "black") {
        blackBackgroung();
    }
    if (l == "white") {
        whiteBackground();
    }
    $("#white").click(function() {
        whiteBackground();
    });
    $("#nornal").click(function() {
        defaultBackground();
    });
    $("#black").click(function() {
        blackBackgroung();
    });
    $("#resetFont").click(function() {
        changeFontSize(0);
    });
    $("#biggerFont").click(function() {
        changeFontSize(1);
    });
    $("#smallerFont").click(function() {
        changeFontSize(-1);
    });
    var a = getCookies("fontSizes");
    if (a.length == 2) {
        $("*").each(function() {
            var b = $(this).get(0).nodeName;
            if (b == "TD" || b == "TR" || b == "TBODY" || b == "TABLE" || b == "td" || b == "tr" || b == "tbody" || b == "table")
            {} else 
            {
                var c = parseFloat($(this).css("font-size"));
                $(this).css("font-size", a + "px");
            }
        });
    }

    function getCookies(a) {
        var b = a + "=";
        var d = document.cookie.split(";");
        for (var i = 0; i < d.length; i++) {
            var c = d[i];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(b) != -1) return c.substring(b.length, c.length);
        }
        return "";
    }

    function changeFontSize(d) {
        if (d == 0) {
            $("*").each(function() {
                var a = parseFloat($(this).css("font"));
                $(this).css("font-size", "");
            });
            var e = new Date;
            e.setFullYear(e.getFullYear() + 1);
            document.cookie = "fontSizes=" + 13 + ";expires=" + e.toGMTString() + ";";
        } else {
            $("*").each(function() {
                var a = $(this).get(0).nodeName;
                if (a != "TD" && a != "TR" && a != "TBODY" && a != "TABLE") {
                    var b = parseFloat($(this).css("font-size"));
                    NewElmFontSize = d + (b);
                    if (NewElmFontSize >= 20) {
                        NewElmFontSize = 20;
                    }
                    if (NewElmFontSize <= 11) {
                        NewElmFontSize = 11;
                    }
                    $(this).css("font-size", NewElmFontSize + "px");
                    var c = new Date;
                    c.setFullYear(c.getFullYear() + 1);
                    document.cookie = "fontSizes=" + NewElmFontSize + ";expires=" + c.toGMTString() + ";";
                }
            });
        }
    }

    function whiteBackground() {
        $("*").each(function() {
            if ($(this).hasClass("borderBlack")) {
                $(this).removeClass("borderBlack");
                var a = this.style.cssText;
                var b = a.replace("border-color: rgb(255, 255, 0) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("backgroungBlack")) {
                $(this).removeClass("backgroungBlack");
                var a = this.style.cssText;
                var b = a.replace("background-color: rgb(255, 255, 0) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("colorBlack")) {
                $(this).removeClass("colorBlack");
                var a = this.style.cssText;
                var b = a.replace("color: rgb(255, 255, 0) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("outlineBlack")) {
                $(this).removeClass("outlineBlack");
                var a = this.style.cssText;
                var b = a.replace("outline-color: yellow ! important", "");
                this.style.cssText = b;
            }
        });
        var k = new Date;
        k.setFullYear(k.getFullYear() + 1);
        document.cookie = "changeBackgroundColor=white;expires=" + k.toGMTString() + ";";
        $("a").each(function() {
            $(this).addClass("colorWhite");
        });
        $("body *").each(function() {
            if (!$(c).is("script") && !$(c).is("style") && !$(c).is("br") && !$(c).is("iframe") && !$(c).is("html")) {
                var c = $(this);
                var d = $(this).css("background-color");
                var e = $(this).css("color");
                var f = $(this).css("outline-color");
                var g = $(this).css('background-image');
                var h = (c[0].textContent);
                var i = $(this).attr("class");
                if (i == undefined) {
                    i = "";
                } else {
                    i += " ";
                }
                if (d != "transparent") {
                    $(this).addClass(i + "backgroungWhite");
                    $("body").addClass("backgroungWhite");
                    var j = this.style.cssText;
                    this.style.cssText = j + " background-color:#fff !important";
                }
                if (h.trim() != '') {
                    var i = $(this).attr("class");
                    if (i == undefined) {
                        i = "";
                    } else {
                        i += " ";
                    }
                    $(this).addClass(i + "colorWhite");
                    if (g != 'none' && !$(c).is("input[type='button']") && !$(c).is("input[type='submit']")) {
                        allElmWithBGImages.push(this);
                        allbackgroundImages.push($(this).css('background-image'));
                        $(this).css('background-image', 'none');
                    }
                    var j = this.style.cssText;
                    this.style.cssText = j + "color:#000 !important";
                }
                $.fn.hasBorder = function() {
                    if ((this.outerWidth() - this.innerWidth() > 0) || (this.outerHeight() - this.innerHeight() > 0)) {
                        return true;
                    } else {
                        return false;
                    }
                };
                if ($(this).hasBorder()) {
                    var i = $(this).attr("class");
                    if (i == undefined) {
                        i = "";
                    } else {
                        i += " ";
                    }
                    $(this).addClass(i + "borderWhite");
                    var j = this.style.cssText;
                    this.style.cssText = j + "border-color:#000 !important";
                }
                
                $(this).focus(function() {
                    if (f != "transparent") {
                        var a = $(this).attr("class");
                        if (a == undefined) {
                            a = "";
                        } else {
                            a += " ";
                        }
                        $(this).addClass(a + "outlineWhite");
                    }
                });
                
                $(this).blur(function() {
                    if (f != "transparent") {
                        $(this).removeClass("outlineWhite");
                        var a = this.style.cssText;
                        if (a.indexOf("outline-color: rgb(0, 0, 0) ! important") != -1) {
                            var b = a.replace("outline-color: rgb(0, 0, 0) ! important", "");
                        } else {
                            var b = a.replace("outline-color: rgb(0, 0, 0) !important", "");
                        }
                        this.style.cssText = b;
                    }
                });
            }
        });
    }

    function getCookies(a) {
        var b = a + "=";
        var d = document.cookie.split(";");
        for (var i = 0; i < d.length; i++) {
            var c = d[i];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(b) != -1) return c.substring(b.length, c.length);
        }
        return "";
    }

    function blackBackgroung() {
        $("a").removeClass("colorBlack");
        $("*").each(function() {
            if ($(this).hasClass("borderWhite")) {
                $(this).removeClass("borderWhite");
                var a = this.style.cssText;
                var b = a.replace("border-color: rgb(0, 0, 0) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("backgroungWhite")) {
                $(this).removeClass("backgroungWhite");
                var a = this.style.cssText;
                var b = a.replace("background-color: rgb(255, 255, 255) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("colorWhite")) {
                $(this).removeClass("colorWhite");
                var a = this.style.cssText;
                var b = a.replace("color: rgb(0, 0, 0) ! important", "");
                this.style.cssText = b;
            }
            if ($(this).hasClass("outlineWhite")) {
                $(this).removeClass("outlineWhite");
                var a = this.style.cssText;
                var b = a.replace("outline-color: rgb(0, 0, 0) ! important", "");
                this.style.cssText = b;
            }
        });
        var k = new Date;
        k.setFullYear(k.getFullYear() + 1);
        document.cookie = "changeBackgroundColor=black;expires=" + k.toGMTString() + ";";
        $('body *').each(function() {
            var c = $(this);
            if (!$(c).is("script") && !$(c).is("style") && !$(c).is("br") && !$(c).is("iframe") && !$(c).is("html")) {
                var d = $(this).css("background-color");
                var e = $(this).css("color");
                var f = $(this).css("outline-color");
                var g = $(this).css('background-image');
                var h = (c[0].textContent);
                var i = $(this).attr("class");
                if (i == undefined) {
                    i = "";
                } else {
                    i += " ";
                }
                if (d != "transparent") {
                    $(this).addClass(i + "backgroungBlack");
                    $("body").addClass("backgroungBlack");
                    var j = this.style.cssText;
                    this.style.cssText = j + "background-color:#000 !important";
                }
                if (g != 'none' && !$(c).is("input[type='button']") && !$(c).is("input[type='submit']")) {
                    allElmWithBGImages.push(this);
                    allbackgroundImages.push($(this).css('background-image'));
                    $(this).css('background-image', 'none');
                }
                if (h.trim() != '') {
                    var i = $(this).attr("class");
                    if (i == undefined) {
                        i = "";
                    } else {
                        i += " ";
                    }
                    $(this).addClass(i + "colorBlack");
                    var j = this.style.cssText;
                    this.style.cssText = j + "color: yellow  !important";
                }
                $.fn.hasBorder = function() {
                    if ((this.outerWidth() - this.innerWidth() > 0) || (this.outerHeight() - this.innerHeight() > 0)) {
                        return true;
                    } else {
                        return false;
                    }
                };
                if ($(this).hasBorder()) {
                    var i = $(this).attr("class");
                    if (i == undefined) {
                        i = "";
                    } else {
                        i += " ";
                    }
                    $(this).addClass(i + "borderBlack");
                    var j = this.style.cssText;
                    this.style.cssText = j + "border-color: yellow !important";
                }
                $(this).focus(function() {
                    if (f != "transparent") {
                        var a = $(this).attr("class");
                        if (a == undefined) {
                            a = "";
                        } else {
                            a += " ";
                        }
                        $(this).addClass(a + "outlineBlack");
                        var b = this.style.cssText;
                        this.style.cssText = b + "outline-color: yellow !important";
                    }
                });
                $(this).blur(function() {
                    if (f != "transparent") {
                        $(this).removeClass("outlineBlack");
                        var a = this.style.cssText;
                        if (a.indexOf("outline-color: yellow ! important") != -1) {
                            var b = a.replace("outline-color: yellow ! important", "");
                        } else {
                            var b = a.replace("outline-color: yellow !important", "");
                        }
                        this.style.cssText = b;
                    };
                });
            }
        });
    }

    function defaultBackground() {
        document.cookie = "changeBackgroundColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        $("*").each(function() {
            if ($(this).hasClass("borderBlack")) {
                $(this).removeClass("borderBlack");
                var a = this.style.cssText;
                if (a.indexOf("border-color: yellow ! important") != -1) {
                    var b = a.replace("border-color: yellow ! important", "");
                } else {
                    var b = a.replace("border-color: yellow !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("backgroungBlack")) {
                $(this).removeClass("backgroungBlack");
                var a = this.style.cssText;
                if (a.indexOf("background-color: rgb(0, 0, 0) ! important") != -1) {
                    var b = a.replace("background-color: rgb(0, 0, 0) ! important", "");
                } else {
                    var b = a.replace("background-color: rgb(0, 0, 0) !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("colorBlack")) {
                $(this).removeClass("colorBlack");
                var a = this.style.cssText;
                if (a.indexOf("color: yellow ! important") != -1) {
                    var b = a.replace("color: yellow ! important", "");
                } else {
                    var b = a.replace("color: yellow !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("outlineBlack")) {
                $(this).removeClass("outlineBlack");
                var a = this.style.cssText;
                if (a.indexOf("outline-color: yellow ! important") != -1) {
                    var b = a.replace("outline-color: yellow ! important", "");
                } else {
                    var b = a.replace("outline-color: yellow !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("borderWhite")) {
                $(this).removeClass("borderWhite");
                var a = this.style.cssText;
                if (a.indexOf("border-color: rgb(0, 0, 0) ! important") != -1) {
                    var b = a.replace("border-color: rgb(0, 0, 0) ! important", "");
                } else {
                    var b = a.replace("border-color: rgb(0, 0, 0) !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("backgroungWhite")) {
                $(this).removeClass("backgroungWhite");
                var a = this.style.cssText;
                if (a.indexOf("background-color: rgb(255, 255, 255) ! important") != -1) {
                    var b = a.replace("background-color: rgb(255, 255, 255) ! important", "");
                } else {
                    var b = a.replace("background-color: rgb(255, 255, 255) !important", "");
                }
                this.style.cssText = b;
            }
            if ($(this).hasClass("colorWhite")) {
                $(this).removeClass("colorWhite");
                var a = this.style.cssText;
                if (a.indexOf("color: rgb(0, 0, 0) ! important") != -1) {
                    var b = a.replace("color: rgb(0, 0, 0) ! important", "");
                } else {
                    var b = a.replace("color: rgb(0, 0, 0) !important", "");
                }
                this.style.cssText = b;;
            }
            if ($(this).hasClass("outlineWhite")) {
                $(this).removeClass("outlineWhite");
                var a = this.style.cssText;
                if (a.indexOf("outline-color: rgb(0, 0, 0) ! important") != -1) {
                    var b = a.replace("outline-color: rgb(0, 0, 0) ! important", "");
                } else {
                    var b = a.replace("outline-color: rgb(0, 0, 0) !important", "");
                }
                this.style.cssText = b;
            }
        });
        $(allElmWithBGImages).each(function(i) {
            $(this).css('background-image', allbackgroundImages[i]);
        });
    }

    function isTextNode(a) {
        return a.nodeType == 3;
    }
    $('input').each(function() {
        var a = $(this).attr('type');
        if (a === undefined) {
            $(this).attr('type', 'text');
        }
    });
    $('input[type="text"],input[type="password"],textarea').each(function() {
        var a = $(this);
        var b = $(this).prevAll();
        var c = checkForText(b);
        if (c == "") {
            b = $(a).parent().prevAll();
            c = checkForText(b);
            if (c == "") {
                b = $(a).parent().parent().prevAll();
                c = checkForText(b);
            }
        }
        c = c.trim();
        var d = $(a).attr('title');
        if (d !== undefined) {
            $(a).attr('title', d + c);
        } else {
            $(a).attr('title', c);
        }
    });

    function checkForText(a) {
        var b = "";
        for (var i = 0; i < a.length; i++) {
            b = $(a[i]).text();
            if (b.trim() != "") {
                break;
            }
        }
        return b;
    }
    
    $("select").each(function() {
        var b = $(this).val().toString() + ",";
        var c = "";
        $(this).children().each(function() {
            var a = $(this).val() + ",";
            $(this).attr("area-selected", b.indexOf(a) != -1);
        });
    });
    $("select").change(function() {
        var b = $(this).val().toString() + ",";
        var c = "";
        $(this).children().each(function() {
            var a = $(this).val() + ",";
            $(this).attr("area-selected", b.indexOf(a) != -1);
        });
    });
    $("input[type=range]").each(function() {
        var a = $(this).attr("id");
        var b = $(this).attr("min");
        var c = $(this).attr("max");
        var d = (" (min is: " + b + ", max is: " + c + ")");
        $("label[for= ' " + a + " ' ]").append(d);
        $(this).attr("aria-valuemin", b);
        $(this).attr("aria-valuemax", c);
        $(this).attr("role", "slider");
    });
    $("[type=range]").change(function() {
        var a = $(this).val();
        $(this).attr("aria-valuenow", a);
        if ($("#corruentValue").length) {
            $("#corruentValue").remove();
        }
        $(this).after("<span id='corruentValue'>the corruent value is: " + a + "</span>");
    });
    $("[type=radio],[type=checkbox]").each(function() {
        var a = $(this).attr("name");
        var b = 'input[name="' + a + ' "] ';
        $(b).each(function() {
            if ($(this).is(":checked")) {
                $(this).attr("aria-checked", "true");
            } else {
                $(this).attr("aria-checked", "false");
            }
        });
    });
    $("[type=radio]").change(function() {
        var a = $(this).attr("name");
        $("input[name='" + a + "']").each(function() {
            if ($(this).is(":checked")) {
                $(this).attr("aria-checked", "true");
            } else {
                $(this).attr("aria-checked", "false");
            }
        });
    });
    $("[type=checkbox]").change(function() {
        var a = $(this).attr("name");
        $("input[name='" + a + "']").each(function() {
            if ($(this).is(":checked")) {
                $(this).attr("aria-checked", "true");
            } else {
                $(this).attr("aria-checked", "false");
            }
        });
    });
    $("select").each(function() {
        if ($(this).attr("multiple") != undefined) {
            $(this).attr({
                "role": "listbox",
                "aria-multiselecttable": "true"
            });
        } else {
            $(this).attr({
                "role": "listbox",
                "aria-multiselecttable": "false"
            });
        }
    });
    $("textarea").each(function() {
        if ($(this).attr("aria-multiline") == undefined) {
            $(this).attr("aria-multiline", "true");
        }
    });
    $("[type=tel],[type=text],[type=url],[type=search],[type=password],[type=email]").each(function() {
        $(this).attr("role", "textbox");
    });
    $("[type=submit],[type=button]").each(function() {
        $(this).attr("role", "button");
    });
    $("[required='required']").each(function() {
        if ($(this).attr("aria-required") == undefined) {
            $(this).attr("aria-required", "true");
        }
    });
    $("[disabled]").each(function() {
        $(this).attr("aria-readonly", "true");
    });
    
    var m = "he";
    var n = $("html").attr("lang");
    
    if (n == undefined || n == "") {
        n = $("body").css("direction");
        if (n == "rtl") {
            n = m;
        } else {
            n = "en";
        }
    }
    
    $("body").append('<p id="inputBoard"></p>');
    $('[type="text"],textarea').each(function() {
        var e = $(this).attr("id");
        var f = $('label[for="' + e + '"]').text();
        if (f == "" || f.length <= 0) {
            f = $(this).attr('title');
        }
        if (n == "he" || n == "he-il") {
            var g = " הקלדת בתוך השדה <strong>'";
            var h = "'</strong> את הטקסט:  <span style='text-decoration:underline'>";
        }
        if (n == "en") {
            var g = "you type inside <strong>'";
            var h = "'</strong> this text: <span style='text-decoration:underline'>";
        }
        $(this).focus(function(a) {
            var b = $(this).val();
            if (b == "") {
                $("#inputBoard").empty();
            } else {
                var c = $(this);
                Magnifier_For_Input_position_by_language(n, c);
                var d = g + f + h + $(this).val() + "</span>";
                $("#inputBoard").css({
                    "border": "2px solid #000",
                    "position": "absolute",
                    "padding": "5px",
                    "background-color": "#fff"
                }).html(d);
            }
        });
        $(this).blur(function() {
            $("#inputBoard").empty().css({
                "border": "none",
                "position": "absolute",
                "padding": "0",
                "background-color": "#fff"
            });
        });
        $(this).keyup(function(a) {
            var b = $(this);
            Magnifier_For_Input_position_by_language(n, b);
            var c = g + f + h + $(this).val() + "</span>";
            $("#inputBoard").css({
                "border": "2px solid #000",
                "position": "absolute",
                "padding": "5px",
                "background-color": "#fff"
            }).html(c);
        });
    });

    function Magnifier_For_Input_position_by_language(a, b) {
        if (a == "en") {
            var c = $(b).offset();
            var d = $(b).css("width");
            var e = parseInt(c.left) + parseInt(d);
            var f = parseInt($(document).width());
            if (f < (e + 300)) {
                e = (e - parseInt(d) - 300);
            }
            $("#inputBoard").css({
                "left": e,
                "top": parseInt(c.top) + parseInt($(b).css("height") + 5)
            });
        }
        if (a == "he" || a == "he-il" || a == "ar") {
            var c = $(b).offset();
            var d = $(b).css("width");
            var e = parseInt(c.left) - $(b).outerWidth();
            var f = parseInt($(document).width());
            if (0 > (e)) {
                e = (e + 300);
            }
            $("#inputBoard").css({
                "left": e,
                "top": parseInt(c.top) + parseInt($(b).css("height") + 5)
            });
        }
    }

    function getButtonsColorFont() {
        var a = $("#accessibleToolsBar button, #accessibleToolsBar a");
        $(a).last().focusout().keydown(function(e) {
            if (e.keyCode == 9) {
                $("#accessibleToolsBar").slideUp("slow");
            }
        });
    }
    
    $('a[target="_blank"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",נפתח בחלון חדש").attr('rel', 'external');
            } else {
                $(this).attr('title', " נפתח בחלון חדש").attr('rel', 'external');
            }
        }
    });
    $('a[href*=".pdf"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", מסמך PDF להורדה או צפייה  ");
            } else {
                $(this).attr('title', " מסמך PDF להורדה או צפייה  ");
            }
        }
    });
    $('a[href*=".txt"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", מסמך מסוג TXT להורדה   ").attr("download", "download");
            } else {
                $(this).attr('title', "מסמך מסוג TXT להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".doc"],a[href*=".docx"],a[href*=".odt"],a[href*=".wps"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", מסמך  וורד להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "מסמך  וורד להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".xlsx"],a[href*=".ods"],a[href*=".xls"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", מסמך  אקסל להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "מסמך  אקסל להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".ppt"],a[href*=".pptx"],a[href*=".pptm"],a[href*=".pps"],a[href*=".ppsx"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", מסמך  מצגת להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "מסמך  מצגת להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".png"],a[href*=".jpg"],a[href*=".bmp"],a[href*=".gif"],a[href*=".jpeg"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", תמונה להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "תמונה להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".indd"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", קובץ InDesign להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ InDesign להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".ai"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", קובץ Illustrator להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ Illustrator להורדה").attr("download", "download");
            }
        }
    });
    $('a[href*=".psd"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ", קובץ פוטושופ להורדה").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ פוטושופ להורדה").attr("download", "download");
            }
        }
    });
    $('a[href*=".zip"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג zip להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג zip להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".rar"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג rar להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג rar להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".jar"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג jar להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג jar להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".iso"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג iso להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג iso להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".dmg"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג dmg להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג dmg להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".7z"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג zip להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג zip להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".gz"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג gz להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג gz להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".ace"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג ace להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג ace להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".cab"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג cab להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג cab להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".vcd"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ מקובץ מסוג vcd להורדה ").attr("download", "download");
            } else {
                $(this).attr('title', " קובץ מקובץ מסוג vcd להורדה ").attr("download", "download");
            }
        }
    });
    $('a[href*=".exe"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ ישום להורדה").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ ישום להורדה").attr("download", "download");
            }
        }
    });
    $('a[href*=".ogg"],a[href*=".m4v"],a[href*=".divx"],a[href*=".mpeg"],a[href*=".m4a"],a[href*=".mp4"],a[href*=".mov"],a[href*=".mpg"],a[href*=".avi"],a[href*=".wmv"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ וידאו להורדה").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ וידאו להורדה").attr("download", "download");
            }
        }
    });
    $('a[href*=".amr"],a[href*=".mp2"],a[href*=".ram"],a[href*=".aiff"],a[href*=".aif"],a[href*=".wma"],a[href*=".wav"],a[href*=".m4v"]').each(function() {
        var a = $(this).attr('title');
        if (a !== undefined) {
            if ($(this).attr('title').length >= 1) {
                var b = $(this).attr('title');
                $(this).attr('title', b + ",  קובץ שמע להורדה").attr("download", "download");
            } else {
                $(this).attr('title', "קובץ שמע להורדה").attr("download", "download");
            }
        }
    });
    $('a').focus(function() {
        var a = $(this).children();
        if (a.length != 0) {
            $(this).css({
                "border": "0",
                "outline": "0"
            });
            $(a).css({
                "border": "0",
                "outline": "1px solid #000"
            });
        }
    });
    $('a').blur(function() {
        var a = $(this).children();
        if (a.length != 0) {
            $(this).css({
                "border": "",
                "outline": ""
            });
            $(a).css({
                "border": "",
                "outline": ""
            });
        }
    });
    $("img").each(function() {
        if ($(this).attr("alt") == "undefined") {
            $(this).attr("alt", "");
        }
        if ($(this).attr("alt") == undefined) {
            $(this).attr("alt", "");
        }
        var a = $(this).attr('alt');
        var b = a.length;
        if (b > 100) {
            $(this).attr("aria-label", a);
            $(this).attr('alt', "");
        }
    });
    $('table').attr('role', 'presentation');
    $('#content_mod').attr('role', 'main');
    $('form').attr('role', 'form');
    $('').attr('role', 'search');
    $('').attr('role', 'complementary');
    $('').attr('role', 'complementary');
    $('').attr('role', 'complementary');
    $('').attr('role', 'complementary');
    $('').attr('aria-autocomplete', 'none');
    if ($("#myDiv").length) {
        $("#myDiv").show();
    }
    $("#menu").prepend('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink0" href="#skipLink1" tabindex="0" >הגעת לתפריט הראשי , לחץ אינטר כדי לעבור לאזור הבא</a></h5>');
    $('#body').before('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink1" href="#skipLink2" tabindex="0" >הגעת לתוכן הראשי , לחץ אינטר כדי לעבור לאזור הבא</a></h5>');
    $(".sidebar").prepend('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink2" href="#skipLink3" tabindex="0" >הגעת לארכיון , לחץ אינטר כדי לחזור לראש הדף</a></h5>');
    $('.paging').prepend('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink3" href="#skipLink4" tabindex="0" >הגעת לניווט בתוצאות חיפוש לפי מספרי עמודים , לחץ אינטר כדי לעבור לאזור הבא</a></h5>');
    $("#footer").prepend('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink4" href="#skipLink5" tabindex="0" >הגעת kpuyr, לחץ אינטר כדי לעבור לאזור הבא</a></h5>');
    $("body").append('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink5" href="#firstLink" tabindex="0" >הגעת לסוף דף האינטרנט , לחץ אינטר כדי לחזור לראש הדף</a></h5>');
    $(".skipArea").click(function() {
        var a = $(".skipArea");
        var b = $(a).index(this);
        var c = b + 1;
        if (c == a.length) {
            c = 0;
        }
        var d = $(this).parent().parent().css("width");
        $(a[c]).css("width", (d)).focus();
    });
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
            if (a.length) {
                $("html,body").animate({
                    scrollTop: a.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $("body").prepend('<h5 class="areaHeading"><a id="firstLink" class="skipToMainContent" name="skipLink99" href="#skipLink1" tabindex="0" >תחילת דף אינטרנט, לחץ אינטר כדי לעבור לאזור התוכן המרכזי </a></h5>');
    $(".skipToMainContent").click(function() {
        var a = $('[role="main"]');
        if ($('[name="skipLink2"]').length == 1) {
            $('[name="skipLink2"]').focus();
        } else {
            $(a).focus();
        }
    });
    $('img[onclick^="location"]').each(function() {
        $(this).attr({
            'role': 'link',
            'tabindex': '0'
        }).parent().attr('role', 'application');
    });
    $('img[onclick^=" window.open"]').each(function() {
        $(this).attr({
            'role': 'link',
            'tabindex': '0'
        }).parent().attr('role', 'application');
    });
});
/*
$(document).ready(function() {
    $('#colorAndFontsButtons').prepend('<input type="image" id="btnMagnifyingGlassForText" src="http://umelfahem.org.il/wp-content/themes/x-child/images/MagnifyingGlassForText.png" title="לחץ להגדלת הטקסט בעזרת זכוכית מגדלת"  alt="Click to enlarge the text with a magnifying glass"/>');
    $('#btnMagnifyingGlassForText').click(function() {
        if ($(this).attr('title') == "לחץ להגדלת הטקסט בעזרת זכוכית מגדלת") {
            $('body').append('<div id="textMagnifyingGlass"></div>');
            $(this).attr({
                'src': 'http://umelfahem.org.il/wp-content/themes/x-child/images/MagnifyingGlassForText_disable.png'
            });
            $(this).attr('title', "לחץ לביטול להגדלת הטקסט בעזרת זכוכית מגדלת");
            runMagnifyingGlass()
        } else {
            $('#textMagnifyingGlass').remove();
            $(this).attr({
                'src': 'http://umelfahem.org.il/wp-content/themes/x-child/images/MagnifyingGlassForText.png'
            });
            $(this).attr('title', "לחץ להגדלת הטקסט בעזרת זכוכית מגדלת");
            jQuery('#textMagnifyingGlass span').css('dispaly', 'none');
            document.cookie = "textMagnifyingGlass=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
        }
    });
    var g = getCookies("textMagnifyingGlass");
    if (g == 'yes') {
        runMagnifyingGlass()
    }

    function runMagnifyingGlass() {
        var d = new Date;
        d.setFullYear(d.getFullYear() + 1);
        document.cookie = "textMagnifyingGlass=yes;expires=" + d.toGMTString() + ";";
        allElmWithText = $('a,h1,h2,h3,h4,h5,h6,li,p,td.title');
        $(allElmWithText).attr('tabindex', '0');
        var e = "he";
        var f = $("html").attr("lang");
        if (f == undefined || f == "") {
            f = $("body").css("direction");
            if (f == "rtl") {
                f = e
            } else {
                f = "en"
            }
        };
        $(allElmWithText).focus(function() {
            if ($(this).css('position') != "none" && $(this).css('opacity') != "0" && $(this).css('visibility') != "hidden" && $('#btnMagnifyingGlassForText').attr('title') == "לחץ לביטול להגדלת הטקסט בעזרת זכוכית מגדלת") {
                var a = $(this).text();
                var a = a.trim();
                if (a.length > 1 && a != "//") {
                    var b = $(this);
                    Magnifier_For_Input_position_by_language(f, b);
                    var c = "<span>" + a + "</span>";
                    $("#textMagnifyingGlass").css({
                        "border": "1px solid #000",
                        "position": "absolute",
                        "padding": "5px",
                        "background-color": "#fff"
                    }).html(c)
                }
            }
        });
        $(allElmWithText).blur(function() {
            $('#textMagnifyingGlass').css('dispaly', 'none')
        });
        $(allElmWithText).hover(function() {
            if ($(this).css('position') != "none" && $(this).css('opacity') != "0" && $(this).css('visibility') != "hidden" && $('#btnMagnifyingGlassForText').attr('title') == "לחץ לביטול להגדלת הטקסט בעזרת זכוכית מגדלת") {
                var a = $(this).text();
                var a = a.trim();
                if (a.length > 1 && a != "//") {
                    var b = $(this);
                    Magnifier_For_Input_position_by_language(f, b);
                    var c = "<span>" + a + "</span>";
                    $("#textMagnifyingGlass").css({
                        "border": "1px solid #000",
                        "position": "absolute",
                        "padding": "5px",
                        "background-color": "#fff"
                    }).html(c)
                }
            }
        }, function() {
            $('#textMagnifyingGlass').css('dispaly', 'none')
        })
    }
});
*/
function getCookies(a) {
    var b = a + "=";
    var d = document.cookie.split(";");
    for (var i = 0; i < d.length; i++) {
        var c = d[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(b) != -1) return c.substring(b.length, c.length);
    }
    return "";
}

function Magnifier_For_Input_position_by_language(a, b) {
    if (a == "en") {
        var c = $(b).offset();
        var d = $(b).css("width");
        var e = parseInt(c.left) + parseInt(d);
        var f = parseInt($(document).width());
        if (f < (e + 300)) {
            e = (e - parseInt(d) - 300);
        }
        $("#textMagnifyingGlass").css({
            "left": e,
            "top": parseInt(c.top) + parseInt($(b).css("height") + 5)
        });
    }
    if (a == "he" || a == "he-il") {
        var c = $(b).offset();
        var d = $(b).css("width");
        var e = parseInt(c.left) - (($(b).outerWidth()) / 2);
        var f = parseInt($(document).width());
        if (0 > (e)) {
            e = (e + 300);
        }
        $("#textMagnifyingGlass").css({
            "left": e,
            "top": parseInt(c.top) + (parseInt($(b).css("height")) + 5)
        });
    }
}
$(function() {
    var a = $('.top_storyTitle a');
    var b = $('.top_storyContinue a');
    $(b).each(function(i) {
        $(this).attr('title', $(a[i]).text());
    });
});
$(document).ready(function() {

    jQuery('.headingSkipArea').remove();
    jQuery('.areaHeading').remove();
    areaLInksNavigetion();

    function areaLInksNavigetion() {
        var language = "en";
        
       var skipArea = "You can press Enter to skip to the next area";
       var returnToTop = "End of a Web page, you can press Enter to return to top";
       var skipToMain = "The beginning of a web page, click to move to the main Content";
        
         if ($('html' ).attr('lang') == 'ar'){
         	language = "ar";
         	skipArea = "You can press Enter to skip to the next area";
       		returnToTop = "وصلت لنهاية الصفحة ، انقر enter  للرجوع لأعلى الصفحة";
       		skipToMain = "بداية الصفحة ، انقر enter  للانتقال الى المحتوى الرئيسي";
        	
         }else if($('html' ).attr('lang') == 'he'){
         	language = "he";
         	skipArea = "ניתן ללחוץ אנטר כדי לעבור לאזור הבא";
       		returnToTop = "געת לסוף דף האינטרנט , לחץ אינטר כדי לחזור לראש הדף";
       		skipToMain = "תחילת דף אינטרנט, לחץ אינטר כדי לעבור לאזור התוכן המרכזי";
         }
        
        
        
        
        var areaLinks = [];
        areaLinks[0] = {
            appand_to: jQuery('#menu'),
            href: jQuery(''),
            text_link: "You have reached the main menu"
        };
        areaLinks[1] = {
            appand_to: jQuery('#body > ul'),
            href: jQuery(''),
            text_link: "You have reached blog - View abstracts of articles "
        };
        areaLinks[2] = {
            appand_to: jQuery('.paging'),
            href: jQuery(''),
            text_link: "Navigating to previous pages "
        };
        areaLinks[3] = {
            appand_to: jQuery('#footer'),
            href: jQuery(''),
            text_link: "Credits and social networks"
        };
        areaLinks[4] = {
            appand_to: jQuery('.sidebar'),
            href: jQuery(''),
            text_link: "Archive Articles"
        };
        areaLinks[5] = {
            appand_to: jQuery('#contactUs'),
            href: jQuery(''),
            text_link: "Contact Form"
        };
        areaLinks[6] = {
            appand_to: jQuery('#colorAndFontsButtons'),
            href: jQuery(''),
            text_link: "accessibility ToolsBar"
        };
        areaLinks[7] = {
            appand_to: jQuery('main'),
            href: jQuery(''),
            text_link: "main content"
        };

        //if (language == "en") {
            for (var i = 0; i < areaLinks.length; i++) {
                if (jQuery(areaLinks[i].appand_to).length > 0) {
                    jQuery(areaLinks[i].appand_to).prepend('<h5 class="headingSkipArea"><a class="skipArea" name="skipLink' + i + '" href="#" tabindex="0" >' + areaLinks[i].text_link + '",<br />'+ skipAre +'</a></h5>');
                }
            }
            jQuery("body").append('<h5 class="areaHeading"><a id="lastLink" class="skipArea" name="lastLink" href="#firstLink" tabindex="0" >'+returnToTop+'</a></h5>');
            var mainContentContainerElm = "#body";
            jQuery("body").prepend('<h5 class="areaHeading"><a id="firstLink" class="skipToMainContent" name="firstLink" href="' + mainContentContainerElm + '" tabindex="0" >'+skipToMain+'</a></h5>');
            jQuery(mainContentContainerElm).attr({
                "role": "main"
            });
        
        jQuery(".skipToMainContent").click(function(event) {
            event.preventDefault();
            var elm = jQuery('[role="main"]');
            if (elm != undefined && elm.length == 1) {
                jQuery(elm).attr("tabindex", "0").focus();
            } else {
                var gotoElm = jQuery(this).attr("href");
                jQuery(gotoElm).attr("tabindex", "0").focus();
            }
        });

        jQuery(".skipArea").each(function(i) {
            var arr = jQuery(".skipArea");
            if ((arr.length - 1) == i) {
                jQuery(this).attr({
                    "href": "#firstLink",
                    "name": "skipLink" + i
                });
            } else {
                jQuery(this).attr({
                    "href": "#skipLink" + (i + 1),
                    "name": "skipLink" + i
                });
            }
        });

        jQuery(".skipArea").click(function(event) {
            event.preventDefault();
            nextLink = jQuery(this).attr("href");
            nextLink = nextLink.replace("#", "");
            jQuery('[name="' + nextLink + '"]').focus();
        });

        jQuery("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    jQuery("html,body").animate({
                        scrollTop: (target.offset().top)
                    }, 1000);
                    return false;
                }
            }
        });
    }

});
});