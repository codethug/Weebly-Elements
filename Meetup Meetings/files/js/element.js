(function() {

    var MeetupMeetings = PlatformElement.extend({

        initialize: function() {
            // we normalize the styles on initial load.
            // this.fixStyles();
            console.log("retrieving meetup data");
            var self = this;

            this.meetupModel = Backbone.Model.extend({
              defaults: {
                name: '',
                otherProp: 0
              }
            });

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
          console.log("Upcoming Meetups", meetups);
          console.log("el", this.el);

          var html = Mustache.to_html(this.meetupTemplate, {meetups: meetups});
          $('#meetupDisplay').html(html);
        }

    });

    return MeetupMeetings;
})();
