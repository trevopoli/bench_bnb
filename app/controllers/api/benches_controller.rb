class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.in_bounds(params[:bounds]).includes(:bench_reviews)

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

    def show
        @bench = Bench.find_by(id: params[:id])

         if @bench
            render :show
        else
            render json: @bench.errors.full_messages, status: 404
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating, :photo)
    end
end