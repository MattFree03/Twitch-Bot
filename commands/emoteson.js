exports.run = (client, message, args, tags, channel, self) => {
    if (tags.badges.broadcaster === '1' || tags.badges.moderator === '1'){
        client.emoteonly(channel);
        client.say(channel, `@${tags.username} emote-only mode has been turned on`);
    }
}