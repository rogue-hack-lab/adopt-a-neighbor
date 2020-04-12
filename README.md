# adopt-a-neighbor

## License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Background

A group of volunteers rapidly developed an Adopt a Neighbor program for the community of Ashland, Oregon in response to the Covid-19 epidemic. The program is having great success. We want to share what we've learned and abstract the lessons into a solution that can be rapidly expanded to other communities.

[See Adopt a Neighbor Ashland website ](https://adoptneighbors.org)

The "backend" for Ashland is largely a cobbling together of free and low cost tools where people submit form data from a Squarespace website to Google Sheets. After that, we cleanup the bad address data manually (roughly 20% are incomplete or invalid street addresses) and then map participants to match Volunteers with the nearest Neighbors. While this manual approach works, it won't scale very well to larger communities and can't be scaled fast enough.

Organizing and participating in a program like this should be easier. We endeavor to build a system where the addresses are pre-validated, the matching process is more automated and the organizers can focus more on other critical tasks that make the program work more effectively. Organizers can focus on participant safety, referring participants to other agencies and programs, finding quarantine-friendly volunteer jobs for those that can't go out, organizing mask-making collection and distribution, and rapidly responding to emerging needs.

## Comparison/Contrast with Similar Programs
Nextdoor is an online social network aimed at promoting interactions with people in their own neighborhoods. However, as part of a larger group, there is inherently less privacy. An elderly person who needs help may not want to reach out and ask a larger group of semi-strangers, or they may not even know how to use their smartphone or stay up to date with notifications from the app. This is where Adopt a Neighbor is trying to fill the gap. We see social networks like Nextdoor as mutually beneficial, but not a replacement for what Adopt a Neighbor provides.

Another notable international effort known as Mutual Aid has surfaced to help connect individuals based on specific needs. While Mutual Aid has a few similarities with Adopt a Neighbor, we believe there is still a need for both approaches.
* The Adopt a Neighbor model is all about geographical proximity. This is important because the closer the volunteer is to the neighbor, the easier it is for the volunteer to keep helping the neighbor over a long period of time. We don't know how long Covid-19 will be around, but we think a reasonable assumption is that our neighbor matches can benefit from the personal connection even after the crisis has passed. In that way, we hope to build stronger links between those who can help with those who need help.
* The Adopt a Neighbor model works best when partnering with an established and trusted organization such as city government or non-profit. This relationship will help with getting the word out about the program and making sure more citizens get the help they need.
* The program provides an example of how to incorporate appropriate safety guidelines from local health authorities and provides a legal agreement for participants to acknowledge the inherent risks of being matched with a nearby stranger.
* Adopt a Neighbor organizers can identify alternative volunteer opportunities for higher risk groups. Opportunities to be a "social buddy" over the phone and making masks are good examples of opportunities where everyone can make a difference from the relative safety of their home.
* Adopt a Neighbor encourages careful management of private data, minimizing the accidental spread of personal information. We've already seen examples in the Mutual Aid site where Google Sheets with volunteer information are public and accessible to anyone who clicks on the link.  It is best to have a group of experienced organizers and/or staff who understand their responsibility to protect the participants from unintended spread of personal information, and we expect both Mutual Aid and Adopt a Neighbor efforts to improve in that regard.
* The veteran software engineer leading this project has many years of experience building systems for community programs. The overarching goal of Adopt a Neighbor software project is to provide a robust software platform to make it easier, faster, and more secure for communities to organize and protect their fellow citizens. We have no interest in advertising or using personal data for anything other than facilitating matches and rematches between nearby neighbors. Additionally, we will be working hard to implement privacy by design and provide tools for responding to safety issues in the most effective way possible.

## Call for Contributors and Sponsors

See the [project wiki](https://github.com/rogue-hack-lab/adopt-a-neighbor/wiki) to learn more about the project and how you can get involved.

Downstream improvements are welcome and encouraged. We hope to see pull requests when and where it makes sense. You may make modifications to the software components and re-package as a part of another project. However, you must include the same license on the components and derivatives of components originating from this project.

## Disclaimer
The project is currently developed and led by individual volunteers and cannot provide a warranty, either expressly or implied. While we will make our best efforts to develop high quality components in this project and make them available for free, the consumer of this software has the burden of examining the components to determine if and how it meets any standards required. All of the code and third party libraries incorporated into this project are open to scrutiny and available for inspection. If you find vulnerabilities in the codebase or a third party library that does not fit within the terms of our license, please submit a PR with the fix or report the issue to adopt.a.neighbor.global@gmail.com

## Contributors
Add your username as a contributor by submitting a PR.
* @soupala
