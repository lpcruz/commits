// Non-Angular Ajax Call
// Commits IIFE
var Commits = (function() {
  // Set index to 0
  var i = 0;

  // Get commits IIFE
  (function getCommits() {
    $.ajax({
      url: 'https://api.github.com/repos/lpcruz/commits/commits?path=quotes.md',
      success: function(data) {
        $('.messages').hide().fadeIn().html(data[i].commit.message);
        i++;
        setTimeout(getCommits, 3000);
        if (i >= data.length) {
          i = 0;
        }
      },
      error: function() {
        console.log('Error, cannot retrieve data');
      }
    });
  })();
})();
