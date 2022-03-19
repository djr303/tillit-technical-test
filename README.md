# Front-end code review and refactoring task

### Note to the casual passer-by: this is deliberately terrible code, and part of an interview exercise to stimulate discussion on approaches to pairing, technical debt management and code quality. This isn't indicative of how we do things at Tillit!

## The scenario
A relatively new developer to React has approached you with the code in this repo as
a pull request to some larger project.

They were tasked with creating a 'todo list' component that:
* Lets you add new todo items
* Lets you check off items as you're done
* Has some basic styling

Through a pairing exercise, you whip the code up into a decent state that reflects what
you believe to represent best-practice TypeScript and React development.

## The exercise
Given the code in this repo, make appropriate amendments to get it into a state that
you believe represents a decent reflection of best-practice front-end development.

You're free to introduce any new dependencies you like, though the result must still
be a React application based on TypeScript.

**Note**: There are *numerous* deliberate mistakes in the code, ranging from typos to bugs to bad practice and everything in between.

### Building and running
A quick `npm install` should get dependencies sorted, and then `npm start` will launch
the app on localhost:3000. `npm test` is also defined.

### Assumptions
For the purposes of the exercise, we can assume:
* That the broad visual appearance of the component is adequate
* That our CI system will reject any merge with failing tests (run via `npm test`)
* That the component is functionally complete, but buggy - we'll pretend that purely in-memory state for the todo list items is adequate for now

### Things to consider
* What opportunities for refactoring exist?
* How is TypeScript being used in the component?
* What React rendering bugs might exist in the implementation?
* What functional/interaction bugs might there be?
* What's the test coverage like? What tests should be in place?
* How is styling implemented?
* How is the project structured?

### Time limit
While you can spend as long as you like on the exercise, we would recommend no more than a couple
of hours at the very most - most likely, the major issues in the code can be corrected much quicker
than this and if you're finding things moving slower than you want or you run out of time then take
a few minutes to just write down the sorts of changes you'd propose making and submit those along with
your code amends.

At the very least, please record roughly how long you took on the exercise so that we can discuss
your approach in a clearer context.
