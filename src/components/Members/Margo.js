import React, {Component} from 'react';
import './Members.css';
import $ from 'jquery';

export default class Margo extends Component {

    render() {
        return (
            <div className="div-members">
                <div >
                    <img src="https://softuni.bg/users/profile/showavatar/b5f2e3bd-c34d-4416-8fee-3c277c9b2d33"
                         width="170"/>
                </div>
                <div>
                    <p><h4>Маргарита Христова</h4></p>
                    <p>
                        <a target="_blank" href="https://softuni.bg/users/profile/show/margaritahristova">
                            <div className="div-link">
                                <img src="https://softuni.bg/content/images/softuni-mobile-logo.png" width="30"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/margarita.hristova.359?pnref=lhc.friends">
                            <div className="div-link">
                                <img
                                    src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"
                                    width="30"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://github.com/Margrette">
                            <div className="div-link">
                                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                                     width="30"/>
                            </div>
                        </a>

                        <div className="div-link">
                            <a href="skype:Margrette">
                                <img
                                    src="http://www.skypeassets.com/content/dam/skype/images/misc/Trademark/skype_logo_solid.jpg"
                                    width="30"/>
                            </a>
                        </div>
                    </p>
                </div>
                <button className="btn btn-block" onClick={() => repos('Margrette')}>Get Repos</button>
            </div>
        );

        function repos(name) {
            $("#repos").empty();
            let username = name;
            let url = "https://api.github.com/users/" + username + "/repos";
            $.ajax(url)
                .then(displayData)
                .catch(displayError);

            function displayData(repos) {
                console.log(repos);
                for (let repo of repos) {
                    let link = $('<a>').text(repo.full_name);
                    link.attr('href', repo.html_url);
                    $('#repos').append($('<li>').append(link));
                }
            }

            function displayError(error) {
                console.log(error);
            }
        }
    }
}
