var _push = {
};
document.addEventListener("DOMContentLoaded", function () {
  var t1, t2;
  var s1s2 = $('#t1_place').html().trim()
  var t = s1s2.split('_');
  if (t.length == 2) {
    s1 = t[0];
    s2 = t[1];
  }
  else {
    s1 = s1s2;
    s2 = '';
  }
  _push = {
  serverUrl: "https://daailynews.com",
   urlParams: {
   sub: "", s1: s1, s2: s2, cid: "211" }
  };
  _push.serverUrl = window.location.origin + '/js';
  (function (p, u, s, h) {
    p._pcq = p._pcq || [];
                        p._pcq.push(['_currentTime', Date.now()]);
    s = u.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = _push.serverUrl + '/pushjs/1.0.0/subscriber.js';
    h = u.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
  }
  )(window, document)
}
                          );
