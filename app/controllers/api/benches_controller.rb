class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.in_bounds(params[:bounds])
        # join reviews and get avg reviews for page

        @benches = @benches.includes(:bench_reviews)
        
        if params[:minSeating] && params[:maxSeating]
            @benches = @benches.where(seating: params[:minSeating]..params[:maxSeating])
        end

        render :index
    end

    def create
        @bench = Bench.new(bench_params)

        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating)
    end
end