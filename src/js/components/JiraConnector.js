// import JiraClient from 'jira-connector';
const JiraClient = require('jira-connector');

class JiraConnector extends JiraClient {

    constructor(jiraClient) {
        super(jiraClient);
    }

    getIssuesByUser(opts, callback) {
        const options = {
            uri: this.search.jiraClient.buildURL('/search'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                jql: `assignee=${opts.assignee}`,
                maxResults: opts.maxResults
            }
        };

        return this.search.jiraClient.makeRequest(options, callback);
    }
}

module.exports = JiraConnector;