import React from 'react';
import './BusinessCard.css';

interface BusinessCardProps {
    name: string,
    profile_pic: string,
    email?: string,
    website?: string,
    linkedin?: string,
    github?: string,
}
interface BusinessCardState {
    name: string,
    profile_pic: string,
    email?: string,
    website?: string,
    linkedin?: string,
    github?: string,
}

class BusinessCard extends React.Component<BusinessCardProps, BusinessCardState> {
    constructor(prop: BusinessCardProps) {
        super(prop);
        this.state = {
            name: prop.name,
            profile_pic: prop.profile_pic,
            email: prop.email,
            website: prop.website,
            linkedin: prop.linkedin,
            github: prop.github,
        };
    }

    renderLink(key: string, link: string, prefix: string = ""): JSX.Element {
        return (<li key={key}><a href={`${prefix}${link}`}>{link}</a></li>);
    }

    renderLinks(): JSX.Element {
        let links = [];

        if (this.state.email) {
            links.push(this.renderLink(
                'email',
                this.state.email,
                'mailto:'));
        }
        if (this.state.website) {
            links.push(this.renderLink(
                'website',
                this.state.website,
                'https://'));
        }
        if (this.state.linkedin) {
            links.push(this.renderLink(
                'linkedin',
                this.state.linkedin,
                'https://www.linkedin.com/in/'));
        }
        if (this.state.github) {
            links.push(this.renderLink(
                'github',
                this.state.github,
                'https://www.github.com/'));
        }

        return (
            <ul id="contact-list">
                {links}
            </ul>
        );
    }

    render() {
        return (
            <div className="business-card">
                <img src={this.state.profile_pic} className="img-circle" id="profile-pic" alt="profile pic" />
                <section className="info-section">
                    <h1>{this.state.name}</h1>
                    {this.renderLinks()}
                </section>
            </div>
        );
    }
}

export default BusinessCard;