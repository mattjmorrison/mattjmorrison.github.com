$(document).ready ->

  repo_link = (repo) ->
    "<a href=\"https://github.com/#{repo}\">#{repo}</a>"

  $.ajax
    url: "https://api.github.com/users/mattjmorrison/events"
    dataType: 'jsonp'
    success: (data) ->
      list = $('<ul class="nav nav-tabs nav-stacked">').appendTo $('#github-commits')
      list.append '<li class="nav-header">Recent Github Activity</li>'
      repos = (e.repo for e in data.data)
      uniq = {}
      (uniq[r.name.split(/\/(.+)?/)[1]] = 1 for r in repos)
      for repo, val of uniq
        list.append "<li>#{repo_link(repo)}</li>"




