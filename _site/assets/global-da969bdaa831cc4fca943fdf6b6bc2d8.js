!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

(function() {
  $(document).ready(function() {
    var repo_link;

    repo_link = function(repo) {
      return "<a href=\"https://github.com/" + repo + "\">" + repo + "</a>";
    };
    return $.ajax({
      url: "https://api.github.com/users/mattjmorrison/events",
      dataType: 'jsonp',
      success: function(data) {
        var e, list, r, repo, repos, uniq, val, _i, _len, _results;

        list = $('<ul class="nav nav-tabs nav-stacked">').appendTo($('#github-commits'));
        list.append('<li class="nav-header">Recent Github Activity</li>');
        repos = (function() {
          var _i, _len, _ref, _results;

          _ref = data.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            _results.push(e.repo);
          }
          return _results;
        })();
        uniq = {};
        for (_i = 0, _len = repos.length; _i < _len; _i++) {
          r = repos[_i];
          uniq[r.name.split(/\/(.+)?/)[1]] = 1;
        }
        _results = [];
        for (repo in uniq) {
          val = uniq[repo];
          _results.push(list.append("<li>" + (repo_link(repo)) + "</li>"));
        }
        return _results;
      }
    });
  });

}).call(this);

var disqus_shortname = 'mattjmorrison';
(function() {
  var dsq = document.createElement('script'); 
  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  document.getElementsByTagName('body')[0].appendChild(dsq);
})();
