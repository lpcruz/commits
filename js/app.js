// angular.module('githubCommitsApp', [])
//   .controller('CommitsController', ['$http', function($http) {
//     this.commits = [];
//     this.author = 'lpcruz';
//     this.repo = 'commits';
//     var self = this;
//
//     this.update = function() {
//       $http({
//         method: 'GET',
//         url: 'https://api.github.com/repos/' +
//           this.author + '/' + this.repo + '/commits?path=quotes.md'
//       }).then(function(response) {
//         self.commits = response.data;
//         self.err = '';
//         // console.log(this.self.commits);
//       }, function(response) {
//         if (response.status === 403 && response.data.message.indexOf('rate limit') !== -1) {
//           self.err = 'Looks like you ran out of API requests!';
//         } else {
//           self.err = 'Something wrong happened.';
//         }
//       });
//     };
//     this.update();
//     console.log('This should be working...');
//   }]);

// Customzed ajax call for commits
// Ajax call
$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/lpcruz/commits/commits?path=quotes.md',
  dataType: 'json',
  success: function(data) {
    var commits = data;
    var commitList = document.getElementById('commit-list');

    for (var prop in data) {
      $('#commit-list').append('"' + data[prop].commit.message + '"' + '<br>');
      console.log(data[prop].commit.message);
    }

    //Fade in the data
    var fadeInData = (function() {
      $('#commit-list').hide().fadeIn(500);
    })();
    // for (var prop in data) {
    //   if (data.hasOwnProperty(prop)) {
    //     commitList.innerHTML = data;
    //   }
    // }
  }
});
