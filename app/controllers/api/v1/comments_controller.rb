module Api::V1
  class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]

    # GET /categories
    def index
      @comments = Comment.all

      render json: @comments
    end

    # GET /categories/1
    def show
      render json: @comment
    end

    # POST /categories
    def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render json: @comment, status: :created
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /categories/1
    def update
      if @comment.update(comment_params)
        render json: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end

    # DELETE /categories/1
    def destroy
      @comment.destroy
      if @comment.destroy
        head :no_content, status: :ok
      else
        render json: @comment.errors, status: :unprocessable_entity
      end      
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_category
        @comment = Comment.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def comment_params
        params.require(:comment).permit(:category_id, :author, :content)
      end
  end
end
