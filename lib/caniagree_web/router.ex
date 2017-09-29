defmodule CaniagreeWeb.Router do
  use CaniagreeWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", CaniagreeWeb do
    pipe_through :api

    resources "/services", ServiceController, except: [:new, :edit]
    get "/services/:id/paragraphs", ServiceController, :paragraphs

    resources "/paragraphs", ParagraphController, except: [:new, :edit]
    post "/paragraphs/:id/down", ParagraphController, :downvote
    post "/paragraphs/:id/up", ParagraphController, :upvote
  end
end
