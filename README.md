# Wine Collector
A wine collection management tool built on React

## Prerequisite
- Install node and npm
- dev.js config file shared privately to run locally

## Installation
- Clone the repo to local
- Copy "dev.js" file into "/config" folder at root (contact jiedong.ding@gmail.com for config file)
- Install client dependencies "npm install --prefix client"
- Install server dependencies "npm install"
- Run locally in dev env "npm run dev" and the application will be running at "http://localhost:3000/"

## Introduction
- User can logged in with Google to manage their wine collections with creating/updating/viewing functionality.
- User Interface is more friendly on a mobile like size screen.
- Wine collections data are stored on mLab (https://mlab.com/)
- Production App: https://wine-collector-impact.herokuapp.com/

## Thoughts on Future Features
- Sorting function on the list view
- Deploy to Heroku as production env
- Use proper form components for input like rating, comment (with validations)
- More styling
- Be able to save locally without loggin and sync once loggin
- Auth validation on same pages
- Local persistent for input form
- To be continued

## Thoughts on Refactoring
- Action creators can be divided into different files
- More error handling
- Better API handling with differnt response codes
- To be continued