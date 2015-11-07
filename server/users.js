Meteor.publish("users", function (searchString) {
  return Meteor.users.find({
    _id: {$ne: this.userId},
    $or: [
      {'emails.address': { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }},
      {'profile.name': { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }}
    ]
  }, {fields: {emails: 1, profile: 1}});
});
