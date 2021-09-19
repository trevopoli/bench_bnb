import React from 'react';
import { Link } from 'react-router-dom';

class BenchForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            description: "",
            seating: 1,
            photoFile: null,
            photoUrl: null
        };
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const benchFormData = new FormData();
        benchFormData.append('bench[description]', this.state.description);
        benchFormData.append('bench[seating]', this.state.seating);
        benchFormData.append('bench[lat]', this.props.lat);
        benchFormData.append('bench[lng]', this.props.lng);
        if (this.state.photoFile) {
            benchFormData.append('bench[photo]', this.state.photoFile);
        }
        
        this.props.createBench(benchFormData).then(
            () => this.props.history.push("/")
        );
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render () {

        const { description , seating } = this.state;
        const { lat, lng } = this.props;
        const photoPreview = this.state.photoUrl ? <img className="bench-photo-preview" src={this.state.photoUrl} /> : null;
        let errorList = null;
        
        if (this.props.errors){
            errorList = <ul className="bench-form-errors">
                {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
        }

        return (
            <div className="columns">
            <div className="left-column">
                <div className="new-bench-from-container">
                    <h3 className="new-bench-form-title">Add a new bench!</h3>
                    <Link to="/">
                        <div className="new-bench-form-back-link">back to map</div>
                    </Link>
                    {errorList}

                    <form className="new-bench-form" onSubmit={this.handleSubmit}>
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

                        <label className="new-bench-photo">Add Photo: </label>
                        <input
                            type="file"
                            onChange={this.handleFile}
                        />
                        <h5 className="new-bench-photo-preview-header">Photo Preview</h5>
                        {photoPreview}

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

                        <div className="flex-break"></div>
                        <input
                            type="submit"
                            value="Add Bench"
                            className="new-bench-submit"
                        />
                    </form>
                </div>
            </div>
            </div>
        );
    };
};

export default BenchForm;