function ecert_win() {
var ecert_win = window.open('ecert_1.htm','','scrollbars=no,menubar=no,height=800,width=576,resizable=yes,toolbar=no,location=no,status=no');
}
function ecert_congrats_win() {
var ecert_win = window.open('ecert_response.htm','','scrollbars=yes,menubar=no,height=800,width=596,resizable=yes,toolbar=no,location=no,status=no');
}
function send_friend_win() {
var send_friend_win = window.open('send_friend.htm','','scrollbars=no,menubar=no,height=316,width=576,resizable=no,toolbar=no,location=no,status=no');
}
function questions_win() {
var questions_win = window.open('questions.htm','','scrollbars=no,menubar=no,height=316,width=375,resizable=no,toolbar=no,location=no,status=no');
}

/*
 
Correctly handle PNG transparency in Win IE 5.5 & 6.
http://homepage.ntlworld.com/bobosola. Updated 18-Jan-2006.

Use in <HEAD> with DEFER keyword wrapped in conditional comments:
<!--[if lt IE 7]>
<script defer type="text/javascript" src="pngfix.js"></script>
<![endif]-->

*/

var arVersion = navigator.appVersion.split("MSIE")
var version = parseFloat(arVersion[1])

if ((version >= 5.5) && (document.body.filters)) 
{
   for(var i=0; i<document.images.length; i++)
   {
      var img = document.images[i]
      var imgName = img.src.toUpperCase()
      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
      {
         var imgID = (img.id) ? "id='" + img.id + "' " : ""
         var imgClass = (img.className) ? "class='" + img.className + "' " : ""
         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
         var imgStyle = "display:inline-block;" + img.style.cssText 
         if (img.align == "left") imgStyle = "float:left;" + imgStyle
         if (img.align == "right") imgStyle = "float:right;" + imgStyle
         if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
         var strNewHTML = "<span " + imgID + imgClass + imgTitle
         + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
         + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
         + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
         img.outerHTML = strNewHTML
         i = i-1
      }
   }
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}