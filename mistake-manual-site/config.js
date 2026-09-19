/* SITE CONFIG: sirf yahin values badalni hain. Yahan koi secret key kabhi na daalein. */
const PAYMENT_CHECKOUT_URL = "https://rzp.io/rzp/IWHJaFkK";
const EBOOK_DOWNLOAD_URL   = "";
const SUPPORT_EMAIL        = "gwajji2212@gmail.com";
const BOOK_PRICE           = "₹ 99";
const BOOK_ORIGINAL_PRICE  = "₹499";
const BOOK_TITLE           = "The Mistake Manual";
const BOOK_SUBTITLE        = "जिंदगी में क्या न करें और क्या करें";
const AUTHOR_NAME          = "Mohd Wajid";

/* ---- Neeche ka code badalne ki zarurat nahi ---- */
var SITE_ROOT = (document.currentScript && document.currentScript.src) ? document.currentScript.src.replace(/config\.js.*$/, "") : "";
document.addEventListener("DOMContentLoaded", function () {
  var unset = function (v) { return v.indexOf("_HERE") > -1; };
  var all = function (s) { return document.querySelectorAll(s); };
  var isAbs = /^https?:\/\//i.test(EBOOK_DOWNLOAD_URL);
  var dl = unset(EBOOK_DOWNLOAD_URL) ? "#" : (isAbs ? EBOOK_DOWNLOAD_URL : SITE_ROOT + EBOOK_DOWNLOAD_URL);

  all("[data-buy]").forEach(function (a) {
    a.href = PAYMENT_CHECKOUT_URL;
    a.addEventListener("click", function (e) {
      if (unset(PAYMENT_CHECKOUT_URL)) {
        e.preventDefault();
        alert("Payment link abhi set nahi hai. config.js me PAYMENT_CHECKOUT_URL badlein.");
      }
    });
  });

  all("[data-download]").forEach(function (a) {
    a.href = dl;
    if (!isAbs) a.setAttribute("download", "The-Mistake-Manual.pdf");
    a.addEventListener("click", function (e) {
      if (unset(EBOOK_DOWNLOAD_URL)) { e.preventDefault(); alert("Download link abhi set nahi hai. config.js me EBOOK_DOWNLOAD_URL badlein."); }
    });
  });

  // Site ke andar wali PDF milti hai ya nahi, check karo (local file:// aur preview me skip)
  if (SITE_ROOT && !isAbs && !unset(EBOOK_DOWNLOAD_URL) && location.protocol !== "file:" && all("[data-download]").length) {
    var warn = function () { var w = document.getElementById("dlwarn"); if (w) w.hidden = false; };
    fetch(dl, { method: "HEAD" }).then(function (r) { if (!r.ok) warn(); }).catch(warn);
  }

  all("[data-support]").forEach(function (a) { a.href = "mailto:" + SUPPORT_EMAIL; a.textContent = SUPPORT_EMAIL; });
  all("[data-price]").forEach(function (n) { n.textContent = BOOK_PRICE; });
  all("[data-oldprice]").forEach(function (n) { if (BOOK_ORIGINAL_PRICE) { n.textContent = BOOK_ORIGINAL_PRICE; n.hidden = false; } });
  all("[data-title]").forEach(function (n) { n.textContent = BOOK_TITLE; });
  all("[data-subtitle]").forEach(function (n) { n.textContent = BOOK_SUBTITLE; });
  all("[data-author]").forEach(function (n) { n.textContent = AUTHOR_NAME; });
});
