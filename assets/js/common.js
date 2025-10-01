// Placeholders
(function (e, t, n) { function c(e) { var t = {}; var r = /^jQuery\d+$/; n.each(e.attributes, function (e, n) { if (n.specified && !r.test(n.name)) { t[n.name] = n.value } }); return t } function h(e, t) { var r = this; var i = n(r); if (r.value == i.attr("placeholder") && i.hasClass("placeholder")) { if (i.data("placeholder-password")) { i = i.hide().next().show().attr("id", i.removeAttr("id").data("placeholder-id")); if (e === true) { return i[0].value = t } i.focus() } else { r.value = ""; i.removeClass("placeholder"); r == d() && r.select() } } } function p() { var e; var t = this; var r = n(t); var i = this.id; if (t.value == "") { if (t.type == "password") { if (!r.data("placeholder-textinput")) { try { e = r.clone().attr({ type: "text" }) } catch (s) { e = n("<input>").attr(n.extend(c(this), { type: "text" })) } e.removeAttr("name").data({ "placeholder-password": r, "placeholder-id": i }).bind("focus.placeholder", h); r.data({ "placeholder-textinput": e, "placeholder-id": i }).before(e) } r = r.removeAttr("id").hide().prev().attr("id", i).show() } r.addClass("placeholder"); r[0].value = r.attr("placeholder") } else { r.removeClass("placeholder") } } function d() { try { return t.activeElement } catch (e) { } } var r = Object.prototype.toString.call(e.operamini) == "[object OperaMini]"; var i = "placeholder" in t.createElement("input") && !r; var s = "placeholder" in t.createElement("textarea") && !r; var o = n.fn; var u = n.valHooks; var a = n.propHooks; var f; var l; if (i && s) { l = o.placeholder = function () { return this }; l.input = l.textarea = true } else { l = o.placeholder = function () { var e = this; e.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({ "focus.placeholder": h, "blur.placeholder": p }).data("placeholder-enabled", true).trigger("blur.placeholder"); return e }; l.input = i; l.textarea = s; f = { get: function (e) { var t = n(e); var r = t.data("placeholder-password"); if (r) { return r[0].value } return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value }, set: function (e, t) { var r = n(e); var i = r.data("placeholder-password"); if (i) { return i[0].value = t } if (!r.data("placeholder-enabled")) { return e.value = t } if (t == "") { e.value = t; if (e != d()) { p.call(e) } } else if (r.hasClass("placeholder")) { h.call(e, true, t) || (e.value = t) } else { e.value = t } return r } }; if (!i) { u.input = f; a.value = f } if (!s) { u.textarea = f; a.value = f } n(function () { n(t).delegate("form", "submit.placeholder", function () { var e = n(".placeholder", this).each(h); setTimeout(function () { e.each(p) }, 10) }) }); n(e).bind("beforeunload.placeholder", function () { n(".placeholder").each(function () { this.value = "" }) }) } })(this, document, jQuery)
// ClearForm
function clearForm(form) { $(':input', form).each(function () { var type = this.type; var tag = this.tagName.toLowerCase(); if (type == 'text' || type == 'password' || type == 'email' || type == 'file' || tag == 'textarea') $(this).val(''); else if (type == 'checkbox' || type == 'radio') this.checked = false; else if (tag == 'select') this.selectedIndex = -1; }); };
// MaskedInput
!function (a) { function b() { var a = document.createElement("input"), b = "onpaste"; return a.setAttribute(b, ""), "function" == typeof a[b] ? "paste" : "input" } var h, c = b() + ".mask", d = navigator.userAgent, e = /iphone/i.test(d), f = /chrome/i.test(d), g = /android/i.test(d); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (b, d) { var i, j, k, l, m, n; return !b && this.length > 0 ? (i = a(this[0]), i.data(a.mask.dataName)()) : (d = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, d), j = a.mask.definitions, k = [], l = n = b.length, m = null, a.each(b.split(""), function (a, b) { "?" == b ? (n-- , l = a) : j[b] ? (k.push(new RegExp(j[b])), null === m && (m = k.length - 1)) : k.push(null) }), this.trigger("unmask").each(function () { function r(a) { for (; ++a < n && !k[a];); return a } function s(a) { for (; --a >= 0 && !k[a];); return a } function t(a, b) { var c, e; if (!(0 > a)) { for (c = a, e = r(b); n > c; c++)if (k[c]) { if (!(n > e && k[c].test(o[e]))) break; o[c] = o[e], o[e] = d.placeholder, e = r(e) } z(), i.caret(Math.max(m, a)) } } function u(a) { var b, c, e, f; for (b = a, c = d.placeholder; n > b; b++)if (k[b]) { if (e = r(b), f = o[b], o[b] = c, !(n > e && k[e].test(f))) break; c = f } } function v() { A(), i.val() != q && i.change() } function w(a) { var c, d, f, b = a.which; 8 === b || 46 === b || e && 127 === b ? (c = i.caret(), d = c.begin, f = c.end, 0 === f - d && (d = 46 !== b ? s(d) : f = r(d - 1), f = 46 === b ? r(f) : f), y(d, f), t(d, f - 1), a.preventDefault()) : 13 === b ? v.call(this, a) : 27 === b && (i.val(q), i.caret(0, A()), a.preventDefault()) } function x(b) { var f, h, j, c = b.which, e = i.caret(); if (0 == c) { if (e.begin >= n) return i.val(i.val().substr(0, n)), b.preventDefault(), !1; e.begin == e.end && (c = i.val().charCodeAt(e.begin - 1), e.begin-- , e.end--) } if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > c) && c && 13 !== c) { if (0 !== e.end - e.begin && (y(e.begin, e.end), t(e.begin, e.end - 1)), f = r(e.begin - 1), n > f && (h = String.fromCharCode(c), k[f].test(h))) { if (u(f), o[f] = h, z(), j = r(f), g) { var l = function () { a.proxy(a.fn.caret, i, j)() }; setTimeout(l, 0) } else i.caret(j); d.completed && j >= n && d.completed.call(i) } b.preventDefault() } } function y(a, b) { var c; for (c = a; b > c && n > c; c++)k[c] && (o[c] = d.placeholder) } function z() { i.val(o.join("")) } function A(a) { var e, f, g, b = i.val(), c = -1; for (e = 0, g = 0; n > e; e++)if (k[e]) { for (o[e] = d.placeholder; g++ < b.length;)if (f = b.charAt(g - 1), k[e].test(f)) { o[e] = f, c = e; break } if (g > b.length) break } else o[e] === b.charAt(g) && e !== l && (g++ , c = e); return a ? z() : l > c + 1 ? d.autoclear || o.join("") === p ? (i.val() && i.val(""), y(0, n)) : z() : (z(), i.val(i.val().substring(0, c + 1))), l ? e : m } var i = a(this), o = a.map(b.split(""), function (a) { return "?" != a ? j[a] ? d.placeholder : a : void 0 }), p = o.join(""), q = i.val(); i.data(a.mask.dataName, function () { return a.map(o, function (a, b) { return k[b] && a != d.placeholder ? a : null }).join("") }), i.attr("readonly") || i.one("unmask", function () { i.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { clearTimeout(h); var a; q = i.val(), a = A(), h = setTimeout(function () { z(), a == b.replace("?", "").length ? i.caret(0, a) : i.caret(a) }, 10) }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on(c, function () { setTimeout(function () { var a = A(!0); i.caret(a), d.completed && a == i.val().length && d.completed.call(i) }, 0) }), f && g && i.on("keyup.mask", x), A() })) } }) } (jQuery);
// CountDown
!function (a) { a.fn.countDown = function (b) { return config = {}, a.extend(config, b), diffSecs = this.setCountDown(config), config.onComplete && a.data(a(this)[0], "callback", config.onComplete), config.omitWeeks && a.data(a(this)[0], "omitWeeks", config.omitWeeks), a("#" + a(this).attr("id") + " .digit").html('<div class="top"></div><div class="bottom"></div>'), a(this).doCountDown(a(this).attr("id"), diffSecs, 500), this }, a.fn.stopCountDown = function () { clearTimeout(a.data(this[0], "timer")) }, a.fn.startCountDown = function () { this.doCountDown(a(this).attr("id"), a.data(this[0], "diffSecs"), 500) }, a.fn.setCountDown = function (b) { var c = new Date; b.targetDate ? c = new Date(b.targetDate.month + "/" + b.targetDate.day + "/" + b.targetDate.year + " " + b.targetDate.hour + ":" + b.targetDate.min + ":" + b.targetDate.sec + (b.targetDate.utc ? " UTC" : "")) : b.targetOffset && (c.setFullYear(b.targetOffset.year + c.getFullYear()), c.setMonth(b.targetOffset.month + c.getMonth()), c.setDate(b.targetOffset.day + c.getDate()), c.setHours(b.targetOffset.hour + c.getHours()), c.setMinutes(b.targetOffset.min + c.getMinutes()), c.setSeconds(b.targetOffset.sec + c.getSeconds())); var d = new Date; return diffSecs = Math.floor((c.valueOf() - d.valueOf()) / 1e3), a.data(this[0], "diffSecs", diffSecs), diffSecs }, a.fn.doCountDown = function (b, c, d) { $this = a("#" + b), 0 >= c && (c = 0, a.data($this[0], "timer") && clearTimeout(a.data($this[0], "timer"))), secs = c % 60, mins = Math.floor(c / 60) % 60, hours = Math.floor(c / 60 / 60) % 24, 1 == a.data($this[0], "omitWeeks") ? (days = Math.floor(c / 60 / 60 / 24), weeks = Math.floor(c / 60 / 60 / 24 / 7)) : (days = Math.floor(c / 60 / 60 / 24) % 7, weeks = Math.floor(c / 60 / 60 / 24 / 7)), $this.dashChangeTo(b, "seconds_dash", secs, d ? d : 800), $this.dashChangeTo(b, "minutes_dash", mins, d ? d : 1200), $this.dashChangeTo(b, "hours_dash", hours, d ? d : 1200), $this.dashChangeTo(b, "days_dash", days, d ? d : 1200), $this.dashChangeTo(b, "weeks_dash", weeks, d ? d : 1200), a.data($this[0], "diffSecs", c), c > 0 ? (e = $this, t = setTimeout(function () { e.doCountDown(b, c - 1) }, 1e3), a.data(e[0], "timer", t)) : (cb = a.data($this[0], "callback")) && a.data($this[0], "callback")() }, a.fn.dashChangeTo = function (b, c, d, e) { $this = a("#" + b); for (var f = $this.find("." + c + " .digit").length - 1; f >= 0; f--) { var g = d % 10; d = (d - g) / 10, $this.digitChangeTo("#" + $this.attr("id") + " ." + c + " .digit:eq(" + f + ")", g, e) } }, a.fn.digitChangeTo = function (b, c, d) { d || (d = 800), a(b + " div.top").html() != c + "" && (a(b + " div.top").css({ display: "none" }), a(b + " div.top").html(c ? c : "0").slideDown(d), a(b + " div.bottom").animate({ height: "" }, d, function () { a(b + " div.bottom").html(a(b + " div.top").html()), a(b + " div.bottom").css({ display: "block", height: "" }), a(b + " div.top").hide().slideUp(10) })) } } (jQuery);

