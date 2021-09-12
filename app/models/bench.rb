
class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    has_many :bench_reviews

    has_one_attached :photo

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end

    def avg_rating
        self.bench_reviews.average(:rating).to_f || 0
    end

end