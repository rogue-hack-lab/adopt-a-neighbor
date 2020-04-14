# adopt-a-neighbor

## License

This project is available under the terms of the following license: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

To the maximum extend permitted by law, this software project is open source and available for both commercial and non-commercial use. Click on the GPL v3 icon above or see license in LICENSE file. Downstream improvements are welcome and encouraged. We hope to see pull requests when and where it makes sense. You may make modifications to the software components and re-package as a part of another project. However, you must include the same license on the components and derivatives of components originating from this project.

## Call for Contributors and Sponsors
See the [project wiki](https://github.com/rogue-hack-lab/adopt-a-neighbor/wiki) to learn more about the project and how you can get involved.

## Background
A group of volunteers rapidly developed an Adopt a Neighbor program for the community of Ashland, Oregon in response to the Covid-19 epidemic. The program is having great success. We want to share what we've learned and abstract the lessons into a solution that can be rapidly expanded to other communities.

[See Adopt a Neighbor Ashland website ](https://adoptneighbor.org)

The "backend" for Ashland is largely a cobbling together of free and low cost tools where people submit form data from a Squarespace website to private Google Sheets. After that, we cleanup the bad address data manually (roughly 20% are incomplete or invalid street addresses) and then map participants to match Volunteers with the nearest Neighbors. While this manual approach works, it won't scale very well to larger communities and can't be scaled fast enough.

Organizing and participating in a program like this should be easier. We endeavor to build a system where the addresses are pre-validated, the matching process is more automated and the organizers can focus more on other critical tasks that make the program work more effectively. Organizers can focus on participant safety, referring participants to other agencies and programs, finding quarantine-friendly volunteer jobs for those that can't go out, organizing mask-making collection and distribution, and rapidly responding to emerging needs.

## Project Status
This software system is under rapid development and is not yet ready for use. If you would like to be notified once the software has become stable, please email adopt.a.neighbor.global@gmail.com

## Privacy By Design
The principle of limiting access only to the least amount of data needed to achieve our goals can be applied even in an emergency like the Covid-19 epidemic. To minimize the potential for personal data to be abused on the internet, programs should be designed under the same principle we use to minimize the collateral damage in the event of a breach of a software system. We can and should design software solutions that only expose user data to those who are most likely able and/or willing to help, thereby achieving privacy by design. This concept can be extended to “vetting the kindness of strangers” and “trust but verify.” The Adopt a Neighbor team should consider how to provide the tools community organizers need while also making it easier for them to put limits on the exposure of personal information. And by design, Adopt a Neighbor only exposes a very minimal amount of information to the average participant because they are only matched, at most, with three other neighbors in their immediate area.

## Comparison/Contrast with Similar Programs
Nextdoor is an online social network aimed at promoting interactions with people in their own neighborhoods. However, as part of a larger group, there is inherently less privacy. An elderly person who needs help may not want to reach out and ask a larger group of semi-strangers, or they may not even know how to use their smartphone or stay up to date with notifications from the app. This is where Adopt a Neighbor is trying to fill the gap. We see social networks like Nextdoor as mutually beneficial, but not a replacement for what Adopt a Neighbor provides.

Another notable international effort known as Mutual Aid has surfaced to help connect individuals based on specific needs. While Mutual Aid has a few similarities with Adopt a Neighbor, we believe there is still a need for both approaches.
* The Adopt a Neighbor model is all about **geographical proximity**. This is important because the closer the volunteer is to the neighbor, the easier it is for the volunteer to keep helping the neighbor over a long period of time. We don't know how long Covid-19 will be around, but we think a reasonable assumption is that our neighbors can benefit from the personal connection even after the crisis has passed. In that way, we hope to build stronger bonds between those who can help with those who need help.
* The Adopt a Neighbor model works best when **partnering with an established and trusted organization such as city government or non-profit**. This relationship will help with getting the word out about the program and making sure more citizens get the help they need.
* The program provides an example of how to include **appropriate safety guidelines** from local health authorities and provides a legal agreement for participants to **acknowledge the inherent risks** of being matched with a nearby stranger.
* Adopt a Neighbor organizers can identify **alternative volunteer opportunities for higher risk groups**. Opportunities to be a "social buddy" over the phone and making masks are good examples of opportunities where everyone can make a difference from the relative safety of their home.
* Adopt a Neighbor encourages **careful management of private data**, minimizing the accidental spread of personal information. We've already seen examples in the Mutual Aid site where Google Sheets with volunteer information are public and accessible to anyone who clicks on the link. It is best to have a group of experienced organizers and/or staff who understand their responsibility to protect the participants from unintended spread of personal information, and we expect the lessons and methods used in Adopt a Neighbor will be informative for all community organizing efforts.
* The veteran software engineer leading this project has many years of experience building systems for grassroots organizing groups including 20+ [Neighboorhood Food Projects](https://neighborhoodfoodproject.org/) across the country. The overarching goal of Adopt a Neighbor software project is to provide a robust software platform to make it easier, faster, and more secure for communities to organize and protect their fellow citizens. We have no interest in advertising or using personal data for anything other than facilitating opportunities to match individuals on a hyperlocal level. Additionally, we will be working hard to implement privacy by design and provide tools for responding to safety issues in the most effective way possible.

## Disclaimer
The project is being developed and led by individual volunteers and cannot provide a warranty, either expressly or implied. While we will make our best efforts to develop high quality components and make them available for free, the consumer of this software has the burden of examining the components and the system to determine if and how it meets any standards required. All of the code and third party libraries incorporated into this project are open to scrutiny and available for inspection. If you find vulnerabilities in the codebase or a third party library that does not fit within the terms of our license, please submit a PR with the fix or report the issue to adopt.a.neighbor.global@gmail.com

Also, if you are deploying this system for your community, consider the importance of following best practices around security of your system.  Examples include end-to-end encryption, the storage and rotation of secrets, and the ability to respond to attacks in real time with tools like Cloudflare and a Web Application Firewalls.


## Contributors
Add your username as a contributor by submitting a PR.
* @soupala
