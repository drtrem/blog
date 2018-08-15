require 'rails_helper'

RSpec.describe Api::V1::CategoriesController, type: :controller do

  let(:category)      { FactoryGirl.create :category}

  before do
    format = Mime[:JSON].to_s
    request.headers['Accept'] = format
    request.headers['Content-Type'] = format
  end

  describe 'GET index' do
    let(:json) { JSON.parse(response.body) }

    it 'returns a successful 200 response' do
      get :index, format: :json
      expect(response).to be_success
    end

    it 'returns all Categories' do
      create_list(:category, 5)
      get :index, format: :json
      expect(json.length).to eq(5)
    end

  end

  describe 'POST create' do
    context 'with valid name' do
      it 'creates a category' do
        expect{
          post :create, params: { category: attributes_for(:category) }, as: :json
        }.to change(Category, :count).by(1)
      end
    end

    context 'with invalid name' do
      it 'does not create a category' do
        expect{ post :create, params: { category: attributes_for(:category, name: '') }, as: :json }
          .to_not change(Category, :count)
      end

      it 'returns an error' do
        post :create, params: { category: attributes_for(:category, name: '') }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'PATCH update' do
    context 'with valid name' do
      before(:each) do
        @category = create(:category)
        @attributes = attributes_for(:category, name: 'New category name.')
      end

      it 'changes a categoryt name' do
        patch :update, params: { id: @category, category: @attributes }, as: :json
        expect(@category.reload.name).to eq @attributes[:name]
      end

      it 'will not change Categories count' do
        expect{ patch :update, params: { id: @category, category: @attributes }, as: :json }
          .to_not change(Category, :count)
      end

    end

    context 'with invalid name' do
      before(:each) do
        @category = create(:category)
        @attributes = attributes_for(:category, name: '', description: '')
      end

      it 'does not change a category name' do
        patch :update, params: { id: @category, category: @attributes }, as: :json
        expect(@category.reload.name).to_not eq @attributes[:name]
      end

      it 'returns an error' do
        patch :update, params: { id: @category, category: @attributes }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'DELETE destroy' do
    it 'deletes a category' do
      @category = create(:category)
      expect { delete :destroy, params: { id: @category }, as: :json }.to change(Category, :count).by(-1)
    end
  end

end
