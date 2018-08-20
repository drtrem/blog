class CreateCommentsPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :comments_posts do |t|
      t.string :author
      t.text :content
      t.integer :post_id

      t.timestamps
    end
  end
end
