require 'rails_helper'

RSpec.describe Category, type: :model do

  subject(:category) { FactoryGirl.build :category }

  it { should be_valid }

  it { should respond_to :id }
  it { should respond_to :name }

  it { should validate_presence_of :name }
    
  describe 'default scope' do
    let!(:category_one) { create(:category, id:2) }
    let!(:category_two) { create(:category, id:3) }

    it 'orders by ascending name' do
      expect(Category.all) == [category_two, category_one]
    end
  end

end
