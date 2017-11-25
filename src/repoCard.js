import React, {Component} from 'react';

class RepoCard extends Component {

    render() {
        let repo = this.props.repo;
        return (
            <div key={repo.id}>
                <h2><a href={'/repo/' + repo.owner.login + '/' + repo.name}>{repo.name}</a></h2>
                <p>Issues abertas: {repo.open_issues}</p>
            </div>
        );
    }

}

export default RepoCard;