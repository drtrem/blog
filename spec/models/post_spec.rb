require 'rails_helper'

RSpec.describe Post, type: :model do

  subject(:post) { FactoryGirl.build :post }

  describe 'associations' do
    it { expect(post).to belong_to(:category) }
  end

  it 'respond_to' do
    methods = %i(id name content file category_id)
    should respond_to(*methods)
  end

  it { should validate_presence_of :name }

end
 