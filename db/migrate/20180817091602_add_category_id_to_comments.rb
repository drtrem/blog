class AddCategoryIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :category_id, :integer
  end
end
