# Body slam

Body slam is a tech test template. Please read the following and crack into it when you're ready.

## Instructions

Imagine this is a real app. It takes some source data about what moves Snorlax can learn and displays it in a table. The data is stored in a JSON file. There will never be more than say 10 or 15 moves that Snorlax can learn, so the table won't ever need pagination, sorting etc.

The app is intended to be used by Snorlax trainers to help them decide which moves to teach their Snorlax. At this stage, you're expecting a couple hundred users at most, and very limited development in the future beyond the tasks described below.

You're welcome to change anything you want about the app, data structure, components, style system, table, types etc, but you don't need to. Please explain if you do so. The only thing we ask that you don't do is add any more moves.

Plan to spend 1-2 hours on it. If you're not done in 2 hours, that's fine, just send us what you have. We're not looking for perfection, just a sense of how approach problems. There's no hidden tricks, tests or gotchas. If you have any questions, feel free to ask.

- `npm i`
- `npm run dev`

-----

## Todo

We want to make some minor improvements:

- Make the moves in the table clickable, taking you to a page dedicated to each move. You're welcome to do whatever you want with the Table component. It's a bit of a mess.
- The new move specific pages should render the move's name, type, and power, as well as an image of a snorlax using the move (find these on google search, don't spend much time on this, just get any old img if you can't find a good fit quickly).
- The move specific pages should be styled with a page background color loosely fitting the move e.g. black for hyper beam, pink for rest etc.
- Add a header with a link that takes you back to the main page with snorlax and his moves.

Wrapup:

- Imagine the app is a hit and you want to add all other Pokemon and moves instead of just Snorlax. Your product manager asks how long that will take. Write out roughly how you would approach it (including what's required to make it more robust and scalable), and how long you estimate it taking. 

Stretch goal (if you have time)

- Add functionality to calculate the damage potential for each move based on it's pp (how many times it can be used) and damage (how much damage it does). The damage potential is the product of the two. The damage potential should be displayed in the table and on the move specific page.
