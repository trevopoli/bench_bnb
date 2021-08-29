import React from 'react';
import { Link } from 'react-router-dom';

class BenchForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            description: "",
            seating: 1
        };
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const benchData = {
            bench: {
                description: this.state.description,
                seating: this.state.seating,
                lat: this.props.lat,
                lng: this.props.lng
            }
        };
        
        this.props.createBench(benchData).then(
            this.props.history.push("/")
        );
    }

    render () {

        const { description , seating } = this.state;
        const { lat, lng } = this.props;

        return (
            <div className="new-bench-from">
                <h3 className="new-bench-form-title">Add a new bench!</h3>
                <div className="new-bench-form-go-back-link">
                    <Link to="/">go back to map</Link>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label className="new-bench-description">Description </label>
                    <input
                        type="text"
                        value={description}
                        onChange={this.update('description')}
                        className="new-bench-description"
                    />

                    <label className="new-bench-seating">Seating </label>
                    <input
                        type="number"
                        min="0"
                        value={seating}
                        onChange={this.update('seating')}
                        className="new-bench-seating"
                    />

                    <label className="new-bench-lat">Latitude </label>
                    <input
                        type="text"
                        disabled
                        value={lat}
                        className="new-bench-lat"
                    />

                    <label className="new-bench-lng">Longitude </label>
                    <input
                        type="text"
                        disabled
                        value={lng}
                        className="new-bench-lng"
                    />

                    <input
                        type="submit"
                        value="Add Bench"
                        className="new-bench-submit"
                    />
                </form>
            </div>
        );
    };
};

export default BenchForm;