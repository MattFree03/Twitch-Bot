exports.run = (client, message, args, user, channel, self) => {
    let titleStr = args.split("!title");
    $.ajax({
        url: 'https://api.twitch.tv/kraken/channels/mattfree?channel[status]='+titleStr+'&oauth_token=' +client.identity.password+'&_method=put',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          console.log(data.status);
        }
});
}