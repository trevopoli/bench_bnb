class Api::BenchReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @bench_reviews = BenchReview.where(bench_id: params[:bench_id])

        render :index
    end

    def create
        @bench_review = BenchReview.new(bench_review_params)

        if @bench_review.save 
            render :show
        else
            render json: @bench_review.errors.full_messages, status: 422
        end
    end

    private
    def bench_review_params
        params.require(:bench_review).permit(:bench_id, :user_id, :rating, :comment)
    end
end