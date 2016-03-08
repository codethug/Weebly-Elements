<div class="meetup-meetings-wrapper">
  <div class="meetup-meetings">

    <div class="meetupInstructions">
      <div>Click this widget to configure it. CCC</div>
      <div>To use this, you will need to:</div>

      <ol>
        <li class="meetupInstructionItem">Create a Meetup group and be an administrator on the group</li>
        <li class="meetupInstructionItem">Navigate to the Meetup API Console for Events (https://secure.meetup.com/meetup_api/console/?path=/:urlname/events)</li>
        <li class="meetupInstructionItem">Type your group name in the "urlname" field.  For example if your group is at meetup.com/RVASoccer, then you would type in "RVASoccer"</li>
        <li class="meetupInstructionItem">Add other filters as needed in the other fields.</li>
        <li class="meetupInstructionItem">Click the 'Show Response' button.  After a moment, you should see a bunch of JSON data display at the bottom of the page</li>
        <li class="meetupInstructionItem">Copy the 'Signed URL' from the page (it should end with 'sig=[a_big_long_string_of_letters_and_numbers]')</li>
        <li class="meetupInstructionItem">Click on this widget and paste the Signed URL into the URL setting</li>
      </ol>

    </div>

    <div id="meetupDisplay"></div>
  </div>
</div>
