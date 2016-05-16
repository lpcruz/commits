angular.module('githubCommitsApp', [])
  .controller('CommitsController', ['$http', function($http) {
    this.commits = [];
    this.author = 'lpcruz';
    this.repo = 'commits';
    var self = this;

    this.update = function() {
      $http({
        method: 'GET',
        url: 'https://api.github.com/repos/' +
          this.author + '/' + this.repo + '/commits?path=quotes.md'
      }).then(function(response) {
        self.commits = response.data;
        self.err = '';
        // console.log(this.self.commits);
      }, function(response) {
        if (response.status === 403 && response.data.message.indexOf('rate limit') !== -1) {
          self.err = 'Looks like you ran out of API requests!';
        } else {
          self.err = 'Something wrong happened.';
        }
      });
    };
    this.update();
    console.log('This should be working...');
  }]);
