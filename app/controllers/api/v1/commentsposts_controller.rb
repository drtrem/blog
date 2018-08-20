module Api::V1
  class CommentspostsController < ApplicationController

    # GET /categories
    def index
      @commentsposts = CommentsPost.all

      render json: @commentsposts
    end

    # POST /categories
    def create
      @commentspost = CommentsPost.new(commentspost_params)

      if @commentspost.save
        render json: @commentspost, status: :created
      else
        render json: @commentspost.errors, status: :unprocessable_entity
      end
    end

    private
      # Only allow a trusted parameter "white list" through.
      def commentspost_params
        params.require(:commentspost).permit(:post_id, :author, :content)
      end
  end
end
