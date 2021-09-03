class CreateBenchReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :bench_reviews do |t|
      t.integer :bench_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false
      t.text :comment, null: false

      t.timestamps
    end

    add_index :bench_reviews, :bench_id
  end
end
