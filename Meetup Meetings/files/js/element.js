(function() {

    var MeetupMeetings = PlatformElement.extend({

        initialize: function() {
            // we normalize the styles on initial load.
            // this.fixStyles();
            var self = this;

            this.meetupTemplate =
              "<ul>{{#meetups}}" +
              "   <li class='meetup'>" +
              "     <h3><a href='{{link}}'>{{name}}</a></h3>" +
              "      {{displayTime}} | {{yes_rsvp_count}} RSVP" +
              "   </li>" +
              "{{/meetups}}</ul>";

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
          var html = Mustache.to_html(this.meetupTemplate, this.convertMeetups(this.limitMeetups(meetups)));
          $('#meetupDisplay').html(html);
        },

        convertMeetups: function(meetups) {
            return {meetups: _.map(meetups, function(meetup) {
                meetup.displayTime = moment(meetup.time).format("MMM d [at] h[:]mma");
                return meetup;
            })};
        },

        limitMeetups: function(meetups) {
          var numToDisplay = this.settings.get("numToDisplay");
          return meetups.slice(0,numToDisplay);
        }

    });

    return MeetupMeetings;
})();