$(document).ready(function () {
    $("input, textarea").placeholder();
    $("input[name=phone]").mask("999-999-9999");
    $(".fancy").fancybox({
        padding: 0,
        wrapCSS: "transparent",
        closeBtn: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".form-fancybox-close, .work-with-us-form .cancel").click(function () {
        $.fancybox.close();
    });
});

$("form").submit(function () {
    var form_id = $(this);
    //var str = $(this).serialize();
    var formData = new FormData($('#formmail')[0]);
    $.ajax({
        type: "POST",
        processData: false,
        contentType: false,
        url: "/sendmail.php",
        data: formData,
        success: function (msg) {
            if (msg == 'OK') {
                clearForm(form_id);
                $.fancybox.close();
                setTimeout(function () {
                    $.fancybox({
                        href: 'thk.html',
                        padding: 0,
                        type: "iframe",
                        width: 400,
                        height: 150,
                        maxWidth: 400,
                        maxHeight: 150,
                        fitToView: false,
                        autoScale: false,
                        closeBtn: false,
                        wrapCSS: "transparent",
                        helpers: {
                            overlay: {
                                locked: false
                            }
                        }
                    });
                }, 500);

            } else {
                result = msg;
                alert(result);
            }
        }
    });
    return false;
});

$("form#contact-form").submit(function () {
    var form_id = $(this);
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "sendmail2.php",
        data: str,
        success: function (msg) {
            if (msg == 'OK') {
                clearForm(form_id);
                $.fancybox.close();
                setTimeout(function () {
                    $.fancybox({
                        href: 'thk.html',
                        padding: 0,
                        type: "iframe",
                        width: 400,
                        height: 150,
                        maxWidth: 400,
                        maxHeight: 150,
                        fitToView: false,
                        closeBtn: false,
                        autoScale: false,
                        wrapCSS: "transparent",
                        helpers: {
                            overlay: {
                                locked: false
                            }
                        }
                    });
                }, 500);

            } else {
                result = msg;
                alert(result);
            }
        }
    });
    return false;
});
