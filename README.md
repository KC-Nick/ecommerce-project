# E-Commerce Back End Code Tests

## Description

This application allows one to build, seed, and access a database to track an ecommerce app. Using Insomnia Core, one can use this app to test API route endings in Insomnia to make sure one can Get, Post, Put/Update, and Delete entries into the database for the ecommerce app.

# Installation

  If you would like to install this code use `git clone` to clone the repository, `git status` to check if your version is up to date, or `git pull` to update any cloned code with current pushes. To start up the app, first use `mysql -u root -p` to sign into mysql, source the schema.sql file to build the database and tables (copy path to file if it won't allow `source schema.sql`), if you would like some automatic entries use the `seeds.sql` to fill in the tables. User must also have Insomnia Core installed to test the databases, along with other listed dependencies in the `package.json` file.

# Usage

If you would like to use the seeds, before starting the server use `npm seed`, or copy the file path to the seeds index file then use `node` with it, to seed the database. To use this app, use `npm start` in the CLI to initialize the server. After this, use Insomnia to GET, POST, PUT, or DELETE in the application.

# Test

A test video will be included, attached to the README in the Github repo.