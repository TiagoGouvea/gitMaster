import React, {Component} from 'react';
import gh from './Github';

class RepoView extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        let {user, name} = this.props.match.params;
        let repos = gh.getRepo(user, name);
        repos.getDetails((e, r) => {
            console.log(r);
        })
    }

    render() {
        let repo = this.props.repo;
        return null;
        return (
            <div key={repo.id}>
                <h2><a href={repo.url}>{repo.name}</a></h2>
                <p>Issues abertas: {repo.open_issues}</p>
            </div>
        );
    }

}

export default RepoView;