// Meme-api (Rasesh2005 - https://github.com/Rasesh2005/Reddit-Meme-API)
// https://github.com/joshua-noakes1/meme-api-example

const fetch = require('node-fetch');

// This can be changed to be anything but if it has been changed modules.exports (line 38 - near the bottom) must match
async function get_random_reddit_image(subreddit) {
    const meme_api_response = await fetch(`https://reddit-meme-api.herokuapp.com/${subreddit}`);
    const meme_api_reddit_data = await meme_api_response.json();

    var json_response = {}

    // checking if an image was found on the post
    if (meme_api_reddit_data.image_previews[0] != "No Preview Found For This Meme.. Sorry For That") {
        json_response.post_subreddit = meme_api_reddit_data.subreddit;
        json_response.post_title = meme_api_reddit_data.title;
        json_response.post_link = meme_api_reddit_data.post_link;
        json_response.post_image_exist = true;
        json_response.post_image_url = meme_api_reddit_data.url;
        json_response.post_is_nsfw = meme_api_reddit_data.nsfw;
        json_response.post_author = meme_api_reddit_data.author;
    } else {
        json_response.post_subreddit = meme_api_reddit_data.subreddit;
        json_response.post_title = meme_api_reddit_data.title;
        json_response.post_link = meme_api_reddit_data.post_link;
        json_response.post_image_exist = false;
        // Can be changed but this image should be under CC - https://www.google.com/search?q=no%20image%20found&tbm=isch&tbs=il:cl#imgrc=xzUN8kdLlU0ZwM
        json_response.post_image_url = "https://static.thenounproject.com/png/140281-200.png";
        json_response.post_is_nsfw = meme_api_reddit_data.nsfw;
        json_response.post_author = meme_api_reddit_data.author;
    }

    // sending back the json with everything that should be needed
    return json_response;
}

module.exports = {
    get_random_reddit_image
}