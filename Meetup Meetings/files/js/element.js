(function() {

    var MeetupMeetings = PlatformElement.extend({

        initialize: function() {
            // we normalize the styles on initial load.
            // this.fixStyles();
            var self = this;

            this.meetupTemplate =
              "<ul>{{#meetups}}" +
              "   <li>{{name}} at {{time}}, {{yes_rsvp_count}} people coming</li>" +
              "{{/meetups}}</ul>";

            // Todo: Create element.svg and put in root folder of element (from fontawesome?)
            //    IconFinder, The Noun Project for prebuilt icons
            //    More Info and tools: https://dev.weebly.com/element-icon-guidelines.html
            // Todo: Verify it behaves when resized
            // Todo: only show public meetups (from API URL rather than JS code?)

            var upcomingMeetupsUrl = this.settings.get("meetupAPIUrl");

              $.ajax({
                 url: upcomingMeetupsUrl,
                 jsonp: "callback",
                 dataType: "jsonp",
                 success: function (results) {
                   self.displayMeetups(results.data);
                 }
                 // Todo: Deal with failure
           });

        },

        displayMeetups: function(meetups) {
          var numToDisplay = this.settings.get("numToDisplay");
          var html = Mustache.to_html(this.meetupTemplate, {meetups: meetups.slice(0,numToDisplay)});
          $('#meetupDisplay').html(html);
        }

    });

    return MeetupMeetings;
})();
