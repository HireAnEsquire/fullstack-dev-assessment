# Full-Stack Developer Assessment

:wave: Hey there! If you are looking at this, then that means you have been selected to complete an assessment as part of the hiring process for a developer position at [Hire an Esquire](https://hireanesquire.com/).

We require all candidates to complete this assessment for a few reasons:

1. We want to have a better understanding about how you approach and solve problems
1. We can vet candidates more accurately with a common set of criteria to compare
1. Most importantly, we will analyze your deliverables as part of our in-person interview and use them to discuss your software development ideologies

> :question: If you have any questions along the way, you can contact [lenny@hireanesquire.com](mailto:lenny@hireanesquire.com). Please note that all code contained in this repository is provided as-is and we will not be able to provide any technical assistance for it.

You are free to fork this repository to get started.

> :clock4: We estimate that this assessment can take anywhere from 1-4 hours to complete, based on individual skill level and implementation details. If you are unable to find enough time or believe this is unreasonable, please let us know and we will do our best to accomodate you.

## Challenge

We would like you to build an API and client-side web application to display, sort, and modify a list of candidates for a job opening. 

You are free to use any tools or projects at your disposal. This project contains a boilerplate frontend app built with [create-react-app](https://github.com/facebook/create-react-app) that you can use to get started with if you choose to do so. You'll find this in the [`client/`](https://github.com/HireAnEsquire/frontend-dev-assessment/tree/master/client) directory.

This repo also contains a starter rails app and a starter django app that you can use to get started with for the API if you choose to do so. If you choose to use the Django project, we recommend you use [Django Rest Framework](http://http://www.django-rest-framework.org/) to build the API.

## Prerequisites

Each starter project contains a Candidate Model definition with sample data.

## Requirements

### API

Your API must meet the following requirements:

1. All data should be transferred via JSON (`Content-Type: application/json`)
1. Create a REST endpoint that allows Read and Update operations for a single Candidate
1. Create a REST endpoint to list all candidates
1. Additionally, provide logic to automatically update the `reviewed` field according to the following rules:
    - When a candidate moves from Pending to Accepted or Rejected, `reviewed` should be set to `true`

### Client 

Your client application must meet the following requirements:

1. Display a list of candidiates
    1. All fields except for `id`, `created`, and `updated` should be displayed in some way
1. Include a UI element to sort the list of candidates by `status` and `date_applied`
    1. It's up to you if you want to implement this sorting logic in the client or server
1. Include a button to update the `status` of a candidate
    1. This action should be sent to the server via an API request
    1. Pending candidates can be changed to Accepted or Rejected
    1. Once a candidate has been Accepted or Rejected, `status` cannot be changed
1. (optional) We recommend using [Redux](https://redux.js.org/) to store your application’s state, but this is not required. If you choose not to, be prepared to explain why.

> :information_source: There are no aesthetic or design requirements. There are also no time limits, but we will not be able to schedule your interview until we receive your submission.

## Deliverables

Please provide a code repository with your source code and any necessary instructions for installing dependencies and running your application.