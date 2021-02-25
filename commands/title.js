exports.run = (client, message, args, user, channel, self) => {
    let arr = args.split("!title ");
    let titleStr = arr[1]
    console.log(titleStr)
    $.ajax({
        url: 'https://api.twitch.tv/kraken/channels/mattfree?channel[status]='+titleStr+'&oauth_token=' +process.env.OAUTH_TOKEN+'&_method=put',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          console.log(data.status);
        }
});
}