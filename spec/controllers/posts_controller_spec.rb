require 'rails_helper'

RSpec.describe Api::V1::PostsController, type: :controller do

  let(:category)   { create(:category) }

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

    it 'returns all posts' do
      create_list(:post, 5)
      get :index, format: :json
      expect(json.length).to eq(5)
    end

  end

  describe 'POST create' do
    context 'with valid name' do
      it 'creates a post' do
        expect{
          post :create, params: { post: attributes_for(:post, category_id: category.id) }, as: :json
        }.to change(Post, :count).by(1)
      end
    end

    context 'with invalid name' do
      it 'does not create a post' do
        expect{ post :create, params: { post: attributes_for(:post, name: '') }, as: :json }
          .to_not change(Post, :count)
      end

      it 'returns an error' do
        post :create, params: { post: attributes_for(:post, name: '') }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'PATCH update' do
    context 'with valid name' do
      before(:each) do
        @post = create(:post)
        @attributes = attributes_for(:post, name: 'New post name.')
      end

      it 'changes a post name' do
        patch :update, params: { id: @post, post: @attributes }, as: :json
        expect(@post.reload.name).to eq @attributes[:name]
      end

      it 'will not change categories count' do
        expect{ patch :update, params: { id: @post, post: @attributes }, as: :json }
          .to_not change(Post, :count)
      end

    end

    context 'with invalid name' do
      before(:each) do
        @post = create(:post)
        @attributes = attributes_for(:post, name: '')
      end

      it 'does not change a post name' do
        patch :update, params: { id: @post, post: @attributes }, as: :json
        expect(@post.reload.name).to_not eq @attributes[:name]
      end

      it 'returns an error' do
        patch :update, params: { id: @post, post: @attributes }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'DELETE destroy' do
    it 'deletes a post' do
      @post = create(:post)
      expect { delete :destroy, params: { id: @post }, as: :json }.to change(Post, :count).by(-1)
    end
  end

end
