# Adopt a Neighbor

## What

A group of volunteers rapidly developed an Adopt a Neighbor program for the community of Ashland, Oregon in response to Covid-19. The program is having great success. We want to share what we've learned with other communities and abstract the lessons into a solution that can be rapidly expanded to other communities.

[See Ashland Adopt a Neighbor website ](https://adoptneighbors.org)

The "manual" Ashland solution cobbles together free and low cost tools where people submit form data from a Squarespace website to a Google Sheets backend. After that, we cleanup the bad address data (roughly 20% are incomplete or incorrect addresses) and then map that data to match Volunteers with Neighbors that live closest to them. While this approach works, it won't scale very well to larger communities and can't be scaled fast enough. We endevour to build a system where the addresses are prevalidated, matching is more automated and the organizers can focus more on other critical areas like safety, finding other volunteer jobs that can be done from home, organizing mask-making collection and distribution, and responding to whatever emerging needs arise as volunteers get sick and have to drop their match.

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
