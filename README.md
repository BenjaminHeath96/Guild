# Guild

## How to Install Dependencies
From the root directory, run `npm install`
## How to Run
Once you have installed the dependencies, please run `npm start`. This will fire up the frontend at `localhost:8080` and the server at `localhost:3000`
## How to Use
Once the application is running, go to `localhost:8080`, login with the `login` dropdown in the navbar, and go ahead and start chatting!

Use the text input to write a message.

If you open up additioal instances of the application in the browser, you will see that the messages are emitted out to each instance, and you can chat with yourself.

## What would I have improved on if more time
- Ability to chat with multiple people
    - If I had 1 more hour:
        - Server would have stored chat history in a dictionary, so we can track conversation easily between multiple users.
        - Frontend would have had different collapses to show different conversations
    - If I had another day:
        - Server would have used a real database.
        - Frontend would have used something more elegant than collapses
- Actual authentication/logging in
- Ability to log out and log back in
- Style improvements
    - Adding a new message would cause the messages list to scroll
    - Use `flex` styling everywhere, instead of using `display: fixed`.
    - Only the chat card should scroll, not the entire viewport.

Thanks for reading!