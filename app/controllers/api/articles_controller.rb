class Api::ArticlesController < ApplicationController

    def index 
        @articles = Article.all 

        render :index
    end
    
    def show 
        @article = Article.find_by(params[:id])

        render :show 
    end 

    def article_params 
        params.require(:article).permit(:title, :description, :photo)
    end 

end 