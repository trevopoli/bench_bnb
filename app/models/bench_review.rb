class BenchReview < ApplicationRecord
    validates :rating, inclusion: 1..5
    validates :comment, presence: true

    belongs_to :user

    belongs_to :bench

end