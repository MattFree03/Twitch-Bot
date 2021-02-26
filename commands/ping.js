exports.run = (client, message, args, tags, channel, self) => {
    client.ping().then(function(data) {
        let ping = Math.floor(Math.round(data*1000))
        client.say(channel, `@${tags.username}, your ping is ${ping}ms`)
    })
}