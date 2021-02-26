exports.run = (client, message, args, tags, channel, self) => {
    if (tags.badges.broadcaster === '1' || tags.badges.moderator === '1'){
        client.followersonlyoff(channel);
        client.say(channel, `@${tags.username} followers-only mode has been turned off`);
    }
}