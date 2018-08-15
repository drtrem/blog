class Category < ApplicationRecord
  has_many :posts, dependent: :destroy

  validates :name, presence: true, format: { with: /(^)([A-ZА-Я][A-ZА-Яa-zа-я])/, message: "Мінімум 2 слова по 2 літери, перше слово з великої літери"}
  validates :name, format: { with: /\./, message: "Має включати ‘.’"}
  validates :name, format: { with: /(\s+)/, message: "Має включати ‘ ’"}
  validates :name, presence: true, on: :update
  validates :description, presence: true
  validates :description, presence: true, on: :update
end
