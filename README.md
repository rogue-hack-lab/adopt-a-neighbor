# Adopt a Neighbor

## Notes

- uses create-react-app as a base
- incorporates a number of libraries aimed at developing UI for both mobile phone browsers and desktop, including react-multistep to keep the number of fields on each screen to a minimum
- now includes examples of how to use react-break library to render conditionally based on breakpoints. See the responsive-ui-utils.js file.
- added a pre-commit hook that will perform automatic code linting and prettier code formatting
- create a new branch from develop branch (git checkout -b feature/name-of-new-thing)
- push that branch up to the remote, and keep making small atomic commits with helpful messages
- regularly `git pull develop` to keep your local up-to-date
- make sure to rebase the latest changes on develop into your branch, `git rebase develop` from your branch
- push changes to the remote branch
- open up a PR to develop branch from your branch, and tag the other developers for a code review
- once another developer has approved the PR, you are free to merge it into develop when you are ready

## Unit Tests

create-react-app uses Jest under the hood. [See docs ](https://create-react-app.dev/docs/running-tests/)
