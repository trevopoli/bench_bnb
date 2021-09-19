import React from 'react';

class BenchReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            rating: 5
        }

        this.createBenchReview = this.props.createBenchReview;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();

        const review = { 
            bench_review: {
                comment: this.state.comment,
                rating: this.state.rating,
                bench_id: this.props.bench.id,
                user_id: this.props.user_id
            }
        }

        this.createBenchReview(review).then(
            this.clearForm()
        )
    };

    handleChange(field) {
        return ( e => {
            this.setState(
                { [field]: e.target.value }
            )
        })
    };

    clearForm() {
        this.setState( {
            comment: "",
            rating: 5
        });
    };

    render () {

        return(
            <div className="bench-review-form">
                <form className="new-bench-review-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="review-rating-input">Rating: </label>
                    <input type="number" max="5" min="1" className="review-rating-input" value={this.state.rating} onChange={this.handleChange("rating")}></input>

                    <label htmlFor="review-comment-input">Comment: </label>
                    <input type="text" className="review-comment-input" value={this.state.comment} onChange={this.handleChange("comment")}></input>

                    <input type="submit" value="Submit Review" className="new-bench-review-submit"></input>
                </form>
            </div>
        )
    };
        
};

export default BenchReviewForm;