exports.run = (client, message, args, tags, channel, self) => {
    if (tags.badges.broadcaster === '1' || tags.badges.moderator === '1'){
        let arr = message.toLowerCase().split('!followerson ');
        let amountOfTimeStr = arr[1];
        let isNumber = /\d/.test(amountOfTimeStr);

        if (isNumber === true) {
            let amountOfTimeInt = Math.round(Number(amountOfTimeStr))
            client.followersonly(channel, amountOfTimeInt);
        } else {
            client.followersonly(channel);
        }
        client.say(channel, `@${tags.username} followers-only mode is now on`)
    }
}