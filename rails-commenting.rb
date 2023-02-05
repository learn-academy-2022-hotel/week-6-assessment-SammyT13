# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostController contains the logic and method that will define how the application interacts with the user, the views and the model.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable that holds and displays the active record query of BlogPost.all, and will display the entire database.
    @posts = BlogPost.all
  end

  # ---3) The 'show' method is used to display a specific object utilizing the primary key in the database to retrieve the object.  
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The ‘new’ method displays a form to allow users to add information through the web application, which is then stored in the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Inside the ‘create’ method, there’s an @post instance variable that adds content from the form utilized from the ‘new’ method and adds it to the database.  Used a conditional statement to determine if the data is valid before adding it to the database and a user-friendly method to redirect users back to the home page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Inside the ‘edit’ method, which is a form to allow users to make changes to the current data, is an @post instance variable that finds a blog post using params and primary key.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Inside the ‘update’ method, the @post.update will use the strong param method and update the database based on the ‘edit’ method form.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) In the ‘destroy’ method, the user is redirected to the blog home page after the user deletes a blog.
      redirect_to blog_posts_path
    end
  end

  # ---9) The keyword Private is used here to restrict the strong param method from being used anywhere else in the application.
  private
  def blog_post_params
    # ---10) The strong param utilizes a require method to confirm attributes are present in the ‘create’ and ‘update methods.  We are also using a permit method, which restricts what data is passed into the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
