# meme-api-example
Example usage of Rasesh2005's Meme-api    

After the file has been imported you'll need to use async to get the response other wise you'll just be left with `Promise { <pending> }`.

## Example
`const subreddit_response = await meme_api.get_random_reddit_image('kirby')`
### Response
- Usage:  
post_subreddit > The subreddit that the post came from   
post_title > The post's title   
post_link > The reddit url to the post     
post_image_exist > Has an image been found on the post      
post_image_url > If one has been found the url for the image    
post_is_nsfw > This is important to know   
post_author > The post's author
- Example:    
post_subreddit: 'kirby',    
post_title: 'Made this during school...',    
post_link: 'https://redd.it/lyn7s2',    
post_image_exist: true,    
post_image_url: 'https://i.redd.it/vtj6btvw9al61.jpg',    
post_is_nsfw: false,    
post_author: '12hourpoint'     

### Code Usage
`subreddit_response.post_image_url = https://i.redd.it/vtj6btvw9al61.jpg (For the example)`

This repo is under [unlicense](http://unlicense.org) read more [here](https://github.com/Joshua-Noakes1/meme-api-example/blob/main/LICENSE)