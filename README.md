# Savor

An app for bank synchronisation and monitoring.

Staging: [![Build Status](https://semaphoreci.com/api/v1/ajpershick/savor/branches/staging/badge.svg)](https://semaphoreci.com/ajpershick/savor)

Production: [![Build Status](https://semaphoreci.com/api/v1/ajpershick/savor/branches/production/badge.svg)](https://semaphoreci.com/ajpershick/savor)

Check out our Semaphore CI (Continuous integration and Automatic deployment) builds at: https://semaphoreci.com/ajpershick/savor

Git: https://github.com/ajpershick/Savor

### Test accounts: 

TEST ACCOUNTS FOR ITERATION 3
Regular user:
username: testing
password: testing

Admin user:
username: admintest
password: admintest

Plaid user:
To sync test transactions from plaid, while signed in to an account, use the following credentials for any bank in the Bank Sync tab
username: user_good
password: pass_good

Project Proposal - Group 14
Git: https://github.com/ajpershick/Savor


### Overview


Savor will be a user-friendly budget tracking web application. By keeping a history of users’ transactions, it will provide detailed spending feedback through graphs and statistics, allow users to create financial goals and budgets for themselves, and suggest local deals on products, services, and events relevant to the user’s interests and spending habits.


### Features


Our web application will have a variety of major and minor features. The most impactful key features will be automatic transaction synchronization between the app and the user’s bank account, as well as deal recommendations that are analyzed from users' transaction history data. Through the implementation of the banking transactions API by Plaid, users will be able to sync details from their bank account with our app interface. Manual transaction input will be available to quickly enter and track cash purchases. Transactions will also be automatically categorized, and record location data that will be used by the app to feed the user’s recommendations. A financial calendar in the web app will show purchases made day-to-day, and allow future purchases (such as bill payments) to be scheduled.

Savor will provide a variety of interactive charts so users can conveniently visualize their spending. Bar, line, and pie charts can be displayed to show how the user’s spending has changed over various periods of time, and show specific data about how money is spent in certain categories. These charts will give the user valuable data that can be leveraged to help improve their spending habits. A spending heat map will be available that utilizes the Google Maps API to geographically present where a user most (and least) often spends their money.

Users will be provided with a "goals and budgets" system so they can create customizable objectives to meet their budget goals. The progress and completion of these goals will be tracked automatically as time goes by and as transactions are recorded. A "local deals" system will learn about the user’s interests from their transactions, goals, and interests in order to recommend local offerings through various sources (we are currently experimenting with the Yelp, Groupon, and Zomato APIs). This could help the user budget better and save more money while maintaining an enjoyable quality of life. 

By implementing the website as a progressive web app, users will be able to input transactions from a mobile interface on their phone and can receive mobile push notifications that provide helpful reminders about scheduled bills and financial goals. The web app will feature a general user account, as well as a privileged admin account that can manage user accounts, and view some overall usage statistics. To protect the privacy of users, it will, however, be unable to see certain user-specific financial details. Savor has strech goals in place that include the implementation of a larger subset of the desktop web features in the mobile interface, and a deal-finder function within the app to help users find bargains on everyday items and groceries.

The Problem, Our Solution


As of December 7, 2016, the average Canadian’s debt was up to $22,081 and rose 3.6% since the previous year, according to CBC News. Everyone makes a variety of purchases in different areas of their lives, and it can be difficult to keep track of how much money you are spending, and how it is allocated to different types of expenses. Our web application aims to solve this common problem by providing a budget tracking interface that is intuitive and easy to use, but also powerful and productive. Additionally, we aim to use data collected from the user’s transaction history and declared personal preferences to feed them recommendations on services and events.


The market is inundated with budget and finance tracking websites and mobile applications, however, many suffer from several common problems. Many applications are overly-complicated; although they provide many useful features, the user interface is complex, and the learning curve is too steep and discouraging. Additionally, many applications are too simplistic, providing only transaction tracking and basic statistical feedback. With this application we aim to provide a service in between these extremes; a user who wants only basic budgeting features will not need to concern themselves with features like a spending heatmap, but a financial power user will have those options available to them, all while using an interface that is easily comprehensible by every type of user. Some budget trackers also lack any syncing functionalities with the user’s bank account, which makes recording all expenses an arduous task. Furthermore, we were unable to find any budgeting applications which contained features for a spending heat map, or for local deals tailored towards the user’s spending history and interests, thus giving our product a competitive edge. Given the multitude of spending tracker apps available on the market, there are many that are effective in what they are designed for: keeping a record of the user’s spendings and aiding the user in staying within their desired budget. To improve on these basic features, we have decided to base our web app off this highly marketable idea but with a slight twist. Savor aims to help users live frugally, but comfortably. We plan to bridge the gap between the domains of finance and lifestyle by using using data collected from the aforementioned APIs and parsing it into a custom algorithm that predicts and give suggestions to users for economical restaurants, with positive customer reviews, based on their spending history at certain types of restaurants, as well as other local services. Additionally, low-cost or free events around the area will be recommended to the user based on their spending history, or declared personal interests.


### Target Audience

The target demographic for our product consists of anyone who would want to learn more about their spending habits, and would like to improve them. A university student budgeting for the first time can accurately track their expenses, and observe how much they spend around campus, and how much they spend elsewhere through the spending heatmap, and use the local deals feature to find affordable food and entertainment. A young couple living paycheck to paycheck can use the detailed statistics to find out how they are allocating their money to various categories such as groceries, utilities, gas, and rent, to find out where they can reduce expenses and begin to save their money.  A family can use the financial calendar to keep track of their bills, and create budgets and goals to save money towards their summer vacation. Regardless of age or income, Savor will be an extremely beneficial tool to help anyone manage their finances.


### Authors: 

Jeremy Fell,
Vinson Ly,
Darien Flamont,
Alec Pershick
