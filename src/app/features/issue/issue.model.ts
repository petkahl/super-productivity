import { JiraIssue, JiraIssueReduced } from './providers/jira/jira-issue/jira-issue.model';
import { JiraCfg } from './providers/jira/jira.model';
import { GithubCfg } from './providers/github/github.model';
import { GithubIssue, GithubIssueReduced } from './providers/github/github-issue/github-issue.model';
import { GitlabCfg } from './providers/gitlab/gitlab';
import { GitlabIssue } from './providers/gitlab/gitlab-issue/gitlab-issue.model';

export type IssueProviderKey = 'JIRA' | 'GITHUB' | 'GITLAB';
export type IssueIntegrationCfg = JiraCfg | GithubCfg | GitlabCfg;

export enum IssueLocalState {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export interface IssueIntegrationCfgs {
  // should be the same as key IssueProviderKey
  JIRA?: JiraCfg;
  GITHUB?: GithubCfg;
  GITLAB?: GitlabCfg;
}

export type IssueData = JiraIssue | GithubIssue | GitlabIssue;
export type IssueDataReduced = GithubIssueReduced | JiraIssueReduced | GitlabIssue;

export interface SearchResultItem {
  title: string;
  issueType: IssueProviderKey;
  issueData: IssueDataReduced;
  titleHighlighted?: string;
}
