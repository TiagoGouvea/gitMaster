import React, {Component} from 'react';
import gh from './Github';

class RepoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repo: null
        }
    }

    componentDidMount() {
        let {user, name} = this.props.match.params;
        // Get repository
        let repository = gh.getRepo(user, name);
        repository.getDetails((e, repo) => {
            this.setState({repo: repo});
        })
        // Get Issues
        let issues = gh.getIssues(user, name);
        issues.listIssues({state:'open'}, (e, items)=>{
            console.log("items",items);
        })
    }

    render() {
        if (!this.state.repo) {
            return <p>Carregando...</p>;
        }
        let repo = this.state.repo;
        console.log(repo);
        return (
            <div key={repo.id}>
                <h2><a href={repo.url}>{repo.name}</a></h2>
                <p>Issues abertas: {repo.open_issues}</p>
                <p>Forks: {repo.forks_count}</p>
                <p>Linguagem: {repo.language}</p>
            </div>
        );
    }

}

export default RepoView;