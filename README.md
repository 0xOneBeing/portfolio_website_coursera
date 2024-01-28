# Build a Portfolio Website with HTML, CSS, and JavaScript by Coursera Project Network

---

### Explanation of my solution

I made sure to customize the portflio website using colors that are easy on the eye and has great contrast for different typography.

I used Bootstrap CSS for the UI design and I was quick to notice that the the CSS rules out-of-the-box has to overridden using the `!important` flag.

For structural correctness, it's advised to wrap section content in a `div` or `section` to give semantic or logical meaning to content.

### Description of my approach

My approach are as listed below:

- I used VanillaJS to write custoom functions.
- While I used VanillaJS I made sure to make all functions work only on [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event). This is in order to only run the script when the HTML contents have been loaded (or parsed) completely.
- I wrote logic to adequately handle switch sections using the `navbar`
- I also wrote logic to switch current `.nav-link` to the cureent section the user is viewing. See [`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- I wrote logic to get current year so the website footer section gets dynamically updated
- Overriding Bootstrap CSS rules using `!important` flag (not recommended).
- I used [FontAwesome](https://fontawesome.com/) for icons

[portfolio_website_coursera](https://github.com/0xOneBeing/portfolio_website_coursera.git)
