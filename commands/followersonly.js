exports.run = (client, message, args, user, channel, self) => {
    if (user.badges.broadcaster === '1' || user.badges.moderator === '1'){
        let arr = message.split('!followersonly ')
        let amountOfTimeStr = arr[1]
        let amountOfTimeInt = Math.round(Number(amountOfTimeStr))
        if (typeof(amountOfTimeInt === "number")){
            client.followersonly(channel, amountOfTimeInt);
        } else {
            client.followersonly(channel);
        }
    }
}