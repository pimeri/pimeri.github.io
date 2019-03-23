import React from 'react';
import './NavBar.css';


const pages = {
	'ABOUT':'about',
	'SKILLS':'skills',
	'PROJECTS':'projects',
	'CONTACT':'contact'
};

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 'about'
		};
	}

	getPageClass(page) {
		if (page === this.state.currentPage) {
			return 'active'
		}
		else {
			return '';
		}
	}
	handlePageChange(page) {
		this.setState({
			currentPage: page
		});
		this.props.setPage(page);
	}
	renderPageOptions() {
		return Object.keys(this.props.pages).map(page => {
			let pageValue = this.props.pages[page];
			return <li 	className={this.getPageClass(pageValue)}
						onClick={this.handlePageChange.bind(this,pageValue)}	
						key={pageValue}> {page} </li>;
		});
	}
	render() {
		return (
			<div className="NavBar">
				<div className="NavBar-nav-options">
					<ul>
						{this.renderPageOptions()}
					</ul>
				</div>
			</div>
			)
	}

}

export default NavBar;