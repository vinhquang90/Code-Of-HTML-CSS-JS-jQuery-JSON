
var dlh = document.location.href;
if (dlh.search(/lazada\.vn\/products\//i) != - 1) {
    var xcnt_p_id;
    try { xcnt_p_id = pdpTrackingData.pdt_simplesku; } catch (err) { }
    var xcnt_product_id = xcnt_p_id || 'product';
}
else if (dlh.search(/cart\.lazada\.vn\/cart/i) != - 1) {
    var xcnt_basket_products = 'basket';
}
else if (dlh.search(/checkout\.lazada\.vn\/order-received/i) != - 1) {
    var o_id = dlh.match(/orderId=(\d+)/); if (typeof o_id == 'object' && o_id != null) { o_id = o_id[1] } else { o_id = undefined }
    var xcnt_order_id = o_id || 'order';
}
if (typeof dlh == 'string' && !/https:\/\/www\.lazada\.vn\/(?:\?.*)?$/i.test(dlh)) {
    //not Home
    (function () {
        var script = document.createElement("script"),
            body = document.getElementsByTagName("body")[0];
        script.src = "https://lazada.tpm.im/pushing/init";
        script.border = 0; script.width = 0; script.height = 0;
        body.appendChild(script);
    })()
}
function xcnttrack(t) { function e() { try { return n.self !== n.top } catch (t) { return !0 } } function r() { for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++)if ("string" == typeof t[e].src && /^https?:\/\/cityadspix\.com\/track\/[^\/]+\/ct\/.*/i.test(t[e].src)) return t[e].src.match(/cityadspix\.com\/track\/([^\/]+)\/ct\//i)[1]; return "" } function c(t, e, c, a) { var n = ""; return "xcnt_order_id" == e && (n = r()), "undefined" != typeof a ? "undefined" != typeof a[e] && "" != a[e] && "" == n && (n = a[e]) : "undefined" != typeof c[e] && "" != c[e] && "" == n && (n = c[e]), "" != n ? "&" + t + "=" + encodeURIComponent(n) : "" } var a = document, n = window; if (a.body) { var o = (new Date).getTimezoneOffset(), d = "", i = ""; i = a.location.href, d = a.location.hostname; var _ = "xcnt_product_", s = "xcnt_basket_", p = "xcnt_order_", u = "xcnt_user_", m = "xcnt_transport_", l = "xcnt_accomodation_", h = "xcnt_tour_", y = "//x.cnt.my/px/?r=" + Math.random() + c("dom", "dom", { dom: d }) + "&tz=" + o + "&sw=" + screen.width + "&sh=" + screen.height + "&ow=" + window.outerWidth + "&oh=" + window.outerHeight + "&iw=" + window.innerWidth + "&ih=" + window.innerHeight + "&scd=" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth) + c("sgm", u + "segment", n, t) + c("u_name", u + "name", n, t) + c("click_id", "xcnt_click_id", n, t) + c("p_id", _ + "id", n, t) + c("p_category", _ + "category", n, t) + c("b_products", s + "products", n, t) + c("b_quantity", s + "quantity", n, t) + c("b_append", s + "append", n, t) + c("o_id", p + "id", n, t) + c("o_products", p + "products", n, t) + c("o_quantity", p + "quantity", n, t) + c("o_total", p + "total", n, t) + c("o_cur", p + "currency", n, t) + c("u_email", u + "email", n, t) + c("u_email_hash", u + "email_hash", n, t) + c("u_id", u + "id", n, t) + c("u_phone", u + "phone", n, t) + c("sa1", u + "sa", n, t) + c("t_t", m + "type", n, t) + c("t_company", m + "company", n, t) + c("t_from", m + "from", n, t) + c("t_to", m + "to", n, t) + c("t_dtdep", m + "depart_date", n, t) + c("t_dtret", m + "return_date", n, t) + c("t_dur", m + "duration", n, t) + c("t_cur", m + "currency", n, t) + c("t_prc", m + "price", n, t) + c("t_adu", m + "adults", n, t) + c("t_chi", m + "children", n, t) + c("t_chiage", m + "children_age", n, t) + c("t_class", m + "class", n, t) + c("a_t", l + "type", n, t) + c("a_loc", l + "location", n, t) + c("a_id", l + "id", n, t) + c("a_dtin", l + "checkin_date", n, t) + c("a_dtout", l + "checkout_date", n, t) + c("a_dprc", l + "day_price", n, t) + c("a_cur", l + "currency", n, t) + c("a_adu", l + "adults", n, t) + c("a_chi", l + "children", n, t) + c("a_chiage", l + "children_age", n, t) + c("a_rooms", l + "rooms", n, t) + c("to_id", h + "id", n, t) + c("to_loc", h + "location", n, t) + c("to_dtstfr", h + "start_date_from", n, t) + c("to_dtstto", h + "start_date_to", n, t) + c("u", u + "data", n, t) + c("provider", "xcnt_provider", n, t) + c("ifr", "ifr", { ifr: e() ? "1" : "" }) + c("url", "url", { url: i }) + c("ref", "ref", { ref: a.referrer }), f = a.createElement("img"); if (f.id = "xcnt-img-" + Math.random(), f.width = "0", f.height = "0", f.style.cssText = "display:none !important;width:0 !important;height:0 !important;", f.src = (- 1 == y.indexOf("u_email") ? "" : "https:") + y.substr(0, 2048), a.body.appendChild(f), null == a.getElementById("xcnt-pars")) { var x = a.createElement("script"); x.id = "xcnt-pars", x.async = 1, x.src = "//x.cnt.my/async/parser/" + d + ".js?r=3.15" + c("dom", "dom", { dom: d }), a.body.appendChild(x) } } } xcnttrack();