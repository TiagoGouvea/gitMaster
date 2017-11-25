import React, {Component} from 'react';
import './App.css';
import RepoCard from './repoCard';

import gh from './Github';

class RepoList extends Component {
    constructor() {
        super();
        this.state = {
            starredRepos: null,
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        let user = gh.getUser('tiagogouvea');

        // Obter favoritos
        this.setState({loading: true});
        user.listStarredRepos((err, repos) => {
            this.setState({loading: false});
            if (!err)
                this.setState({starredRepos: repos});
            else {
                this.setState({error: err.message});
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.loading ? 'Carregando' : null}
                {this.state.error ? <p>Erro! <br/>{this.state.error}</p> : null}
                {this.state.starredRepos ?
                    this.state.starredRepos.map(repo =>
                        <RepoCard repo={repo} key={repo.id}/>
                    )
                    :
                    ''
                }
            </div>
        );
    }
}

export default RepoList;
