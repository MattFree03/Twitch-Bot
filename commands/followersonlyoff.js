exports.run = (client, message, args, user, channel, self) => {
    if (user.badges.broadcaster === '1' || user.badges.moderator === '1'){
        client.followersonlyoff("channel");
        client.say(`@${tags.username} followers only mode has been turned off`);
    }
}