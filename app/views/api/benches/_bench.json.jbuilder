json.extract! bench, :id, :description, :lat, :lng
if bench.photo.attached?
    json.photoUrl url_for(bench.photo)
end

