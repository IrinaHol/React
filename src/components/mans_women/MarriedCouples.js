import React, {Component} from 'react';
import MarriedCouple from "../man_women/MarriedCouple";

class MarriedCouples extends Component {
		render() {
				const {couples} = this.props;
				return (
						<div>
								{
										couples.map(couple => <MarriedCouple couple={couple}/>)
								}
						</div>
				);
		}
}

export default MarriedCouples;