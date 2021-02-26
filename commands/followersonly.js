exports.run = (client, message, args, user, channel, self) => {
    if (user.badges.broadcaster === '1' || user.badges.moderator === '1'){
        let arr = message.split('!followersonly ')
        let amountOfTimeStr = arr[1]
        try {
            let amountOfTimeInt = Math.round(Number(amountOfTimeStr))
            if(typeOf(amountOfTimeInt === 'Number')) {
                client.followersonly(channel, amountOfTimeInt)
            }
        } catch(err){
            client.followersonly(channel)
        }
    }
}