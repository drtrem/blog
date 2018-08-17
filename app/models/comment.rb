class Comment < ApplicationRecord
  belongs_to :category

  validates :author, presence: true, format: { with: /(^)([A-ZА-Я][A-ZА-Яa-zа-я])/, message: "Мінімум 2 слова по 2 літери, перше слово з великої літери"}
  validates :author, format: { with: /\./, message: "Має включати ‘.’"}
  validates :author, format: { with: /(\s+)/, message: "Має включати ‘ ’"}
  validates :content, presence: true
end
