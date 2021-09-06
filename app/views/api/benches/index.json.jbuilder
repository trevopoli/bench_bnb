@benches.each do |bench|
    json.set! bench.id do
        json.partial! 'bench', bench: bench
        json.avgRating bench.avg_rating
    end
end