import React, {Component} from 'react';
import gh from './Github';

class RepoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repo: null,
            issues: null
        }
    }

    componentDidMount() {
        let {user, name} = this.props.match.params;

        // Get repository
        let repository = gh.getRepo(user, name);
        setTimeout(() => {
            repository.getDetails((e, repo) => {
                console.log("repo", repo);
                this.setState({repo: repo});
            });
        }, 0);


        // Get Issues
        let issues = gh.getIssues(user, name);
        setTimeout(() => {
            issues.listIssues({state: 'open'}, (e, items) => {
                console.log("items", items);
                this.setState({issues: items});
            });
        }, 0);
    }

    render() {
        return (
            <div>
                {this.renderRepo(this.state.repo)}
                {this.renderIssues(this.state.issues)}
            </div>
        );
    }

    renderRepo(repo) {
        if (!repo) {
            return <p>Carregando repositório...</p>;
        }
        return (<div>
                <h2><a href={repo.url}>{repo.name}</a></h2>
                <p>Issues abertas: {repo.open_issues}</p>
                <p>Forks: {repo.forks_count}</p>
                <p>Linguagem: {repo.language}</p>
            </div>
        )
    }

    renderIssues(issues) {
        if (!issues) {
            return <p>Carregando issues...</p>;
        }
        return (<div>
                <h2>Issues</h2>
                {issues.map(issue => {
                    return <p key={issue.id}>
                        <a href={issue.url}>
                            {issue.title}
                        </a>
                    </p>;
                })}
            </div>
        )
    }
}

export default RepoView;