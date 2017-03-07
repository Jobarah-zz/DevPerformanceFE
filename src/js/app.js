// import React from 'react';
// import ReactDOM from 'react-dom';
// import JiraConnector from './components/JiraConnector';
// var JiraClient =require('jira-connector');
const JiraConnector = require('./components/JiraConnector');


const jira = new JiraConnector({
    host: 'sanserviceshn.atlassian.net',
    basic_auth: {
        username: 'jenamorado@sanservices.hn',
        password: 'Alice102310'
    }
});

// console.log(jira);
const data = jira.issue.getIssue({
    issueKey: 'SMW-151'
}, (error, issue) => {
    if(error) 
        return error;
    console.log(issue.fields.summary);
});

const userIssues = jira.getIssuesByUser({
    assignee: 'jenamorado'
}, (error, res) => {
    if(error) 
        console.log(error);

    res.issues.map((issue)=> {
        console.log({
            key: issue.key,
            url: issue.self,
            issueName: issue.fields.summary,
            status: issue.fields.status.name
        });
    });
});

// ReactDOM.render(<div>{ data }</div>, document.getElementById('app'));
