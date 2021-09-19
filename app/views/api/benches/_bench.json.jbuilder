json.extract! bench, :id, :description, :lat, :lng
json.avgRating bench.avg_rating
if bench.photo.attached?
    json.photoUrl url_for(bench.photo)
end

