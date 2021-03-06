import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
    static propTypes = {
        editFish: PropTypes.func,
        deleteFish: PropTypes.func,
        fishes: PropTypes.object,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
    }
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <ul>
                	{Object.keys(this.props.fishes).map(key =>
	                	<EditFishForm 
	                		key={key} 
	                		index={key} 
	                		editFish={this.props.editFish}
	                		deleteFish={this.props.deleteFish} 
	                		fish={this.props.fishes[key]}
	                	/>
                	)}
                </ul>
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>+ Load Samples</button>
            </div>
        );
    }
}

export default Inventory;
